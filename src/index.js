function fullJustify(words, maxWidth) {
    let result = [];
    let currentLine = [];
    let currentWidth = 0;

    for (let word of words) {
        if (currentWidth + word.length + currentLine.length > maxWidth) {
            result.push(justifyLine(currentLine, maxWidth));
            currentLine = [];
            currentWidth = 0;
        }
        currentLine.push(word);
        currentWidth += word.length;
    }

    let lastLine = currentLine.join(' ');
    if (maxWidth > lastLine.length) {
        let spaces = maxWidth - lastLine.length;
        lastLine += ' '.repeat(spaces);
    }
    result.push(lastLine);

    return result;
}

function justifyLine(line, maxWidth) {
    let totalChars = line.reduce((acc, word) => acc + word.length, 0);
    let numSpaces = maxWidth - totalChars;
    let numWords = line.length;
    let spaceBetween = Math.floor(numSpaces / (numWords - 1));
    let extraSpaces = numSpaces % (numWords - 1);

    let justifiedLine = '';
    for (let i = 0; i < numWords; i++) {
        justifiedLine += line[i];
        if (i < numWords - 1) {
            justifiedLine += ' '.repeat(spaceBetween);
            if (i < extraSpaces) {
                justifiedLine += ' ';
            }
        }
    }
    return justifiedLine;
}

let words = ["This", "is", "an", "example", "of", "text", "justification."];
let maxWidth = 16;
console.log(fullJustify(words, maxWidth));
