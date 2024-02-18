Restaurant Point of Sale (POS) System-
----------------------------------------

Table of Contents
----------------------------------------
1. Introduction
2.  Features
3.  Technologies Used
4.  Usage
5.  API Endpoints
6.  Screenshots
7.  Contributing
8.  License

_____________________________________________________________________________________________________________________________________________________________________________
1.  Introduction
--------------------
This is a full-stack web application developed for managing the point of sale (POS) system in restaurants. The system allows restaurant staff to handle customer orders, generate bills in PDF format, manage inventory, and handle user authentication.


2.  Features:-
-----------------------------------------------
2.1  User authentication (Login/Register)
2.2  CRUD operations for items
2.3  Adding items to the cart
2.4  Billing generation with PDF support
2.5  Customer management
2.6  User-friendly interface
2.7  Responsive design for multiple devices



3.  Technologies Used
-----------------------------------------------
      3.1 Frontend:
           React.js
           Redux for state management
           antd for UI components
    
      3.2  Axios for API requests
    
      3.3  Backend:
          ANode.js with Express.js for the RESTful API
          MongoDB for the database
          Mongoose for MongoDB object modeling


4.  Usage
---------------------------------------------------------------
Register a new account or login with existing credentials.
Add items to the cart from the available menu.
Review the cart and proceed to billing.
Generate a PDF bill for the order.
Manage inventory and customer data as needed.



---------------------------------------------------------------
5.  API Endpoints
POST /api/users/register: Register a new user.
POST /api/users/login: Login a user.
GET /api/items: Get all items.
POST /api/items: Add a new item.
PUT /api/items/:id: Update an existing item.
DELETE /api/items/:id: Delete an item.
GET /api/customers: Get all customers.
POST /api/customers: Add a new customer.
PUT /api/customers/:id: Update an existing customer.
DELETE /api/customers/:id: Delete a customer.



7.  Contributing
-----------------------------------------------------------------------------------------------------------
Contributions are welcome! Please fork the repository and create a pull request with your proposed changes.

8.  License
--------------------------------------------------------------------
This project is licensed under the MIT License.
