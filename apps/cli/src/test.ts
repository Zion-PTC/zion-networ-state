class Bla {
  constructor() {
    return this.foo();
  }
  async foo() {
    return "ciao";
  }
}

const test = await new Bla();
console.log(test);
