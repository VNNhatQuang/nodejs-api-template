FROM node:20
WORKDIR /nodejs_api_template
COPY package*.json ./
RUN npm i
COPY . .
EXPOSE ${PORT}
CMD ["npm", "start"]
