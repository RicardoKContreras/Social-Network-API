# Social-Network-API

## User Story
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data

## Acceptance Criteria
GIVEN a social network API
- WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
- WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
- WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
- WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list

## Notes
-  using the `MongoDB` and `Mongoose Package`
- Also using the `Express package`
- Created `Models` for `Thoughts` and `Users`
- created a `controllers` folder to host the functionality of a `user` and a `thought`
- Created `API Routes` for the `users` and `thoughts` so that we are able to use the functionality from the controllers folder in conjuction with a `GET`, `POST`, `PUT`, and `DELETE` route
- Created a `utils` folder to hold a Dateformat `js file` to format the current date.
- Using the server.js file to connect to `Mongod` and the `localhost` through `Mongoose` and `express`
- All `GET`, `POST`, `PUT`, and `DELETE` routes for `users` and `Thoughts`
- `POST` and `DELETE` for `reactions` and `friends` works as well
- Walkthrough Video: https://drive.google.com/file/d/1caN-j7VObM518xIpVQaTxgKBeshLRdHz/view
