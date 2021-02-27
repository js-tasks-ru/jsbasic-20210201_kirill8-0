function truncate(str, maxlength) {
  // ваш код...
  return str.length > maxlength && maxlength ? str.slice(0, maxlength - 1) + '…' : str
  

}

