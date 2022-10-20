#!/bin/bash
git clone https://github.com/catlikeflyer-itc/reto-tc2007b-team1.git
cd client-cool
echo 'MONGODB_URI="mongodb+srv://root:team1root@cluster0.tw4r2e9.mongodb.net/?retryWrites=true&w=majority"' > .env.local
npm install
npm run build
npm run start
start https://https://localhost:3000
