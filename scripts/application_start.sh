#!/bin/bash

#set -e 
cd /home/ubuntu/genesis-admin-frontend

npm install --silent   # or yarn install --silent

#npm test   # or yarn test

npm run build   # or yarn build

#npm start 
pm2 restart gennesis >> /home/ubuntu/genesis-admin-frontend/pm2.log-client
