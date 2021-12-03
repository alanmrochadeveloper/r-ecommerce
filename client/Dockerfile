FROM node:14.15.0-alpine

WORKDIR /home/app/client

COPY ./package.json .

RUN yarn

COPY . .

CMD yarn start
