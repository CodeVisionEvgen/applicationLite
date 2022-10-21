FROM node:16.0
WORKDIR ${HOME}/app/
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 4000

CMD ["npm", "start"]