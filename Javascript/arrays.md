# Arrays

## Introduction

In JavaScript an array is a data type that is a list like object. In it's simplest form, an array is a list. A grocery list is an example of an array:

---

> ### Grocery List
>
> 1.  Eggs
> 2.  Milk
> 3.  Butter
> 4.  Cheese
> 5.  Bread

---

Using the list above we can see that an array has several characteristics that set it apart from other data types.

- It's in an order. It goes from 1, 2, 3, 4, 5... for as long as we need to make it.
- It has identifying keys. The grocery list has item #1: Eggs, Item #2: Milk. The keys would be #1, #2, #3, etc.
- It has a specified length. We can see that the list above has a length of five items.
- It can hold any value we want to put in it. We can add another item to the grocery list above and make it anything we want to:

> 6. Stop by the gas station and buy gas.

- Any value can be mutated (changed):

> 2. ~~Milk~~ 2% Milk

- And we can remove any item we want.

> ### Grocery List
>
> 1.  Eggs
> 2.  Milk
>     ~~3. Butter~~
> 3.  Cheese
> 4.  Bread

## Declaring an Array

There are a couple of ways to declare an array in JavaScript:

```javascript
let arr = new Array();
//declares empty array
let arr = [];
//also declares empty array
let newArr = new Array(100);
// declares an empty array, 100 elements long [empty × 100]
```

Most of the time an array is declared with its elements included:

```javascript
let branchOfService = ["Marines", "Navy", "Air Force", "Army"];
let colors = ["red", "blue", "orange", "green"];
```

But it can be declared like this:

```javascript
let arr = new Array(1, 2, 3);
console.log(arr);
// [1, 2, 3]
```

Array indexes in JavaScript are zero based. The first element in the array is 0, the second is 1, and so on. Think of it as the amount of elements that need to be skipped to reach the element needed.
Array elements are also separated by a comma.

```javascript
console.log(branchOfService[0]); //"Marines"
console.log(branchOfService[1]); //"Navy"
console.log(branchOfService[2]); //"Air Force"
console.log(branchOfService[3]); //"Army"
```

Array elements can mutate:

```javascript
let branchOfService = ["Marines", "Navy", "Air Force", "Army"];
branchOfService[1] = "Coast Guard";
console.log(branchOfService);
// ["Marines", "Coast Guard", "Air Force", "Army"]
```

You can also add elements to an array:

```javascript
let branchOfService[4] = "Navy"
console.log(branchOfService)
// ["Marines", "Coast Guard", "Air Force", "Army", "Navy"]
```

## Array properties

### Length

```javascript
console.log(branchOfService.length);
// 5
```

The length property can be used to shorten an array:

```javascript
branchOfService.length = 4;
console.log(branchOfService.length); // 4
console.log(branchOfService);
// ["Marines", "Coast Guard", "Air Force", "Army"]
// Notice "Coast Guard" was removed.
```

The length of an array can also be extended by declaring its length longer, but it will not be iterable:

```javascript
branchOfService.length = 7;
console.log(branchOfService);
//["Marines", "Coast Guard", "Air Force", "Army", <3 empty elements>]

// Empty elements are not iterable
branchOfService.forEach((service) => console.log(service)); //"Marines", "Coast Guard", "Air Force", "Army"
```

### Constructor

The constructor property returns a reference to the Object constructor function that created the instance object, in this case an array.
In the case of arrays, it used to determine whether an item is an array or not.

```javascript
branchOfService.constructor;
// returns function Array() { [native code] }
```

A practical use could be returning true if it's an array or false if is not.

```javascript
if (branchOfService.constructor === Array) {
  return "Thank you for your service";
}
// "Thank you for your service"
```

## Manipulating Arrays

There are over thirty different methods available to manipulate an array in some fashion or another. This lesson will get you started but all of them can be accessed on the [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array).

Here are the most common ones that are used:

### Loop over an array

There are several ways to iterate through an array. Two of them are methods of arrays. The first one is `forEach`

#### `forEach`

The `forEach` method executes a function once for each array element.
It provides a `callback` function once for each element and can be called with three arguments: the element, the array index, and the array itself. The index and array arguments are optional but the element argument is required for the method to run.

```javascript
let array = ["milk", "eggs", "butter", "cheese"];
array.forEach(function (item, index, array) {
  console.log(item, index);
});
// milk 0
// eggs 1
// butter 2
// cheese 3
```

#### `map`

The `map` method creates a new array and executes a function once for each array element.

```javascript
let numbers = [1, 2, 3, 4, 5];
let plusOne = numbers.map(function (num) {
  return num + 1;
});
console.log(plusOne);
// [2, 3, 4, 5, 6]
```

#### Exercise

> Write a function called "multiplyByTwo"
> Given an array, multiply every element by two using the Array.map >method. It should return the array of elements multiplied by two.
>
> Example output:
> `console.log(multiplyByTwo([1,2,3,4])); // --> [2,4,6,8]`

https://repl.it/student/submissions/13529445

## Add/Remove items from an array

When you work with arrays, it is easy to remove elements and add new elements.

### Queue

A queue is a very common operation in computer science (CS). When referring to arrays it means removing the first element and adding to the end. To do each operation we have `shift` to remove from the front and `push` to add an element to the back of an array. It follows the principle of First In First Out or FIFO.

#### shift

The `Array.shift()` method removes the first item from an array.

```javascript
let items = ["canteen", "pack", "helmet", "gloves"];
items.shift();
console.log(items);
// ["pack", "helmet", "gloves"]
// Removed the first element from the items array
```

#### push

The `Array.push(item)` adds an element to the end of the array.

```javascript
let items = ["canteen", "pack", "helmet", "gloves"];
items.push("boots");
console.log(items);
// ["canteen", "pack", "helmet", "gloves", "boots"]
// Added the element "boots" to the end of the items array
```

### Stack

A stack is another CS operation but instead of removing from the front and adding to the rear, we add to the front and remove from the rear. `unshift` to add to the front and `pop` to remove from the back of an array. This principle is known as Last In First Out. Imagine a stack of records. You add one to the top and pull from the bottom.

#### unshift

Probably the least descriptive word for an array method is `unshift`. It is opposite of `shift`. So instead of removing this method adds to the front of an array. `unshift` will reallocate memory by rewriting all of your other indexes so it is very performance intensive with large arrays.

```javascript
let items = ["canteen", "pack", "helmet", "gloves"];
items.unshift("boots");
console.log(items);
// ["boots", "canteen", "pack", "helmet", "gloves"]
// Added the element "boots" to the beginning of the items array
```

#### pop

`pop` removes an element from the end of the array.

```javascript
let items = ["canteen", "pack", "helmet", "gloves"];
items.pop();
console.log(items);
// ["canteen", "pack", "helmet"]
// Removed the element "gloves" to the end of the items array
```

### Exercises

1. Add an element to the front of an array. https://repl.it/student/submissions/13542330

2. Add an element to the back of an array https://repl.it/student/submissions/13542338

3. Remove from the end of an array https://repl.it/student/submissions/13542354

4. Remove an element from the front of an array https://repl.it/student/submissions/13542369

## Conclusion

During this lesson the basics of arrays were covered. There is a lot more that this lesson does not cover. The best resource for finding out more about arrays and array methods is MDN, more specifically, this page: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
