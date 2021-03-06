'use strict';

//  ---------------------------------------------------------------------------

const coinegg = require ('./coinegg.js');

//  ---------------------------------------------------------------------------

module.exports = class coolcoin extends coinegg {
    describe () {
        return this.deepExtend (super.describe (), {
            'id': 'coolcoin',
            'name': 'CoolCoin',
            'countries': [ 'HK' ],
            'urls': {
                'logo': 'https://user-images.githubusercontent.com/1294454/36770529-be7b1a04-1c5b-11e8-9600-d11f1996b539.jpg',
                'api': {
                    'web': 'https://www.coolcoin.com/coin',
                    'rest': 'https://www.coolcoin.com/api/v1',
                },
                'www': 'https://www.coolcoin.com',
                'doc': 'https://www.coolcoin.com/help.api.html',
                'fees': 'https://www.coolcoin.com/spend.price.html',
                'referral': 'https://www.coolcoin.com/user/register?invite_code=bhaega',
            },
            'fees': {
                'trading': {
                    'maker': 0.1 / 100,
                    'taker': 0.1 / 100,
                },
                'funding': {
                    'withdraw': {
                        'BTC': 0.001,
                        'BCH': 0.002,
                        'ETH': 0.01,
                        'ETC': 0.01,
                        'LTC': 0.001,
                        'TBC': '1%',
                        'HSR': '1%',
                        'NEO': '1%',
                        'SDC': '1%',
                        'EOS': '1%',
                        'BTM': '1%',
                        'XAS': '1%',
                        'ACT': '1%',
                        'SAK': '1%',
                        'GCS': '1%',
                        'HCC': '1%',
                        'QTUM': '1%',
                        'GEC': '1%',
                        'TRX': '1%',
                        'IFC': '1%',
                        'PAY': '1%',
                        'PGC': '1%',
                        'KTC': '1%',
                        'INT': '1%',
                        'LSK': '0.5%',
                        'SKT': '1%',
                        'SSS': '1%',
                        'BT1': '1%',
                        'BT2': '1%',
                    },
                },
            },
            'options': {
                'quoteIds': ['btc', 'usdt'],
            },
        });
    }
};
