create schema "NGAPP";
create table "NGAPP"."Users" (
    "id" SERIAL UNIQUE primary key,
    "username" character not null,
    "password" character not null,
    "accountId" numeric 
);
create table "NGAPP"."Accounts" (
    "id" SERIAL UNIQUE primary key,
    "balance" numeric DEFAULT 100
);
create table "NGAPP"."Transactions" (
    "id" SERIAL UNIQUE primary key,
    "debitedAccountId" integer,
    "creditedAccountId" integer,
    "value" float not null,
    "createdAt" date,
    "updatedAt" date
);
alter table "NGAPP"."Users"
add constraint FK_Users_Accounts_accountId foreign key ("accountId") references "NGAPP"."Accounts" ("id");
alter table "NGAPP"."Transactions"
add constraint FK_Accounts_Transactions_debitedAccountId foreign key ("debitedAccountId") references "NGAPP"."Accounts" ("id");
alter table "NGAPP"."Transactions"
add constraint FK_Accounts_Transactions_creditedAccountId foreign key ("creditedAccountId") references "NGAPP"."Accounts" ("id");