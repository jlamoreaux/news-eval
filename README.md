# New Evaluator

## Description
Web app that analyzes a news story from a URL or manually provided text for subjectivity and polarity.

## Setup
1. Fork the repository
2. Install dependencies by running `npm install`
3. Generate webpack by running `npm run build-prod`
4. Get API credentials from [Aylien](https://developer.aylien.com/)
5. Create .env file and add the following:
    - PORT=7070
    - AYLIENKEY=[YOUR API KEY]
    - AYLIENID=[YOUR CLIENT ID]
    - AYLIENENDPOINT=https://api.aylien.com/api/v1
6. Run with `npm start` command.
