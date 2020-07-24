#https://nodejs.org/fr/docs/guides/nodejs-docker-webapp/

FROM node:12.14.0-alpine

WORKDIR /usr/src/app

COPY package.json ./

RUN yarn

COPY . .

RUN yarn build

CMD ["yarn", "start"]
