Clone the applicaiton and run: 

`cd auto1 && yarn start`

`cd mock-server && yarn start`

**Main features :**
1.  List all available cars
1. Filter by manufacturers and colors
1. Sort by Mileage
1. View Details of each car
1. Add/Remove to favourites
1. Navigate by router (Pages/Details of car/404)

**Explaination:**
Manufacturers and colors list are in global state (redux store) as their values affect the list of cars. The list of cars are manipulated in local state of `<CarsBlock />`. 

There is React Router to handle different routes like:
http://localhost:3000/cars?page=15
http://localhost:3000/cars/:stockNumber
http://localhost:3000/yeah (404)

Note : StockNumber is randomly generated on every instance of yarn start of mock server. This will affect the localStorage, so make sure to keep the server on.

Unit test cases for reducers, actions and stateless components are in __tests__ folder. 






