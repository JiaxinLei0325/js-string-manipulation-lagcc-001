'use strict';

var decoder = function(encoded){
  let result = encoded;
  let final="";
  for(let i=result.length-1;i>=0;i--){
    final += result[i];
  }
  final = final.replace(/\$/g," ");
  final = final.replace(/0/g,"d");
  final = final.replace(/8/g,"a");
  
  return final;
};

module.exports = decoder;

