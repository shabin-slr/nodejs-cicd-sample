FROM node:8.17.0-alpine3.9
EXPOSE 8080
COPY . .
CMD node server.js