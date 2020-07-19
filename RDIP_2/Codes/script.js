
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
	console.log(sentence);
	}
}