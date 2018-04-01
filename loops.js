function forLoop(array){
  
  for(var i = 0; i < 25; i++){
    
    string = `I am ${i} strange loop`
    
    if (i === 1){
      string = string + "."
    } else {
      string = string + "s."
    }
    
    array.push(string)
    
    
    
  }
  return array
}
