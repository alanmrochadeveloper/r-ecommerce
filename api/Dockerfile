FROM node:14.15.0-alpine

WORKDIR /home/app/api

COPY ./package.json .

RUN yarn

COPY . .

CMD yarn start:dev
