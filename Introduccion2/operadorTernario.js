const boleto = 'vip';
/* let codigoDeAcesso;

if(boleto === 'vip'){
    codigoDeAcesso = 'VIP-123-456';
} else {
    codigoDeAcesso = 'REGULAR-123-456';
}

console.log(codigoDeAcesso); */

const codigoDeAcesso = boleto === 'vip' ? 'VIP-123-456' : 'REGULAR-123-456';

boleto === 'vip' ? console.log('Tu boleto es tipo VIP') : console.log('Tu boleto es tipo regular');

console.log(codigoDeAcesso);