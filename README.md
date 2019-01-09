# cryptobooker
A order book visualiser which fetches order book data from multiple cryptoexchanges and displays them in a combined price table witha  depth chart.

Since Bittrex and Krakken both do not allow CORS requests from a different origin. I have also created a [simple server](https://github.com/jerroldlaw/cryptobooker-server) which proxies the requests and compiles the order books into a single JSON with initial sorting.
```
Demo URL: https://cryptobooker.herokuapp.com
Electron App: https://drive.google.com/open?id=1PC90EPYE-rijL54Mdqo1VCUNbe3jXstT
```
![screenshot](https://i.imgur.com/mC3bJKU.png)

#### Installation
```
~ git clone git@github.com:jerroldlaw/cryptobooker.git
~ npm i
```

#### To run on React
```
~ npm start
```

#### To run on Electron on Development
```
~ npm start
-- Wait for React app to load --
~ npm run electron-dev
```

#### To run on Electron on Production Build
```
~ npm run build
-- Wait for React app to build --
~ npm run electron
```
