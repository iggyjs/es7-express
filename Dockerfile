FROM node:8-alpine

RUN mkdir -p /var/app/

WORKDIR /var/app/

COPY package.json .

RUN npm install
RUN npm install -g babel-cli

COPY ./dist .

RUN ls

EXPOSE 8080

CMD ["npm", "run", "serve:container"]
