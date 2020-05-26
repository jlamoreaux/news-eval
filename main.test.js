'use strict';
const validUrl = require('./src/public/js/helpers.js').validURL;
const createFlash = require('./src/public/js/index.js').createFlash;
const $ = require('./src/public/js/helpers').$;

test('checks if URL is valid format or not', () => {
    const url = "http://www.google.com";
    expect(validUrl(url)).toBe(true);
});

test("creates flash message in Dom", () => {
    document.body.innerHTML = '<span id="flash"></span>';
    const elem = document.querySelector('#flash');
    createFlash("hello!", "warning");
        console.log(elem.innerHTML);
    expect(elem.innerHTML = "hello!");
    expect(elem.classList.contains("warning"));
});