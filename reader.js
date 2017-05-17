file = "./data.blf"

//on javascript you choose to create json files, (is basically a dictionary) for faster access.
var spaceship = {
  line1 : " ++++++++++ ",
  line2 : "++        ++",
  line2 : " ++++++++++ ",
};
var missile = {};

var invered = line1.split(" ").join("-").split("+").join(" ").split("-").join("+");
//this json is to show how values may be executed to check for matches
var matches = {};

function mapObject(file, variable){

  for(var i=0; i < ){


    var key = "line"+i;
    variable[key] = line;
  }

}
function analyzeLine (line){
  for(var i = 0; i < line.length; i++){
    //just as python you don't need to specify the type of a variable.
    var char = line[i];
    //logic to check if it match the spaceship.
    //this is a vague example, goes through the different lines.
    for(var j = 0; j < spaceship.length; j++ ){
      var spaceshipLine = spaceship[j];
      //there is this very usefull function on javascript which allows you to slice a string.
      // you can use this to slice a portion of the line to to see if that portion matches the line from the spaceship.
      //you just have to make sure there is still characters to slice from.
      var endingChar = i + spaceshipLine.length;
      if(endingChar < line.length){
        var chunkOfLine = line.slice(i, endingChar); //Thi would be the portion of the line characters  from the exact same length required
        //you need triple === to validate, otherwhise in javascript == validates teh type not the value.
        if(chunkOfLine === spaceshipLine){
          //here you do all your logic, you'll probably create another json file as the above example.
          //you can add values for you to check matches such as:
                      //we create a key that signifies:
                      //{line, startChar} for oyu to reference later..
          var keymatch = line+startChar;
          matches[keymatch] = true; //which can later be accessed as matches[13] // whcih will contain the balue true.
        }
      }
    }

  }
};

function readData(file){
  var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream(file)
  });

  lineReader.on('line', function (line) {
    //escribe linea por linea.
    console.log(line);
    //puedes acessar  character by character en la linea con un for loop.
    analyzeLine(line);
  });
}

readData(file);