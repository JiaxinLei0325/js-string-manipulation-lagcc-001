'use strict';

var encoder = function(phrase){
  let result = phrase;
  
  result = result.replace(/a/g,"8");
  result = result.replace(/d/g,"0");
  result = result.replace(/ /g,"$");
  let final="";

  for(let i=result.length-1;i>=0;i--){
    final += result[i];
  }
  return final;
};

module.exports = encoder;
