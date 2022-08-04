
// https://3.basecamp.com/3097764/buckets/15434307/messages/2805722755

// FIO: A broken browser?
// Kacy Hulme
// Kacy Hulme
// Jun 30, 2020
// Notified 19 people
// Overview
// About a week and a half ago, in the middle of trying to finish Last-Weeks-Wins, I ran into some serious issues in my workflow. When I'm working, my main tools are:
// - a terminal
// - a text editor
// - a browser
// I pull all the necessary code from a version control system online. If any other developer is working on the same project, we will always stay up-to-date with each others changes because we house our single-source-of-truth files with an online service that has a separate, central server at a reliable off-site location.

// The Problem
// The main error I would see was that a style sheet could not be located locally (this is only locally, so no need to worry about live!!). I also started seeing one more error, that a JavaScript file could also not be located. These files are each the resulting compilation of many other files. In other words, we may have 10 separate files that house our styling. But the browser only wants 1 file, so, in our application we have a process that compiles the 10 separate files into 1 file for the browser. This occurs for all the JavaScript files and all the CSS files, which results in 2 final files. Well, my browser was not finding these 2 files. Every time I would run the application locally, make a change, and then visit the app in my browser, it appeared as though the browser was searching for compiled files previous and that the current compiled file was not being called. So, since that old file was gone, of course it couldn't find it. But I think, the old file and the new file were generated so quickly back-to-back and that the second one was generated unnecessarily. In other words, it seemed like the browser was refreshing twice and not grabbing the new information, it was grabbing the old information. At least, that's how it seemed.

// The Process
// It was a bit of madness for a few days there. I made sure to pull the most recent code. I even went so far as to delete the entire application on my local machine and re-clone it so that I could start fresh. When that didn't work, I started out on a daily series of tests and approaches to either get around the issue or fix it so I could get some work done. Here is a list of the things I tried to figure it out:

//     Delete the app and re-clone it.
//     Restart the server every single time I made a change.
//     Restart my machine.
//     Tried 4 different git branches.
//     Never hit save because save would trigger a refresh.
//     Stop the server and work without it.
//     Upgrade live-reload package.
//     Upgrade remove-obsolete-chunks package.
//     Upgrade Buffalo.
//     Upgrade go.
//     Worked with Chris on several different calls to walk through the issue.
//     Asked a friend.
//     Tried a different webpack configuration.
//     Read every blog I could find about live-reload.
//     Learned about obsolete chunks and what remove-obsolete-chunks does.
//     Increased the number of open file limit on my machine.
//     Attempted to disable the kernel feature: transparent huge pages.
//     Closed down and restarted Docker.
//     A million other things.
//     Try a different browser.

// The Solution
// Well, none of those worked except the last one, to use a different browser. I found several other recorded issues online of people who were having very similar issues in Chrome when using the live-reload package.
// My guess is that the issue is with the combination of Buffalo, live-reload, Chrome and some other invisible configuration option.
// Anyway, I am now a proud new user of Firefox, never to return to Chrome (except for testing) -- until they figure it out!

// Final thoughts
// While writing this, I thought of two more things to try:
// 1. Remove live-reload altogether
// 2. See if Sass, in combination with live reload, chrome, buffalo is a known issue.
// 3. Upgrade or change the version of Sass.
// Jul 1, 2020
// Chris Marshall Chris Marshall, Maker of Tools
// Software development in a nutshell, ladies and gentlemen.

// I kid (or cry silently). These kinds of issues crop up from time to time. 99% of the time it's completely out of our control. A certain version of Chrome introduced a small bug that really only occurs on certain versions of OSX and under certain conditions. This is one factor in why projects can go over their estimates. The real upside to these kinds of issues is that it forces us to dig one or two layers deeper into the tools, environments, and libraries we use than we normally would. Kacy probably knows more about live-reload than most anyone right now. She'll squirrel that knowledge away and one day in the future we'll ask "hey, I wonder if we can do..." and she'll say "YES! I can do that! When I was digging into that live-reload problem, I came across...".

// Thanks for persevering through that issue, Kacy Hulme Kacy and great write-up!
// Kacy Hulme #truth!💜
// Jul 1, 2020
// Cosette Remund Cosette Remund
// Great work Kacy Hulme Kacy  
// Kacy Hulme Thx!
// Kacy Hulme 😍
// Jul 1, 2020
// Bryan Harris Bryan Harris
// Wow. Wild. Thanks for sharing. And good job figuring it out.
// Jul 1, 2020
// Jeanette Stein Jeanette Stein, Product
// I love seeing everything you tried on that list. Impressed! 
// Subscribers

// 15 people will be notified when someone comments on this message.
// Bryan Harris Chris Marshall Will Hoekenga Will DeShazo Bethany Loginow Matt Zavadil Bruno O. Barros Jeanette Stein Kacy Hulme Stacy Brookman Shawn Garrett Heather Davis Ben Dahl Drew Croegaert Michael Sharkey Add/remove people…
// You’re subscribed

// You’ll get a notification when someone comments on this message.
