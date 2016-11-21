var correctAs = 0;
var incorrectAs = 0;
var skippedQs = 0;
var questionsAnswers = {
	"qAs": [
		{//question1
		question: "What year did Forrest Gump come out?",
		answers: ["1992", "1993", "1994", "1995"],
		correctChoice: 2
		},
		{//question2
		question: "What is the title of Jay-Z's debut album?",
		answers: ["Hard Knock Life", "The Black Album", "Reasonable Doubt", "Kingdom Come"],
		correctChoice: 2
		},
		{//question3
		question: "What was the name of Microsoft's most successful OS?",
		answers: ["MS-DOS", "Leopard", "XP", "Ubuntu"],
		correctChoice: 2
		},
		{//question4
		question: "What won Best Picture at the 50th Academy Awards in 1978?",
		answers: ["Annie Hall", "Star Wars", "The French Connection", "Apocalypse Now"],
		correctChoice: 0
		},
		{//question5
		question: "What year did the SEGA Genesis release in the US?",
		answers: ["1987", "1992", "1990", "1989"],
		correctChoice: 3
		},
		{//question6
		question: "How many bytes are in a decabyte?",
		answers: ["1", "10", "100", "1000"],
		correctChoice: 1
		},
		{//question7
		question: "Which company acquired Sun Microsystems in 2010?",
		answers: ["Dell", "Compaq", "Oracle", "HP"],
		correctChoice: 2
		},
	]
};	

// upon start button click event...
$(".start").on('click', function() {

	//start timer for 90 seconds
	$("#timeLeft").html("<h2>Time Remaining: 90 seconds</h2>");
	var timer = {
		time: 90, //starting time
		start: function () {  //function to start count
				startCount = setInterval(timer.count, 1000);
		},
		stop: function () { //stop the counting
			clearInterval(startCount);
		},
		count: function () { //actual counting function
			timer.time--;
			if (timer.time>-1) { //countdown
				$("#timeLeft").html("<h2>Time Remaining: "+ timer.time + " seconds</h2>");
			
			//out of time
			} else if (timer.time=-1) {  
				$("#timeLeft").html("<h2>Time Remaining: OUT OF TIME!!!</h2><BR>");
				checkAnswers();  //check answers
				$("#timeLeft").append("<h3>Answered Correctly: "+correctAs+"</h3><BR>");
				$("#timeLeft").append("<h3>Answered Incorrectly: "+incorrectAs+"</h3><BR>");
				$("#timeLeft").append("<h3>Not Answered At All: "+skippedQs+"</h3><BR>");
				timer.stop ();  //stop timer
				$(".main").empty();  //clear old questions
			} else {};
		},
	};

	// function to populate dom with questions/answers
	function displayQs () {
		for (i = 0; i < questionsAnswers.qAs.length; i++) {
			$(".main").append("<div class='form-group'>");
			$(".main").append("<BR>"+[i+1]+". "+questionsAnswers.qAs[i].question+"<BR><BR>"); //add question
			$(".main").append("<div class='col-lg-10 answers'>");
			displayAs ();
			$(".main").append("</div>");
			$(".main").append("</div>");
		}
	};

	//function to display answer choices
	function displayAs () {
		for (j=0; j < 4; j++) { //add answers as radio buttons
		$(".main").append("<div class='radio'><label><input type='radio' name='optionsRadios"+[i]+"' id='optionRadios"+[j+1]+"' value='"+[j+1]+"'>"+				questionsAnswers.qAs[i].answers[j]+"</label></div>");  
			};
	};

	//function to check answers
	function checkAnswers () {
		var len = questionsAnswers.qAs.length;
		for (k=0; k<len; k++) {
			var ansIndex=$('input[name=optionsRadios'+k+']:checked').val();
			var ansComp=questionsAnswers.qAs[k].correctChoice
			if (ansIndex==ansComp+1) {
				correctAs++;
			} else if (ansIndex!=ansComp+1 && ansIndex!=null) {
				incorrectAs++;
			} else {
				skippedQs++;
			}
		};
	};

	//start timer
	timer.start ();

	//display questions header
	$(".main").html("<BR><h1>7 Questions:</h1><BR>");
	
	//run function to display questions/answers 
	displayQs ();
});