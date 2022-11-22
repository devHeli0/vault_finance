FROM node:16-alpine

WORKDIR /NG_APP/back

COPY package.json /NG_APP/backend

RUN yarn install

EXPOSE 3001

COPY . NG_APP/backend

CMD ["yarn", "dev"]