---
title: "Spreadsheets, fires, and leases"
date: "2020-09-08"
subtitle: "Jonathan's Patch Notes : version 09"
---

This is an installment of my semi-regular Patch Notes -- a braindump of things I'm leaning, building, or thinking about. Subscribe [here](https://jborichevskiy.substack.com/).

------

In this release:

- [I'm moving to San Diego!](#i-m-moving-to-san-diego)

  - [housing & lease agreements](#housing-lease-agreements)

  - [spreadsheets are hard and software is trash](#spreadsheets-are-hard-and-software-is-trash)

- [I re-installed MacOS and it was an ordeal](#i-re-installed-macos-and-it-was-an-ordeal)

- [Various other updates: cozyroom, this site, twitter](#various-other-updates)

- [Steps on a path](#steps-on-a-path)

------

{{<figure src="/714k2G69Vt.png" caption="‎⁨Tahoe National Forest⁩, ⁨Truckee⁩, ⁨CA. Smoke's not been good.">}}

#### I'm moving to San Diego!

A few weeks ago a friend mentioned she was looking to move down to San Diego to build a quiet, creative space and already had a friend committed. I couldn't believe it! A few calls later and we had a rough plan for the next few months ironed out. 

The plan is to move down this weekend and I will be there through the holidays, perhaps longer. This coincides perfectly with my friend CJ [leaving his job](https://twitter.com/cj_pais/status/1296636152997269504?s=20) and setting off to [build amazing things](http://stream.cjpais.com/plan.html) - can't wait to hack together! I'm also excited to write about this endeavor as I hope to give everyone a peek into lessons learned and what this looks like practically. It's like friends-in-nature v1. 

*If you live in or near San Diego and are down to grab a coffee or make a friend or both, let me know!*

see also: [[[post:friends-in-nature](/posts/friends-in-nature)]] [[[my dream working environment](/my-dream-working-environment)]]

#### housing & lease agreements

Two rentals: one via Airbnb and the second via VRBO. This gives us the chance to experience two locations and affords us a bit more flexibility with the bookings. The rentals are pricier than I would've liked (read: more than NYC) but I accept the intersection of furnished, month-to-month, 3-bedroom houses within walking/biking distance of water is short indeed. Trust me - I've looked through the listings. All of them.

We've found some pretty hilarious stuff. One stipulated a notice of planned alcohol consumption, subject to host's approval on a case-by-case basis. Security cameras inside living rooms are more common than I thought; a trend I don't like. I'll deal with background checks and egregious security deposits but there needs to be trust at some point. 

Digging through this mud seems to be the only alternative to signing six or twelve month leases with several other people you only just met over video calls. This is simply not practical for everyone and introduces a host of concerns and responsibilities. Why is moving cities so difficult?

#### spreadsheets are hard and software is trash

My past few years have been spent building software to help people understand and act on complex, messy data. The three of us had a straightforward objective: find a place to live that fits our budgets, matches our preferences, and works with our date ranges. So I whipped up a spreadsheet for us and got to work. Should be simple, right?

It was anything but. Before we booked our first place I'd managed to curse every PM involved with Airbnb, embark on and abandon automating the data collection, and re-design and update the entire spreadsheet to preserve our sanity. Solving multivariable logistics problems with poor data and mixed preferences is hard. Solving them in a spreadsheet asynchronously with several other busy people is even harder.

What do I wish I for instead? A cross between Google Drive and Airtable taking into account the data we are working with and the decision we are trying to arrive at:

 - auto-fill the fields from the site (price, description, images, availability)

 - allow for dynamic, rich fields like "walking distance to the beach" or "driving distance to nearest grocery store"

 - have voting/preference ranking of options. Including ranked choice

 - rows should disappear when the listings are no longer available

 - freeform notes that can simply be tagged "positive", "neutral", or "negative" - for example the lack of a parking spot would be a minus; good views would be a plus

Features on my wishlist for Airbnb/VRBO/any real estate listing site:

 - allow hiding a listing for this browsing session or forever

 - cut the cute loading animations and transitions. Be fast and simple. Be like Craigslist.

 - give me a "considering" list instead of making me open 15 tabs and having my computer grind to a halt

 - show the images in a grid instead of clicking right arrow 41 times

 - show the final price instead of obscuring it behind 4 clicks

 - allow me to draw search/don't-search regions instead of a fixed square box map

 - allow filtering out listings with recording devices

 - prohibit naming anything ☆☆☆PRINCESS PEACH'S DREAM CASTLE BOOK NOW☆☆☆

I may sound like I'm wishing for software to magically come along and abstract away complex and essential societal transactions to a push of a button - but I'm not and it can't; or at least not really. Trust, communication, and transparency are necessary to any complex human interaction; particularly those involving money, commitments, and safety. And enough of these negotiations happen entirely over the internet already. 

Interfaces should work with rather than against us in making our own decisions with real world data quickly and accurately -- especially when those deciding are scattered across space and time and have a million other things to worry about. Information accurate one minute may no longer be the next and time should be spent analyzing instead of synchronizing. Our systems need to reflect that reality - sooner rather than later.

#### I re-installed MacOS and it was an ordeal

I haven't re-installed my laptop since buying it late 2015. It's been my primary workstation for five years. Along with remnants of a few system upgrades it's also been getting filled with abandoned Docker images, unused git repos, and god knows what else. Things were slowing down. 

So I decided to do a fresh install of Catalina: I made a full Time Machine backup and chose a clean OS install. The process went ok and soon I began downloading apps. Some observations from this nightmare to follow (at the time of writing I am on 10.15.6).

**the permissions system is just borked**: Every useful app is having me go into System Preferences and hit `Allow app`. And the rest are having me enable special privileges in the Accessibility panel. If this flow becomes a default, users will just get trained to approve everything; so what's the point? 

 - *Side note*: those Security Panel requests are only valid for 30 minutes.

**mouse sensitivity got wiped**. Whatever combination of slider positions I had was great -- but also pretty much impossible to replicate. Granted, I adjusted fairly quickly but it's annoying to have all these little things change on me, making the environment feel unfamiliar.

**volume buttons don't work by default**. Yes, this is somewhat my fault with my external keyboard, but because I didn't take good notes the first time, I didn't remember much about how I configured it... cue going through Code Keyboard's documentation, downloading Karabiner, etc... this is basically 90% of the reason I refuse to switch to Linux: my sanity will not allow for time spent fiddling with display drivers to get my monitor to work or wi-fi to cooperate. 

 - I keep hitting keyboard shortcuts I've reconfigured in apps on the old install only to have them do nothing or something completely different. Why is keyboard shortcut management the monstrosity that it is? Should I have saved all the configuration files? In 2020!

**passwords and long-lost activation keys**. I still have Alfred unactivated because it's such a PITA to remember which email I used to buy it, request it re-sent there, and enter my key. For some apps I couldn't even remember the name of the app... much less where I copied the license key from. 

A good reminder of how fragile and difficult everything is. 

#### Various other updates

**cozyroom.xyz**: progress is being made towards a V2 release in the coming month. A number of bugfixes, lovely features, a revamped landing page, and finally, an official launch party! Details to follow.

**this site**: pondering the sorts of functionality and capabilities I want possible and how they might be made generalize-able and reusable. This is a slow but fun process as it intersects tech, learning, writing and connecting with people. It's also a project I don't think I'll ever consider "complete" so I'm settling in for the ride. 

 - it's been, *checks calendar*, 147 days, 17 hours, 23 minutes and 49 seconds since I registered my new domain. The status is "pending" and I've progressed from depression to acceptance. Maybe I'll get access to it in time to renew my registration for the second year?

> I talk a lot -- perhaps, too much -- about Twitter, particularly to people I know who aren't on it. Every day I use it I grow more amazed this site is **free**.  I keep rambling about it because I think my friends are missing out on fascinating opportunities, and I want everyone to be able to benefit from it as much as I have so far.
> 
> [post:patch-notes-v5: I want you to join twitter](/posts/patch-notes-v5/#i-want-you-to-join-twitter) on 2020-05-18 

**My meta Twitter call** (context above): I haven't forgotten about it, and still want to make it happen soon~ish. I'm not sure I have more to say than this: the more time I spend on that site, the more I am amazed at how undervalued it is. And the less I think I or anyone else at the company actually understand it. Just vague notions. 

I see it as not as a "social media platform" but as a way for like-minded people to find each other. And figure out what they want to work on and learn and do. So, to use Twitter correctly: get on it, follow people you would grab dinner with, start talking to them and the people they're talking to. The rest kind of sorts itself out. 

#### Steps on a path

{{<figure src="/zvCN-CrIHN.png" caption="Foresthill, CA" >}}

I've become better at accepting there's only so much I can do in 24 earth hours. That being like a flower absorbing but sun and water is allowed. Especially during what feels an emotional hurricane every day for months on end. As a friend says, life is a marathon and not a sprint. All I can do is peek up at the stars once in a while and make sure I'm headed in a reasonable direction. 

As for many others, this year didn't go to my plans. Instead of sitting in on lectures at fancy schools I can't afford, I've been crammed into my childhood bedroom thousands of miles from close friends. It's not been a total loss: I built some cool things and met more amazing people online. But that nagging sense of having failed to achieve what I set out to do this year remains, much as I try to be mindful of it. 

It's been *six long months* and the momentum and energy I felt at the beginning of this year has all but evaporated. I've been forced to recognize (yet again) it's not the speed but the direction which matters. Everyone's struggling: whether in teaching their toddlers, diminishing savings, caring for loved ones, or everything at once. Inevitably some weeks will see barely a step in our intended direction *and that's ok*. Some days all I have in me is to lay down, exhale, and watch a movie. 

What gives me peace is even though things didn't go according to *my* plan and path, I'm still getting closer to that destination: a sustainable environment to work and live in providing flexibility and time for us to work on tech for good. Tech to support a world that doesn't yet support everyone in return. Every week I meet more people searching for the next steps on their unique paths but the destinations we are describing seem to have more in common than not. 

And that makes me really excited.

see also [[[post:up-and-to-the-where?](/posts/up-and-to-where/)]] [[[post:next-steps-2019-edition](/posts/next-steps-2019/)]]

[See past versions of this page](https://github.com/jborichevskiy/up-and-to-the-right/blob/master/content/posts/patch-notes-v9.md).
