FROM node:8-alpine

RUN mkdir -p /var/app/

# Ensure that setting this doesn't create multiple
# /var/app directories
WORKDIR /var/app/

COPY package*.json /var/app/

RUN npm install
RUN npm install -g babel-cli

CMD ["npm", "run", "build"]

COPY ./dist ./var/app/

EXPOSE 8080

# Serve
CMD ["npm", "run", "serve"]
