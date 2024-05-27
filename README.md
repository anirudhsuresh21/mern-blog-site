
# MERN Blogging Website

This project is a full-stack blogging website built with the MERN stack (MongoDB, Express.js, React, Node.js). Users can register, login, create, edit blog posts.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)

## Features

- User authentication (registration, login, logout)
- Create, read, update, and delete blog posts
- Upload and display images
- Responsive design

## Prerequisites

Make sure you have the following installed on your machine:

- Node.js
- npm (Node Package Manager)
- MongoDB

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/mern-blogging-website.git
   cd mern-blogging-website/api

2. Install Dependencies
	```bash
	npm install

3.  Set up environment variables 

## Running the Application
### Backend
1. Navigate to api directory
	```bash
	cd api
2. Install all the necessary modules mentioned in index.js:
	```bash 
	npm install
3. Update the mongo.connect() with your connection string
4.  Start backend server
	```bash
	node index.js
### Frontend
1. Navigate to client  directory
	```bash
	cd client
2. Install all the necessary modules
	```bash
	npm install
3. Start the server
	```bash 
	npm start
## API Endpoints

### Auth

-   `POST /register`: Register a new user
-   `POST /login`: Login a user
-   `POST /logout`: Logout a user

### Posts

-   `GET /posts`: Get all posts
-   `GET /posts/:id`: Get a single post by ID
-   `POST /posts`: Create a new post (authenticated)
-   `PUT /posts/:id`: Update a post by ID (authenticated)
-   `DELETE /posts/:id`: Delete a post by ID (authenticated)
## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.
