---
title: Preparing to Release
author: Daniel Williams
authorURL: https://twitter.com/DanielW094
authorImageURL: https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/23905637_10155516138994064_6909297686393900755_n.jpg?_nc_cat=104&_nc_ht=scontent-lht6-1.xx&oh=0da647cbbf726d75a4907434112a335d&oe=5CF34057
---

Hi there! Welcome to the first ever blog post about my Settings Manager. I've been working on this project for around six months now, and after spending quite some time grappling with feature creep and perfectionism, I've finally got to a place where I believe I have a minimum viable product. Now don't get me wrong, there's a ton of things I'm not quite happy with, things I'd like to improve or change, features I'd like to add or flesh out - but I believe that what I have now is enough to be really useful. I think it's pretty cool, and I figured I'd just take this opportunity to talk a little bit more about the project, how it came about, and the upcoming release.

<!--truncate-->

Around seven months ago I was working on a [personal project](https://sharploris.itch.io/robot-factory), and I was kind of hitting a wall with the part I was working on. I needed to take a break, but I was worried that if I did then I would get distracted and not continue working. I decided to take a break by spending some time working on a settings menu for my game - it's a fairly simple thing, but it's one that I feel gives the impression of polish in a game. It's not uncommon for Unity games to launch without any kind of settings menu in game, and I suspect that this is in part due to the time taken to develop one just not being worth it to a lot of indies. 

After I spent some time working on a settings menu for my game, it occurred to me that what Unity provides out of the box in this regard is fairly sparse. They provide the [PlayerPrefs](https://docs.unity3d.com/ScriptReference/PlayerPrefs.html) interface to allow the saving of values to a disk, but that's pretty much it. I saw the potential for a general framework that allows the settings for a game to be configurable in the Editor, easy to reference in scripts, and easy to build UI's around. So after much thought, I figured I might as well be the one to make it!

I set out with the following goals:
- Allow settings to be configured by the developer entirely in the editor with no additional code
- Allow setting values to be referenced by the developer in their scripts as easily as they can with PlayerPrefs
- Create a UI framework that allows settings menus to be built entirely in Editor by people with no coding knowledge
- Make it as extensible as possible so that custom UI elements can very quickly be integrated with almost no code

I'm happy to say that after around six months of work, I feel that I've met all of these goals. I have a notebook full of ideas about where I could take it next, but I've reached a place where to do so without external feedback would just be a waste of time. It doesn't really matter what I think the issues are - I need to get it out to end users and see what people think. So that's what I'm doing; I'm getting ready to release it.

Currently I'm in the progress of writing some comprehensive documentation. As of writing I have written two pages - **The Basics** and **Core Concepts**. The Unity Asset store requires that documentation be provided before they accept, so once I have the required amount of documentation I will be submitting it to them for approval. After that I will continue to flesh out the documentation available here, make some tutorial videos for people that prefer that, and we'll see where things go from there!

I'm really hopeful that there are people out there that will find this useful. If all goes to plan, it'll be in their hands soon.

**_Note: The irony of all of this is that yes; I did end up getting sidetracked and working on this instead of that personal project that kicked it all off. I hope to get back to it eventually!_**
