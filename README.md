# Solitudal Thoughts

A full stack web application for mental health advocates that want to find natural ways to their mind. 

## Technologies Used

- React.js
- Webpack
- Bootstrap 5
- React Bootstrap
- Node.js
- Express.js
- Babel
- Dotenv
- PostgreSQL
- HTML5
- CSS3
- JavaScript ES5/ES6
- Heroku

## Live Demo

Try the application live at [https://student-grade-table.lfz.com](https://student-grade-table.lfz.com)

## Features

- User can create an account.
- User can sign into their account.
- User can view 'our story' which talks about the purpose of this app.
- User can take a quiz that measures the severity of their mental illness.
- User can get suggestions on how to improve their mental health state depending on their results.
- User can create a group.
- User can search for other groups.
- User can sign out.

## Stretch Features

- User can join groups.
- User can write entries per group.
- User can read entries per group.

## Preview

![SGT React](assets/sgt-react.gif)

## Development

### System Requirements

- Node.js 10 or higher
- NPM 6 or higher
- MongoDB 4 or higher

### Getting Started

1. Clone the repository.

    ```shell
    git clone https://github.com/Learning-Fuze/sgt-react
    cd sgt-react
    ```

1. Install all dependencies with NPM.

    ```shell
    npm install
    ```

1. Import the example database to MongoDB.

    ```shell
    mongoimport --db sgt-react database/dump.json
    ```

1. Start the project. Once started you can view the application by opening http://localhost:3000 in your browser.

    ```shell
    npm run dev
    ```
