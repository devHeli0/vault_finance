To run the project on your machine, you will need MySQL or docker installed to start MySQL.

So, open your terminal and: 
--name postgres-container -e DB_PASS=admin -d -p 5432:5432 mysql:5.7. 

cd ./app/back-end 

yarn dev

/*wait some seconds until the container creates, and the server exposes 3001 PORT*/

cd ../front-end

yarn start 

/*Now your 3000 PORT is open to browser use*/

Enjoy!!
 