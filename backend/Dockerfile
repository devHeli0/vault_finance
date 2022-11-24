FROM node:16-alpine

WORKDIR /NG_APP/backend

COPY . /NG_APP/backend

VOLUME [ "./backend/package.json", "/NG_APP/backend" ] 

RUN yarn install

EXPOSE 3000

CMD ["yarn", "dev"]

