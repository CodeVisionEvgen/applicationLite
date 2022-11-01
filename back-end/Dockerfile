FROM node:16.0
ENV HOME=/usr/src/app
WORKDIR ${HOME}/back/
COPY package*.json ./
COPY . ./
RUN npm install

CMD ["npm", "run" ,"start/dev"]
