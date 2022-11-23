FROM node:16-alpine

WORKDIR /NG_APP/frontend

COPY . /NG_APP/frontend

RUN yarn install

EXPOSE 3000

CMD ["yarn", "start"]