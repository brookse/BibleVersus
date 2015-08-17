#pragma strict

var leftHand : SpriteRenderer;
var rightHand : SpriteRenderer;

private var finalLeftHand : double = -4.425;
private var finalRightHand : double = 4.415;

function Start () {
	leftHand.transform.position.x = -15;
	rightHand.transform.position.x = 15;
	
}

function Update () {
	if(leftHand.transform.position.x <= finalLeftHand)
		leftHand.transform.Translate(Vector3.right * Time.deltaTime*10);
	if(rightHand.transform.position.x >= finalRightHand)
		rightHand.transform.Translate(Vector3.left * Time.deltaTime*10);
}
