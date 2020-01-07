FROM node:8.17.0-alpine3.9
EXPOSE 3000
COPY . .
RUN npm install --production
RUN node_modules/.bin/bower install --config.interactive=false --allow-root
CMD node server.js