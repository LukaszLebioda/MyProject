FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# Create public directory and move HTML file there
RUN mkdir -p public
RUN mv index.html public/

EXPOSE 3000

CMD ["npm", "start"]