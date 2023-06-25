# Lab Assignment 

## Project Overview
Lab Assignment is a Node.js project that provides functionality for creating, deleting, and updating promotions using RESTful APIs. This documentation will guide you through the setup and usage of the project.

## Prerequisites
 Before getting started with the Lab Assignment project, ensure that you have the following prerequisites installed on your system:
1. Node.js (version 12 or higher)
2. npm (Node Package Manager)
# Getting Started
## Clone the Project
 ## git clone https://github.com/amir047123/Lab-Assignment.git

 # Install Dependencies
 # npm install


This is a Node.js project that requires the use of environment variables. In order to run the project locally or in a production environment, you need to set up a `.env` file.

## Setting up the .env file

1. Create a file named `.env` in the root directory of the project.
2. Define the following environment variables in the `.env` file:


Replace `VARIABLE_NAME` with the actual variable name and `value` with the corresponding value. Add more variables as required for your project.

3. Make sure to add the `.env` file to your `.gitignore` file to prevent it from being committed to version control.

Here's an example of how the `.env` file structure should look:

Please note that you should replace the example values with your own values specific to your development environment.

By following these instructions and setting up the `.env` file correctly, you'll ensure that the project runs with the appropriate environment variables in place.

## Running the Project
## npm start

# Usage
The Lab Assignment project provides the following HTTP routes for managing promotions:

POST /promotions: Creates a new promotion. Send a POST request to this endpoint with the promotion data in the request body.

DELETE /promotions/:promoId: Deletes a promotion by its ID. Send a DELETE request to this endpoint with the promoId as a route parameter.

PUT /promotions/:promoId: Updates a promotion by its ID. Send a PUT request to this endpoint with the promoId as a route parameter and the updated promotion data in the request body.

Ensure that you handle errors appropriately in your client application and check the response status codes for successful or failed operations.

# Conclusion
Congratulations! You have successfully set up and explored the Lab Assignment project. You can now use the provided HTTP routes to manage promotions in a RESTful manner
