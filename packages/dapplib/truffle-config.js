require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good slice obscure suspect normal note miss essay inflict entry broken tenant'; 
let testAccounts = [
"0xc3b58f244013dcca23f6261817b58a4620bb61dacb7a626b576b5604bf521dce",
"0xa3b425e5ca51e1251136e9e689b5e93a3cbf9d7ebe4ba1f78475cb91cbfc58d0",
"0xcf09f3bbc613ff7b859c452a9075747102b3cd2162cf887013c4a0f054fe0cd1",
"0x2c181df30dd09e24a274360241471b5858f022165fb8a288235fd85392ae9fa2",
"0xdbb2371b26544e929e33bfae08737bd08905d21b619039f8a6e0e705a3904641",
"0x82116760053a1e056d3b2da1119269cced43e01d61343dd0fdbeb8f567ca8d13",
"0x384b593f8922127d36f4cde6dcff48d0f0e92ab7a430d0771a2a6f955d7b6fcd",
"0x332420205046789e90ebec55aea1734087b9ce8fa0adadf7f55182574e9cf526",
"0x9f212da09f8150412da9e036529dfc27fa1eeea2a32d0582135686093bbb7a31",
"0xfb2c6371aa3eadeaba72cf8a402530da6ba32b457cb7d66bf028477049ca7f02"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


