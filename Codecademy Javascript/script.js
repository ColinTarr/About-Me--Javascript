let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

secretMessage.pop();


secretMessage.push('to', 'program.');


var i = secretMessage.indexOf('easily');
secretMessage.splice(i, 1, 'right');


secretMessage.shift();


secretMessage.unshift('Programming');


var i = secretMessage.indexOf('get');
secretMessage.splice(i, 5, 'know');

var newarr = '';
for (var i = 0; i < secretMessage.length; i++) {
    newarr += " " + secretMessage[i];
}

console.log(newarr)