    var canvas;
    var block1,block2,block3,block4;
    var box,edges;
    var music;

    function preload(){
        music = loadSound("music.mp3");
    }


    function setup(){
        canvas = createCanvas(800,600);

        //create 4 different surfaces
        block1=createSprite(0,580,360,30);
        block1.shapeColor = rgb(0,0,255);
        
        block2=createSprite(295,580,200,30);
        block2.shapeColor = rgb(255,128,0);

        block3=createSprite(515,580,200,30);
        block3.shapeColor = rgb(153,0,76);

        block4=createSprite(740,580,220,30);
        block4.shapeColor = rgb(0,100,0);
    
        //create box sprite and give velocity
        box = createSprite(random(20,750),100,40,40);
        box.velocityX = 9;
        box.velocityY = 4;
        box.shapeColor = rgb(255,255,255);
    }

    function draw() {

        background(rgb(169,169,169));
        edges = createEdgeSprites ();
        box.bounceOff(edges);
        //add condition to check if box touching surface and make it box
        //add if condition for block1
        if(block1.isTouching(box) && box.bounceOff(block1)){
            box.shapeColor=rgb(0,0,255);
            music.play();
        }
        //add if condition for block2
        if(block2.isTouching(box)){
            box.velocityX=0;
            box.velocityY=0;
            box.shapeColor=rgb(255,128,0);
            music.stop();
        }
        //add if condition for block3
        if(block3.isTouching(box) && box.bounceOff(block3)){
            box.shapeColor=rgb(153,0,76);
        }
        //add if condition for block4
        if(block4.isTouching(box) && box.bounceOff(block4)){
            box.shapeColor=rgb(0,100,0);   
        }
        drawSprites();
    }