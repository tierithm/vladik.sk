function changeToTapety () {	
	document.getElementById("backgroundImg").style.background = "url('mainTapety.png')";
	document.getElementById("tapetyButton").style.textShadow = "1px 0px 20px white,1px 0px 20px white";
}

function changeToObrazy () {	
	document.getElementById("backgroundImg").style.background = "url('mainObrazy.png')";
	document.getElementById("obrazyButton").style.textShadow = "1px 0px 20px white,1px 0px 20px white";
}


function changeToDefault () {
	document.getElementById("backgroundImg").style.background = "url('Background.png')";
	document.getElementById("tapetyButton").style.textShadow = "0px 0px 0px white,0px 0px 0px white";
	document.getElementById("obrazyButton").style.textShadow = "0px 0px 0px white,0px 0px 0px white";
}

function scrollToBottom() {
	behavior: 'smooth';
    document.body.scrollTop = 2000; // For Safari
    document.documentElement.scrollTop = 2000; // For Chrome, Firefox, IE and Opera
}

