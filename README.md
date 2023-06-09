# project-frontend
This is the react application that I've used to display the data from the end points.

# Author
Tomno Vivian Jelagat

# The Application
This is a simple React app for managing bookings in some cities, i.e. Nairobi, Kisumu and Mombasa. It allows you to view, create, update, and delete bookings for different parking lots in the cities as well as the car information.

# Getting Started
To run the app locally, follow these steps:

-Clone the repository to your local machine.
-Navigate to the project directory.
-Install the dependencies by running the command npm install.
-Start the development server by running the command npm start.
-Open your browser and visit http://localhost:3000 to access the app

# Features
-View car information such as car type, model, owner and their contact.
-View a list of existing bookings in Nairobi,Kisumu and Mombasa including details such as parking lot, location, address, slot number, price, time in, and time out.
-Create a new booking by filling out the necessary information in the form.
-Update an existing booking by selecting it from the list and modifying the details in the form.
-Delete a booking by clicking the delete button next to it in the list.

# API Integration
The app communicates with a backend API to fetch and manipulate booking data. The API endpoints used are:

GET http://127.0.0.1:8000/nairobi - Fetches the list of existing bookings.
POST http://127.0.0.1:8000/nairobi - Creates a new booking.
PUT http://127.0.0.1:8000/nairobi/{id} - Updates an existing booking.
DELETE http://127.0.0.1:8000/nairobi/{id} - Deletes a booking.

GET http://127.0.0.1:8000/mombasa - Fetches the list of existing bookings.
POST http://127.0.0.1:8000/mombasa - Creates a new booking.
PUT http://127.0.0.1:8000/mombasa/{id} - Updates an existing booking.
DELETE http://127.0.0.1:8000/mombasa/{id} - Deletes a booking.

GET http://127.0.0.1:8000/kisumu - Fetches the list of existing bookings.
POST http://127.0.0.1:8000/kisumu - Creates a new booking.
PUT http://127.0.0.1:8000/kisumu/{id} - Updates an existing booking.
DELETE http://127.0.0.1:8000/kisumu/{id} - Deletes a booking.

GET http://127.0.0.1:8000/car - Fetches the list of existing bookings.
POST http://127.0.0.1:8000/car - Creates a new booking.
PUT http://127.0.0.1:8000/car/{id} - Updates an existing booking.
DELETE http://127.0.0.1:8000/car/{id} - Deletes a booking.
