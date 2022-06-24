# Solitudal Thoughts

A full stack web application for mental health victims that want to find natural and affordable ways to their mind. 

## Why I Built This Project

I am a strong believer that mental health is equally as important as physical health. Our generation, fortunately, has taken steps to de-stagmatize getting treatment for your mental health; however, that still does not mean the treatment is accessible to all. It comes with a cost, so this app was designed specifically for victims of mental health issues that want to find natural and affordable ways to take care of their mind. 

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
- JSON Web Token
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

![solitudal-thoughts-gif](https://user-images.githubusercontent.com/69396309/175664872-417b7b5b-2d20-403e-820f-61c937018c4f.gif)

![solitudal-thoughts-gif2](https://user-images.githubusercontent.com/69396309/175665093-f9920b27-2b4d-4927-a30d-856b9ca8162c.gif)

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

5. Create your database with postgreSQL, then import database schema.

    ```shell
    createdb solitudal-thoughts
    ```
    
6. Create your database with postgreSQL, then import database schema.

    ```shell
    npm run db:import
    ```
    
7. View your database with pgweb GUI tool for PostgreQL. Can also be seen at http://localhost:8081 in your browser once it's running.

    ```shell
    pgweb --db=solitudal-thoughts
    ```
8. Run NPM build to create your main.js file.

    ```shell
    npm run build
    ```
    
9. Start the project with dev script. Your updates can be seen at http://localhost:3000 in your browser.

    ```shell
    npm run dev
    ```
