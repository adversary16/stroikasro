FROM node:14.14.0-alpine

ARG BASEURL
RUN mkdir /app
WORKDIR /app

COPY package.json /app
COPY package-lock.json /app
COPY next.config.js /app

RUN npm install
RUN npm install -g next-translate
RUN mkdir -p /data/storage/uploads
RUN mkdir -p /data/storage/media

COPY . /app

RUN npm run build
EXPOSE 3000

ENTRYPOINT ["npm", "run", "start"]
