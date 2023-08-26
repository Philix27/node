const conditional = (age) => {
  // declared a variable
  let message;
  if (age < 10) {
    message = "A baby";
  } else if (age < 20) {
    message = "A teenager";
  } else if (age < 27) {
    message = "Okay to be in university";
  } else if (age < 30) {
    message = "Real Hustler";
  } else if (age < 40) {
    message = "How many kids do you have";
  } else if (age > 65) {
    message = "Already a granny";
  }
  // returning the variable
  return message;
};

console.log(conditional(37));
