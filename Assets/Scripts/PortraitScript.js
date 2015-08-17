#pragma strict

static var p1Selecting : boolean = true;

function Start () {
		GameObject.Find('p1CharText').guiText.text = "";
		GameObject.Find('p2CharText').guiText.text = "";
}

function Update () {

}

function OnMouseEnter() {
	if( p1Selecting ) {
		// Change big portrait of character
		// Change name of character
		GameObject.Find('p1CharText').guiText.text = this.name;
		
	} else {
		GameObject.Find('p2CharText').guiText.text = this.name;
	}
}

function OnMouseExit() {
	if( p1Selecting ) {
		// Remove big portrait of character
		// Remove name of character
		GameObject.Find('p1CharText').guiText.text = "";
	} else {
		GameObject.Find('p2CharText').guiText.text = "";
	}
}

function OnMouseDown() {
	// Change big portrait of character
	// Change name of character
	// Store name of character to load in next scene
}