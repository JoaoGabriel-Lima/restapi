<h1 align="center">Rest API</h1>
<p align="center">
<img src="https://img.shields.io/badge/-unfinished-orange">
<img src="https://img.shields.io/github/issues/JoaoGabriel-Lima/restapi">
<img src="https://img.shields.io/github/license/JoaoGabriel-Lima/restapi">
<img src=https://img.shields.io/github/stars/JoaoGabriel-Lima/restapi>
<img src="https://img.shields.io/github/languages/top/JoaoGabriel-Lima/restapi">
</p>

## About this Project

The idea of this API is:

_"A simple Rest API made with NodeJS, Prisma and Express focused on manage users"._

**PS:** The site is not just for developers, but for any audience interested in a simple example of CRUD operations using Prisma ORM.

## Why?

This project is part of my personal portfolio, so, I'll be happy if you could provide me any feedback about the project, code, structure or anything that you can report that could make me a better developer!

Email-me: jg.limamarinho202@gmail.com

Contact me at [Twitter](https://twitter.com/juaozin__).

Also, you can use this Project as you wish, be for study, be for make improvements or earn money with it!

It's free!

## Some Observations about this App

1 - There are still several functions to be made available in the following versions of the application, like remove existed posts. Feel free to contribute with that!

## Testing

If you want to test this Website in the Production mode, the website links are listed below:

[Unavailable for this project]()

Test Deployments: Soon!

## Functionalities

- CRUD Operations
  - Create a user with a unique email
  - Get all users
  - Get user by ID
  - Update user by ID (if there aren't other user with the same email)
  - Delete user
  - Create a post related to a user
  - Get all existed posts
  - Update an existed post related to a user

## Getting Started

### Prerequisites

To run this project in the development mode, you'll need to have a basic environment to run a Node.js App, that can be found [here](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/development_environment).

### Installing

**Cloning the Repository**

```
$ git clone https://github.com/JoaoGabriel-Lima/restapi/

$ cd restapi
```

**Installing dependencies**

```
$ yarn
```

_or_

```
$ npm install
```

### Preparing for running

1 - This project is a backend service, you need an API tester like Insomnia, Postman or VSCode extension to use it.

### Running

With all dependencies installed and the environment properly configured, you can now run the project:

yarn

```
$ yarn run dev
```

npm

```
$ npm run dev
```

The API will start on the default port 8080, and you can also run `yarn prisma studio` at cmd to **open a data viewer**

## Get all users

This endpoint retrieves all users of db

#### HTTP Request

```
GET http://localhost:8080/user
```

## Get users by ID

This endpoint retrieves a user with a specific ID on URL

#### HTTP Request

```
GET http://localhost:8080/user/:id
```

## Add a new user

This endpoint adds a new user

#### HTTP Request

```
POST http://localhost:8080/user
```

| Parameter | Default   | Description                                   | Required |
| --------- | --------- | --------------------------------------------- | :------: |
| Name      | undefined | The name of new user                          |   Yes    |
| Email     | undefined | The email of new user (it needs to be unique) |   Yes    |

## Update a user

This endpoint updates an existed user details

#### HTTP Request

```
PUT http://localhost:8080/user/:id
```

| Parameter | Default       | Description                                   | Required |
| --------- | ------------- | --------------------------------------------- | :------: |
| ID        | URL Parameter | The ID of existed user                        |   Yes    |
| Name      | undefined     | The new name of user                          |    No    |
| Email     | undefined     | The new email of user (it needs to be unique) |    No    |

## Delete a user

This endpoint deletes an existed user

#### HTTP Request

```
DELETE http://localhost:8080/user/:id
```

| Parameter | Default       | Description            | Required |
| --------- | ------------- | ---------------------- | :------: |
| ID        | URL Parameter | The ID of existed user |   Yes    |

## Get all posts

This endpoint retrieves all posts from db

#### HTTP Request

```
GET http://localhost:8080/posts
```

## Add a new post

This endpoint adds a new post

#### HTTP Request

```
POST http://localhost:8080/post/user/:id
```

| Parameter | Default       | Description                 | Required |
| --------- | ------------- | --------------------------- | :------: |
| ID        | URL Parameter | The ID of existed user      |   Yes    |
| Title     | undefined     | The title of the new post   |   Yes    |
| Content   | undefined     | The content of the new post |   Yes    |

## Update a post

This endpoint updates an existed post

#### HTTP Request

```
PUT http://localhost:8080/post/user/update/:id
```

| Parameter | Default       | Description                 | Required |
| --------- | ------------- | --------------------------- | :------: |
| ID        | URL Parameter | The ID of existed user      |   Yes    |
| PostID    | undefined     | The ID of existed post      |   Yes    |
| Title     | undefined     | The title of the new post   |    No    |
| Content   | undefined     | The content of the new post |    No    |

## Built With

- [Node.js](https://reactjs.org/) - A JavaScript runtime built on [Chrome's V8 JavaScript engine](https://v8.dev/).
- [SQLite](https://www.sqlite.org/index.html) - A C-language library that implements a small, fast, self-contained, high-reliability, full-featured, SQL database engine.
- [Prisma](https://www.prisma.io/) - Next-generation Node.js and TypeScript ORM.
- [ExpressJS](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for [Node.js](https://nodejs.org/en/).
- [Nodemon](https://www.npmjs.com/package/nodemon) - A library that helps in developing systems with Node.js automatically restarting the server.
- [Sucrase](https://www.npmjs.com/package/sucrase) - An alternative to Babel that allows superfast development builds

## Support tools

- [Heroku](https://www.heroku.com/) - Host Service

## Contributing

You can send me as many pull requests as you want, I would be glad to analyze and accept them! And if you have any question about the project...

Email-me: jg.limamarinho202@gmail.com

Contact me at [Twitter](https://twitter.com/juaozin__).

Thank you!

## License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/JoaoGabriel-Lima/restapi/blob/main/LICENSE) file for details
