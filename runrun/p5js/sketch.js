function setup() {
  createCanvas(400, 400);
}
function draw() {
  background(220);
  stroke(254,219,126);
 strokeWeight(2);
 fill(255,243,187);
 beginShape();
 vertex(130,600);
 bezierVertex(-50,470,230,470,80,350);
 bezierVertex(20,290,100,260,135,220);
 bezierVertex(180,150,150,70,300,60);
 bezierVertex(450,70,420,150,465,220);
 bezierVertex(500,260,580,290,520,350);
 bezierVertex(370,470,650,470,470,600);
 endShape();
  fill(255);
 stroke(244,206,200);
 beginShape();
 vertex(180,220);
 bezierVertex(180,400,290,300,290,380);
 bezierVertex(290,410,310,410,310,380);
 bezierVertex(310,300,420,400,420,220);
 bezierVertex(420,220,330,200,300,130);
 bezierVertex(270,200,180,220,180,220);
 endShape(CLOSE);
 stroke(227,109,115);
 beginShape();
 vertex(290,300);
 bezierVertex(295,310,305,310,310,300);
 endShape();
 fill(0);
 ellipse(250,240,15,25);
 ellipse(350,240,15,25);
 noStroke();
 fill(254,221,224);
 ellipse(230,280,25,25);
 ellipse(370,280,25,25);
}