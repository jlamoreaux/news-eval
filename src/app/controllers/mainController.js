const AYLIENTextAPI = require("aylien_textapi");
const path = require('path')

const textapi = new AYLIENTextAPI({
  application_id: process.env.AYLIENID,
  application_key: process.env.AYLIENKEY,
});

const url = process.env.AYLIENENDPOINT;
const id = process.env.AYLIENID;
const key = process.env.AYLIENKEY;

exports.getHomepage = (req, res) => {
    res.sendFile('../../dist/index.html', {root: __dirname });
};

exports.getAylien = async (req, res) => {
    let sentiment;
    if (req.body.method == "Text") {
        sentiment = { text: req.body.text }
    } else {
        sentiment = { url: req.body.url }
    }
    const result = await textapi
        .sentiment(
            sentiment,
            (error, response) => {
                if (error === null) {
                    res.json(response);
                }
            }
    );
}