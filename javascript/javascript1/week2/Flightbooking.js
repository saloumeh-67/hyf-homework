function getFullName (firstname,surname) {
    return console.log(firstname + surname);
  }
  getFullName('saloumeh','sarabi');
  
  function getFormalName(firstname,surname,formalname) {
    if (formalname === true) {
        return console.log('lord'+ firstname + surname);
    }
    else if ( formalname === false){
        return console.log(firstname,surname);
    }
  }
  getFormalName('salom','sarabi',true);
  getFormalName('salom','sarabi',false);
  
  function getFemaleFormalName(firstname,surname,formalname) {
    if (formalname === true) {
        return console.log('madam'+firstname+surname);
    }
    else if (formalname === false) {
        return console.log(firstname,surname);
    }
    else console.log('need to put right input');
  }
  getFemaleFormalName('salom','sarabi',true);
  getFemaleFormalName('salom','sarabi',false);
  