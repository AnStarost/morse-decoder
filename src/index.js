const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // var decoded = expr.split('   ').map((elem) => elem.split(' ')).map(letter => MORSE_TABLE[letter]);
    // return typeof(expr);

    let size = 10; //размер подмассива
    let letters = []; //массив в который будет выведен результат.
    for (let i = 0; i < expr.length/size; i++){
        letters[i] = expr.slice((i*size), (i*size) + size);
    }

    const newLetter = letters.map((letter) => {
        let x = false;
        if (letter === '**********') {
            return ' ';
        }
        const noZero = letter.split('').filter((digit) => {
            if (digit === '1') {
                x = true            
            }
            return x 
        }).join('')

        let size = 2; //размер подмассива
        let noZero2sign = []; //массив в который будет выведен результат.
        for (let i = 0; i < noZero.length/size; i++) {
            noZero2sign[i] = noZero.slice((i*size), (i*size) + size);
        }
    
        const coverted = noZero2sign.map((e) => {
            if (e === '10') {
                return '.'
            } else 
                return '-'
        }).join('');
        return MORSE_TABLE[coverted];
    });

    return newLetter.join('');

}    
    

module.exports = {
    decode
}