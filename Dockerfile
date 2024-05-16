FROM node:20.13-alpine

WORKDIR /app

COPY ./backend/package*.json ./
COPY ./backend/server.js ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "server.js"]
