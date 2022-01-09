# Front End Engineering Challenge

## The Problem Statement

Create an app to search a list of data that keeps a search input text query in sync with the URL via a query parameter at all times. Assume the data will be fetched from some API and the API will perform the actual search. The query should be a simple string and kept in sync with the URL via a query parameter 'q' (ex. localhost:4200/?q=supremo).

## The Spec

#### Core Features

- Hit the API **once and only once** per query change (you can use _api/index_ or your own implementation)
- When the query updates -> update the URL and fetch results from the API.
- When the URL updates -> update the query and fetch results from the API.
- The browser's back / forward buttons should keep the app state (query + results) in sync with the URL (this is a gotcha if not thought about carefully).

#### Bonus Features

- Handle the concurrent actions issue - "If the user changes the query input while there is still a pending request from a previous query change, the current pending request should be cancelled and a new request should be made."
- Debounce the fetching of results by 100ms.
- Add loading and/or error states

## Solution

This application is build with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.2. The backend server is running on port 5000 which is hosting the endpoint for search(http://localhost:5000/api/search). All the features mentioned above are implemented.

## Installation

Run `npm i` to install all dependencies of application.

## Run application

Run `npm run dev` to start the application. Navigate to `http://localhost:4200/`.

## TODO

- [ ] Unit testing
- [ ] improve Code Comments
- [ ] Containarize app
