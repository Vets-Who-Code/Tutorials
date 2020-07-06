# JavaScript Primitives

### Variables

The values a program stores in computer memory are called variables. Data stored in a specific variable often changes. A variable is similar to a storage locker—a program can put any value into it and then retrieve the value later for use. To use a variable first write a statement that creates it and then assign it a name. For example, an application may have a variable named `currentTime` and then stores the _current time_ in that variable. Each time the application runs, the current time is different, so the value varies. Another example, is an ecommerce program that might include variables that stores customer's names and purchase totals. Each variable will contain different values at different times depending on the name of the customer, the items that customer is purchasing, or the cost of the product.

There are rules to follow when assigning a variable name. There are also a general agreement about basic principles or procedures (naming conventions) that are followed in JavaScript.

### Naming Conventions

For variable names use lowerCamelCasing, and use concise, human-readable, semantic names where appropriate.[[1]](https://developer.mozilla.org/en-US/docs/MDN/Contribute/Guidelines/Code_guidelines/JavaScript#Variables)

Do this:

```javascript
let playerScore = 0;

let speed = distance / time;
```

Not this:

```javascript
let thisIsaveryLONGVariableThatRecordsPlayerscore345654lol = 0;

let s = d / t;
```

When declaring variables and constants, use the `let` and `const` keywords, **never** [`var`](https://hackernoon.com/why-you-shouldnt-use-var-anymore-f109a58b9b70).
If a variable will not be reassigned, use `const`:

```javascript
const myName = "Steve"; //const = constant meaning not changing

let day = "Wednesday"; //let can change. Today is Wednesday, tomorrow is Thursday
```

### Reserved keywords

Be careful when naming variables because there is a list of keywords that can only be used by the system because they have special meaning.

| Words   |          |          |            |
| ------- | -------- | -------- | ---------- |
| break   | case     | catch    | class      |
| const   | continue | debugger | default    |
| delete  | do       | else     | export     |
| extends | finally  | for      | function   |
| if      | import   | in       | instanceof |
| new     | return   | super    | switch     |
| this    | throw    | try      | typeof     |
| var     | void     | while    | with       |
| yield   |          |          |            |

### Data Types

Variables can contain many different kinds of values—for example, the time of day, a dollar amount, or a person’s name. A data type is the specific category of information that a variable contains. The concept of data types is often difficult for new programmers to understand; in real life people don’t often distinguish among different types of information. If someone asks someone for their name, age, or the current time, they don’t usually think that name is a _string_ or that their age or time are _numbers_. In JavaScript, a variable’s data type is important because the it determines how much memory the computer allocates for the data stored in the variable. The data type also governs the kinds of operations that can be performed on a variable.

### Primitives

A _primitive_ is data type that is not an object and has no methods. There are six primitive data types: _string, number, bigint, boolean, undefined, and symbol_. There also is `null`, which is seemingly primitive, but is a special case [[2]](https://developer.mozilla.org/en-US/docs/Glossary/null).
All primitives are immutable, meaning, they cannot be changed. For example, the _string_ `let name = "Vets Who Code"` can be either return a new string or can be reassigned.

```javascript
//Immutable. Return a new string
let name = "Vets Who Code";
let newName = name.replace("V", "v");
console.log(newName);
//"vets who code"

//Will not work:
let name = "Vets Who Code";
let name = name.replace("V", "v");
console.log(name);
//SyntaxError: Identifier 'name' has already been declared

//Not immutable example:
let name = "Vets Who Code";
name.toUpperCase();
console.log(name);
//"Vets Who Code"
// name variable was not mutated

//Reassigning a string
let name = "Vets Who Code";
name = "VWC";
console.log(name);
// "VWC"
```

#### Strings

Strings represent values that hold text like sentences or words.

Word
`let word = "warrior";`

Sentence
`let sentence = "Some people spend an entire lifetime wondering if they made a difference in the world. The Marines don't have that problem."`

Strings only have one property: `length`.

Strings have many many methods. They can be changed from lower case to uppercase, made bold, concatenated, replaced, iterated over and a plethora of other methods. They all can be found [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#).

#### Numbers

Numbers are numeric data type — numbers between -2<sup>53</sup> − 1 and 2<sup>53</sup> − 1. That's a pretty big number. Open up a browser then the console. In the console type `console.log(Number.MAX_SAFE_INTEGER)`. What number was it? It's pretty big! Anything larger than that you would want to use `BigInt` to represent your number.

Numbers can be written like this:

```javascript
let number = 5;
let age = 40;
const year = 2020;
let distance = 50;
```

#### BigInt

`BigInt` is a built-in object that provides a way to represent whole numbers larger than 2<sup>53</sup> - 1 or numbers smaller than -(2<sup>53</sup>-1), which are the largest and smallest numbers JavaScript can reliably represent with the `Number` primitive.

There is a limitation on largest possible integer because of how JavaScript represents number internally. It uses a 64-bit double-precision floating point number. Why can `Number` only represent 53-1 bits as opposed to 64 bits, as one would imagine? It is because 1 bit is reserved for the _sign_ and the rest are reserved for the _exponent_.

![Double Floating Point Format](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/IEEE_754_Double_Floating_Point_Format.svg/618px-IEEE_754_Double_Floating_Point_Format.svg.png)

A _BigInt_ is created by appending `n` to the end of an number or by calling the constructor `BigInt(number here)`.

```javascript
let bigNum = 100n;
let anotherBigNum = BigInt(200);
```

Here's an example of why `BigInt` is used:

```javascript
const maxInteger = Number.MAX_SAFE_INTEGER;

console.log(maxInteger + 1); //9007199254740992
console.log(maxInteger + 2); //9007199254740992 ??
console.log(maxInteger + 3); //9007199254740994

const maxIntegerBigInt = BigInt(maxInteger);

console.info(maxIntegerBigInt); // 9007199254740991n
console.info(maxIntegerBigInt + 1n); // 9007199254740992n
console.info(maxIntegerBigInt + 2n); // 9007199254740993n
console.info(maxIntegerBigInt + 3n); // 9007199254740994n
```

With `BigInt` we can reliably calculate the larger numbers.

> ##### Something to think about
>
> Open your browser then go to the console. Type:
>
> ```javascript
> 0.1 + 0.2;
> ```
>
> What was the result? Why?

#### Boolean

Boolean is a data type that has only two values: `true` or `false`. Think of a Boolean value as being yes or no or on or off. Boolean values are most often used for deciding which code should execute and for comparing data. In JavaScript, only use the words `true` and `false` to indicate Boolean values.

```javascript
let isLightBulbOn = true; // 💡;
```

> ##### Exercise
>
> Which one of these will evaluate to `true`?
>
> ```javascript
> 2 == "2";
> 2 === "2";
> ```

#### Undefined

A variable that has not been assigned a value has the value `undefined`. Undefined has no properties or methods, meaning you cannot execute anything against it.

```javascript
let x;
console.log(x) //undefined
console.log(type of x) //undefined
```

#### Symbols

The latest version of JavaScript introduced _Symbols_. _Symbols_ are tokens that serve as unique IDs and are created using the function `Symbol()`. You can also give your _Symbol_ an optional `string` description like this: `Symbol("mySymbol")`. The thing about symbols is that each one that is created is unique so that:

```javascript
const symbol1 = Symbol();
const symbol2 = Symbol();
console.log(symbol1 === symbol2); //false
```

Symbols can be used as property keys:

```javascript
const KEY = Symbol(); // create new Symbol
let object = {}; // create empty object
object[KEY] = "lol"; // add Symbol to object
console.log(object[KEY]); // "lol"
console.log(object); // {Symbol(): "lol"}
```

There is much more to Symbols that can be read [here](https://2ality.com/2014/12/es6-symbols.html).

### Review Questions

1. Which is a primitive data type?
   1. Boolean.
   2. Integer.
   3. Floating Point
   4. Object.
2. How is a BigInt created?
   1. Appending `b` to the end of a number.
   2. Preceding a number with `big`.
   3. Appending `n` to the end of a number.
   4. JavaScript will automatically parse large numbers.
3. Which word below is a reserved keyword?
   1. switch.
   2. pop.
   3. not.
   4. lol.

In this lesson you have learned about the primitive JavaScript data types including undefined, null, number, BigInt, string, boolean, and symbol.

## Vets Who Code

Did you like what you read? Want to see more?
Let me know what you think about this tutorial in the comments below. As always, a [donation](https://vetswhocode.io/donate) to Vets Who Code goes to helping veterans, like myself, in learning front end development and other coding skills. You can donate here: VetsWhoCode or go [here](https://hashflag.shop/) to buy some Vets Who Code swag.

Thank you for your time!
