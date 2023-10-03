FROM node:20-alpine3.18

WORKDIR /app

# Rather than copying the entire working directory, we are only copying the package.json file. This allows us to take advantage of cached Docker layers.
COPY package*.json ./

RUN npm install

# Building code for production
RUN npm ci --omit=dev

# Bundle app source
COPY . .

EXPOSE 8080

CMD [ "node", "index.js" ]