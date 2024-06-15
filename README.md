# Social Network API

MongoDB is a popular choice for many social networks due to its speed with large amounts of data and flexibility with unstructured data. This project demonstrates the creation of an API for a social network web application using MongoDB, Express.js, and Mongoose.

## Table of Contents
- [Description](#decription)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Installation](#installation)
- [Usage](#usage)
- [API Routes](#api-routes)
- [Walkthrough Video](#walkthrough-video)
- [Credits]
- [License](#license)

## Description

The Social Network API allows users to share their thoughts, react to friends’ thoughts, and create a friend list. This project is built with Express.js for routing, a MongoDB database, and the Mongoose ODM. You can use a JavaScript date library of your choice or the native JavaScript Date object to format timestamps.

## User Story
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data

## Acceptance Criteria
GIVEN a social network API

WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list

## Installation
1. Clone the repository: git clone <repository-url>
2. Navigate to the project directory: cd social-network-api
3. Install dependencies: npm install
4. Create a .env file and add your MongoDB connection string:
```sh
MONGODB_URI=mongodb://localhost:27017/socialNetworkDB
```
5. Start the server: 
```sh
npm start
```

## Usage
To start the server, run npm start.
Use Insomnia or any API client to interact with the API endpoints.
The server will be running on http://localhost:3000.

## API Routes
Users
GET /api/users - Get all users
GET /api/users/:id - Get a single user by ID
POST /api/users - Create a new user
PUT /api/users/:id - Update a user by ID
DELETE /api/users/:id - Delete a user by ID
POST /api/users/:userId/friends/:friendId - Add a friend to a user's friend list
DELETE /api/users/:userId/friends/:friendId - Remove a friend from a user's friend list
Thoughts
GET /api/thoughts - Get all thoughts
GET /api/thoughts/:id - Get a single thought by ID
POST /api/thoughts - Create a new thought
PUT /api/thoughts/:id - Update a thought by ID
DELETE /api/thoughts/:id - Delete a thought by ID
Reactions
POST /api/thoughts/:thoughtId/reactions - Create a reaction to a thought
DELETE /api/thoughts/:thoughtId/reactions/:reactionId - Delete a reaction to a thought

## Walkthrough Video
A walkthrough video demonstrating the functionality of the application can be found here.

## Credits

I would like to extend my deepest gratitude to my teachers, Drew and Kyle, for their invaluable guidance and support throughout the development of this module. Their expertise and encouragement were instrumental in helping me navigate the challenges and successfully complete this project.

A special thanks to Drew for his speed runs, which were exceptionally helpful in understanding the concepts and techniques required to optimize performance and efficiency.

Thank you both for your dedication to teaching and for inspiring me to achieve my best.


## License
This project is licensed under the MIT License.

