FROM node:16-alpine

WORKDIR /NG_APP/frontend

COPY package.json /NG_APP/frontend

RUN yarn install

EXPOSE 3000
EXPOSE 3000

COPY . /NG_APP/frontend

CMD ["yarn", "start"]