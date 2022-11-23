To run the project on your machine, you will need Postgres or docker installed to start Pg.

So, open your terminal and: 
--name postgres-container -e DB_PASS=admin -d -p 5432:5432 postgres:5.7. 

cd ./backend 

yarn dev

/*wait some seconds until the container creates, and the server exposes 3001 PORT*/

cd ./frontend

yarn start 

/*Now your 3000 PORT is open to browser use*/

Enjoy!!
 