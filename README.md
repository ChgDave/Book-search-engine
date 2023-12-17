# 21 MERN: Book Search Engine

## Description

This is the week 21 challenge project for the Northwestern coding bootcamp. The assignment this week is to take the existing starter code with a fully functioning Google Books API search engine built with a RESTful API, and refactor it to be a GraphQL API built with Apollo Server. The app was built using the MERN stack with a React front end, MongoDB database, and Node.js/Express.js server and API. It's already set up to allow users to save book searches to the back end.

To complete the assignment, we need to do the following:

1. Set up an Apollo Server to use GraphQL queries and mutations to fetch and modify data, replacing the existing RESTful API.

2. Modify the existing authentication middleware so that it works in the context of a GraphQL API.

3. Create an Apollo Provider so that requests can communicate with an Apollo Server.

4. Deploy your application to Render with a MongoDB database using MongoDB Atlas. Use the [Deploy with Render and MongoDB Atlas](https://coding-boot-camp.github.io/full-stack/mongodb/deploy-with-render-and-mongodb-atlas) walkthrough for instructions.

## Table of Contents

- [User Story](#user-story)

- [Installation](#installation)

- [Usage](#usage)

- [Back End](#back-end)

- [Front End](#front-end)

- [License](#license)

- [Github Repo](#github-repo)

- [Video Link](#video-link)

- [Questions](#questions)

## User Story

```md
AS AN avid reader
I WANT to search for new books to read
SO THAT I can keep a list of books to purchase
```

## Installation

To insall necessary dependencies, run the following command:

```
npm i
npm run install
npm run develop
```

## Usage

```md
GIVEN a book search engine
WHEN I load the search engine
THEN I am presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button
WHEN I click on the Search for Books menu option
THEN I am presented with an input field to search for books and a submit button
WHEN I am not logged in and enter a search term in the input field and click the submit button
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site
WHEN I click on the Login/Signup menu option
THEN a modal appears on the screen with a toggle between the option to log in or sign up
WHEN the toggle is set to Signup
THEN I am presented with three inputs for a username, an email address, and a password, and a signup button
WHEN the toggle is set to Login
THEN I am presented with two inputs for an email address and a password and login button
WHEN I enter a valid email address and create a password and click on the signup button
THEN my user account is created and I am logged in to the site
WHEN I enter my account’s email address and password and click on the login button
THEN I the modal closes and I am logged in to the site
WHEN I am logged in to the site
THEN the menu options change to Search for Books, an option to see my saved books, and Logout
WHEN I am logged in and enter a search term in the input field and click the submit button
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site and a button to save a book to my account
WHEN I click on the Save button on a book
THEN that book’s information is saved to my account
WHEN I click on the option to see my saved books
THEN I am presented with all of the books I have saved to my account, each featuring the book’s title, author, description, image, and a link to that book on the Google Books site and a button to remove a book from my account
WHEN I click on the Remove button on a book
THEN that book is deleted from my saved books list
WHEN I click on the Logout button
THEN I am logged out of the site and presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button
```

## Back End

The following back-end files are created/modified:

- `auth.js`: Update the auth middleware function to work with the GraphQL API.

- `server.js`: Implement the Apollo Server and apply it to the Express server as middleware.

- `Schemas` directory:

  - `index.js`: Export your typeDefs and resolvers.

  - `resolvers.js`: Define the query and mutation functionality to work with the Mongoose models.

  **Hint**: Use the functionality in the `user-controller.js` as a guide.

  - `typeDefs.js`: Define the necessary `Query` and `Mutation` types:

    - `Query` type:

      - `me`: Which returns a `User` type.

    - `Mutation` type:

      - `login`: Accepts an email and password as parameters; returns an `Auth` type.

      - `addUser`: Accepts a username, email, and password as parameters; returns an `Auth` type.

      - `saveBook`: Accepts a book author's array, description, title, bookId, image, and link as parameters; returns a `User` type. (Look into creating what's known as an `input` type to handle all of these parameters!)

      - `removeBook`: Accepts a book's `bookId` as a parameter; returns a `User` type.

    - `User` type:

      - `_id`

      - `username`

      - `email`

      - `bookCount`

      - `savedBooks` (This will be an array of the `Book` type.)

    - `Book` type:

      - `bookId` (Not the `_id`, but the book's `id` value returned from Google's Book API.)

      - `authors` (An array of strings, as there may be more than one author.)

      - `description`

      - `title`

      - `image`

      - `link`

    - `Auth` type:

      - `token`

      - `user` (References the `User` type.)

## Front End

The following front-end files are created/modified:

- `queries.js`: This will hold the query `GET_ME`, which will execute the `me` query set up using Apollo Server.

- `mutations.js`:

  - `LOGIN_USER` will execute the `loginUser` mutation set up using Apollo Server.

  - `ADD_USER` will execute the `addUser` mutation.

  - `SAVE_BOOK` will execute the `saveBook` mutation.

  - `REMOVE_BOOK` will execute the `removeBook` mutation.

Additionally, you’ll need to complete the following tasks in each of these front-end files:

- `App.jsx`: Create an Apollo Provider to make every request work with the Apollo Server.

- `SearchBooks.jsx`:

  - Use the Apollo `useMutation()` Hook to execute the `SAVE_BOOK` mutation in the `handleSaveBook()` function instead of the `saveBook()` function imported from the `API` file.

  - Make sure you keep the logic for saving the book's ID to state in the `try...catch` block!

- `SavedBooks.jsx`:

  - Remove the `useEffect()` Hook that sets the state for `UserData`.

  - Instead, use the `useQuery()` Hook to execute the `GET_ME` query on load and save it to a variable named `userData`.

  - Use the `useMutation()` Hook to execute the `REMOVE_BOOK` mutation in the `handleDeleteBook()` function instead of the `deleteBook()` function that's imported from `API` file. (Make sure you keep the `removeBookId()` function in place!)

- `SignupForm.jsx`: Replace the `addUser()` functionality imported from the `API` file with the `ADD_USER` mutation functionality.

- `LoginForm.jsx`: Replace the `loginUser()` functionality imported from the `API` file with the `LOGIN_USER` mutation functionality.

## License

This project is licensed under MIT License

## Github Repo

https://github.com/ChgDave/Book-search-engine

## Deployed link on heroku

https://blogems-a6ce292e1cff.herokuapp.com/

## Questions

If you have any qustions about the repo, open an issue or contact me directly at chgdave@gmail.com. You can also find more of my work at [chgdave](https://github.com/chgdave).

## Review

You are required to submit BOTH of the following for review:

- The URL of the functional, deployed application.

- The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.

---

© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
