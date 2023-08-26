const name_of_variable = function logger() {
  const variable1 = "Hello ";
  const variable2 = "Golden";
  return variable1 + variable2;
};

console.log(name_of_variable());

// an anonymous function does not have a name
// we often put it inside a variable
const anonymousFunction = () => {
  let guy = 20;
  let girl = 25;
  return guy + girl;
};

console.log(anonymousFunction());
