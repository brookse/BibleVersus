#pragma strict

//private var p1Ready : boolean;
//private var p2Ready : boolean;

var readySprite : Sprite;
var notReadySprite : Sprite;

function Start() {

	this.GetComponent(SpriteRenderer).sprite = notReadySprite;//.GetComponent(SpriteRenderer).active = false;
	this.GetComponent(SpriteRenderer).sprite = notReadySprite;//GetComponent(SpriteRenderer).active = false;
	
	MenuSelectScript.player1Ready = false;
	MenuSelectScript.player2Ready = false;
}

function OnMouseDown() {

	if( (this.name == "P1Ready") && (this.GetComponent(SpriteRenderer).sprite == readySprite) ) {
		this.GetComponent(SpriteRenderer).sprite = notReadySprite;
		MenuSelectScript.player1Ready = false;
		Debug.Log('p1f');
	}
		
	if( (this.name == "P1Ready") && (this.GetComponent(SpriteRenderer).sprite == notReadySprite) ) {
		this.GetComponent(SpriteRenderer).sprite = readySprite;
		MenuSelectScript.player1Ready = true;
		Debug.Log('p1t');
	}
	
	if( (this.name == "P2Ready") && (this.GetComponent(SpriteRenderer).sprite == readySprite) ) {
		this.GetComponent(SpriteRenderer).sprite = notReadySprite;
		MenuSelectScript.player2Ready = false;
		Debug.Log('p2f');
	}
		
	if( (this.name == "P2Ready") && (this.GetComponent(SpriteRenderer).sprite == notReadySprite) ) {
		this.GetComponent(SpriteRenderer).sprite = readySprite;
		MenuSelectScript.player2Ready = true;
		Debug.Log('p2t');
	}
}