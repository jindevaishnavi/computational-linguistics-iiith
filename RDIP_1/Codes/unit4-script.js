
const corpus = [
`A mouse was having a very bad time. She could find no food at all. She looked here and there, but there was no food, and she grew very thin. At last the mouse found a basket, full of corn. There was a small hole in the basket, and she crept in. She could just get through the hole. Then she began to eat the corn. Being very hungry, she ate a great deal, and went on eating and eating. She had grown very fat before she felt that she had had enough. When the mouse tried to climb out of the basket, she could not. She was too fat to pass through the hole. "How shall I climb out?" said the mouse. "oh, how shall I climb out?" Just then a rat came along, and he heard the mouse. "Mouse," said the rat, "if you want to climb out of the basket, you must wait till you have grown as thin as you were when you went in.`,

`A wolf carried off a lamb. The lamb said, "I know you are going to eat me, but before you eat me I would like to hear you play the flute. I have heard that you can play the flute better than anyone else, even the shepherd himself." The wolf was so pleased at this that he took out his flute and began to play. When he had done, the lamb insisted him to play once more and the wolf played again. The shepherd and the dogs heard the sound, and they came running up and fell on the wolf and the lamb was able to get back to the flock.`
,

`A man had a little dog, and he was very fond of it. He would pat its head, and take it on his knee, and talk to it. Then he would give it little bits of food from his own plate. A donkey looked in at the window and saw the man and the dog. "Why does he not make a pet of me?" said the donkey. "It is not fair. I work hard, and the dog only wags its tail, and barks, and jumps on its master's knee. It is not fair." Then the donkey said to himself, "If I do what the dog does, he may make a pet of me." So the donkey ran into the room. It brayed as loudly as it could. It wagged its tail so hard that it knocked over a jar on the table. Then it tried to jump on to its master's knee. The master thought the donkey was mad, and he shouted, "Help! Help!" Men came running in with sticks, and they beat the donkey till it ran out of the house, and they drove it back to the field. "I only did what the dog does," said the donkey," and yet they make a pet of the dog, and they beat me with sticks. It is not fair.`]
 /*GLOBAL STATE*/
let index = -1;

/*SNOWBALL STEMMER*/
var stemmer = new Snowball('English');
const selectCorpus = value =>
 {
 	index = value -1;

 	intialize();
 	if(index== -1)
 	{
 		alert("Select a corpus ");

 	}
 	else
 	 {
 	 	$("#corpus").empty();
 	 	$("#corpus").show();
 	 	$('#table-1').css("display","inline");
 	 	$("#corpus").html(corpus[index]);
 	 	$('#input-msg').css("display","inline");
 	 	$('#submit-ans').css("display","inline");
 	 }
 }

 /*-----------------------------ONLOAD ----------------------------------------------------------------
 ------------------------------------------------------------------------------------------------------*/

 $(document).ready(function(){
 $('#submit-ans').click(function()
 	{
	 tokens = $('#tokenCount').val();
	 type = $('#typesCount').val();
	 if(tokens == "" || type == "")
	 	alert("Enter the values ");
	 else
	 {
	 	str = corpus[index]
	 	correct_type = countUniqueWords(str);
	 	correct_token = countWords(str);
	 	$("#answer").css("display","inline");
	 	if(correct_token == tokens && correct_type == type)
	 	{
	 		$("#answer").css("color","green");
	 		$('#tokenCount').css("background-color","green");
			$('#typesCount').css("background-color","green");
	 		$("#answer").text("Right Answer !");
	 		$("#continue").css("display","inline");


	 	}
	 	else
	 	{
	 		$("#answer").css("color","red");
	 		$('#tokenCount').css("background-color","red");
			$('#typesCount').css("background-color","red");
	 		$("#answer").text("Wrong Answer !");
	 	}
	 }
	 });


$('#continue').click(function() 
{
	$("#submit-ans").css("display","none");
	$("#answer").css("display","none");
	$("#continue").css("display","none");
	$("#input-msg2").css("display","inline");
	$('#table-2').css("display","inline");
	$("#submit-ans2").css("display","inline");

});

$('#submit-ans2').click(function() 
{
	console.log("reached");
	str = corpus[index];
	str = str.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ");
	str = str.split(' ');
	for(i = 0;i<str.length;i++)
	{
		stemmer.setCurrent(str[i].toLowerCase()); 
		stemmer.stem();
		str[i] = stemmer.getCurrent();
		if(find(str[i]))
			str[i] = find(str[i]);
	}
	str = str.join(' ');
	count_unique = countUniqueWords(str);
	user_words = $('#newtypesCount').val();
		$("#answer-2").css("display","inline")
	if(count_unique == user_words)
	{
		$("#answer-2").css("color","green");
		$('#newtypesCount').css("background-color","green");
	 	$("#answer-2").text("Right Answer !");
	}
	else
	{
		$("#answer-2").css("color","red");
		$('#newtypesCount').css("background-color","red");
	 	$("#answer-2").text("Wrong Answer !");
	 	
	}
	
});


});
/*-----------------------------INITIALIZE---------------------------------------------------------------
--------------------------------------------------------------------------------------------------------*/
function intialize()
{
	 	$('#corpus').hide();
 		$('#table-1').css("display","none");
 		$('#input-msg').css("display","none");
 		$('#submit-ans').css("display","none");
 		$("#answer").css("display","none");
 		$("#answer-2").css("display","none");
 		$("#continue").css("display","none");
 		$('#tokenCount').val("");
		$('#typesCount').val("");
		$('#newtypesCount').val("");
		$('#tokenCount').css("background-color","white");
		$('#typesCount').css("background-color","white");
		$('#newtypesCount').css("background-color","white");
		$("#continue").css("display","none");
		$("#input-msg2").css("display","none");
		$('#table-2').css("display","none");
		$("#submit-ans2").css("display","none");

}

