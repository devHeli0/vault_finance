FROM node:16

WORKDIR /NG_APP/backend

# RUN apk add --no-cache make gcc g++ bash python3 git && \   npm install && \   npm rebuild bcrypt --build-from-source && \   apk del make gcc g++ python3

COPY . /NG_APP/backend

RUN yarn install

RUN git clone https://github.com/vishnubob/wait-for-it.git

EXPOSE 3001

CMD ["yarn", "dev"]

