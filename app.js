//Trial 1:
//We've got some basic info about Karen's home
//Debug the type of data provided
//Return the types concatenated in a single variable

//Trial 2:
//Check if the data given is of the right type
//parents = String, noOfSiblings = Number, isNuclearFamily = Boolean
function moreAboutKaren(parents, noOfSiblings, isNuclearFamily)
{
    if(typeof parents==='string'&& typeof noOfSiblings==='number'&&typeof isNuclearFamily==='boolean')
    return Boolean;
}

//Trial 3:
//Lily is suspicious about Karen's new friend
//Karen tells her friend's age and even writes it down
//Check which one those is not a number (NaN) and return that value
function doesFriendExist(ageInText, ageInNumber)
{
    if(typeof ageInNumber!=='number'&&typeof ageInText!=='number')
    {
             return  ageInText,ageInNumber;
    }
    else if(typeof ageInNumber!=='number')
    {
             return  ageInNumber;
    }
    else if(typeof ageInText!=='number')
    {
             return  ageInText;
    }
    else{
        return 0;
    }
}

//Trial 4:
//Lily gave Karen x sweets
//Karen ate y sweets herself
//On her way to the river, she ate another z sweets every n meters travelled   
//Her friend divided the remaining sweets into 2 parts for each
//How many sweets did her friend get to eat?
function sweetTooth(totalNoOfSweets,sweetsConsumedByKaren, sweetsConsumedInNMeters, metersToTravel)
{
  const a=totalNoOfSweets- sweetsConsumedByKaren;
  let b=sweetsConsumedInNMeters * metersToTravel;
  let c=a-b;
  let d=c/2;
  return d;
}


//Trial 5:
//As Lily moves closer, it gets colder. She checks the temperature on her mobile
//It only shows in fahrenheit. Convert the data to celsius and return it.
function convertToCelcius(fahrenheit) 
{
    let celsius = (fahrenheit - 32) * 5/9;
    return celsius;
  }
  
  






//Trial 6:
//Lily can now do multiple things to deal with this
//1. Take her daughter to a doctor
//2. Talk to her husband about it
//3. Counsel her daughter herself
//4. Lock her daughter in her room
//Given a value, return which of these above actions Lily would take
function aDifficultChoice(choice)
  {
    switch(choice)
    {
        case 1:
        return "Take her daughter to a doctor";
        case 2:
            return "Talk to her husband about it";
        case 3:
            return "Counsel her daughter herself";
        case 4:
            return "Lock her daughter in her room";
        case -1:
            return "Break down and give up all hope";
        case "I give up":
            return "Refused to do anything for Karen";  
        default:
            return "Wasn't able to decide";
    }
    

  }

//Challenge 1:
//Lily realized that she'd hurt her daughter
//All she wants now is for her to stop crying
//She refuses to talk to her but Lily doesn't stop trying
//She tries out multiple things hoping for the best
//Take all of Lily's strategies and concatenate them to a single var
//Seperate the strategies by a single space
//Return the length of the complete strategy
function consoleKaren(strategies)
{
  let str=strategies.join(" ");
  return str.length;
}

function moreAboutHome(address, distanceFromTown, hasNeighbours)
{
    return typeof(address)+typeof(distanceFromTown)+typeof(hasNeighbours);

}
