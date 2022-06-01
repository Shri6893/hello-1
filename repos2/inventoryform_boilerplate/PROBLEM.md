# Inventory List app

## Problem Statement

Inventory list app is keep track of all the Inventories. We can add a inventory with details like name and quantity to the list. We can search for any Inventory by name or quantity

## Know your APIs
    
     - POST    - http://localhost:3000/inventory      - add a new contact
     - GET     - http://localhost:3000/inventory      - get all existing contacts 

## TECH STACK

- Angular12
- Jasmine
- json-server

## PREREQUISITES

  1. Install dependencies npm install
  2. Run the frontend `npm run start` which shall run on port:4200  
  3. Use `json-server --watch db.json` for APIs availabilty using json-server

## Problem
- Create a Reactive form in Inventory component that allows us to provide name and quantity and make a POST request
- Define search component that lists all inventory available when a GET request is made, And also should filter inventories basis search criteria.
- Define a search pipe that searched from inventory list basis name or quantity.
- Define a Inventory service class to make POST and GET request to json server.
## Instructions

1. Your are expected to write code in the given boilerplate so that you can complete this assignment
2. All the detailed instructions are given inside the project
3. Understand the comments in the project and write code
4. After writing the code unit test your code by running `npm run test` or `ng test` and test lint errors using `ng lint` or `npm run lint`
