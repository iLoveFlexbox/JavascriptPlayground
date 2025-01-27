//object constructor is a function that lets you create objects that need to be duplicated

function Person(name, status) {
    this.name = name;
    this.status = status;
    this.yell = () => {console.log(`i love ${name}!`)}
}

const person = new Person('ben', 'boyfriend');

if (person.status === 'boyfriend') {
    person.yell();
}

//exercise making book objects

function Book(title, author, pages, haveRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;
    this.info = function() {
        return `${title} by ${author} has ${pages} pages and ${haveRead ? 'has been read':'has not been read'}`
    }
}

const book = new Book('the danger you know', 'lily white', '293', false);

console.log(book.info())




function Player(name, marker) {
    this.name = name;
    this.marker = marker;
    this.sayName = function() {
      console.log(this.name)
    };
  }
  
  const player1 = new Player('steve', 'X');
  const player2 = new Player('also steve', 'O');
  player1.sayName(); // logs 'steve'
  player2.sayName(); // logs 'also steve'

  Object.getPrototypeOf(player1) === Player.prototype;


  function Animal(name) {
    this.name = name;
  }

  Animal.prototype.speak = 'woof';

  const cat = new Animal('cat');

  Player.prototype.whack = function() {
    console.log('weezer');
  }
  
  console.log(cat.speak);

  //making prototypes is more efficient because then a copy doesnt have to be made every time you declare a new instance of it 

  //prototypial inheritance



console.log(Object.prototype)

// the prototype chain looks like this
// player1 --> Player.prototype --> Object.prototype --> null

//javascript is a prototype based language

console.log(Player.prototype);

console.log(Array.prototype)

console.log(Object.prototype.isPrototypeOf(Animal))

console.log(Animal instanceof undefined)