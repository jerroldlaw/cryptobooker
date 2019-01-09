# cryptobooker
A order book visualiser which fetches order book data from multiple cryptoexchanges and displays them in a combined price table witha  depth chart.

Since Bittrex and Krakken both do not allow CORS requests from a different origin. I have also created a [simple server](https://github.com/jerroldlaw/crpytobooker-server) which proxies the requests and compiles the order books into a single JSON with initial sorting.

Demo URL: (not yet)

#### Installation
```
~ git clone git@github.com:jerroldlaw/cryptobooker.git
~ npm i
```

#### To run on React
```
npm start
```

#### To run on Electron
```
npm run electron
```
