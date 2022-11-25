*todos os comando abaixo devem ser executados sem as aspas.

Pra rodar o projeto você precisa ter o docker e um navegador instalado no computador. 

Abra seu terminal, acesse os diretórios do back e frontend, executando 'yarn install' em cada um deles.

Você pode realizar essa sequência ao abrir o projeto raiz: 

'cd ./backend' 'yarn install'  (aguarde)

'cd ../frontend' 'yarn install' (aguarde)

'cd ../' para voltar a raiz do projeto. 

Em seguida execute 'docker compose build --no-cache', sem as aspas, e aguarde o processo terminar antes de executar o 'docker compose up'.  

Espere alguns segundos para o build ser feito e as portas serem expostas. 

Então, basta selecionar a porta do container TRYBE_frontend na coluna ports da interface do Docker para abrir o aplicativo em seu navegador. Pra verificar o banco de dados abrir um terminal SQL ou gui (Dbeaver,pgadmin e etc). Também é possível verificar as logs e acessar o terminal pelo Docker, basta dar um click no nome do container. 

 