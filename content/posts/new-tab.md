---
title: in search of a new tab
date: 2024-01-04
---

A few months ago my friend [Eli](https://twitter.com/elzr) was sharing his screen and opened a new tab on his browser. Instead of the usual inspirational quote or clock extension, commonly-visited tabs, or my personal pet peeve - recent breaking news articles and photos from disaster zones - his new tab was a map of his internet and most important documents:

{{<figure src="/new-tab/Pasted image 20240104125515.png">}}

I was enthralled: it was the most useful thing I've ever seen on a new tab page, completely personalized to his needs and his perspective on the internet. Some specific things I think warrant attention:

- **desire paths to bypass attentional traps**: a common occurrence is going to youtube for a DJ set to listen to get and getting sucked in by a youtube on the home page
- **remote and local destinations**: many common apps support deeplinks, meaning a link can go straight to a specific file in Bear or Obsidian, or opening a specific project in VS Code
- **personal styling**: some things are bold, others have a background, and others are faded depending on relevant and context
- **inline widgets**: a form to search [archive.is](https://archive.is), timezone displays, and stopwatch timers

Inspired, I made my own, with some changes:

{{<figure src="/new-tab/Pasted image 20240104130118.png">}}

Some key points:

- **locally edited, synced through iCloud**: I want this to work even when my internet cuts out, and I have multiple devices I often use. Hence; a local HTML file that syncs to my devices through iCloud. 
	- the file lives at `/Users/jonbo/Library/Mobile%20Documents/com~apple~CloudDocs/Start%20Page/START.html`
- **deeplinks to [Obsidian](https://obsidian.md/)**: for example, the `#dailyjam` opens up search with the most recent version of that tag, `today's notes` opens up the respective daily note file, and `next patch notes` opens a file of that name
- **deeplinks to [Cursor](https://cursor.sh/)**: if the project is already open, it foregrounds it. annoyingly if it is not open, it'll open it with my foregrounded project. 
- the `gathern@jonbo-m2-mini` link opens up an SSH terminal session
- the `▸ backburner` toggle has another set of projects that aren't top of mind right now, but I want ready access to when I shift my attention to them

## why this is helpful

- it reminds me of what I want to be thinking about. each new tab feels like a choice: do I want to further my goals, or do I want to get distracted into a rabbit hole on the internet. both are great! but I'm stacking the deck a little bit in my favor each time I see the things I'm excited about
- unlike bookmarks, which tend to get buried pretty quickly and are simple folder structure, the layout is more freeform and fits better to the content of the thing 
- many times I have a vague sense there's something I want to fix or change, but the though of finding the logs from the deployment, finding the database panel or remembering the SSH destination pose friction to going and doing that thing. I find this helps me work through that

## create your own new tab

- [Chromium Extension](https://chrome.google.com/webstore/detail/custom-new-tab-url/mmjbdbjnoablegbkcklggeknkfcjkjia) to set a local HTML file or a remote URL as the new tab page
- [source code](https://gist.github.com/jborichevskiy/460bc2a6c67d9ccfff3c9bfc2751f495) for my start page

## explorations & next steps

- making it easier to edit the links and structure without editing raw HTML. Eli and I are discussing fun possibilities here, stay tuned!
- a markdown note-taking panel that syncs across tabs and devices
- auto-populate with recent tags from my Obsidian vault
- rendering  daily steps and other habits I want to see
- keyboard shortcuts, like `d` for daily note
- integrating with [Plash](https://apps.apple.com/us/app/plash/id1494023538?mt=12) to have it render on the Desktop too
- what would you want to see? [email me](mailto://hi@jon.bo)!

Some sketches:

{{<figure src="/new-tab/Pasted image 20240104163829.png">}}

{{<figure src="/new-tab/Pasted image 20240104163805.png">}}

{{<figure src="/new-tab/Pasted image 20240104163813.png">}}

{{<figure src="/new-tab/Pasted image 20240104163822.png">}}

have any thoughts, reactions, or questions? email me! [hi@jon.bo](mailto://hi@jon.bo)