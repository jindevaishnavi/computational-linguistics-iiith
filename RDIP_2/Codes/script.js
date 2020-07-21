
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


/*ENGLISH CORPUS*/
window.english = ["The child liked the chocolate","She was stopped by the bravest knight",
"Mary baked a cake for his birthday","She decorated the cake carefully","Mary wore a dress with polka dots"]

/*HINDI CORPUS*/
window.hindi = ["राम ने सीता के लिए फल तोड़ा।","छोटे बच्चे पाठशाला जल्दी आयेंगे।"
,"मेहनत का फल मीठा होता है।","वाह! वह खूबसूरत है।","पेड़ से पत्ते गिर गए।"]

window.hindiAnswers = ["Noun Postposition Noun Postposition Postposition Noun Verb","Adjective Noun Noun Adverb Verb",
"Noun Postposition Noun Adjective Verb Verb","Interjection Pronoun Adjective Verb",
"Noun Postposition Noun Verb Verb"]

/*----------------------------SELECT LANGUAGE ------------------------------------------------
----------------------------------------------------------------------------------------------*/
let language;
window.language = language;

function getLanguage(lang)
{
	intialize();
	if(lang == "null")
	{
		alert("Select a language");

	}
	else
	{

		if(lang == "english")
			language = english;
		else
			language = hindi;
		$("#langDropdown").css("display","inline");
		dropdownInitialize();

	}
}
window.getLanguage = getLanguage;
function intialize()
{
	$("#langDropdown").css("display","none");
	$("#msg").css("display","none");
	$("#table").css("display","none");
	$("#button").css("display","none");
	$('#get_answer').css("display","none");
}
/*Intialize sentence dropdown*/
window.intialize = intialize;
function dropdownInitialize()
{
	len = language.length;
	for(i = 0;i<len;i++)
	{
		option = "#op" + (i+1)
		$(option).html(language[i]);
	}
	$("#msg").css("display","none");
	$("#table").css("display","none");
	$("#button").css("display","none");
	$('#get_answer').css("display","none");
}
let sentence;
/*GET SENTENCE*/
let sentenceID;
let tags;
window.dropdownInitialize = dropdownInitialize;
window.tags = tags;
window.sentenceID = sentenceID;
function getSentence(value)
{
	if(value == "null")
	{
		alert("Select a sentence");
	}
	else
	{
	sentenceID = value - 1;
	sentence = language[sentenceID];
	$("#msg").css("display","inline");
	$("#table").css("display","inline");
	parent = document.getElementById("table");
	parent.removeChild(parent.lastChild);
	createTable(sentence);
	$("#button").css("display","inline");
	getTag(sentence);
	}
}
window.getSentence = getSentence;
window.sentence = sentence;
window.sentenceID = sentenceID;
window.tags = tags;
/*------------------------------TABLE CREATION---------------------------------------------------
-------------------------------------------------------------------------------------------------*/

function createTable(sentence)
{
sentence = sentence.split(" ");
len = sentence.length;
parent = document.getElementById("table");
var tbl = document.createElement("table");
tbl.classList.add("table");
tbl.classList.add("table-bordered");
tbl.id = "table-id";
tbl.style.width = "300px";
var tblBody = document.createElement("tbody");

	var thead = document.createElement("th");
	thead.style.textAlign = "center";
	var cellText = document.createTextNode("LEXICON");
    thead.appendChild(cellText);
    tblBody.appendChild(thead);
    thead = document.createElement("th");
    thead.style.textAlign = "center";
	var cellText = document.createTextNode("POS");
    thead.appendChild(cellText);
    tblBody.appendChild(thead);
    thead = document.createElement("th");
    tblBody.appendChild(thead);
    thead = document.createElement("th");
    tblBody.appendChild(thead);

  for (var j = 0; j < len; j++) {
      var row = document.createElement("tr");
      row.id = j+1;
      //FIRST COLUMN 
      var cell = document.createElement("td");
      cell.id =  "1-" + (i+1);
      var cellText = document.createTextNode(sentence[j]);
      cell.appendChild(cellText);
      row.appendChild(cell);
      //SECOND COLUMN -- DROPDOWN
      cell = document.createElement("td");
      cell.id =  "2-" + (i+1);
      if(language == english)
    	  createDropDownEnglish(cell,j+1);
  	  else
  	      createDropDownHindi(cell,j+1);
      row.appendChild(cell);
      //THRID COLUMN 
      cell = document.createElement("td");
      cell.id =  "3-" + (i+1);
      row.appendChild(cell);
      //FOURTH COLUMN
      cell = document.createElement("td");
      cell.id =  "4-" + (i+1);
      row.appendChild(cell);
    tblBody.appendChild(row);
  }

  tbl.appendChild(tblBody);
  parent.appendChild(tbl);
  tbl.setAttribute("border", "2");

}
window.createTable = createTable;


/*--------------GET TAGS FROM POS TAGGER-----------------------------------
---------------------------------------------------------------------------*/

function getTag(sentence)
{
	if(language == english)
	{
		tags = checkPOSAnswer(sentence);
	console.log(tags);
}
	else

	{
		tags = hindiAnswers[sentenceID];
	}
}

/*----------------ENGLISH DROPDOWN -----------------------------------------
----------------------------------------------------------------------------*/

