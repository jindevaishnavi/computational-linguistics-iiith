
/*ENGLISH CORPUS*/
english = ["The child liked the chocolate","She was stopped by the bravest knight",
"Mary baked a cake for his birthday","She decorated the cake carefully","Mary wore a dress with polka dots"]

/*HINDI CORPUS*/
hindi = ["राम ने सीता के लिए फल तोड़ा।","छोटे बच्चे पाठशाला जल्दी आयेंगे।"
,"मेहनत का फल मीठा होता है।","वाह! वह खूबसूरत है।","पेड़ से पत्ते गिर गए।"]

/*----------------------------SELECT LANGUAGE ------------------------------------------------
----------------------------------------------------------------------------------------------*/
let language;

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
function intialize()
{
	$("#langDropdown").css("display","none");
	$("#msg").css("display","none");
	$("#table").css("display","none");
	$("#button").css("display","none");
}
/*Intialize sentence dropdown*/

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
}
let sentence;
/*GET SENTENCE*/
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
	}
}
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