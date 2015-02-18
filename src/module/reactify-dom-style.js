var reactifyDomStyle = function(node){

  var sourceStyle = node.style;
  var computedStyle = getComputedStyle(node);
  var reactStyle = {};
  console.log(sourceStyle);
  for (var property in sourceStyle){
    if (property.substr(0, 6) === 'webkit'){
      reactStyle[property.replace('w', 'W')] = computedStyle[property];
    } else if (property.substr(0, 2) === 'ms'){
      reactStyle[property.replace('m', 'M')] = computedStyle[property];
    } else {
      var propertyWords =  property.split('-');
      if (propertyWords.length !== 1){
        var fixedKey = propertyWords[0];
        for (var i = 1; i < propertyWords.length; i++){
          var firstLetter = propertyWords[i][0];
          fixedKey += propertyWords[i].replace(/./, firstLetter.toUpperCase());
        }
      } else if (property !== 'cssText'){
        reactStyle[property] = computedStyle[property];
      }
    }
  }

  return reactStyle;

};

export default reactifyDomStyle;
