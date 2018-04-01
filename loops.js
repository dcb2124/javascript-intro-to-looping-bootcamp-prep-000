function forLoop(array){
  
  for(var i = 0; i < 25; i++){
    
    string = ""
    
    if (i === 1){
      string = "I am 1 strange loop."
    } else {
      string = `I am ${i} strange loops.`
    }
    
    array.push(string)
    
    
    
  }
  return array
  
}
