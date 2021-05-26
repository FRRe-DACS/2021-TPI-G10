function ean13_checksum(message) {
    var checksum = 0;
    message = message.split('').reverse();
    for(var pos in message){
        checksum += message[pos] * (3 - 2 * (pos % 2));
    }
    return ((10 - (checksum % 10 )) % 10);
}
// Valor de prueba (sin dígito de control)
var ean = '779456789131';
console.log(ean13_checksum(ean));