/*-----------------------------COUNT UNIQUE WORDS---------------------------------------------------
----------------------------------------------------------------------------------------------------*/

const countUniqueWords = (text) => {
    words = new Set();
    text.toLowerCase().replace(/\w+/g, word => words.add(word));
    size = words.size;
    words = [...words].join(' ');
    return size;      

};

/*-----------------------------COUNT TOTAL WORDS---------------------------------------------------
----------------------------------------------------------------------------------------------------*/

const countWords = (str) => {
         str = str.replace(/(^\s*)|(\s*$)/gi,"");
         str = str.replace(/[ ]{2,}/gi," ");
         str = str.replace(/\n /,"\n");
         str = str.replace(/[.,\/#!$%\^&"\*;:{}=\-_`~()]/g,"");
		 str = str.replace(/\s{2,}/g," ");
         return str.split(' ').length;
      };
/*----------------------------EXCEPTIONAL WORDS---------------------------------------------------
------------------------------------------------------------------------------------------------
 */
 var irregular_verbs = [
	['am', 'was', 'been'],
	['are', 'were', 'been'],
	['awake', 'awoke', 'awoken'],
	['bear', 'bore', 'born'],
	['beat', 'beat', 'beat'],
	['become', 'became', 'become'],
	['begin', 'began', 'begun'],
	['bend', 'bent', 'bent'],
	['beset', 'beset', 'beset'],
	['bet', 'bet', 'bet'],
	['bid', 'bid', 'bid'],
	['bind', 'bound', 'bound'],
	['bite', 'bit', 'bitten'],
	['bleed', 'bled', 'bled'],
	['blow', 'blew', 'blown'],
	['break', 'broke', 'broken'],
	['breed', 'bred', 'bred'],
	['bring', 'brought', 'brought'],
	['broadcast', 'broadcast', 'broadcast'],
	['build', 'built', 'built'],
	['burn', 'burned', 'burned'],
	['burst', 'burst', 'burst'],
	['buy', 'bought', 'bought'],
	['cast', 'cast', 'cast'],
	['catch', 'caught', 'caught'],
	['choose', 'chose', 'chosen'],
	['cling', 'clung', 'clung'],
	['come', 'came', 'come'],
	['cost', 'cost', 'cost'],
	['creep', 'crept', 'crept'],
	['cut', 'cut', 'cut'],
	['deal', 'dealt', 'dealt'],
	['dig', 'dug', 'dug'],
	['dive', 'dove', 'dived'],
	['do', 'did', 'done'],
	['draw', 'drew', 'drawn'],
	['dream', 'dreamed', 'dreamed'],
	['drive', 'drove', 'driven'],
	['drink', 'drank', 'drunk'],
	['eat', 'ate', 'eaten'],
	['fall', 'fell', 'fallen'],
	['feed', 'fed', 'fed'],
	['feel', 'felt', 'felt'],
	['fight', 'fought', 'fought'],
	['find', 'found', 'found'],
	['fit', 'fit', 'fit'],
	['flee', 'fled', 'fled'],
	['fling', 'flung', 'flung'],
	['fly', 'flew', 'flown'],
	['forbid', 'forbade', 'forbidden'],
	['forget', 'forgot', 'forgotten'],
	['forego', 'forewent', 'foregone'],
	['forgo', 'forwent', 'forgone'],
	['forgive', 'forgave', 'forgiven'],
	['forsake', 'forsook', 'forsaken'],
	['freeze', 'froze', 'frozen'],
	['get', 'got', 'gotten'],
	['give', 'gave', 'given'],
	['go', 'went', 'gone'],
	['grind', 'ground', 'ground'],
	['grow', 'grew', 'grown'],
	['hang', 'hung', 'hung'],
	['have', 'had', 'had'],
	['hear', 'heard', 'heard'],
	['hide', 'hid', 'hidden'],
	['hit', 'hit', 'hit'],
	['hold', 'held', 'held'],
	['hurt', 'hurt', 'hurt'],
	['is', 'was', 'been'],
	['keep', 'kept', 'kept'],
	['kneel', 'knelt', 'knelt'],
	['knit', 'knit', 'knit'],
	['know', 'knew', 'known'],
	['lay', 'laid', 'laid'],
	['lead', 'led', 'led'],
	['leap', 'leaped', 'leaped'],
	['learn', 'learned', 'learned'],
	['leave', 'left', 'left'],
	['lend', 'lent', 'lent'],
	['let', 'let', 'let'],
	['lie', 'lay', 'lain'],
	['light', 'lit', 'lighted'],
	['lose', 'lost', 'lost'],
	['make', 'made', 'made'],
	['mean', 'meant', 'meant'],
	['meet', 'met', 'met'],
	['misspell', 'misspelled', 'misspelled'],
	['mistake', 'mistook', 'mistaken'],
	['mow', 'mowed', 'mowed'],
	['overcome', 'overcame', 'overcome'],
	['overdo', 'overdid', 'overdone'],
	['overtake', 'overtook', 'overtaken'],
	['overthrow', 'overthrew', 'overthrown'],
	['pay', 'paid', 'paid'],
	['plead', 'pled', 'pled'],
	['prove', 'proved', 'proved'],
	['put', 'put', 'put'],
	['quit', 'quit', 'quit'],
	['read', 'read', 'read'],
	['reset', 'reset', 'reset'],
	['rid', 'rid', 'rid'],
	['ride', 'rode', 'ridden'],
	['ring', 'rang', 'rung'],
	['rise', 'rose', 'risen'],
	['run', 'ran', 'run'],
	['saw', 'sawed', 'sawed'],
	['say', 'said', 'said'],
	['see', 'saw', 'seen'],
	['seek', 'sought', 'sought'],
	['sell', 'sold', 'sold'],
	['send', 'sent', 'sent'],
	['set', 'set', 'set'],
	['sew', 'sewed', 'sewed'],
	['shake', 'shook', 'shaken'],
	['shave', 'shaved', 'shaved'],
	['shear', 'shore', 'shorn'],
	['shed', 'shed', 'shed'],
	['shine', 'shone', 'shone'],
	['shoe', 'shoed', 'shoed'],
	['shoot', 'shot', 'shot'],
	['show', 'showed', 'showed'],
	['shrink', 'shrank', 'shrunk'],
	['shut', 'shut', 'shut'],
	['sing', 'sang', 'sung'],
	['sink', 'sank', 'sunk'],
	['sit', 'sat', 'sat'],
	['sleep', 'slept', 'slept'],
	['slay', 'slew', 'slain'],
	['slide', 'slid', 'slid'],
	['sling', 'slung', 'slung'],
	['slit', 'slit', 'slit'],
	['smite', 'smote', 'smitten'],
	['sow', 'sowed', 'sowed'],
	['speak', 'spoke', 'spoken'],
	['speed', 'sped', 'sped'],
	['spend', 'spent', 'spent'],
	['spill', 'spilled', 'spilled'],
	['spin', 'spun', 'spun'],
	['spit', 'spit', 'spit'],
	['split', 'split', 'split'],
	['spread', 'spread', 'spread'],
	['spring', 'sprang', 'sprung'],
	['stand', 'stood', 'stood'],
	['steal', 'stole', 'stolen'],
	['stick', 'stuck', 'stuck'],
	['sting', 'stung', 'stung'],
	['stink', 'stank', 'stunk'],
	['stride', 'strod', 'stridden'],
	['strike', 'struck', 'struck'],
	['string', 'strung', 'strung'],
	['strive', 'strove', 'striven'],
	['swear', 'swore', 'sworn'],
	['sweep', 'swept', 'swept'],
	['swell', 'swelled', 'swelled '],
	['swim', 'swam', 'swum'],
	['swing', 'swung', 'swung'],
	['take', 'took', 'taken'],
	['teach', 'taught', 'taught'],
	['tear', 'tore', 'torn'],
	['tell', 'told', 'told'],
	['think', 'thought', 'thought'],
	['thrive', 'thrived', 'thrived'],
	['throw', 'threw', 'thrown'],
	['thrust', 'thrust', 'thrust'],
	['tread', 'trod', 'trodden'],
	['understand', 'understood', 'understood'],
	['uphold', 'upheld', 'upheld'],
	['upset', 'upset', 'upset'],
	['wake', 'woke', 'woken'],
	['wear', 'wore', 'worn'],
	['weave', 'wove', 'woven'],
	['wed', 'wed', 'wed'],
	['weep', 'wept', 'wept'],
	['wind', 'wound', 'wound'],
	['win', 'won', 'won'],
	['withhold', 'withheld', 'withheld'],
	['withstand', 'withstood', 'withstood'],
	['wring', 'wrung', 'wrung'],
	['write', 'wrote', 'written']
];
var find = function(verb) {
	for (var i in irregular_verbs) {
		if (irregular_verbs[i].indexOf(verb) !== -1) {
			return irregular_verbs[i][0];
		}
	}

	return false;
};