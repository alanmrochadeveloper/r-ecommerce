FROM node:14.15.0-alpine

WORKDIR /home/app/api

COPY ./package.json .

RUN yarn

# RUN yarn typeorm migration:run

COPY . .

CMD yarn start:dev
