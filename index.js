var count = 0;

function takeANumber(array, count){
  count++;
  array.push(count);
  return `Welcome! You are number ${count}.`;
}

function nowServing(array){
  if(array.length > 0){
    return `Currently serving `+ array.shift() + `.`;
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(array){
  if(array.length > 0){
    console.log("The line is currently: ");
    let i = 0;
    return `The line is currently: 1. ${array[i]}, 2. ${array[++i]}, 3. ${array[++i]}`;
  } else {
    return "The line is currently empty.";
  }  
}