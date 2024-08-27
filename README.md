# Welcome to Flights Service

## Project Setup
- Clone the project on your local
- Excute `npm install` on the same path as of your root directory of the downloaded project
- Create a `.env` file in the root directory and add the following environment variable
    - `PORT=3000`
- Inside the `scr/config` folder create a new file `config.json` and then add the following piece of json

```
{
  "development": {
    "username": <YOUR_DB_LOGIN_NAME>,
    "password": <YOUR_DB_PASSWORD>,
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```
- Once you've added your db config as listed above, go to the src folder from your terminal and execute `npx sequelize db:create`
```
## DB Design
  - Airplane Table
  - Flight
  - Airport
  - City

  - A flight belongs to an airplane can be used in multiple flight.
  - A city has manny airports but one airport belongs to city.
  - One airport can have many flights, but a flight  belongs to one airport.

##Tables

### City --> id, name, created_at, updated_at
### Airport --> id, name, address, city_id, created_at, updated_at
    Relationship --> City has many airports belongs to a city. (One to many)

```
npx sequelize model:generate --name Airport --attributes name:String,address:String,cityId:Integer
```