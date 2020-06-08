---
title: This newsletter lives in Roam
subtitle: "Jonathan's Patch Notes : version 05"
date: 2020-05-18
---

These are my weekly Patch Notes -- a log of the mental model updates I'm making and a braindump of things I'm leaning, building, or thinking about. Subscribe on Substack [here](https://jborichevskiy.substack.com/).

------

In this release:

- [This update lives in Roam Research](#this-update-lives-in-roam-research)

- [Cozyroom is moving forward](#cozyroom-is-moving-forward)

- [I want you to join Twitter](#i-want-you-to-join-twitter)

- [I've been watching live DJ sets and they are wonderful ](#i-ve-been-watching-live-dj-sets-and-they-are-wonderful)

- [A great remote coding pair is a super-IDE](#a-great-remote-coding-pair-is-a-super-ide)

- [Personal email threads are kinda magical](#personal-email-threads-are-kinda-magical)

- [Other updates to my site](#other-updates-to-my-site)

------

{{<figure src="/8yxOFjPJ-k.png">}}

### This update lives in Roam Research

It was a Friday evening like any other. I sat down to write my weekly patch notes, turned on some good music, and began to write. Mind you, this is something I rather enjoy: it offers me a nice chance to reflect on the week and explore ideas I didn't get time enough to think about.

Unfortunately, roughly a third of the time it takes to write them is dedicated to getting them out of Roam onto my blog, fixing formatting issues, making sure anchor links work, digging out references, back and forth edits. I'd much rather spend this time writing or building.

It's also led to some level of fracturing: I don't have a single "source of truth" for my writing. The friction in editing or updating a page grows with the number of steps it takes to perform the edit -- and I'd like to decrease that threshold.

To hell with it I thought. Six hours later, I had a hacky script working. These these posts now live in Roam. When I'm ready to publish, I just run a command and out comes a fully Hugo-flavored markdown file into my blog repo. Although it's a very hacky early version, I'm pretty stoked:

 - Single source of truth: I want all my online writing to be downstream from one platform and simply be rendered or displayed differently depending on where it's being presented

 - Less copy-paste back and forth means faster iteration, less time futzing with styling, and more consistency. 

 - This lays the groundwork for publishing individual pages from Roam with a high level of customization. Pages such as [ideas](/ideas) are annoying to keep in sync manually. 

 - We're a long way form collaborative databases - I want more control over how my public facing Roam pages are presented and explored.

I'm using Matthieu Bizien's [roam-to-git](https://github.com/MatthieuBizien/roam-to-git) repo for the main export to JSON, and then parsing that with a Python script. Thanks to [Stian](https://notes.reganmian.net/technology-of-stian's-notes/) for the idea and to all the incredible people I'm chatting with weekly for the motivation to just sit down and write some code.

To start, I'm building something that works for me first (is there a concept for this?) but with time I hope it might become useful to others as the repo will be public.

### Cozyroom is moving forward

We're getting ready to release it in the coming weeks. See a sneak peak [here (tweet)](https://twitter.com/azlenelza/status/1261039325015191553?s=20). If you are interested in using something like this for your project, classroom, or company -- I'd love to talk to you; reply here!

### I want you to join Twitter

I talk a lot -- perhaps, too much -- about Twitter, particularly to people I know who aren't on it. Every day I use it I grow more amazed this site is _free_.  I keep rambling about it because I think my friends are missing out on fascinating opportunities, and I want everyone to be able to benefit from it as much as I have so far.

 - [[why you should join twitter]] #p

**To do something about this, I would like to host a live group call where I walk through what makes Twitter special, how I use it, and answer any questions you might have**. 

 - I'm thinking about 4-6 people, so think of it as a casual coffee chat.

 - No preparation required on your part -- just show up!

If this sounds like something you'd be be down to attend - reply and let me know! I'll follow up with dates and times later this week. 

### I've been watching live DJ sets and they are wonderful 

They're basically giant dance parties that happen in these incredible, remote locations. My invitations to these parties seem to have been lost in the mail. Here's a [few](https://www.youtube.com/watch?v=hENgrbIMiy4) [good](https://www.youtube.com/watch?v=CQZYzGO8QlM) [ones](https://www.youtube.com/watch?v=cVFzblT5VPE) to start with. 

{{<figure src="/5XO6XTD4Bt.png">}}

{{<figure src="/IxedJ09Et_.png">}}

{{<figure src="/75iKIJlgFN.png">}}

I'm enjoying them for a few reasons: 

 - Reminds me of the good days when parties happened

 - The music is continuous for 2+ hours but with enough variation to keep me interested 

 - I don't have a next track button

 - They're usually around beautiful scenery

### A great remote coding pair is a super-IDE

A decent IDE tells you if a function you're trying to call doesn't exist

A fancy IDE warns you that code is redundant or inefficient or an import is unused

A pair programmer can tell you if _your entire approach_ to solving a problem is off, and will guide you to the right one.

Seriously. It's great. Especially if the other person is a code wizard, the likes of which I have the pleasure of being surrounded with. 

### Personal email threads are kinda magical

Cool things happen in back-and-forth one-to-one email threads with friends: they allow for ideation and exploration in a way most other online platforms currently don't. Some qualities I think set them apart:

 - Emails are generally friendly to longer-form paragraphs and expositions; far beyond what direct messages allow for

 - They force me to rationalize and be coherent enough for at least one other person to understand (but, only one!)

 - They allow me to lean on shared references and experiences for getting an idea across -- context a random internet reader might not necessarily have.

 - They don't "expire" like direct messages do -- you can take a day or two to reply without losing the context and there's no pressure to reply instantly

 - They feel more permanent than DMs: I can generally be confident I'll be able to find an email again, compared to the typical direct message

 - Limited downside: the other member is unlikely to grossly misunderstand something and call me a nitwit

 - High upside: my writing might be useful to the other person and that's always great.

### Other updates to my site

Firstly, I discovered that actually I _do_ have RSS. Yup, I know. 

 - [Here's](https://jborichevskiy.com/posts/index.xml) the link to the `/posts` one, which is generally where ready-to-be-shared content appears.

 - [Here's](https://jborichevskiy.com/index.xml) the link to the full one: any new page that's created on my site. Use with caution, there may be random pages appearing there.

I also added the Hypothesis toolbar to my site. I'm not _super_ keen on the styling and the fact that it covers up the menu on mobile so I'l need to fix that. But I really like the idea of people being able to add comments to my site and make it more useful for everyone. 

 - [related tweet](https://twitter.com/jborichevskiy/status/1259697757821927426?s=20)

[See past versions of this page](https://github.com/jborichevskiy/up-and-to-the-right/blob/master/content/posts/patch-notes-v5.md).
