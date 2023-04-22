const duplicateChecker = (number, array) => {
  if(array.includes(number)) {
    return true
  } else {
    return false
  }
}

export default duplicateChecker;
