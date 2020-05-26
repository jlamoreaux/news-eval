import $ from './helpers';
import $$ from './helpers';
import validURL from './helpers';
import '../style/main.scss';
const apiURL = "/evaluate";

/**
 * @description - Enables/disables submit button depending on if url is valid or not
 * @param {Element} input - Element to monitor for valid URl
 */
const canSubmitURL = (input) => {
    if (!validURL(input.value)) {
        submit.disabled = true;
        createFlash("Please enter a valid URL", "warning");
    } else {
        submit.disabled = false;
        removeFlash();
    }
}

/**
 * @description - adds a flash a message to the DOM
 * @param {String} msg - Message to flash
 * @param {String} type - (Success, Warning, Error)
 */
const createFlash = (msg, type) => {
    const flash = document.querySelector("#flash");
    flash.classList = type;
    flash.innerHTML = msg;
}

/**
 * @description - removes fash message from the DOM
 */
const removeFlash = () => {
    $('#flash').classList = 'noFlash';
    $('#flash').innerHTML = '';
}


/**
 * @description - hides any other input methods while displaying only the current choice
 * @param {Element} choice - Radio Button that specifies the block on the page to display
 */
const toggleInputMethod = (choice) => {
    $$('.form__block').forEach(block => {
        block.classList.add('hidden');
    });
    $$(".form__input").forEach((e) => {
        e.value = '';
    });
    removeFlash();
    submit.disabled = false;
    $(`#${choice.dataset.toggle}`).classList.remove('hidden');
}


const evaluateContent = async (url = '', data = {}) => {
    const results = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    try {
        const response = await results.json();
        return response;
    } catch (error) {
        console.log(error);
    }
}

const populateResults = (data) => {
    const elem = $('#results');
    results.innerHTML = `
        <h2 class="results__header">Results</h2>
        <ul class="results__details">
            <li class="results__item results__polarity">Polarity: ${data.polarity}</li>
            <li class="results__item results__polarity--confidence">Confidence: ${data.polarity_confidence}</li>
            <li class="results__item results__subjectivity">Subjectivity: ${data.subjectivity}</li>
            <li class="results__item results__subjectivity--confidence">Confidence: ${data.subjectivity_confidence}</li>
            <h3 class="results__subheader">Text:</h3>
            <p class="results__text">${data.text}</p> 
    `;
}


/*
 Where everything gets started
*/

document.addEventListener("DOMContentLoaded", () => {
    const textArea = $("#form__textarea--main");
    const url = $("#form__text--url");
    const radioButtons = $$(".form__radio");
    const submit = $("#submit");

    radioButtons.map((button) => {
        button.addEventListener("input", () => {
        toggleInputMethod(button);
        });
    });
    url.addEventListener("input", () => {
        canSubmitURL(url);
    });
    submit.addEventListener("click", (e) => {
        e.preventDefault();
        const form = new FormData($('form'));
        let formData = Object.fromEntries(form.entries());
        evaluateContent(apiURL, formData)
            .then(data => {
                populateResults(data);
            });
  });
});

export { createFlash } ;