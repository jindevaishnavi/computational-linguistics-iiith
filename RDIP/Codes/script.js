
/*---------------------ENGLISH STRING CORPUS--------------------------------------
----------------------------------------------------------------------------------*/
english = [["John ate an apple before afternoon","before afternoon John ate an apple","John before afternoon ate an apple"],
["some students like to study in the night","at night some students like to study"],
["John and Mary went to church","Mary and John went to church"],
["John went to church after eating","after eating John went to church","John after eating went to church"],
["did he go to market","he did go to market"],
["the woman who called my sister sells cosmetics","the woman who sells cosmetics called my sister",
 "my sister who sells cosmetics called the woman","my sister who called the woman sells cosmetics"],
["John goes to the library and studies","John studies and goes to the library"],
["John ate an apple so did she","she ate an apple so did John"],
["the teacher returned the book after she noticed the error","the teacher noticed the error after she returned the book",
"after the teacher returned the book she noticed the error","after the teacher noticed the error she returned the book",
"she returned the book after the teacher noticed the error","she noticed the error after the teacher returned the book",
"after she returned the book the teacher noticed the error","after she noticed the error the teacher returned the book"],
["I told her that I bought a book yesterday","I told her yesterday that I bought a book",
"yesterday I told her that I bought a book","I bought a book that I told her yesterday",
"I bought a book yesterday that I told her","yesterday I bought a book that I told her"]]

/*---------------------HINDI STRING CORPUS----------------------------------------
----------------------------------------------------------------------------------*/

hindi = [["राम और श्याम बाजार गयें","राम और श्याम गयें बाजार","बाजार गयें राम और श्याम","गयें बाजार राम और श्याम"],
["राम सोया और श्याम भी","श्याम सोया और राम भी","सोया श्याम और राम भी","सोया राम और श्याम भी"],
["मैंने उसे बताया कि राम सो रहा है","मैंने उसे बताया कि सो रहा है राम","उसे मैंने बताया कि राम सो रहा है","उसे मैंने बताया कि सो रहा है राम",
"मैंने बताया उसे कि राम सो रहा है","मैंने बताया उसे कि सो रहा है राम","उसे बताया मैंने कि राम सो रहा है","उसे बताया मैंने कि सो रहा है राम",
"बताया मैंने उसे कि राम सो रहा है","बताया मैंने उसे कि सो रहा है राम","बताया उसे मैंने कि राम सो रहा है","बताया उसे मैंने कि सो रहा है राम"],
["राम खाकर सोया","खाकर राम सोया","राम सोया खाकर","खाकर सोया राम","सोया राम खाकर","सोया खाकर राम"],
["बिल्लियों को मारकर कुत्ता सो गया",	"मारकर बिल्लियों को कुत्ता सो गया", "बिल्लियों को मारकर सो गया कुत्ता",
"मारकर बिल्लियों को सो गया कुत्ता","कुत्ता सो गया बिल्लियों को मारकर","कुत्ता सो गया मारकर बिल्लियों को",
"सो गया कुत्ता बिल्लियों को मारकर","सो गया कुत्ता मारकर बिल्लियों क"],
["एक लाल किताब वहाँ है","एक लाल किताब है वहाँ","वहाँ है एक लाल किताब","है वहाँ एक लाल किताब"],
["एक बड़ी सी किताब वहाँ है","एक बड़ी सी किताब है वहाँ","बड़ी सी एक किताब वहाँ है","बड़ी सी एक किताब है वहाँ",
"वहाँ है एक बड़ी सी किताब","वहाँ है बड़ी सी एक किताब","है वहाँ एक बड़ी सी किताब","है वहाँ बड़ी सी एक किताब"]]

//global state
/*---------------------select language -------------------------------------------
----------------------------------------------------------------------------------*/

function getOption(lang)
{
	if(lang=="null")
	{
		$('#sub-heading-1').html("");
		$('#sub-heading-2').html("");
		$('#button-container').html("");
		$('#formed-sentence').html("");
		$('#sub-heading-3').css("display","none");
  		$('#re-form').css("display","none");

		alert("Select a language");

	}
	else
	{
		$('#sub-heading-1').html("<div><br/><br/><b>Form a  sentence (Declarative or Interrogative or any other type) from the given words </b></div>");
		$('#sub-heading-2').html("<div><b><i>(select the buttons in proper order) </i></b><br/><br/></div>"); 
		$('#button-container').html("");
		let language;
		if(lang == "english")
			language = english;
		else
			language = hindi;
		let length = language.length;
		let index = Math.floor(Math.random() * length);
		jumbled_string = language[index][0].shuffle();
		createButtons(jumbled_string);
	}
}

/*----------------shuffle() : given a string input shuffles the words ------------
----------------------------------------------------------------------------------*/

String.prototype.shuffle = function () {

    var a = this.split(" ");
    var n = a.length;
    for(var i = n - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }
    return a.join(" ");
};

/*---------------create clickable buttons ----------------------------------------
----------------------------------------------------------------------------------*/

var inputString;
var outputString = "";
function createButtons(input) {  
   inputString = input;
   var button_container = document.getElementById("button-container"); 
   var input_arr = input.split(" ");
   var length =  input_arr.length;
   for(i = 0;i< length;i++)
   {
   	var button = document.createElement('BUTTON');  
   	var text = document.createTextNode(input_arr[i]); 
   	button.appendChild(text); 
   	button.id = "button-"+(i+1);
   	button.value = input_arr[i];
   	button_container.appendChild(button);
   	button_container.innerHTML += '&nbsp;&nbsp;&nbsp;&nbsp;';
	}
	button_container.addEventListener("click", buttonClick);
}
/*---------------Event handler for input buttons ----------------------------------------
----------------------------------------------------------------------------------*/
function buttonClick(e){
  // check if the clicked element is a button
  $('#sub-heading-3').css("display","inline");
  $('#re-form').css("display","inline");
  if (e.target.tagName.toLowerCase() == "button") {

  	var target = e.target;
    var btn_id = target.id;
  	var text_container = document.getElementById("formed-sentence");
  	text_container.appendChild(target.lastChild);
  	//var text_id = target.lastChild.id;
  	outputString +=(target.value) + " ";
  	text_container.innerHTML += '&nbsp;&nbsp;&nbsp;&nbsp;';
    var elem = document.getElementById(btn_id);
    elem.parentNode.removeChild(elem);
  }
if ( $('#button-container').children().length == 0 ) {
	$('#check-correct').css("display","inline");
	outputString = outputString.trim();
}
}
/*---------------Event handler for reform button ------------------------------------
----------------------------------------------------------------------------------*/

function reformButtonClick()
{ 	//remove the current buttons and refresh
	$('#button-container').html("");
	createButtons(inputString);
	$('#formed-sentence').html("");
	$('#sub-heading-3').css("display","none");
  	$('#re-form').css("display","none");
  	$('#check-correct').css("display","none");
  	outputString = "";
}