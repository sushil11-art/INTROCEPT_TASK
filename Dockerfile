FROM node:15.13-alpine
WORKDIR /node_app
COPY package.json /node_app
RUN npm install
COPY . /node_app
CMD ["npm","start"]
