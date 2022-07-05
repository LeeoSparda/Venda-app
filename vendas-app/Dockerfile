FROM node:alpine

WORKDIR /

COPY package*.json ./
RUN yarn install && yarn dev

COPY  . .

EXPOSE 3000

CMD ["yarn", "start"]