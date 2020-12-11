FROM node:15
RUN mkdir -p /code
WORKDIR /code

COPY package.json .
RUN npm install

ADD . .