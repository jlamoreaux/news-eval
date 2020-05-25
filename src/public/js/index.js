import { $, $$ } from './helpers'
import '../style/main.scss';

document.addEventListener('DOMContentLoaded', () => {
    const textArea = $("#form__textarea--main");
    const url = $("#form__text--url");
    const radioButtons = $$('.form__radio');
    radioButtons.map(button => {
        button.addEventListener('input', () => {
            toggleInputMethod(button);
        });
    });
});


/**
 * @description - hides any other input methods while displaying only the current choice
 * @param {Element} choice - Radio Button that specifies the block on the page to display
 */
const toggleInputMethod = (choice) => {
    $$('.form__block').forEach(block => {
        block.classList.add('hidden');
    });
    $(`#${choice.dataset.toggle}`).classList.remove('hidden');
}

console.log('hello there!');