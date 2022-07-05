FROM node:alpine

WORKDIR /

COPY pom*.xml ./
RUN yarn install

COPY  . .

EXPOSE 3000

CMD ["yarn", "start"]