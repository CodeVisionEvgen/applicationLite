FROM node:16.0
ENV HOME=/usr/src/app
WORKDIR ${HOME}/front/
COPY package*.json ./
COPY . ./
RUN npm install --silent --progress=false

CMD ["npm", "run" ,"start/dev"]