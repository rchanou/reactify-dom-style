var reactifyDomStyle = function(node){

  var sourceStyle = node.style;
  var computedStyle = getComputedStyle(node);
  var reactStyle = {};
  
  for (var property in sourceStyle){
    if (property.substr(0, 6) === 'webkit'){
      reactStyle[property.replace('w', 'W')] = computedStyle[property];
    } else if (property.substr(0, 2) === 'ms'){
      reactStyle[property.replace('m', 'M')] = computedStyle[property];
    } else if (property.indexOf('-') === -1 && property !== 'cssText' && property !== 'parentRule'){
      reactStyle[property] = computedStyle[property];
    }
  }

  return reactStyle;

};

export default reactifyDomStyle;
