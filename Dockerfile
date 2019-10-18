FROM node:8-alpine

RUN mkdir -p /var/app/

WORKDIR /var/app/

COPY package*.json /var/app/

RUN npm install

# Compile to es5 target
CMD ["npm", "run", "build"]

COPY ./dist ./var/app/

EXPOSE 8080

# Serve
CMD ["npm", "run", "serve"]
