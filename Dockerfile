FROM node:10.15.1

# set working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /usr/src/app/package.json

RUN npm i -g yarn --silent

RUN yarn install  --silent

# Bundle app source
# COPY . .

EXPOSE 3000

CMD ["yarn", "start"]

