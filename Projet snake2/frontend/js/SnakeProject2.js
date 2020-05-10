function lancer() {
    var cvs = document.getElementById("canvas");
    var ctx = cvs.getContext("2d");
	
    var cvsW = cvs.width;
    var cvsH = cvs.height;

    var snakeW = 25;
    var snakeH = 25;
	
	var score = 0;
	
	var direction = "right";
    
    let pseudonyme = "";
	
	document.addEventListener("keydown", getDirection);
	
	function getDirection(e){
		if (e.keyCode == 37 && direction != "right"){
			direction = "left";
		}
		else if (e.keyCode == 38 && direction != "down"){
			direction = "up";
		}
		else if (e.keyCode == 39 && direction != "left"){
			direction = "right";
		}
		else if (e.keyCode == 40 && direction != "up"){
			direction = "down";
		}
	}
	
	function drawSnake(x,y){
        ctx.fillStyle = "#1FCC04";
        ctx.fillRect(x*snakeW, y*snakeH, snakeW, snakeH);

        ctx.fillStyle = "#000";
        ctx.strokeRect(x*snakeW, y*snakeH, snakeW, snakeH);
    }
	
	var len = 4;
	var snake =[];
	for (var i = len-1; i>=0; i--){
		snake.push({x:i,
				   y:0
				   }
				  );
	}
	// create some food
	food = {
		x : Math.floor(Math.random()*(cvsW/snakeW)),
		y : Math.floor(Math.random()*(cvsH/snakeH))
	}
	// draw function food
	function drawFood(x,y){
		ctx.fillStyle = "#CF3504";
		ctx.fillRect(x*snakeW, y*snakeH, snakeW, snakeH);
		
		ctx.fillStyle = "#000";
		ctx.strokeRect(x*snakeW, y*snakeH, snakeW, snakeH);
	}
	
	// check collision function
	
	function checkCollision(x,y,Array){
		for(var i = 0; i < Array.length; i++){
			if (x == Array[i].x && y == Array[i]){
				return true;
			}
		}
		return false;
	}
	
	function drawScore(x){
		ctx.fillStyle = "yellow";
		ctx.font = "25px Verdana";
		ctx.fillText("score : "+x, 5, cvsH-5);
	}
    
    function envoyerScore(){
    pseudonyme = window.location.search;
    pseudonyme = pseudonyme.substr(11);
    let xhr = new XMLHttpRequest();
    xhr.open('GET', '/sendscore?scoreVar=' + score + '&pseudoVar=' + pseudonyme, true);
    xhr.send();
    }
	
	function draw(){
		ctx.clearRect(0,0,cvsW,cvsH);
		for (var i = 0; i<snake.length;i++){
			var x = snake[i].x;
			var y = snake[i].y;
			drawSnake(x,y)
		}
		// drawFood
		drawFood(food.x, food.y);

		// snake head
		var snakeX = snake[0].x;
		var snakeY = snake[0].y;
		
		if (snakeX < 0 || snakeY < 0 || snakeX >= cvsW/snakeW || snakeY >= cvsH/snakeW || checkCollision(snakeX,snakeY,snake)){
			envoyerScore();
            window.location = "/TableauDesScores";
		}
		
		//new head based on directions and previous head
		if (direction == "left") snakeX --;
		else if (direction == "up") snakeY --;
		else if (direction == "right")snakeX ++;
		else if (direction == "down")snakeY ++;
		
		// if our snake eats the food
		if(snakeX == food.x && snakeY == food.y){
			food = {
				x : Math.floor(Math.random()*(cvsW/snakeW)),
				y : Math.floor(Math.random()*(cvsH/snakeH))
			}
			var newHead = {
				x : snakeX,
				y : snakeY
			};
			score ++;
		}
		else {
			snake.pop();
			
			var newHead = {
				x : snakeX,
				y : snakeY
			};
		}
		
		var newHead = {
		x : snakeX,
		y : snakeY
		};
		snake.unshift(newHead);
		drawScore(score);
		}
	
	setInterval(draw,90);
}