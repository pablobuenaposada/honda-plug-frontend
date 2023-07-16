FROM node:latest AS build

WORKDIR /app

COPY package*.json ./

RUN npm install --force --production

COPY public public
COPY src src

RUN npm run build --verbose

FROM node:latest

COPY --from=build /app/build /app/build

WORKDIR /app/build