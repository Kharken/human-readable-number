module.exports = function toReadable(number) {
    const KEY_NUMBERS = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
    }
    const KEY_TENS = {
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety',

    }

    const numString = number.toString().split('');

    switch (true) {
        case (number < 20):
            return `${KEY_NUMBERS[number]}`;
            break;
        case (number >= 20 && number < 100 && number % 10 === 0):
            return `${KEY_TENS[numString[0]]}`
            break;
        case (number >= 20 && number < 100 && number % 10 !== 0):
            return `${KEY_TENS[numString[0]]} ${KEY_NUMBERS[numString[1]]}`
            break;
        case (number >= 100 && number < 1000 && number % 100 === 0):
            return `${KEY_NUMBERS[numString[0]]} hundred`
            break;
        case (number >= 100 && number < 1000 && number % 100 !== 0 && number % 10 === 0):
            if (numString[1] === '1') {
                return `${KEY_NUMBERS[numString[0]]} hundred ${KEY_NUMBERS[[10]]}`
            }
            return `${KEY_NUMBERS[numString[0]]} hundred ${KEY_TENS[numString[1]]}`
            break;
        case (number >= 100 && number < 1000 && number % 10 !== 0):
            if (numString[1] === '0') {
                return `${KEY_NUMBERS[numString[0]]} hundred ${KEY_NUMBERS[numString[2]]}`
            } else if (numString[1] === '1') {
                return `${KEY_NUMBERS[numString[0]]} hundred ${KEY_NUMBERS[numString.slice(1).join('')]}`
            }
            return `${KEY_NUMBERS[numString[0]]} hundred ${KEY_TENS[numString[1]]} ${KEY_NUMBERS[numString[2]]}`
            break;
        case (number >= 100 && number < 1000 && number % 10 !== 0):
            return `${KEY_NUMBERS[numString[0]]} hundred ${KEY_TENS[numString[1]]} ${KEY_NUMBERS[numString[2]]}`
            break;
        default:
            return 'error';
    }

}