function createDropDownEnglish(cell,ind)
{
	var select = document.createElement("select");
	select.id = "au_"+ ind +"_sel";
	select.name="au_" + ind+"_sel";

	var option1 = document.createElement("option");
	option1.value="NN";
	option1.selected="";
	option1.innerHTML= "Noun";

	var option2 = document.createElement("option");
	option2.value="WP";
	option2.innerHTML= "Pronoun";
	var option3 = document.createElement("option");
	option3.value="VB";
	option3.innerHTML= "Verb";
	var option4 = document.createElement("option");
	option4.value="JJ";
	option4.innerHTML= "Adjective";
	var option5 = document.createElement("option");
	option5.value="RB";
	option5.innerHTML= "Adverb";
	var option6 = document.createElement("option");
	option6.value="DT";
	option6.innerHTML= "Determiner";
	var option7 = document.createElement("option");
	option7.value="IN";
	option7.innerHTML= "Preposition";
	var option8 = document.createElement("option");
	option8.value="CC";
	option8.innerHTML= "Conjuction";
	var option9 = document.createElement("option");
	option9.value="UH";
	option9.innerHTML= "Interjection";
	select.appendChild(option1);
	select.appendChild(option2);
	select.appendChild(option3);
	select.appendChild(option4);
	select.appendChild(option5);
	select.appendChild(option6);
	select.appendChild(option7);
	select.appendChild(option8);
	select.appendChild(option9);
	cell.appendChild(select);
}

window.createDropDownEnglish = createDropDownEnglish;
/*----------------HINDI DROPDOWN -----------------------------------------
----------------------------------------------------------------------------*/
function createDropDownHindi(cell,ind)
{
	var select = document.createElement("select");
	select.id = "au_"+ ind +"_sel";
	select.name="au_" + ind+"_sel";

	var option1 = document.createElement("option");
	option1.value="NN";
	option1.selected="";
	option1.innerHTML= "Noun";

	var option2 = document.createElement("option");
	option2.value="PR";
	option2.innerHTML= "Pronoun";
	var option3 = document.createElement("option");
	option3.value="VB";
	option3.innerHTML= "Verb";
	var option4 = document.createElement("option");
	option4.value="JJ";
	option4.innerHTML= "Adjective";
	var option5 = document.createElement("option");
	option5.value="RB";
	option5.innerHTML= "Adverb";
	var option6 = document.createElement("option");
	option6.value="UH";
	option6.innerHTML= "Interjection";
	var option7 = document.createElement("option");
	option7.value="IN";
	option7.innerHTML= "Postposition";
	var option8 = document.createElement("option");
	option8.value="CC";
	option8.innerHTML= "Conjuction";
	select.appendChild(option1);
	select.appendChild(option2);
	select.appendChild(option3);
	select.appendChild(option4);
	select.appendChild(option5);
	select.appendChild(option6);
	select.appendChild(option7);
	select.appendChild(option8);
	cell.appendChild(select);
}
window.createDropDownHindi = createDropDownHindi;




let toggle = "getAnswer";
function getAnswer()
{
	t = document.getElementById('table-id');
if(toggle == "getAnswer")
{
	
			
			
	$("#getAnswer").html("Hide Answers");
	for(i = 0;i<sentence.length;i++)
	{	id = t.getElementsByTagName('tr')[i];
		cells = id.getElementsByTagName('td')[3];
		if(language == english)
		text = document.createTextNode(getPOS(tags[i]));
		else
		text = document.createTextNode((tags[i]));
		cells.appendChild(text);
	}

	toggle = "hideAnswer";
}
else
{
	$("#getAnswer").html("Get Answers");
	toggle = "getAnswer";
	for(i = 0;i<sentence.length;i++)
	{
		id = t.getElementsByTagName('tr')[i];
		cells = id.getElementsByTagName('td')[3];
		cells.innerHTML = "";
			}
}
}

window.getAnswer = getAnswer;

function getPOS(tag)
{
if(tag.includes("NN"))
	return "Noun";
else if(tag.includes("PR"))
	return "Pronoun";
else if(tag.includes("VB"))
	return "Verb";
else if(tag.includes("JJ"))
	return "Adjective";
else if(tag.includes("RB"))
	return "Adverb";
else if(tag.includes("UH"))
	return "Interjection";
else if(tag.includes("IN"))
	return "Preposition";
else if(tag.includes("DT"))
	return "Determiner";
else if(tag.includes("CC"))
	return "Conjuction";

}
window.getPOS = getPOS;


function checkAnswer()
{
	
	tags = tags.split(" ");
	t = document.getElementById('table-id');
	sentence = sentence.split(" ");
	len = sentence.length;
	for(i = 0;i<len;i++)
		{
			id = t.getElementsByTagName('tr')[i];
			cells = id.getElementsByTagName('td')[1];
			select = cells.firstChild;
			strUser = select.options[select.selectedIndex].value;
			text = select.options[select.selectedIndex].text;
			img = document.createElement("img");
			img.width = "30";
			img.height = "30";
			if(language  == english)
			{
				if(tags[i].includes(strUser))
				{

					img.src = "right.png";
				}
				else
					{
						img.src = "wrong.png";
						$('#get_answer').css("display","inline");
					}
			}
		    else
		    {
		    	if(tags[i].includes(text))
				{

					img.src = "right.png";
				}
				else
					{
						img.src = "wrong.png";
						$('#get_answer').css("display","inline");
					}
		    }
			cells = id.getElementsByTagName('td')[2];
			cells.appendChild(img);

		}

}
window.checkAnswer = checkAnswer;
