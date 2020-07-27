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



## Conclusion
