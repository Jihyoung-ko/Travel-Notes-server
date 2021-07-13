
# Project's name: Travel Notes

## Description

A private diary app to make your personal notes on travels. While you are travelling you can record your thoughts with photo, video, location, date and companion.

## USER STORIES (MVP)

**404** - As a user I want to see a nice 404 page when I go to a page that doesn’t exist so that I know it was my fault

**500** - As a user I want to see a nice error page when the super team screws it up so that I know that is not my fault

**Landing page** - As a user I want to be able to access the landing page so that I see what the app is about and login and signup

**Sign up** - As a user I want to be able to create an account to use the app and save my tasks

**Login** - As a user I want to be able to log in on the webpage 

**Logout** - As a user I want to be able to log out from the webpage

**Profile** - As a user I want to be able to see my profile and edit it

**Home page** - As a user I want to be able to see all albums (which are collections of notes ) and create a new album

**Album page** - As a user I want to be able to see all articles of the album and create new article

**article page** - As a user I want to be able to see the details of the article and can edit. 

**search page** - As a user I want to be able to search articles by text or date

## BACKLOG

*User can see the world map with pins where user has visited and can click to see details*


## ROUTES

### Endpoints

| Method | Path         | description                | Body |
| :----: | ------------ | -------------------------- | ---- |
|  GET   | `/`          | landing page, signup, login|      |
|  GET   | `/home`      | see all albums            |      |
|  GET   | `/:albumId`  | see all atricles of album  |      |
|  POST  | `/album`     | create new album           | `{title, start date, end date, photo}`  |
|  POST  | `/:albumId`  | edit album                 | `{title, start date, end date, photo}`  |
|  POST  | `/:albumId`  | delete album               |      |
|  GET   | `/:articleId`| see details of article     |      |
|  POST  | `/article`   | create new article         | `{note, photo, location, time, people} `|
|  POST  | `/:articleId`| edit  article              | `{note, photo, location, time, people} `|
|  POST  | `/:articleId`| delete article             |      |


### Auth

| Method | Path      | description    | Body                     |
| :----: | --------- | -------------- | ------------------------ |
|  GET   | `/whoami` | who am i       |                          |
|  POST  | `/signup` | signup a user  | `{ username, password }` |
|  POST  | `/login`  | login a user   | `{ username, password }` |
|  GET   | `/logout` | logout session |                          |



## MODELS

Album model

```js
{
    title: String,
    startDate: Date,
    endDate: Date, 
    photo: String
    user: {type:Schema.Types.ObjectId, ref: 'User' }
}
```
Article model

```js
{
    note: String,
    photo: String,
    time: Date, 
    location: Map(?) String(?),
    people: String,
    album: {type:Schema.Types.ObjectId, ref: 'Album' }
}
```


User model

```js
{
    username: String,
    hashedPassword: String
}
```

## LINKS

### Github project

- [Frontend project]()
- [Backend project]()

### Deploy links

- [Frontend deploy]()

### Project kanban
- [Github projects]()

### Wireframes 

- [InVision with Wireframes]()

### Slides

- [Slides]()