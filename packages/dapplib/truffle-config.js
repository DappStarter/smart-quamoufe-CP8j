require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict help frame tribe strike rival mad pupil install creek equal gift'; 
let testAccounts = [
"0x43837f41f225f3b243a7502561873b8d77a3c5436b50a283bf786c9dafb129a6",
"0xaa551825fca7baf5b06ca9b0b0c052ff69099b55d65cbc41f7af927a8b86931b",
"0xc4f16ccce50a9cd45028c1f232b80dcca8dec45b062b036770eb64f8c517f211",
"0xe7eeb41cc37c2afbc3d5fb1e93186e775d200b26d72a7e6447bed65aa5bbdbc0",
"0xe01764838d9005fa422c462a20e00796b061d2ec7cf5160b11e519aacdd2625a",
"0xfc4262e1d8257740d853d386593dd0761a022e8e35c001c2d6ffcdf37d0e921f",
"0x42927305e23d66039b7c9e847e3f9a4f96f6ff33cdf73ae393f37efd6f387785",
"0x8e33fcbe4f7ff945f2c22b535ed3d7468e0c84f2d69d1c2104c37ddd287cc41f",
"0xb18ad78ce56e30ed815d6a125bec4d374f8339a0f30cedb21eb2e2517140570a",
"0xfc7891c9e6aa6bbf4ba4d18878647b5d874c351b9dd467592e5bb3c5265907a9"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

