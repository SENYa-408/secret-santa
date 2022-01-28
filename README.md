# secret-santa
Backend secret-santa REST API

# Installation
1. Clone git repository   
```
git clone https://github.com/SENYa-408/secret-santa.git
```
2. Go to directory with project
3. Download all dependencies 
```
npm install
```
4. Create config.env file in root directory with environment variables: 
```
PORT=3000
MAX_PLAYERS = 500
MAX_WISHES = 10
```
5. Create DataBase
```
npm run migrate
```
6. Start the server  
```
npm start  
```
or start the server with nodemon (requires installation of ![nodemon](https://www.npmjs.com/package/nodemon))
```
npm run startDev
```

# Technologies used
**Runtime** - Node.js  
**DataBase** - ![Better-SQLite3](https://www.npmjs.com/package/better-sqlite3) (SQLite3 has ![3 high severity vulnerailities](https://github.com/mapbox/node-sqlite3/issues/1483))  
**DataBase Query Builder** - ![Knex](https://www.npmjs.com/package/knex)  
**Node.js Framework** - ![Express.js](https://www.npmjs.com/package/express)  
