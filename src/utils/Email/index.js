const emailMask = (email) => {
    var maskedEmail = email.replace(/([^@.])/g, "*").split('');
    var previous	= "";
    for(let i=0;i<maskedEmail.length;i++){
      if (i<=1 || previous === "." || previous === "@"){
        maskedEmail[i] = email[i];
      }
      previous = email[i];
    }
    return maskedEmail.join('');
  }

export { emailMask }