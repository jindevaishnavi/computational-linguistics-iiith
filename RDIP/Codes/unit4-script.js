const corpus = [
`A mouse was having a very bad time. She could find no food at all. She looked here and there, but there was no food, and she grew very thin. At last the mouse found a basket, full of corn. There was a small hole in the basket, and she crept in. She could just get through the hole. Then she began to eat the corn. Being very hungry, she ate a great deal, and went on eating and eating. She had grown very fat before she felt that she had had enough. When the mouse tried to climb out of the basket, she could not. She was too fat to pass through the hole. " How shall I climb out?"said the mouse. "oh, how shall I climb out?" Just then a rat came along, and he heard the mouse. "Mouse," said the rat, "if you want to climb out of the basket, you must wait till you have grown as thin as you were when you went in.`,

`A wolf carried off a lamb. The lamb said, " I know you are going to eat me, but before you eat me I would like to hear you play the flute. I have heard that you can play the flute better than anyone else, even the shepherd himself." The wolf was so pleased at this that he took out his flute and began to play. When he had done, the lamb insisted him to play once more and the wolf played again. The shepherd and the dogs heard the sound, and they came running up and fell on the wolf and the lamb was able to get back to the flock.`,

`A man had a little dog, and he was very fond of it. He would pat its head, and take it on his knee, and talk to it. Then he would give it little bits of food from his own plate. A donkey looked in at the window and saw the man and the dog. "Why does he not make a pet of me?" said the donkey. "It is not fair. I work hard, and the dog only wags its tail, and barks, and jumps on its master's knee. It is not fair." Then the donkey said to himself, "If I do what the dog does, he may make a pet of me." So the donkey ran into the room. It brayed as loudly as it could. It wagged its tail so hard that it knocked over a jar on the table. Then it tried to jump on to its master's knee. The master thought the donkey was mad, and he shouted, "Help! Help!" Men came running in with sticks, and they beat the donkey till it ran out of the house, and they drove it back to the field. "I only did what the dog does," said the donkey," and yet they make a pet of the dog, and they beat me with sticks. It is not fair.`]
 /*GLOBAL STATE*/
let index;

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
 		$("#continue").css("display","none");
 		$('#tokenCount').val("");
		$('#typesCount').val("");
		$('#tokenCount').css("background-color","white");
		$('#typesCount').css("background-color","white");

}
const countUniqueWords = (text) => {
    const words = new Set();
    text.toLowerCase().replace(/\w+/g, word => words.add(word));
   
    return words.size;        
};
const countWords = (str) => {
         str = str.replace(/(^\s*)|(\s*$)/gi,"");
         str = str.replace(/[ ]{2,}/gi," ");
         str = str.replace(/\n /,"\n");
         return str.split(' ').length;
      };
 //console.log(`Total : ${countWords(corpus[index])} Unique : ${countUniqueWords(corpus[index])}`);

