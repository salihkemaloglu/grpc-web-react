FROM node:10.15.1

RUN mkdir /usr/src/app
WORKDIR /usr/src/app

ENV PATH /usr/src/app/node_modules/.bin:$PATH
ADD package.json /package.json

COPY package.json /usr/src/app/package.json

RUN npm install --save --silent
RUN npm install react-scripts@latest -g --silent
RUN npm audit fix

EXPOSE 3000

CMD ["npm", "start"]