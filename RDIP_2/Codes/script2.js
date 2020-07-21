

function checkPOSAnswer(sentence)
{

var pos = require('pos');
var words = new pos.Lexer().lex(sentence);
var tagger = new pos.Tagger();
var taggedWords = tagger.tag(words);
tags = "";
for (i in taggedWords) {
    var taggedWord = taggedWords[i];
    var word = taggedWord[0];
    var tag = taggedWord[1];
    tags += tag + " ";

}
return tags;
}
window.checkPOSAnswer  = checkPOSAnswer;