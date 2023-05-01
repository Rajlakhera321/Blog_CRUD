FROM node:12

WORKDIR /usr/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8000

CMD [ "npm", "index.js"]