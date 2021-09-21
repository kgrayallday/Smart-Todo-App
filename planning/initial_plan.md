# SMART TO DO APP

### User Stories
  - As a user I can add a ToDo item Because I want to keep track of the things I need to do
  - as a non-user I cannot add any todo's until I sign in because that is how my todos are managed

### APIs
  - Google => use to cat data
  - Wolfram Alpha
  - Rotten Tomatoes
  - Amazon
  - Yelp
  - Others

## SQL db
  - users
  - Media (films + movies)
  - Food (restaurants + cafes, etc)
  - Books (To read)
  - Products (to buy)

## Routes

| Method | Route                | Function                  |
|--------|:---------------------|:--------------------------|
|  GET   |/                     | Home/Root                 |
|  GET   |/login                | login page                |
|  POST  |/login/:id            | post log in credentials   |
|  POST  |/logout               | logs user out             |
|  GET   |/profile              | view user profile         |
|  POST  |/profile/:id/edit     | view user profile         |
|  GET   |/todo                 | main page of all cats     |
|  POST  |/todo/:id             | individual todo           |
|  POST  |/todo/:cat/:id/edit   | edits todo                |
|  POST  |/todo/:cat/:id/delete | delete todo               |
|  GET   |/todo/:category       | list todo's from category |
|  GET   |/todo/:cat/:id        | info on todo item         |

## Dev Roles
  ### Tommy
  - Front-End HTMl/SCSS 

  ### Kyle 
  - SQL and database interface 

  ### Michael
  - Back-End API and Express
