
const echo = string => {
    return string;
};

const shout = string => {
    return string.toUpperCase();
};

const repeat = (string, num) => {
    addSpace = string.concat(' ')
    newString = addSpace.repeat(num);
    newString = newString.substring(0, newString.length - 1);
    return newString;
};

const startOfWord = (string, num) => {
    newString = string.slice(0, num);
    return newString;
}

const firstWord = (string, num) => {
    newString = string.split(' ');
    return newString[0]
}

module.exports = {echo: echo, shout: shout, repeat: repeat, startOfWord: startOfWord, firstWord: firstWord};