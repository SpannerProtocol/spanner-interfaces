export default {
  types: {
    Amount: 'i128',
    AmountOf: 'Amount',
    TokenSymbol: {
      _enum: ['BOLT',
        'WUSD',
        'BBOT',
        'NCAT',
        'PLKT'],
    },
    CurrencyId: {
      _enum: {
        Token: 'TokenSymbol',
        DexShare: '(TokenSymbol, TokenSymbol)',
      },
    },
    CurrencyIdOf: 'CurrencyId',
  }
}
