---
date: 2015-05-09T16:46:35+02:00
title: "Working with Alternates"
menu:
  menudesktop:
    parent: desktop
weight: 70
tags:
  - "Alternates"
---

Alternates (also sometimes referred to as _versions_ or _branches_) allow you to create **variations on a single mockup design** without adding more mockups to your project.

Creating alternates can be useful during the early design phase when exploring concepts and in later stages for reviewers to add their feedback and propose changes.

Some possible reasons for using alternates:

*   You want to create only one mockup per screen but have several ideas about each one.
*   You want suggestions for design improvements but don't want other people changing your mockups.
*   You want to send your project around for feedback and track each person's feedback individually.
*   You want to try out new design ideas without including them in the mockups for the current release.

Here's an overview:

<div class="video"><iframe allowfullscreen="" frameborder="0" src="https://www.youtube.com/embed/495jKWV5rEY?rel=0"></iframe></div>

<br>

## Creating Alternates

When viewing a mockup without any controls selected you will see a section of the [Property Inspector panel](http://support.balsamiq.com/customer/portal/articles/110114) called **"Alternate Versions"** below the notes for that mockup.

![](http://media.balsamiq.com/img/support/docs/m4d/b3/alternates-new.png)

To create a new alternate **click the "+" (plus) icon** next to "Alternate Versions"

![](http://media.balsamiq.com/img/support/docs/m4d/b3/alternates-create.png)

or use the context menu in the [Navigator panel](http://support.balsamiq.com/customer/portal/articles/109151#filebrowser).

![](http://media.balsamiq.com/img/support/docs/m4d/b3/alternates-create-navigator.png)

This will create a **copy of the current mockup as an alternate version** for you to modify. By default it will automatically be named with the word "Alternate" follwed by some random numbers and letters to ensure that the name is unique.

![](http://media.balsamiq.com/img/support/docs/m4d/b3/alternates-default.png)

**The selection in the alternate versions list tells you which version of the mockup you are working on.** You can create as many alternates as you'd like.

**Note:** You can create an alternate of an alternate. Clicking the "+" (plus) icon when an alternate is selected creates an alternate of the selected version rather than the official version.

If you are working on an alternate version it is also indicated in the [Navigator panel](http://support.balsamiq.com/customer/portal/articles/109151#filebrowser) by the mockup name followed by the alternate name in parentheses.

![](http://media.balsamiq.com/img/support/docs/m4d/b3/alternates-default-navigator.png)

To **rename** the alternate double-click on the name in the alternates versions list or use the context or right-click menu and select "Rename..."

![](http://media.balsamiq.com/img/support/docs/m4d/b3/alternates-menu.png)

* * *

## Editing Alternates

Once you have created an alternate version you can edit it just like any other mockup, including adding assets and symbols. Changes that you make **will not affect the original mockup** (shown as the Official Version). You can also add notes in the notes panel for the alternate to describe your thoughts on it or communicate to others about it.

![](http://media.balsamiq.com/img/support/docs/m4d/b3/alternates-testimonials.png)

To switch between alternate versions of a mockup select the name of a version from the list in the properties panel or from the context menu in the Navigator panel. You may also switch back to the Official Version by selecting it in the list.

![](http://media.balsamiq.com/img/support/docs/m4d/b3/alternates-menu-navigator.png)

**Note:** If you [link](http://support.balsamiq.com/customer/portal/articles/111742) to a mockup that contains an alternate the link will go to the version of the mockup that is selected in the alternates list. The same rule applies to [exporting](http://support.balsamiq.com/customer/portal/articles/111730). The selected versions of your mockups will be exported.

* * *

## Promoting Alternates

If you decide that you like one alternate better than the original mockup you can "promote" it to the official version, which replaces and overwrites the original.

![](http://media.balsamiq.com/img/support/docs/m4d/b3/alternates-promote.png)

**Note:** You can undo this action by using the undo command (CTRL/CMD+Z) **three times**.

The alternate that was promoted is retained in case you want to preserve it as part of the change history. Otherwise you can [discard](#discarding) it.

* * *

## Merging Alternates

If you want to combine parts of an alternate with the official version, you can use the merge option.

![](http://media.balsamiq.com/img/support/docs/m4d/b3/alternates-merge.png)

Selecting "Merge with Official" will add the contents of the selected version to the official version, to the right of the mockup contents, as shown below.

![](http://media.balsamiq.com/img/support/docs/m4d/b3/alternates-post-merge.png)

If the notes in the alternate are different than the notes in the original, they will also be merged, separated by a dashed horizontal line.

![](http://media.balsamiq.com/img/support/docs/m4d/b3/alternates-post-merge2.png)

You can then manually edit the contents to create a new official version that is a combination of the preferred elements of each version.

![](http://media.balsamiq.com/img/support/docs/m4d/b3/alternates-final.png)

* * *

## Discarding Alternates

When you have finished reviewing or integrating alternate versions into an official version you can delete alternates you no longer want using the "Discard" option.

**Note:** Alternates cannot be recovered after they have been discarded.

* * *

## Project Alternates

In some cases you might want to **propose a set of alternate designs across several mockups**. This might happen if you are reviewing someone else's mockups and want them to see your proposed design changes throughout the project.

When you rename an alternate you can choose from a list of existing alternate names in the rename dialog. This makes it easy to use the same alternate name in several mockups.

![](http://media.balsamiq.com/img/support/docs/m4d/b3/alternates-rename-from-list.png)

In the Navigator panel next to the word Mockups a menu shows the **names of all alternates that appear in your project**.

Selecting an alternate from this list will **select that alternate in _all the mockups_ that have an alternate with that name**.

![](http://media.balsamiq.com/img/support/docs/m4d/b3/alternates-mockups-menu.png)

**Note:** This is conceptually similar to creating a branch in a codebase, except that it only applies to mockups that have specific alternate version names.

So, for example, if you create a series of alternates called "Leon's Proposal" and use the context menu shown above to select that name, any mockup with an alternate called "Leon's Proposal" would switch views to that alternate version.

Mockups without an alternate with that name would not be updated. Promoting, merging, and discarding actions are not available across multiple mockups at once.
