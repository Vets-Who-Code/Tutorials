![VWC Github Banner](https://i.ibb.co/Btmxs4q/vwc-github.png)

# Git

## Introduction

In Vets Who Code we have a pretty solid [curriculum](https://github.com/Vets-Who-Code/Curriculum) where we teach from the basics to the more advanced. Week 1 of training involves the command line, VS Code, Markdown, and Git. This tutorial is on the basics of Git.

Git is a distributed version control and collaboration system that tracks changes in code during development. It hosts repositories of your code so that you can see what changes you have made and allows you to go back to a previous version. It also allows you to share code to allow collaboration on projects. In this tutorial we are going to be talking about [Github](www.github.com), one of the more ubiquitous repository hosting systems.

## Requirements

1. A [Github](www.github.com) account
2. A code editor. I recommend VS Code. VS Code is [VWCs](www.vetswhocode.io) primary text editor. Download it [here](https://code.visualstudio.com/download) and play around with it to become familiar since you will spend many hours in this environment.

## Table of Contents

- [Git](#git)
  - [Introduction](#introduction)
  - [Requirements](#requirements)
  - [Table of Contents](#table-of-contents)
  - [Create a Repository](#create-a-repository)
  - [Clone Your Repo Locally](#clone-your-repo-locally)
  - [Create a New Branch](#create-a-new-branch)
  - [Make, Add, Commit, and Push Changes](#make-add-commit-and-push-changes)
  - [Making a Pull Request](#making-a-pull-request)
  - [Wrapping it up](#wrapping-it-up)
  - [Vets Who Code](#vets-who-code)

## Create a Repository

When I am starting a new project, one of my first steps is creating a repository (repo) to organize my project.

To create a repo, go to your Github account and click "Repositories". It is the second tab on the top of the page next to your profile image.

![repo location](https://i.ibb.co/Rb8xvgv/02-repo-location.png)

Click the green button labeled "New".

Then fill out the "Repository name", "Description", make sure "Public" is checked, "Initialize this repository with a README" is checked, then "Create repository"

![create repo](https://i.ibb.co/0nq1HwK/03-create-new-repo.png)

You just created your first repo!

## Clone Your Repo Locally

In the previous section we created a repo which is good. Next we want to make a local copy on our computer so that we can make changes to it.

1. In your newly created Github repo click the green button labeled "Clone or download".
2. Copy the link. It looks like `git@github.com:your_username/your_repo_name.git`
3. Open up VS Code
4. In the menu go to `View > Terminal` to open a new command line. (Or CTRL + ` in Windows) ![Clone Repo](https://i.ibb.co/9NTPSKR/04-clone-repo.png)
5. Type `git clone <your repo you just copied>` then Enter. Your result should look like this: ![clone result](https://i.ibb.co/mvcc6Tz/05-clone-terminal-result.png)
6. Then change directory to that newly created directory you created by typing `cd <name of your repo>`

## Create a New Branch

Recently, I was working on the [Vets Who Code website](www.vetswhocode.io) when we talked about adding a blog to it. There are some very talented veterans on our team that are very capable of creating a blog very easily but I also wanted to try my hand out on it. Instead of writing to the original codebase, I "branched" off my own codebase and began writing my own version of the blog for our site. When I was done I sent my branch to the kind people at Vets Who Code by making a *pull request*. Don't worry, we'll talk about *pull requests* later.

![new branch](https://i.ibb.co/1JBjVg1/06-new-branch.png)

As you can see from the image above, I made a new branch off of the original code so I had a fresh copy of the updated code. That way I could work on the a version of the repo without messing up the original repo.

When you clone a repo, you are cloning the *master* branch. For good practice, I was always taught to never work on the master branch but always work on another branch. The master branch should represent the 'stable' version of your code. Use branches to experiment with new features (like a blog in the example above), implement them, and when they are stable, you can merge them back to the master branch.

1. Open up VS Code again.
2. Open a terminal and then type `cd <name of your repo>`
3. Type `git checkout -b <name-of-your-new-branch>`
4. Type `git branch`. You should be left with this:

![git branch](https://i.ibb.co/ZcBj2BQ/15-git-branch.png)

You're doing great! You've just created a new branch you can work on, independent of the *master* branch.

## Make, Add, Commit, and Push Changes

In the last section we created a new branch. Now we want to make changes to this branch, then add these changes to our working tree, commit those changes to our files, then push those changes to our online Github branch. Here's how we're going to do it:

1. In your terminal, type `code README.md`. This will open the editor portion for you to edit. 
2. Add a comment to your `README.md`. ![readme edit](https://i.ibb.co/WGMsJ0P/07-readme-make-changes.png) 

As you can see we added one single line of text. VS Code is already tracking this change. See that green line next to your text? That's telling you that you've made changes to the document. It shows that we've changed two lines (denoted with the `+` sign); we've added the text and we've added one empty line.

![changes tracked](https://i.ibb.co/4fDb4Cr/08-readme-make-changes-tracked.png)

3. Go back to your terminal and type `git add README.md`. Again, we adding this file to our working tree of changed items.
4. Type `git commit -m "Added one line of text to README.md"`. The commit command stages all the files you added. The `-m` flag followed by quoted text is a short synopsis of those changes. 
5. Type `git status`

![git status](https://i.ibb.co/Xz8MVv9/16-git-status.png)

As you can see we received several messages from these two commands. First, the message shows us we are on the `develop` branch with a unique serial number. Then it shows that we changed one file (README.md) and made two insertions: the one line of text and the one empty line when we hit return. That unique number is just a portion of a longer number. 

6. Type `git log`

![git log](https://i.ibb.co/LtKN5ZB/17-git-log.png)

From the `git log` we can see the full history of commits we have made on this one repository which is helpful if you are running into *merge* problems down the road. It also shows the entire unique commit number, in this case `9c2e9abe44d48b9be159fc244758251545161786`.

7. Type `git push`. Uh-oh, we seem to have a `fatal error`. At least git is smart and helps us find a solution to the error.

![git push error](https://i.ibb.co/Fbt8Yx6/18-git-push.png)

8. Type `git push --set-upstream origin develop-branch`.

![git push set upstream](https://i.ibb.co/tQL2jMx/19-git-push-set-upstream.png)

What we just did is change our remote origin from *master* to *develop-branch*. Just that simple. Now if you go to https://www.github.com/your-username/your-repo ~~you will see that it is now updated online and it reflects the changes you made locally, on your computer.~~ No it isn't updated. What is going on? Let's find out in the next section.

## Making a Pull Request

A pull request is a request to merge a branch that is **not** the master branch. A recap, earlier we created a new branch named `develop-branch` so we could make changes to a document independent of the original work or master copy of the document. Now we are going to **merge** these changes with the original work: 

1. Go to www.github.com/your-username/your-repo and click on **New pull request** button.

![New pull request](https://i.ibb.co/Mc7xGhJ/09-pull-request-button.png)

2. On the next page, right below the **Compare changes** heading where it says `base: master` <== `compare:master`, select the `compare:master` dropdown and select `develop-branch`. 

![compare-develop](https://i.ibb.co/34LbSRh/10-pull-request-compare-changes.png)

What we are doing is comparing the `develop-branch` to the `master` branch and to let Github see what changes were made.

![able to merge](https://i.ibb.co/Fqv1NgH/11-able-to-merge.png)

As you can see, we are able to merge these two branches/documents together without any weird behavior.

3. Click the green button labeled **Create pull request** and see the results.

![success](https://i.ibb.co/3S65kYh/12-create-pull-request-success.png)

>**This branch has no conflicts with the base branch**
>Merging can be performed automatically.

4. Finally, click the **Merge pull request** button then the **Confirm merge**.

![pull request success](https://i.ibb.co/Hg95CxH/13-successful-merge-pull-request.png)

✅ Success!

5. Two things here. You can either delete the **develop-branch** here or keep it. I recommend keeping it, only because it can be a regularly used branch to make small changes to a project. If it was a branch named **feature/add-blog** you could safely delete it because once a feature is merged to the main codebase, you won't be using it anymore, just creating new branches to fix bugs. At any rate, you can see your work if you go back to the main page of your repo: 

![result of merge](https://i.ibb.co/hXmSPhm/14-result-of-merge.png)

Congratulations, you finished, now go out and build and conquer your world.

Do you want a real world test of your newly acquired skills? Wait for part two of this tutorial where we learn how to fork a project, make changes, then make a pull request. You also get a free sticker for your efforts.

## Wrapping it up

Don't worry if you're a little lost. I just wanted to fully explain the functionality of everything instead of just blasting an answer at you. I figure working things out is the best way to learn a concept. It was really a short project that I learned a tremendous amount from. I am sure there is going to be some experts coming on here telling me I could've done it better this way but as I am a new at these concepts, I figured it out this way, and with more experience and practice I will find better ways to do things.

## Vets Who Code

Did you like what you read? Want to see more?
Let me know what you think about this tutorial in the comments below.
As always, a donation to [Vets Who Code](https://vetswhocode.io) goes to helping veterans, like myself, in learning front end development and other coding skills. You can donate here: [VetsWhoCode](https://vetswhocode.io/donate)
Thank you for your time!
