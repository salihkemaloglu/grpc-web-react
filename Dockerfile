FROM node:10.15.1

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm i -g yarn

RUN yarn install 

# Bundle app source
COPY . .

EXPOSE 3000

CMD ["yarn", "start"]