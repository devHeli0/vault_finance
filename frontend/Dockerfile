FROM node:16-alpine

WORKDIR /app/front

COPY package.json /NG_APP/frontend

RUN yarn install

EXPOSE 3000
EXPOSE 80

COPY . /NG_APP/frontend

CMD ["yarn", "start"]