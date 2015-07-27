---
date: "2015-05-09T16:48:21+02:00"
draft: false
title: "Working with Icons"
menu: 
  menudesktop:
    parent: "desktop"
    weight: 110
categories:
  - "desktop-docs"
tags:
  - "Icons"
  - "Custom"
---

Balsamiq Mockups 3 includes the amazing [Font Awesome](http://fortawesome.github.io/Font-Awesome/) icon set. It contains over 500 icons in a wide range of categories that can be sized from very small to very large. It is also updated frequently and we plan to keep up with the updates whenever we release a new version of our product (_[more about why we switched here](http://blogs.balsamiq.com/product/2015/03/31/font-awesome/)_).

It should meet all your icon needs, but if not, you can [add your own icons](#custom) or [request new ones from Font Awesome](http://fortawesome.github.io/Font-Awesome/community/#requesting-new-icons).

![](http://media.balsamiq.com/img/support/docs/m4d/b3/icon-library.png)

Icons from previous versions of Balsamiq Mockups have been remapped to the new icons. Go [here to learn about using the old icons](http://support.balsamiq.com/customer/portal/articles/1908765#oldicons) in your Balsamiq Mockups 3 projects.

#### Adding icons via the UI Library and Quick Add [#](#uilib-quickadd)

Also new in Balsamiq 3, icons now have their own category in the UI Library so you can drag and drop them just like any other control.

![](http://media.balsamiq.com/img/support/docs/m4d/b3/icon-uilibrary.png)

Not only that, they show up in the Quick Add results, saving you time when searching by name or keyword.

![](http://media.balsamiq.com/img/support/docs/m4d/b3/icon-quickadd.png)

Icon search results are shown _below_ any UI controls that match the text you enter.

* * *

#### Adding and swapping icons via the Property Inspector [#](#inspector)

Some controls allow you to add icons to them (buttons, for example). You can do this from the [Property Inspector](http://support.balsamiq.com/customer/portal/articles/110114) in one of two ways: the icon search and the icon library dialog.

##### Icon search[#](#iconsearch)

If the control you selected support icons, you will see the icon search box in the property inspector. This works much like [the Quick Add tool](http://support.balsamiq.com/customer/portal/articles/109151#quickadd), just type a few letters from the name of the icon you are looking for and a list of suggestions will pop up as a grid of icons to choose from. Just click on the one you want to select it.

![](http://media.balsamiq.com/img/support/docs/m4d/b3/icon-search.png)

You can then size the icon from "XS" (16px) to "XXL" (128px). You can also rotate icons in 90 degree increments using the button next to the search box.

##### The Icon library dialog[#](#library)

If you'd like to explore all the icons that are available, click on the icon to the right of the icon search box.

![](http://media.balsamiq.com/img/support/docs/m4d/b3/icon-open-library.png)

This will bring up the icon library dialog, where you can browse the icons by category and preview them at different sizes. You can double-click an icon to select it immediately or click once to select and then click the "Select" button to add it.

![](http://media.balsamiq.com/img/support/docs/m4d/b3/icon-library.png)

Once you have selected an icon, you can resize it, rotate it or remove it via the Property Inspector.

* * *

#### Adding your own custom icons[#](#custom)

You can also add your own icons for use in your wireframes.

##### Adding via the icon library dialog

There are two ways to add custom icons to Balsamiq Mockups. One way is via the icon library dialog.

![](http://media.balsamiq.com/img/support/docs/m4d/b3/icon-import.png)

Select the Assets category at the bottom, then click the little plus button, select an image file and your image will be resized down to fit an existing icon size and copied to your assets.

##### Adding via Assets

The second way is to add icon files manually to your [assets](http://support.balsamiq.com/customer/portal/articles/110401). If you add an "icon_" prefix to each file name and drag them into your assets they'll also show up in the icon library and Quick Add searches.

![](http://media.balsamiq.com/img/support/docs/m4d/b3/icon-custom.png)

**Note:** Mac users can quickly add the "icon_" prefix to multiple files at once using the [batch rename tool in Mac OS X](https://support.apple.com/kb/PH19067?viewlocale=en_US&locale=en_US) (10.10 and higher).

The words you use in your filename after icon_ are used as the searchable keywords in the icon dialog. So the keyword would be "airplane" for the filename icon_airplane.png. You can string together a few labels to get synonyms for the icon. For example, if the file is named icon_bag briefcase portfolio.png, all of those words after icon_ will be searchable.

* * *

#### Using an existing set of custom icons[#](#packs)

There are a few icon sets that complement the hand-drawn style of Mockups. This [blog entry at Tips Blogger](http://www.tipsblogger.com/2009/11/30-awesome-hand-drawnsketch-icon-sets/) lists some more hand drawn icon sets that might be useful for this feature.

Some icon designers have even started creating icon packs that are compatible with our naming scheme. Here's [a list of the ones we know about](http://support.balsamiq.com/customer/portal/articles/135659#icons).

To use those icon packs, just unzip the icon images and drag them into your Assets [as described above](#assets). If you are using myBalsamiq, upload the icon files via the Assets dialog there.

* * *

#### Best practices for creating or preparing custom icons[#](#tips)

Mockups works with color and transparency, but icons you add may not turn out looking as you want them to if they're not prepared to work the way Mockups expects them to. Below are some tips to get the most out of your custom icons.

**Color**

*   Mockups uses black as a color for replacement at 100% opacity.
*   Icons that aren't created with black can have undesirable effects when colorized.
*   We recommend using black as the color for your icons.

**Transparent Areas**

*   Mockups colorizes the entire opaque area of the icon.
*   For best results, we recommend knocking out "white" areas of your icon using transparency. Transparent PNG works best.

The example below shows regular icons in the left column, a custom icon properly prepared with black fills in the middle column, and a custom icon that doesn't work as well in the right column. To fix the icon in the right column, the exclamation point should be made transparent, and the icon color should be black.

![](http://media.balsamiq.com/img/support/docs/m4d/customicon-bestpractice.png)
