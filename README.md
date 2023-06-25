Lab Assignment Documentation
Project Overview
Lab Assignment is a Node.js project that provides functionality for creating, deleting, and updating promotions using RESTful APIs. This documentation will guide you through the setup and usage of the project.

Prerequisites
Before getting started with the Lab Assignment project, ensure that you have the following prerequisites installed on your system:

Node.js (version 12 or higher)
npm (Node Package Manager)
Getting Started
Clone the Project
Open your terminal or command prompt.
Navigate to the directory where you want to clone the project.
Run the following command to clone the project repository:
bash
Copy code
git clone https://github.com/amir047123/Lab-Assignment.git
Install Dependencies
Navigate to the project directory in your terminal.
Run the following command to install the required dependencies specified in the package.json file:
Copy code
npm install
Setting up Environment Variables
Create a file named .env in the root directory of the project.

Define the following environment variables in the .env file:

makefile
Copy code
VARIABLE_NAME=value
Replace VARIABLE_NAME with the actual variable name and value with the corresponding value. Add more variables as required for your project.

Here's an example of how the .env file structure should look:

makefile
Copy code
PORT=8000
DATABASE_URL=mongodb://localhost/lab_assignment
Please note that you should replace the example values with your own values specific to your development environment.

Make sure to add the .env file to your .gitignore file to prevent it from being committed to version control.

Running the Project
In the project directory, run the following command to start the project:

sql
Copy code
npm start
The project will start running on the specified port (default is 8000). You should see a message in the console indicating that the server is listening.

Open a web browser and navigate to http://localhost:8000 (replace the port number if you have configured a different port) to access the Lab Assignment application.

Project Structure
The Lab Assignment project follows a structured organization to maintain code readability and modularity. Here's an overview of the project structure:

bash
Copy code
Lab-Assignment/
  ├── .env                 # Environment variables configuration file (not included in the repository)
  ├── node_modules/        # Installed dependencies
  ├── Schema/              # Directory containing project schemas
  ├── routes/              # Directory containing project routes
  ├── .gitignore           # Git ignore file
  ├── app.js               # Main application file
  ├── package.json         # Project configuration and dependencies
  └── README.md            # Project documentation
Usage
The Lab Assignment project provides the following HTTP routes for managing promotions:

POST /promotions: Creates a new promotion. Send a POST request to this endpoint with the promotion data in the request body.

DELETE /promotions/:promoId: Deletes a promotion by its ID. Send a DELETE request to this endpoint with the promoId as a route parameter.

PUT /promotions/:promoId: Updates a promotion by its ID. Send a PUT request to this endpoint with the promoId as a route parameter and the updated promotion data in the request body.

Ensure that you handle errors appropriately in your client application and check the response status codes for successful or failed operations.

Conclusion
Congratulations! You have successfully set up and explored the Lab Assignment project. You can now use the provided HTTP routes to manage promotions in a RESTful manner





