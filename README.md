# The Phone Cave



## Description

Simple app where a user have a list of phones. When clicking in a specific phone, the details will show up.

## Technologies used

HTML, CSS, Javascript, React, axios,  Services, React Router, React Spinners and React Hooks like useState, useEffect

# Client Structure

## User Stories

- **404** - As a user I want to see a nice 404 page when I go to a page that doesn’t exist so that I know it was my fault 
- **500** - As a user I want to see a message that something went wrong
- **phones** - As a user I want to be able to see a list of all the phones and access the details of a specific one.

## Client Routes



## React Router Routes (React App)
| Path                      | Page            | Components        | Permissions              | Behavior                                                      |
| ------------------------- | ----------------| ----------------  | ------------------------ | ------------------------------------------------------------  |
| `/`                       | Phones           |                   | public                   | Phones page                                                     |
| `/:phoneId`                 | SinglePhones          |                   | public     | See the details of a phone by its id |


## Other Components

- Navbar
- Footer


## Services

- phones.getAllPhonesService()
- phones.getPhoneDetailsService()

  
## Usage

To run these files locally, you can download them, `cd into your project directory`, then run `npm install` to install the dependencies and finally `npm start`. Don't forget to also run the server repository.!
