#pragma strict

public var startingHealth : int = 100;
var health: int;

function Start () {
	health = startingHealth;
}

function Update () {

}

function FixedUpdate() {
	if(Input.GetKey(KeyCode.LeftArrow)) {
		transform.position += new Vector3(-0.2f,0,0);
	} else if(Input.GetKey(KeyCode.RightArrow)) {
		transform.position += new Vector3(0.2f,0,0);
	}
	
	if(Input.GetKeyDown(KeyCode.K)) {
		// Kick stuff
	} else if(Input.GetKeyDown(KeyCode.L)) {
		// Punch stuff
	}
}

function characterHit(damage) {
//	health = health - damage;
	// Adjust health bar according to percentage health/startingHealth
	
	if(health <= 0) {
		// Win/Lose animation
	}
}