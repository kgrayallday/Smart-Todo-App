# SMART TO DO APP

### User Stories
  - As a user I can add a ToDo item Because I want to keep track of the things I need to do.
  - As a user I would like to mark items complete because I do not need them anymore once they are done.
  - As a user I would like my completed items to stay around until I delete them because there might be information I still need on there or I might like to see what I have finished.
  - AS a user I would like to be able to delete todo's because once i no longer need them there is no reason to keep them around.
  - As a user I would like to have my todo's auto sorted into categories because I like to stay organized.
  - As a user I would like to be able to view my todo's either in separate catagories or all together because if I have too many todos it would be too much to see them all at once but if i have only a few it will be fine to view them all.
  - As a user I would like to be able to change the categories of my todo's because they may have been categorized incorrectly.
  - as a non-user I cannot add any todo's until I sign in because todos are managed by user account

### APIs
  - Google => use to cat data
  - Wolfram Alpha
  - Rotten Tomatoes
  - Amazon
  - Yelp
  - Others

## SQL db
  - Users
  - Entries (todo's)
  - Categories
  - Statuses

## Entries Relationship Diagram
![ERD](https://github.com/kgrayallday/lhl-midterm/blob/master/docs/ERD.png?raw=true)

## Types of Categories
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

