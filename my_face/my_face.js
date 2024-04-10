function setup() {
// put setup code here
createCanvas(600,600);
background(204);
}

function draw() {

  //back of hair
fill(42,28,22);
ellipse(300,320,270,400);
  
  //neck
fill(230,183,163);
square(270,435,55);
  
  //shoulders
fill(120);
ellipse(300,600,300,250);
  
  //head
fill(230,183,163);
ellipse(300,300,250,300);

// sclera
fill(255);
ellipse(350,260,50,30);

//iris
fill(73,54,47);
ellipse(350,260,30,30);

//sclera
fill(255);
ellipse(250,260,50,30);

//iris
fill(73,54,47);
ellipse(250,260,30,30);

//eyebrows
line(230,230,270,230);
line(320,230,370,230);

//nose
fill(230,188,173);
ellipse(300,320,30,20);

//nostrils
fill(0);
ellipse(290,323,10,8);
fill(0);
ellipse(310,323,10,8);

//mouth
fill(218,142,145);
ellipse(300,380,40,20);

//weird hair thing in front
fill(42, 28, 22); // Hair color
beginShape();
vertex(270, 140); // Start of hair shape (moved up)
bezierVertex(300, 100, 400, 100, 380, 180); // Curve for hair
bezierVertex(400, 180, 460, 220, 400, 500); // Curve for hair
bezierVertex(450, 70, 240, 180, 150, 380); // Curve for hair
bezierVertex(200, 200, 190, 170, 210, 180); // Curve for hair
endShape(CLOSE);



}
