// Set globals for height, width and gameloop
var width = 400,
	height = 600,
	gLoop,
	
	// Get reference to canvas and context (to draw to)
	c = document.getElementById('canvas'),
	ctx = c.getContext('2d');
	c.width = width;
	c.height = height;

// Example setup for tiles for game	
var tiles = [
	['D','W','U','P','X','R'],
	['X','J','O','E','A','Y'],
	['A','R','J','N','K','U'],
	['Q','O','J','V','D','C'],
	['J','V','E','G','K','S'],
	['A','B','J','E','C','I']
];
	
// We can't simply 'move' objects.
// Canvas is cleared and re-drawn for every 'frame'
// This function clears the canvas before re-drawing
var clear = function(){
	ctx.fillStyle = '#749588';
	ctx.clearRect(0, 0, width, height);
	ctx.beginPath();
	ctx.rect(0, 0, width, height);
	ctx.closePath();
	ctx.fill();
}

// Example function for 'word based' Game
// Loop through all tiles and call 'draw' function
function createTiles(){
    for (var i=0; i < tiles.length; i++) {
        for (var j=0; j < tiles[i].length; j++) {
            drawTile(j,i,tiles[i][j]);
        }
    }
}

// Called for each tile to be drawn
// Example of writing image to canvas
// Eventually call 'drawImage against canvas context, passing image, x and y
function drawTile(x,y,letter){
	var tile = new (function(){
		var that = this;
  		that.image = new Image();

  		that.image.src="images/tile.png"
  		that.width = 60;
  		that.height = 60;
  		that.X = (x*60);
  		that.Y = (y*60);  
  		
  		ctx.drawImage(that.image, that.X, that.Y);
	
	})();
}

// Main Game Loop
// Use 'setTimeout' so that the loop runs through completely
// before the next 'frame'. Some other methods can result
// in only half a frame being completed before following on
// to the next
var GameLoop = function(){
  clear();
  createTiles();
  gLoop = setTimeout(GameLoop, 1000 / 50);
}

// Starting point for game
GameLoop();
