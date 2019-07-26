FROM node:lts

COPY server.js .

EXPOSE 8080

CMD node server.js