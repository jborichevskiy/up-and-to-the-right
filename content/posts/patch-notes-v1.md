---
title: "How do we throw an online party?"
subtitle: "Jonathan's Patch Notes :: version 01"
date: 2020-04-07T22:10:15-07:00
tags: ["social media", "spatial audio", "mixed reality", "remote tools", "westworld", "dancing", "memex"]

---

This is an episode from Jonathan's Patch Notes, a weekly braindump of things I'm leaning, building, or thinking about. Subscribe on Substack [here](https://jborichevskiy.substack.com/).

-----------


> The visual and spatial qualities of avatar worlds lead to something that is lacking in the text-only environments of cyberspace – something that has a subtle, yet profound impact on socializing: human interaction feels embodied.

> Psychology of the Digital Age, John Suler

## How do we throw online parties properly?

Part of what makes New York City such an incredible place is the density allowing for groups of diverse people to come together, meet each other, and have a good time. There were two types of gatherings I enjoyed: friend-of-friend parties where you walk around and meet a bunch of people (<25-30 people total) and concerts/clubs/music festivals (up into the thousands). **As both types are gone for the forseeable future, I've been thinking about how we might replicate them online.**

The former seems reasonably easy to replicate online but anyone who's been in an online conference call with more than 10 people knows it gets messy very, very fast. You either have to have a strict order to who talks when or you get chaos -- and parties aren't seminars. Breakout rooms exist, sure, but a _house party doesn't have breakout rooms._ Instead it has clusters of people talking about an idea/question/event, to which people can naturally wander up to or leave at will. The conversation topic will shift over time as well, so trying to assign a topic to a room would be useless.

- A related idea I've thought about is to have a "lobby" of sorts, where all the side-room conversations are transcribed from audio to text live like a scrolling teleprompter. My hypothesis being it's easier to visually scan a set of conversations and identify the most interesting one rather than switching between audio channels one-by-one.

- I have been seeing some online dance parties happening, and I am tempted to join one soon.

    - [Collin Morris](https://twitter.com/collinofzion): One of my favorite moments from last night's Existential Dance Party. My god. Thanks for the suggestion [@eigenrobot](https://twitter.com/eigenrobot) . "FUCK YOU CORONVAVIRUS, FUCK. YOU." ([tweet](https://twitter.com/collinofzion/status/1246157090714013697?s=20))

    - When I picture "online dance party", I think the nightclub scene in _Ready Player One_ paints the picture pretty well. ([youtube video](https://www.youtube.com/watch?v=XaAH0aizzi4))

{{< figure src="/patch-notes/ep-1-azlen-1.png" position="center" >}}

{{<tweet 1246966005877731330 >}}

As presented by Azlen here, one interesting solution to this is positional/spatial audio. 

> Azlen: This opens up so many possibilities for online interaction

> - wander up and join in on conversation
> - make eye contact by looking towards cursor
> - point, poke, high-five, and emote 
> - less stress worrying about appearance on webcam
> - eavesdrop of conversations...
> - dynamic lectures (turn to person beside you and...)
> - contextual hand-raising
> - go back to slide you missed without interrupting
> - feel more spatially aware of other students

Up until now, the most common applications of this have been in virtual reality (VR) such as in [AltVR](https://altvr.com/). As much as I like VR (I own a first-gen HTC Vive and am largely still excited about the whole idea) I've accepted it's going to be a long while before the {group of people I want to potentially meet} intersects enough with {people who own VR headsets}. So we should be exploring options accessible from a laptop, or even a phone to have the level of adoption we're looking for.

Of course, pure voice chat doesn't come close to the emotional bandwidth that an in-person conversation or even a video call does. That's where the second component comes in: a seamless ability to "upgrade" a group conversation to video as required. This would, in turn change the "floor" representation of those members & their group somehow -- perhaps with little floating video monitors above their 2D avatars. **The core concept is lowering the barrier to entry (just a microphone + speaker) but still allowing for a seamless, high-fidelity experience as desired.** 

- Side note: I believe digital devices may unlock modes of communication not easily established offline (partial-anonymity, more control of presentation of self, custom environments, roleplaying) that our current, in-person environments don't allow for, and thus comparing digital to offline interactions one-to-one may be somewhat apples:oranges. Write more on this at some point.

As far as movie night parties go, the [NetflixParty chrome extension](https://chrome.google.com/webstore/detail/netflix-party/oocalimimngaihdkbihfgmpkcpnmlaoa?hl=en) seems to be working _well enough_  but it's the equivalent of what my friends and I used to do in 2014. I imagine much cooler online social interaction experiences are on the horizon. 

- [Dolemite Is My Name](https://www.imdb.com/title/tt8526872/) was a very enjoyable movie.

## Side Projects, Programming, Remote Tools

**Made some progress getting my Tweets out of Twitter.** No, this wasn't easy. Look, I'm a software developer, I do this stuff for a living. I'm not saying I'm a good one, just that I do this a lot and have come to reasonable expectations about how online platforms should let us access data. A short timeline of my experience thus far:

- The exported archive of my account doesn't include my bookmarks, but it does contain 20x more data on my ad impressions than than **all my other data combined**.

{{< figure src="/patch-notes/ep-1-screenshot.png" position="center" >}}

- So, I thought, let me create a developer account. Turns out, I actually applied for one (_yes, applied_) a few months ago. Probably to do more or less the same thing. Did I get approved? 

{{< figure src="/patch-notes/ep-1-twitter.png" position="center" >}}

- Apparently I'm not alone. ([google results](https://www.google.com/search?q=%22twitter%22+developer+application+rejected+site%3Awww.reddit.com+-resume+-interview+-ios+-apple))

- _Deep breath_.

- This is ok. I spent the first 3 years of my developer life getting data out of services that didn't want to give it to me. Go enjoy the [atrocity](https://dos.elections.myflorida.com/campaign-finance/contributions/) that is one of the largest repositories of state campaign contribution data in the United States. Couple hundred million records, from what I remember.

- I'll need to be able to generate new tokens when my current one expires. So, I set up a small [Selenium](https://www.selenium.dev/) instance to pretend I'm me. Except for whatever reason just the cookies weren't enough, so I had to run the requests through a nifty proxy named [BrowserMob](https://github.com/lightbody/browsermob-proxy) (and a nice [Python/selenium wrapper](https://github.com/rafpyprog/Mobilenium) for it) which worked well.

- Finally, we can make valid requests! Given this is a completely undocumented API endpoint of course, it did not cooperate. From what I can tell, sending the requests at anything other than 5 seconds apart will cause the server to panic and melt and explode. **But it's working!** 

- Short term plan is to automatically ingest my most important tweets & bookmarks into Roam Research through a rough prototype selenium instance. Looking forward to posting this up for others to poke at in a week or two!

- Long term plan, however, is to give myself full-text search of every tweet my account has ever seen regardless of whether I clicked anything on it. 

- Long long term is to build a [memex](https://jborichevskiy.com/posts/digital-tools/). Or die trying. 

**Software is hard.** As if the Twitter fiasco wasn't enough, I spent a higher-than-morally-acceptable amount of time this past week wrangling the [select2](https://select2.org/) javascript library into an [Elixir Phoenix](https://www.phoenixframework.org/) project. That was _not fun_, and if there's anything I took away from the ordeal it's that building user interfaces that work like you want is hard -- and I'm not sure it's going to get easier anytime soon. Things are simpler in backend-land.

> Frustration reaching a tipping point and boiling over is my gateway into the code these days.

This above is a quote from dang's [insightful comment](https://news.ycombinator.com/item?id=22767204) on Hacker News, which I thought was really true for me lately as well. My spirits were somewhat raised by watching Tom Scott's [This Video Has 4,658,228 Views](https://www.youtube.com/watch?v=BxV14h0kFs0), which had a great quote in it as well:

> Just because something is going to break in the end, doesn't mean it can't have an effect that lasts into the future.

**I'm beginning to run across cool stuff in the remote collaboration space.** These aren't affiliate links -- I'm just genuinely excited about tools progressing beyond Zoom and Google Drive.

- At work we're using [Tandem](https://tandem.chat/), which is basically a layer on top of all your other productivity apps, along with conferencing and whatnot. It enables things like one-click joining into google drive docs being edited, shared cursors during screenshares, dedicated video/voice room channels, etc. Pretty neat overall.

- [Tuple](https://tuple.app/) has been by far, the best screensharing experience I have ever had but the price point was a bit too high for us to keep using it. 

- We've also been using [Loom](https://www.loom.com/) to send short screencasts while working on features for feedback or identifying bugs. Significantly easier than the Quicktime method I've used in the past, and it's free for the next few months.

- [Around](https://www.around.co/) is still in private beta, but I'm excited to try it as well.

## Stuff I'm Watching/Reading/Listening To/Looking At

In another [interesting thread](https://twitter.com/azlenelza/status/1246612847427112960?s=20) started by Azlen he explored what blogging interfaces might look like in the future which soon led me down the rabbit hole of looking at [futureofinformation](http://futureofinformation.com/) again, and then _that_ led me to Christoph Labacher's [personal landing page](https://www.christophlabacher.com/). It is beautiful. 

Started listening to John Vervaeke's _Awakening from the Meaning Crisis_, upon Stian's recommendation in [his latest newsletter](https://networkedthought.substack.com/p/learning-effectively-with-podcasts). The lecture series is about 50 hours long, so this will take me a while. A description:

> [H]ow cognitive science, existential philosophy, Buddhism, Hellenistic philosophy and psychedelics can be used to address the meaning crisis. _John Vervaeke_, PhD is an award-winning lecturer at the University of Toronto in the departments of psychology, cognitive science and Buddhist psychology. In this series Vervaeke will give the history of the meaning crisis, how it is affecting society today, and then give an account on how we can address this problem. Very well integrated understanding. Weaving together historical narrative and contemporary science to paint a compelling picture of foundation of the meta-crisis of out times.

Watched Season 3 episode 1 & 2 of _Westworld_, and wow. 

**SPOILERS AHEAD, SKIP THIS SECTION**. 

A few scenes that caught my attention and made me think:

- The AR call scene on the balcony. Wow, just wow, that was seamless and I cannot wait for meetings to feel like that.

- Halting stock trades on _one unconfirmed news story_? The sell-off must've been enough to start some serious chain reactions and I can't even imagine what the market cap of Delos must be.

- The GTA-like app was terrifying. But that interface was _gorgeous_. Can we please build a version that takes you to the nearest person needing help, or at least just build an app for better navigation? 

**END SPOILERS**

## Life & Health

Finally running more consistently in the nearby grassy fields. 

Hope you enjoyed this! Always feel free to reply with any comments or links I might find interesting. 