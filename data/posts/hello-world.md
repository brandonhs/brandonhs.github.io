## The Website

Hello, World! Over the course of the past 2 years, there have been many versions of my personal website.
- one was just an experiment
- one was over-minimalist
- and one was based on a template

I have no issues with people basing their sites off of a template (it turns out some people have lives beyond programming), but personally I feel I can offer more in terms of customization.

### Under the hood

For the actual interface, this website uses PicoCSS, a powerful yet minimalist css framework. This provides [dark mode for that elite coder experience](https://css-tricks.com/poll-results-light-on-dark-is-preferred/). When programming a website in pure HTML with no server side accessible, it becomes more problematic to design a website that is both fast and easy to update. Some websites get around this by being compiled prior to being published. Although this would not be too difficult to set up with something like gatsby.js (something I may get around to using for a future iteration), I feel this iteration of the website finds a certain place in my heart in the way it manages to render. This website uses javascript and handlebars.js to render the website on the initial loading of the website. If javascript is not enabled, a more basic and less updated version of the site will be shown to the user explaining how to enable scripting. The requirement for javascript may be an issue for some, however according to [Blockmetry's measurements](https://deliberatedigital.com/blockmetry/javascript-disabled), only 0.2% of web users actually have javascript disabled and with older web browsers being phased out, this small percentage will only decrease. To add and update pages, a JSON based API was designed to decrease the amount of html development required to simply add or change text. To add templates for different types of pages, I can simply add an additional template using handlebars syntax and a basic population script. These templates are then rendered with a json file containing the data for the specific page to be rendered.

### Why isn't the code public?

I am very pro open source, having made most of my own major personal projects public and even [a software for a company I co-founded](https://github.com/DeepWaterExploration/exploreHD_controls). With that being said, I am not entirely comfortable making the source code of this website public until I am absolutely sure it is ready. The first thing is performance; in other words, this site takes a while to load. For now, I am fine with this, however I do not want others to copy this site's rendering system until it has reached a level of performance I am comfortable letting others use themselves.

I do however feel this website and its codebase does have a future as a template for others to use. Given its design flexibility, it fits a good niche of minimalism without sacrificing visuals, thanks to PicoCSS. As someone who generally works with backend or embedded systems, I did find PicoCSS to be a joy to work with (after dealing with some quirks), despite not being entirely comfortable with the oddities of the web standards.

### What's next?

I plan to update this blog as often as possible using the main page of this site as a functional alternative to LinkedIn for my resumé. I also plan to maybe move this site to a backend for resource fetching or switching to a react based system for content rendering. For now, I definitely plan on writing more posts on my explorations with web development as well as more specifics on the code and rendering system of this website.
