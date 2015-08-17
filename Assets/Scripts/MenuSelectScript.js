#pragma strict

var optionText : GUIText;
var button : String;
private var selected : boolean;

// Player ready 
static var player1Ready : boolean;
static var player2Ready : boolean;

function Start() {
	optionText.color = Color.black;
//	player1Ready = false;
//	player2Ready = false;
}

function Update () {
	if( Input.GetMouseButtonUp(0) && selected ) {
		if( button == ("Fight!") ) {
			Application.LoadLevel(1);
		} else if( button == ("Exit")) {
			Application.Quit();
		} else if( button == ("Begin!") ) {
			// Fade to black
			if(player1Ready == true && player2Ready == true){
				Debug.Log("ALL TRUE");
//				Application.LoadLevel(2);
			}
		}
	}
}

function OnMouseEnter() {
	optionText.color = Color.white;
	selected = true;
}

function OnMouseExit() {
	optionText.color = Color.black;
	selected = true;
}