
function WritingSampleThree() {
  return (
    <div>
https://3.basecamp.com/3097764/buckets/15434307/messages/2851108878

<h4>FIO: Add React to GT brand</h4>
Jul 16, 2020

We use React (https://reactjs.org/) in several places already. React is a JavaScript library for building the Front End of an application. Recently we've added it to a few new pages that we've created. It's a great tool to use when you have one component or section of a webpage that you would like to repeat. For example, each win from last-weeks-wins (https://university.growthtools.com/last-weeks-wins).
Zoom Screen Shot 2020-07-16 at 7.42.08 AM.png
Screen Shot 2020-07-16 at 7.42.08 AM.png 144 KB View full-size Download

I have studied React off and on for several years now and used it a little bit in some personal practice projects, but I have not had an opportunity to use it in a work project until coming to Growth Tools.

When creating the modal for adding a new partner in UA, it seemed like a great place to utilize the flexibility of React. So, I added the modal for UA using React and it was a great way to learn more about it and build something with it.

Another on-going project where it seems like React would be useful is the Growth Tools Style guide. While the guide has made some major progress, I wanted to find a way to really make it a plug-n-play tool and React seems like a great way to do that because it is built to simply plug into an existing application and get going immediately.
However, I have never done this with React in exactly this way. I have either:

1) written components in an already existing app (university)
2) started an app from scratch using create-react-app
3) installed React in a basic node app

So, I decided to follow the quick tutorial "Add React in on minute". And, it's true, I was able to add React to my practice app really quickly. However, when I added JSX to the return statement, it threw an error. So the only thing that worked was handwriting out all the elements in long form, which of course was counterproductive and kind of defeats the purpose of using React in the first place.

The tutorial suggests adding a script tag that loads Babel. The tutorial also suggested using script tags to load React and ReactDOM, but I did not need those script tags because I had already installed React and ReactDOM using npm. I tried the Babel script tag, but it did not solve my problem.

I understand that Babel is the tool that helps translate JSX into a usable form. In other words, it transpiles the JSX into JavaScript so that the browser can understand it. It would seem then, that I was missing babel. But, I was not. I had installed it with npm as well and I could see it in my package.json file. Often times, however, one npm package relies on another package. So, I did a little googling and found this very helpful article: https://blog.usejournal.com/creating-a-react-app-from-scratch-f3c693b84658
This excerpt in particular: 

    “babel-core is the main babel package — We need this for babel to do any transformations on our code. babel-cli allows you to compile files from the command line. preset-react and preset-env are both presets that transform specific flavors of code — in this case, the env preset allows us to transform ES6+ into more traditional javascript and the react preset does the same, but with JSX instead.”


So into .babelrc file, I added 
<p>
  "presets": ["@babel/env", "@babel/preset-react"]
</p>
And then ran: 

npm install --save-dev @babel/core@7.1.0 @babel/cli@7.1.0 @babel/preset-env@7.1.0 @babel/preset-react@7.0.0

Most of these packages I already had installed. It looks like I really only needed preset-react, but I ran them all just in case. After the install, I could see that preset-react was added to devDependencies in my package.json file.
And yay, JSX works now! 

Subscribers

15 people will be notified when someone comments on this message.
Bryan Harris Chris Marshall Will Hoekenga Will DeShazo Bethany Loginow Matt Zavadil Bruno O. Barros Jeanette Stein Kacy Hulme Stacy Brookman Shawn Garrett Heather Davis Ben Dahl Drew Croegaert Michael Sharkey Add/remove people…
You’re subscribed

You’ll get a notification when someone comments on this message.
</div>
)
}


export default WritingSampleThree;
