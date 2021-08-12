function convertToRoman(num) {
  //you could also use a dictionary for this
  const symbols = ["I","V","X","L","C","D","M"];
  const symbols1 = 
  [
    ["I","V","X"],
    ["X","L","C"],
    ["C","D","M"],
    ["M"]
  ];
  const decimals = [1,5,10,50,100,500,1000];
  
  //aparently js doesnt like ints that start with 0
  const combinations = [1,11,111,12,2,21,211,2111,13,9]; //numbers represent pos on symbols, 9 means that the decimal is 0 == skip
  const minDecimals = [1,2,3,4,5,6,7,8,9,0]; //all posible digits except 0
  const section = [10,100,1000]; //what range is the number in? tens, hundreds or thousands?

  /* Comparison ranges NOTE: added extra section due to an oversight on the code not counting up of 1k
  1 - 10 | i - x
  10 - 100 | x - c
  100 - 1000 | c - M
  */
  let romanNum = "";
  let sectionTemp = 0;

  let check = decimals.indexOf(num); //check if the sent number is on the list
  if(check != -1){
      romanNum = symbols[check]; //if true set the position on array and return
      return romanNum;
  }


  let number = `${num}` //turn int to string
  number = [...number]; //spread the string into an array of chars  

  //a binary search would be faster but its not needed due to the size of the array
  
  //check each digit on minDecimals, 
  //use that pos on combinations    
  //divide roman symbols on 3 (1-3) depending on num size eg. 1 , 10 , 100, 1000
  //flip combinations numbers with roman symbols
  //save as chars into romanNum
  //repeat for each digit
  if(number.length === 0){
    sectionTemp = number.length;
  }else {
    sectionTemp = number.length -1;
  }
  
  console.log("sectemp:",sectionTemp);
  for(let j=0 ; j < number.length ; j++){

      let numberTemp = minDecimals.indexOf(number[j]*1); //the *1 is to read the char as an int               
      let lenTemp = combinations[numberTemp].toString();
      lenTemp = lenTemp.length; //how long the code is?
      
      console.log("numtemp:",numberTemp);
      for(let i=0 ; i < lenTemp ; i++){

        if(numberTemp === 9){ //if number is 9 that means that the actual number is 0, therefore it should skip
          break;
        }
        
        let currentCode = `${combinations[numberTemp]}`; //turn code into string
        currentCode = [...currentCode]; //spread string for reading        
        romanNum += symbols1[sectionTemp-j][currentCode[i]-1]; // add a -1 for the code to fit properly
        console.log(romanNum); 
      }

  }
  return romanNum;
}


console.log(convertToRoman(1010));