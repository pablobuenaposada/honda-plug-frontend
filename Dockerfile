FROM node:14 AS build

WORKDIR /app

COPY package*.json ./

RUN npm install --force

COPY public public
COPY src src

RUN npm run build

FROM node:14

COPY --from=build /app/build /app/build

WORKDIR /app/build