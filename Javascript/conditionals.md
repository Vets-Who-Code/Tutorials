# Conditional Statement

## The Basics

When writing a computer program, often different sets of statements need to execute depending on some criteria. For example, a program may need to execute one set of instructions in the morning and another set at night or must execute when it’s running on a larger screen, like a desktop or notebook computer, and another when it runs on a smaller screen, like a tablet or smartphone. Special types of JavaScript statements used for making decisions are named conditional statements. The most common type of decision-making statement is the `if` statement.

Pseudo code of an `if` statement may look something like this:

```javascript
if (height is less than 48 inches){
    you cannot ride the roller coaster
}
```

The syntax for an `if` statement looks like this:

```javascript
if (condition) {
  statements;
}
```

The term `condition` is a conditional expression and `statements` are one or more executable statements. The `if` statement always starts with the keyword `if`, and the conditional expression must be enclosed within parentheses. While the braces are optional around a single statement, always including them is considered "best practice". If the condition being evaluated by an if statement returns a [truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy) value, then the statements within the command block are executed. After the command block executes, the program continues on to execute any code after the command block. If the condition instead evaluates to a [falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy) value, the `if` statement command block is skipped, and the program continues on to execute any statements after the command block.

```javascript
if (age < 21) {
  return "You are not old enough to drink";
}
```

The above covered the `if` statement which executes if the condition evaluates to a _truthy_ value. Most times, if a condition evaluates to _falsy_ then you want another set of conditions to execute. This is accomplished using an `else` statement.An `if` statement with an `else` is named an _if/else statement_. Building on the above code it might be written like this:

```javascript
if (age < 21) {
  return "You are not old enough to drink";
} else {
  return "What would you like to drink?";
}
```

---

> ### Something to think about
>
> What is a ternary?
---
> ### Exercise
> Open a browser.
> Open the [developer console](https://support.airtable.com/hc/en-us/articles/232313848-How-to-open-the-developer-console).
> 
> Write an if/else statement with the following condition:
> 
> If the variable age is greater than 18, output "Old enough to serve your country", otherwise output "Too young to serve!".
>
> [Answer](https://repl.it/@gixxerblade/conditional-exercise-1)
---
## Multiple Conditions

With JavaScript different conditions can be tested with "or” or “and” statements, to test whether either statement is true, or both are true.

For example:

```javascript
if(time > midnight && time < noon){
  return "Good morning!"
}
```

It can also be combined with an `else...if` statement. An `else...if` statement allows multiple conditions to be tested and is named a nested statement.

```javascript
if (time > 0600 && time < noon){
  return "Good morning!"
}
else if (time > 1800 && time < 2200){
  return "Good evening!"
}
else if (time > 1200 && time < 1800){
  return "Good afternoon"
}
else (time < 0600 && time > 2200){
  return "I'M SLEEPING!!"
}
// The final else will return all statements that were going to be false.
```

> ### Exercise
> Write an `else...if` statement that gives a student a grade based on their score using the following scale:
> 'A' greater than or equal to 90
> 'B' greater than or equal to 80 but less than 90
> 'C' greater than or equal to 70 but less than 80
> 'D' greater than or equal to 60 but less than 70
> 'F' is anything else
> [Answer](https://repl.it/@gixxerblade/conditionals-exercise-2#index.js)

## Switch Statements

Another JavaScript statement used for controlling flow is the `switch` statement. A `switch` executes a specific set of statements, depending on the value of an expression. It compares the value of an expression to a value contained within a special statement called a `case` label. A `case` label in a `switch` statement represents a specific value. Each `case` label is followed by one or more statements that are executed if the value of the `case` label matches the value of the switch statement’s expression. The syntax for the `switch` statement is as follows:

```javascript
switch(expression){
  case label:
    statements;
    break;
  case label:
    statements;
    break;
  default:
    statements;
    break;
  // Don't forget the break statement!
}
```
Now let's rewrite our previous [exercise](#blockquoteanswerblockquote) using a `switch` statement:

```javascript
// Set the student's grade
const grade = 87;

switch (true) {
    // If score is 90 or greater
    case grade >= 90:
        console.log("You got an A");
        break;
    // If score is 80 or greater
    case grade >= 80:
        console.log("You got a B");
        break;
    // If score is 70 or greater
    case grade >= 70:
        console.log("You got a C");
        break;
    // If score is 60 or greater
    case grade >= 60:
        console.log("You got a D");
        break;
    // Anything 59 or below is failing
    default:
        console.log("You got an F");
}
```

Try that in the developer console and compare.