FROM node:8

WORKDIR /usr/src/app
COPY package*.json ./

RUN npm ci --only=production
COPY . .

ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=4000

EXPOSE 4000
CMD [ "node", "app.js" ]
