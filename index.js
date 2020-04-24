let animal = "dog"

function myAnimal() {
  return animal
}

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  animal = "cat"
  return animal
}

  // Feel free to move things around!
  function add2(n) {
    const two = 2
    return n + two
}
