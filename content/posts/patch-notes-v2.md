---
title: "Hyperlinks, hyperlinks, hyperlinks"
subtitle: "Jonathan's Patch Notes :: version 02"
date: 2020-04-18T12:41:14-07:00
status: "complete"
tags: ["spatial audio", "hackathons", "cryptocurrency", "cities", "nature", "meta", "patch notes"]
---

These are my weekly Patch Notes -- a log of the mental model updates I'm making and a braindump of things I'm leaning, building, or thinking about. Subscribe on Substack [here](https://jborichevskiy.substack.com/).

-----------

__In this version__:

- [I did a hackathon!](#hackathon)

- [Hyperlinks, and making them better](#hyperlinks)

- [Thoughts on Bitcoin and Gwern's 'Bitcoin is Worse is Better'](#cryptocurrency)

- [Futures and options have apparently existed for much longer than I thought](#futures-and-options)

- [What is the difference between honor, shame, and guilt?](#honor-vs-shame-vs-guilt)

- [Cities & ideal working environments](#cities-working-environments)

- [Site updates: idea pages and anchor links](#site-updates)

------

### Hackathon

Last week ([post:patch notes:v1](/posts/patch-notes-v1)) I quoted some tweets by Azlen and tried exploring what an online space could and should be for online parties. A few back and forth messages later and we were hacking away at a prototype for [Pioneer's hackathon](https://frontier.pioneer.app/?hackathon=1) on Saturday morning. I should clarify, though: by __we__ I mean Azlen did most of the hard work as I sat around and fumbled with trying to get my Vue components to behave properly. By very little effort of my own, we came in third place!

It was absolutely incredible to see all the other participants building their awesome projects alongside us. My only other real hackathon experience was the month-long online [Fixathon](https://fixathon.io/) last year, and I appreciate the difference in duration: while we had a lot more time to scope out and research for the Fixathon, there really wasn't time for any of this here. You have to make a bet and fly with it. 

- First place went to [Manted: Pixel-perfect, low bandwidth tab sharing for Chrome](https://frontier.pioneer.app/posts/105-manted-pixel-perfect-low-bandwidth-tab-sharing-for-chrome). __This shit is wild__. Native dom updates for screen sharing across browsers. [youtube:demo video](https://www.youtube.com/watch?v=1gsWWY56H6o).

- Second place went to [Musicdipity](https://frontier.pioneer.app/posts/130-musicdipity-serendipitous-spotify): creating serendipity for you and your friends/coworkers/teammates by alerting you to identical songs being played and queuing up some interaction from that. This is a welcome improvement to Spotify's existing People tab.

    - I'm excited for more progress around this, because I think enjoying music socially is rather hard online right now. Sure, we have livestreams (I've been listening to [ah.fm](http://ah.fm/player/) and [nowadays](https://nowadays.nyc/) but both are just simple livestreams with no user interaction). Reddit and Twitch livestreams are better with the continuous chat overlay and the notifications for every gold/equivalent purchase appearing on screen, but still leave much to be desired in terms of __experiencing the event with other present people__.

So what did we build? [Cozyroom.xyz](https://cozyroom.xyz/)! An online space where everyone is a little character that can move around the room. Audio is spatial, so conversations on the opposite side of the room don't distract you, but are still discoverable. You can point and poke, send emojis, and listen to synchronized music. 

- One of the coolest moments was during the voting phase when we had people popping in and out, and someone mentioned they'd be right back after their evening cheer for healthcare workers. A few minutes later, we heard a cacophony of banging and cheering coming form his avatar, with the mouth moving in sync. We were dying laughing, but it was also super awesome to hear. Thank you to all the incredible people putting their lives on the line, day after day.

{{< figure src="/patch-notes/v2-screenshot.png" position="center" >}}

- Check out the prototype at [cozyroom.xyz](https://cozyroom.xyz/). We intend to continue hacking away at this, updates about which will appear here. 

### Hyperlinks

{{<tweet 1245909154490875906>}}

You may be noticing me doing weird things with hyperlinks around my site lately. I'm having a bit of an existential crisis with what hyperlinks are. This tweet referenced above got stuck in my brain and now I'm reformatting all my links to include where this link goes? Or its content type? I'm honestly not sure. I think I realized I don't like current hyperlinks and they could be a lot more.

Also, I am quickly approaching a breaking point trying to manage hyperlinks between Roam Research, my intra- and extra-blog posts, Substack, and Twitter. This insanity is going to cause me to cry soon. Why all this effort you ask? Hyperlinks are basically what makes the internet useable, that's why. 

Some good examples of hover actions on hyperlinks can be seen on [Gwern.net](https://www.gwern.net/) and [Wikipedia.org](https://wikipedia.org). Another is the style used by [Holloway guides](https://www.holloway.com/g/equity-compensation) and [Hexdocs function annotations](https://hexdocs.pm/ecto/Ecto.Multi.html), and [Andy's Notes](https://notes.andymatuschak.org).

An ideal hyperlink can be seen in SteamVR's Lab's orbs, which take you to different worlds. They're like mini-wormholes through which you can see where you will end up, but still draw a very clear distinction between the 
two environments. [youtube:The Lab#1:32](https://youtu.be/QYrYJHktrf0?t=92)

Why can't Zoom links be pronounceable? Why are Google Hangouts links so long and opaque? Have you ever tried to copy your Google results URL?

## Learnings, Thoughts, and Musings

### Cryptocurrency

I read through [Gwern's Bitcoin is Worse is Better](https://www.gwern.net/Bitcoin-is-Worse-is-Better#) article. Or rather, listened to it read aloud in the Cryptoconomy podcast ([spotify:podcast episode](https://open.spotify.com/episode/3m65JEMBGm8IIf2WxLe6I4?si=rKlJnMdVTainXJOZqLo_MA)). Some interesting highlights and related thoughts (paraphrasing because I didn't get exact timestamps and podcast note-taking is garbage - [related tweet](https://twitter.com/jborichevskiy/status/1249526881176576000?s=20), [ideas:podcast apps](/ideas#podcast-apps)):

- [using a cryptocurrency] is less about trusting others, and more about defining it for yourself

- Historically, the best way we've found for large groups of people to align their incentives with each other was by paying each other money. The current methods are very opaque -- adding in a massive degree of transparency is, in my opinion, a very good thing.

- Another one of bitcoin's strengths is it leaves no room for ambiguity in defining what accepted behavior is. Accepted behavior is simply what 51% of the population deems acceptable. 

- Bitcoin took what is nowadays generally called an MVP approach: figure out the one biggest and gnarliest problem: trust, and let the other issues sort themselves out with time.

- The fact that Bitcoin (or any cryptocurrency) allows anyone to memorize a sixteen word sentence and walk in or out of any secure facility on the planet with a billion dollars in their head trips me up.

- "Every day that goes by and Bitcoin hasn’t collapsed due to legal or technical problems, that brings new information to the market. It increases the chance of Bitcoin’s eventual success and justifies a higher price."

### Futures and Options

I was surprised to learn futures and options were around for quite a while:

> A story, with different versions, recounts how Thales achieved riches from an olive harvest by prediction of the weather. In one version, he bought all the olive presses in Miletus after predicting the weather and a good harvest for a particular year. Another version of the story has Aristotle explain that Thales had reserved presses in advance, at a discount, and could rent them out at a high price when demand peaked, following his prediction of a particularly good harvest. **This first version of the story would constitute the first historically known creation and use of futures, whereas the second version would be the first historically known creation and use of options**.

> Aristotle explains that Thales' objective in doing this was not to enrich himself but to prove to his fellow Milesians that philosophy could be useful, contrary to what they thought, or alternatively, Thales had made his foray into enterprise because of a personal challenge put to him by an individual who had asked why, if Thales was an intelligent famous philosopher, he had yet to attain wealth.  [wikipedia:Thales of Miletus#Activities](https://en.wikipedia.org/wiki/Thales_of_Miletus#Activities)

### Honor vs shame vs guilt

Continuing to work my way through Awakening from the Meaning Crisis. I always considered the words 'shame' and 'guilt' to be largely synonymous but I found this distinction very interesting (ep 5):

- "**Honor** is to be respected by those you consider your peers. "

- "**Shame** is when you feel you have failed to gain respect, or lost the capacity to garner it from your peers."

- "**Guilt** (not a synonym to shame) is when you feel you have failed to meet your own ideal."

### Cities & Working Environments 

{{< figure src="/patch-notes/v2-trail.png" position="center" caption="I discovered a new trail near my house!" >}}

An excerpt from my [Next Steps, 2019 Edition](https://jborichevskiy.com/posts/next-steps-2019/) post last year describing the environment I wanted to be in for the next 1-2 years:

> For the next year or two, I’m looking for an environment to really focus on my self-education while continuing my side projects and exploration without the daily distractions of a nine-to-five or having to work enough to pay for a city apartment (and all the other expenses that come with living in a city). Ideally, it will have:

>  - A lower cost of living than NYC. __I can't remember the last thing I paid money for that wasn't digital.__

> - Reliable internet access and an ergonomic workstation (a standing desk, multiple monitors, whiteboards, and a workspace that isn’t my kitchen counter). __No standing desk here but otherwise pretty comfortable!__

> - Very close access to nature for hiking, swimming, and long walks. Mountains, lakes, and coasts are all great. Seeing the stars at night is a plus. __Though I've mostly been walking to what nature I have nearby, seeing the increased number of stars at night is awesome.__

> - No requirement for a daily vehicle or commuting. __Yup!__

> - A community of interesting, motivated people nearby working on similar problems for collaboration, advice, ideas, and support. __Let's just say I have a newfound level of gratitude for the internet.__

All things considered I'm not too far off from this ideal right now. I still have a nine-to-five job and I'm grateful I do, but I also have almost everything else on this list -- in addition to the important ones such as health & safety.

As a result, like many other people, it's made me think hard about the tradeoffs between living in a city and the benefits it provides versus living further out from the chaos. Don't get me wrong, I miss NYC a ton and I can't wait to be back, but I can't help but wonder if longer-term there is a city more suited to a balanced way of life more in line with my ideals.

- So far my top U.S. candidates are Seattle and Boston, but those are still big cities. Internationally, Amsterdam seems closer to the ideal but I don't see myself leaving the country quite yet. Nevermind the fact these cities are likely also going to take a long time to return to their former selves.

- [vimeo:Before: a beautiful look at life in NYC before the pandemic](https://vimeo.com/408058428). It looks like a different reality.

Regardless, I don't have much of a plan right now. I'd like to be back in NYC as soon as it's safe. Beyond that, time will tell.

### Site updates

I updated [page:ideas](/ideas) and changed it to more of a list of things I'm eagerly awaiting and the attempts I'm aware of making them happen. 

Also added these nifty anchor tags to Hugo with [this partial script](https://discourse.gohugo.io/t/adding-anchor-next-to-headers/1726/9). Works like a charm.

Also added status tags in the style of [Mati Roy](https://matiroy.com/writings/metatags.html) and [Gwern](https://gwern.net). A small step for me but I love the context it provides to a post. Also encourages more evergreen writing I think.

I bought a new domain and it will take __an entire month__ to register. So much for instant gratification. 
