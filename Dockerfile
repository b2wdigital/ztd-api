#https://nodejs.org/fr/docs/guides/nodejs-docker-webapp/

FROM node:10

WORKDIR /usr/src/app

COPY package.json ./

COPY . .

CMD ["yarn", "start"]
