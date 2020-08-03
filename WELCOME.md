# Welcome to the VWC Tutorials Team 👋

### Below you'll learn about our team's standard operating procedures and how to get started.

Our mission is to create interactive and effective learning materials that support the #vetswhocode mission. These tutorials supplement the classroom work, similar to how the textbook supports a college course.

Our guiding principle is to put student experience first.



# Style and Writing

We follow the [Digital Ocean Technical Writing Guidelines](https://www.digitalocean.com/community/tutorials/digitalocean-s-technical-writing-guidelines). Below is a short summary:

## Style

### Comprehensive and written for all experience levels

Don't make any assumptions about the reader's background knowledge. Avoid words like “simple,” "straightforward,” "easy,” “simply,” “obviously,” and “just,” as these words do make assumptions about the reader’s knowledge.

### Technically detailed and correct

Every command and code block should have an explanation. Explain why things work and the way they work. We don't just want our students to know how to do something, we want them to understand.


### Practical, useful, and self-contained

Tutorials cover their respective topic entirely. By the end of the tutorial, the student will have a usable environment or examples to build upon.


### Friendly but formal

Since this is a veteran's group, we can have some inside jokes, but never let that detract from the learning objective. Write in the second person, as in "You will install npm globally..." It's also okay to write in the first person plural, as in "We will install..."


## Structure

- Title
- Introduction
- Prerequisites
- Step 1 - Do First Thing
- Step 2 - Do Second Thing
- ...
- Step n - Do Last Thing
- Concolusion


### Title

A typical title follows this format: How To "Accomplish a Task" with "Software" on "Distro". When you write your title, think carefully about what the reader will accomplish by following your tutorial. Try to include the goal of the tutorial in the title, not just the tool(s) the reader will use to accomplish that goal.

### Introduction

The purpose of the introduction is to motivate the reader, set expectations, and summarize what the reader will do in the article. Introduction length ranges from one to three paragraphs long. If you're having writer's block, answer these questions:

__What is the tutorial about?__
</br>
__Why should the reader learn this topic?__
</br>
__What will the reader do our create in this tutorial?__
</br>
__What will the reader have accomplished when they're done?__

### Prerequisites

The purpose is to spell out exactly what the reader should have or do before they follow the current tutorial. The format is a bulleted list that the reader can use as a checklist. Each prerequisite should link to a tutorial that explains how to accomplish that task. For instance, if the tutorial requires the use of npm, the prerequisite must link to a tutorial that explains how to install npm.

### Steps

Each step begins with a level 2 heading and use the gerund, which are -ing words.

Procedural tutorials should start each step title with the word Step and a number, followed by an em-dash:

> ## Step 1 – Creating User Accounts


 
All commands within a given step should be on their own line in their own code block. And be presented as follows:

> Insert the following line of code inside of the body tags of your index.html file in order to create a division with a paragraph inside of it.

```html
<div>
   <p>This is my div.</p>
</div>
```

> The div tag is used as a container for HTML elements - which can then be styled with CSS or manipulated with JavaScript. The p tag defines a paragraph of text.

If working in the command line, always include the directory information in the command and explanation:

> Start the node server by navigating to /myProject/server within the terminal and inserting the following line:

```
$ node server.js
```

> This command executes the code written inside the server.js file and initializes the server.

Display the output of commands and programs using a code block as well, like the following example:

> Run the hello.js program by entering the following command in the /myProject folder:

```
$ node hello.js
```

This command executes the codes within the hello.js file, and you’ll see the following output:

```
Hello world!
This is my first Node.js program!
```

### Conclusion
The Conclusion of your tutorial should summarize what the reader has accomplished by following your tutorial. Instead of using phrases like “we learned how to”, use phrases like “you configured” or “you built”.

The conclusion should also describe what the reader can do next.


## Formatting

If you are in doubt regarding how to format, please follow the formatting guidance at [Digital Ocean Formatting Guildines](https://www.digitalocean.com/community/tutorials/digitalocean-s-technical-writing-guidelines#formatting)


# Understanding Our Tech Stack

Our tutorials are written in GitBook using markdown. Interactive coding interfaces are created with the Vets Who Code repl.it classroom account and embedded within the GitBook tutorials. To find out what to do, you'll need to join the VWC Jira account to see the tickets describing tutorials that still need to be written.

If you're not supplied links to join these websites upon joining the team, ask a team member for the following:

- An invitation link to the GitBooks if you don't have one.

- Login details for the repl.it classroom.

- An invitation to the Jira account.

# Once Complete

Once you've completed your tutorial share the GitBook link with the group via the Slack channel. Once approved, the link will be added to the tutorial repo.
