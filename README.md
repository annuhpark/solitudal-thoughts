# Solitudal Thoughts

A full stack web application for mental health victims that want to find natural ways to their mind. 

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

Try the application live [here!](https://solitudal-thoughts.herokuapp.com/)

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

- Node.js 16 or higher
- NPM 6 or higher
- Postgres

### Getting Started

1. Clone the repository.

    ```shell
    git clone git@github.com:annuhpark/solitudal-thoughts.git
    cd solitudal-thoughts
    ```

2. Install all dependencies with NPM.

    ```shell
    npm install
    ```

3. Make a copy of the provided .env.example into your own .env file.

    ```shell
    cp .env.example .env
    ```

4. Start your postgreSQL service

    ```shell
    sudo service postgresql start
    ```

5. Create your database with Postgresql, then import database schema.

    ```shell
    createdb solitudal-thoughts
    ```
    
6. Create your database with Postgresql, then import database schema.

    ```shell
    npm run db:import
    ```
    
7. View your database with pgweb GUI tool for PostgreQL. Can also be seen at http://localhost:8081 in your browser once it's running.

    ```shell
    pgweb --db=solitudal-thoughts
    ```
