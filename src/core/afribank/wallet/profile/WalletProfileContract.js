const WalletProfileContract = Object.freeze({

  wallets:[
    "AFRICOIN",
    "NATIVE",
    "CRYPTO",
    "ESCROW"
  ],

  currencies:{
    AFRICOIN:"AFC",
    NATIVE:[
      "NGN",
      "USD"
    ],
    CRYPTO:[
      "USDT",
      "BTC",
      "ETH"
    ]
  },

  fields:{
    userId:"string",
    balances:"object",
    status:"ACTIVE",
    createdAt:"timestamp"
  }

});

export default WalletProfileContract;
