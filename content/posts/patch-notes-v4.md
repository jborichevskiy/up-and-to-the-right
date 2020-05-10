---
title: "Musings on open-source notes and digital gardens"
subtitle: "Jonathan's Patch Notes :: version 04"
date: 2020-05-09T16:45:41-07:00
tags: ["digital gardens", "open-source knowledge", "mockups", "transclusion", "book: how to take smart notes", "patch notes"]
---

These are my weekly Patch Notes -- a log of the mental model updates I'm making and a braindump of things I'm leaning, building, or thinking about. Subscribe on Substack [here](https://jborichevskiy.substack.com/).

-----

In this release:

- [Fascinating work in the knowledge sharing space](#there-is-some-fascinating-work-in-the-knowledge-sharing-space-happening)

- [I mocked up what the browser might look like in the spirit of Xanadu](#some-mockups-of-information-i-want-to-see-while-browsing-the-internet)

- [Reading: How to Take Smart Notes](#reading-how-to-take-smart-notes)

- [Why is everything so broken?](#why-is-everything-so-broken)

- [I'm running blog club this month](#i-m-running-blog-club-this-month)

- [I want to move to a cabin with some hackers](#i-m-not-sure-what-city-to-live-in-for-the-next-few-years)

-----


{{<figure src="/patch-notes/v4-nature.png">}}

While writing my update last week I got stuck on a topic I want more feedback on before publishing. If you're thinking about how to make single player apps multiplayer and want to discuss some ideas, hit that reply button. 

## There is some fascinating work in the knowledge sharing space happening 

I find digital knowledge-sharing fascinating: how might we take our personal learning and share it with the entire internet in an accessible and useful manner? 

For a long time, I thought the ideal structure was self-published research such as that of [Gwern](https://www.gwern.net/). But Gwern's primary work is long-form, linear essays with the majority of hyperlinks are pointing to the outside, tying together a collection of vetted information into one cohesive whole. What happens when you want to communicate the equivalent of a living, personal Wikipedia about things you are actively learning? 

Bar none, the best example I have seen so far is Andy Matuschak's [Working Notes](https://notes.andymatuschak.org/About_these_notes). If you're not familiar and happen to be remotely curious about the intersection of learning, writing, and pursuing hard problems I highly recommend you stop reading this sentence and [click this link](https://notes.andymatuschak.org/About_these_notes).

- While they are written primarily for Andy himself, they do an incredible job demonstrating the fact that _you can indeed_ present your exploratory thinking about complex, cross-discipline problems in a highly accessible way. 

I get really excited about stuff like this. This is art and science rolled into one beautiful package: instead of pausing to write a research paper or a book you instead just make your notes accurate, up-to-date and instantly shareable with everyone, everywhere. People working on similar problems can share their own work with you, creating a positive feedback loop benefiting everyone. 

I can't help but wonder what this looks like once more people start using it, and what variations of it might look like. Some questions which keep bouncing around:

### Search & Navigation
- How do you search it in ways more complex than keywords and filters?  
    - Google search is the equivalent of pressing CMD+F on the entire internet. But if I don't know what to call something, I don't know what to type into the search box. 
- What are common starting pages and routes throughout it? 

### Collaboration
- What does this look like collaboratively? When you care about attribution? When you don't care about attribution but care about verifiiabliity? 
    - My first instinct is Wikipedia, but I believe it will look vastly different from the one we know today
    - Roam Research, yes, but it's a long way before it's a complete collaborative tool as easy to grok as Google Drive and with the sharability of RSS
        - [podcast: Village Global: Creating Tools For Networked Thought with Conor White-Sullivan of Roam Research](https://www.listennotes.com/podcasts/venture-stories-village-global-Zbiejgx0l-F/)
- Can this make sharing one's academic research easier and faster? Could it make it easier to share with those outside your organization? 
- How do you draw the digital equivalent of work and life boundaries in a single text document which resembles your brain instead of a book?
- How do I easily see discussion centered around each of these pages, ideas, or topics -- particularly if it happens off-site?
- Could it be applied to collaborative learning centered around reading and discussion dense texts? 

### Updates & changelogs
- How do you diff it and stay updated in an easy, low-friction way that doesn't put extra work on the author but retains flexibility and comfort for the subscribers? 
    - Preferably a granular, customizable way sending notifications to centralized inbox.
- How do you compare different versions of it usefully? 
    - Git is amazing, for code. Using it for text makes me sad.
- I'd like to subscribe to the changes of a single page and receive minor/major updates to it.  

### Accessibility 
- How can it be used by people who work with mediums other than text? What about those who have to convert one medium to another to fully utilize it?
    - Math? Computer science? Stats? People working primarily with video or photos? What about physical, in-person interactions and processes? 
- How does such a tool better work for those fields the creator doesn't have direct experience with? 

### Exploration & navigation
- How do you get a quick, high-level overview of its structure so you know what the unexplored parts are? 

### References and backlinks
- How do references to pages and sections within stay constant over time while allowing the author(s) to restructure them as needed?
- How can I see the backlinks to this document without putting its domain into google and hoping for the best? 
    - Once there are thousands, how do I effectively sort for the most interesting ones? In ways other than reference count.  

**Mostly I'm hoping is this makes it easier to contribute to science from our bedrooms.** 

A few other wonderful folks exploring this space:

- [Anne-Laure Le Cunff: How to build a digital garden with TiddlyWiki](https://nesslabs.com/digital-garden-tiddlywiki)
- [Stian's notes: Roam Research to Gatsby export](https://notes.reganmian.net/technology-of-stian's-notes)
- [Azlen Ezla: Exploring different methods of navigation for my public-facing @RoamResearch database](https://twitter.com/azlenelza/status/1256696564145369093?s=20)
- [Noah Tren: Tending Digital Gardens](https://blog.noahtren.com/%F0%9F%92%AC/21/)
- [Maggie Appleton: Nerding hard on digital gardens, personal wikis, and experimental knowledge systems with @_jonesian today. (twitter thread)](https://twitter.com/Mappletons/status/1250532315459194880?s=20)
- [Nikita Voloboev: Everything I know](https://wiki.nikitavoloboev.xyz/)

I can't wait to grow my own. Until then I get to be jealous of all these other ones sprouting up!

## Some mockups of information I want to see while browsing the internet

{{<tweet 1256736645618925569>}}

A lot of my experience in reading interesting articles online starts with _1 article tab_ and ends with _1 article tab + 12 Wikipedia tabs_. Usually, the visits aren't very long: I'm not sure who a person is, what this institution does, or what the referenced word means. Some ideas on how it could look:

{{<figure src="/patch-notes/v4-screen-1.png" caption="Show me highlights, *as well as* the thing the highlight references">}}
{{<figure src="/patch-notes/v4-screen-2.png" caption="Top: more visibility on publishers; Bottom: see this URL across all my notes and platforms">}}
{{<figure src="/patch-notes/v4-screen-3.png" caption="Instead of searching above for the author's explanation, I see core concepts and people continuously">}}

See [ideas: Information organization, discovery, visualization](/ideas/#information-organization-discovery-visualization) for links to people I know of working on this, or check out the full [Figma doc](https://www.figma.com/file/XaCDPEtviFEa65F8H4sdJ7/Explorations-in-Information-Presentation?node-id=0%3A1).

## Reading: How to Take Smart Notes

As you can tell by the title, it describes a better way to take notes - whether for education or personal learning and development. 

- [notes: book: How to Take Smart Notes](/books/how-to-take-smart-notes)

I'm trying to implement the concepts, a summary so far:

- If you don’t rephrase things in your words, you probably don’t care enough to learn them
- writing is important because it’s where the thinking actually happens
- you need to capture the random ideas and associations that come to you while reading or writing to make use of them
- these notes need to be organized within relation to each other, not an arbitrary hierarchy and re-ordered when necessary
    - "The way people choose their keywords shows clearly if they think like an archivist or a writer. Do they wonder where to store a note or how to retrieve it? The archivist asks: Which keyword is the most fitting? A writer asks: In which circumstances will I want to stumble upon this note, even if I forget about it? It is a crucial difference."
- With every use of the “slip-box” (zettelkasten note structure system) use you reinforce the same structure within your own mind
- as you build this collection, it will be easier to explore past thoughts and ideas in greater detail
- communicating new ideas is much more useful if you can attribute things to their sources

## Why is everything so broken?

I'm having a hard time trying to keep track of which layer I'm most upset with each hour. Is it the organization of content I'm looking at? Lack of ability to visualize it in my preferred application? Difficulty in re-building state to reproduce bugs? Severe search filter restrictions? Server or bandwidth limitations? Lack of interoperability with my existing tools?

## Health and sanity

CGP Gray's [Lockdown Productivity: Spaceship You](https://www.youtube.com/watch?v=snAhsXyO3Ck&feature=youtu.be) is a great watch

- I've cordoned off a section of my desk for purely reading and drawing -- no phone, laptop, or internet. 
    - There's a psychological shift that makes it easier to avoid distractions and focus on the thing I want

Going out and sitting in nature regularly is really healthy, in ways I think extend far beyond this lockdown

## I'm running Blog Club this month!

Nothing should change, we just pick an article each week, read it, and talk about it. It's fun -- come join our Discord! 

- We'll be reading [Project Horseshoe 2017: Group Report: Coziness in Games: An Exploration of Safety, Softness, and Satisfied Needs](https://www.projecthorseshoe.com/reports/featured/ph17r3.htm).
- [posobin.com: blog club](https://posobin.com/blogclub/)
    
## I'm not sure what city to live in for the next few years
I'm not saying I know what's going to happen but I like having some semblance of a plan. 

My lease expires next month and I'm not planning to renew it - the NYC I grew to love over the past 2 years sadly won't be back for a while and I have a relocation to Boston on my medium-long term radar. As much as I enjoy living with family in the suburbs, I feel like I have neither the benefits of remoteness nor a dense city.

Some of my most memorable and relaxing stays over the past few years have been at AirBnB's outside of cities with small groups of friends. Thus, the idea of leasing a cabin somewhere for a half year and moving in with 4-5 other people learning and building things sounds like immense fun
    
- Hacker houses are the closest thing I know of -- if you've lived or run one, please DM or email me: I'd love to chat about your experience. 

This cabin would ideally be walking distance from a trail through a forest or a walk along a beach. Or perhaps both. It would also have an espresso machine. 

- I'd like to be able to see the stars at night. Not death-valley level but enough to remember that I'm pretty small and the visible universe is pretty big

If you're interested in this as well and are on the West coast for the next 6+ months -- let me know!

Related: Pavel Durov: [7 Reasons not to Move to Silicon Valley](https://te.legra.ph/7-prichin-ne-pereezzhat-v-Kremnievuyu-dolinu-05-07) (article in Russian, Google Translate works well)

## Random thoughts
- Writing for others feels better than writing for yourself, but the most useful person to write for is yourself
