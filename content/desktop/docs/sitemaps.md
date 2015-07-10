+++
date = "2015-05-09T16:59:07+02:00"
draft = false
title = "Working with Site Maps"
weight = 150
categories = ["Mockups for Desktop Docs"]
+++

You can create simple site maps from a text outline using the Site Map control.

#### Create a Site Map [#](#create-sitemap)

Add a "Site Map" control from the UI Library to the canvas.

Edit the control by double-clicking or selecting it and pressing the Enter key.

Edit the outline to create parent-child relationships. Each line represents a box (or page/node) in your sitemap. Use hyphens to indent child boxes beneath a parent. Here's an example:

<pre>Home
- Products
-- Product 1
-- Product 2
- About Us\rCompany
- Support
- Blog
</pre>

This is what the outline above looks like:

![](http://media.balsamiq.com/img/support/docs/m4d/sitemap.png)

* * *

#### Notes and Options[#](#options)

*   Single Tree Support: Site Map expects the first line to be the top-most parent, and only one of these can exist because it only makes a single tree. If you want to make multiple trees, just add more Site Map controls.
*   Multi-Line Text: You can use \r to create line returns on text in a box like this: About\rUs
*   You can't resize Site Maps, but if you are unable to view the entire map on your canvas here is a suggestion for how you can show the entire map by showing one of the nodes expanded in a separate Site Map.

![](http://media.balsamiq.com/img/support/docs/m4d/sitemap-split.png)
