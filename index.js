const animal = "dog"

// const is also block-scoped restricts over-writing variables. It does not mean the value it holds is immutable, just that the variable identifier cannot be reassigned. const variables also cannot be declared a without assigning its (constant) value

function myAnimal() {
  return animal
}

function yourAnimal() {
  let animal = 'cat'
  // const animal = 'cat'
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return animal
}

// let variables are block-scoped, and allows you to declare variables that are limited in scope to the block, statement, or expression on which it is used

function add2(n) {
  const two = 2
  return n + two

  // Feel free to move things around!
  
}