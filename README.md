# cryptobooker
A order book visualiser which fetches order book data from multiple cryptoexchanges and displays them in a combined price table witha  depth chart.

Since Bittrex and Kraken both do not allow CORS requests from a different origin. I have also created a [simple server](https://github.com/jerroldlaw/cryptobooker-server) which proxies the requests and compiles the order books into a single JSON with initial sorting.

Demo URL: https://cryptobooker.herokuapp.com  
Electron App: https://drive.google.com/open?id=19SqL4KRD-p51lW5H2zw9k3naymovNThA

![screenshot](https://i.imgur.com/mC3bJKU.png)

#### Tasks

##### Objectives

- [x] Fetch order book data of bittrex for BTC/ETH
- [x] Fetch order book data of kraken for BTC/ETH
- [x] Combine bittrex and kraken data in the same order book
- [x] Highlight whenever kraken bid > bittrex ask or kraken ask <
bittrex bid
- [x] Use javascript language
- [x] Use react.js for UI

##### Bonus Objectives

- [x] Bonus: add depth chart
- [x] Bonus: bundle as desktop electron app

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

#### To package Electron Production Build
```
~ npm run electron-package
```
