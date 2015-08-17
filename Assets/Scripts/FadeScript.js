#pragma strict

var logo : GameObject;

function Start () {
	guiText.material.color.a = 0;
	if(name == "Logo") {
		yield WaitForSeconds(3);
		FadeOut();
	}else if(guiText.text == "The First Fight"){
		yield WaitForSeconds(5);
		FadeIn();
	} else if(guiText.text == "Exit" || guiText.text == "Fight!"){
		yield WaitForSeconds(8);
		FadeIn();
	} else {
		yield WaitForSeconds(3);
		FadeIn();
	}
}

function FadeIn() {
	while (guiText.material.color.a < 1) {
		guiText.material.color.a += 0.1 * Time.deltaTime * 5;
		yield;
	}
}

function FadeOut() {
	while (logo.color.a > 0) {
		logo.color.a -= 0.1 * Time.deltaTime * 5;
		yield;
	}
}