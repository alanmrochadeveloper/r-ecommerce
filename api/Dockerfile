FROM node:15-alpine

WORKDIR /home/app/api

COPY ./package.json .

RUN yarn

COPY . .

CMD yarn start:dev
