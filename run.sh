#!/bin/bash
git clone https://github.com/catlikeflyer-itc/reto-tc2007b-team1.git
cd reto-tc2007b-team1/client-cool
echo 'MONGODB_URI="mongodb+srv://root:team1root@cluster0.tw4r2e9.mongodb.net/?retryWrites=true&w=majority"' > .env.local
npm install
npm run build
npm run start
start https://localhost:3000
