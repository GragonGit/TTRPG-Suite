# Changelog
Welcome to the Changelog. The versioning works as follows:
- `X` is for new major features
- `Y` is for changes to existing features
- `Z` is for bug fixes and minor changes

Changes in the repository not influencing the actual application e.g. Issue Templates do not require a version change.

# 0.6.10 - Cookie Banner
- Added cookie banner
- Changed order of log in and sign in buttons
- Updated dependencies

Added a cookie banner because laws... Not much else to say here really. Also changed log in and sign in button order because it looks better and has better UX.

# 0.6.9 - Hover Media Query
- Added touchscreen media query to iconButton

Added a touchscreen media query to the iconButton to remove the hover effect after a touchscreen user as pressed the button. The only devices that will still have this issue are devices that support both touchscreen and mouse.

# 0.6.8 - Header Improvements
- Reduced header size
- Landing page button now blurs
- Created iconButton component
- Update dependencies

The header was just to big for smaller devices. I created an iconButton component which both header buttons now use. With this the header size got reduced and also the landing page button blurs.

# 0.6.7 - Icon Scroll Fix
- Fixed issues with the scrolling icons
- Decreased padding top for landing and auth pages
- Decreased overall text sizes
- Updated dependencies

Apparently when Vercel does its building process it does not resolve the "animation" CSS shorthand properly (or at least not the same way the dev preview does). Additionally, there was some horizontal overflow when the vertical scrollbar appears. Turns out testing UI on a big screen is not the best. Thus, the padding at the top and the font size got decreased a bit.

# 0.6.6 - Landing Page Icon Scroll
- Added icon scroll to landing page
- Increased dark mode contrast
- Updated dependencies

Added some scrolling icons to the landing page to give it some eye candy. This also includes the most scuffed version of a seeded randomizer you could think of. Also brightened the `--background-1` color because it lacked contrast compared to light mode.

# 0.6.5 - SVG Logo
- Turned Logo into SVG
- Minor icon button changes

Used one of my useless talents, understanding how SVG paths work, to turn the TTRPGSuite logo into a SVG instead of using the favicon. This allows me to change its color with the selected theme and is generally just better. This also highlighted some issues with the icon button style component which got fixed.

# 0.6.4 - Light / Dark Mode
- Added base theme changing
- Added dark mode version of accent color
- Fixed footer to the bottom properly
- Changed pixel values to rem for accessability
- Made outline transparent for accessability

You can now switch between light and dark mode by pressing a button. I'm not happy with how the initial theme works right now. Vue does not have the initial DOM nodes before mounting. Thus, I cannot modify the body before the onMounted lifecycle hook. However, in the same step the initial page is rendered as well meaning that the body is always rendered with its default values first and it takes one update cycle to set the theme class to the values defined in the local storage. Hit me up if you know a way to dynamically set the values of the body before the first render.

Also made some minor styling adjustments for a better UI and accessability. For example a dark mode version of the purple accent color because in case you didn't know you cannot use the same colors as they would be oversaturated. Yes, I did not do this for light blue on purpose as there will be one major color theme update instead.

# 0.6.3 - Responsive UI
- Updated UI to be responsive
- Removed run lint workflow on push

Not much to say. Gotta keep it mobile friendly. Also removed the on push condition for the lint workflow because it is unnecessary.

# 0.6.2 - Linting
- Updated dependencies
- Added ESLint Module - https://nuxt.com/modules/eslint
- Added Lint Check Workflow

Updated some dependencies. The Nuxtr extension makes this so much easier to track. I also added the ESLint module because we like consitent code and a related lint check workflow.

As you can tell I toned down increasing the minor version. Although, the rules mentioned at the top do not apply prior version 1.0.0 I still feel like I should give somewhat of a sense on how important the update is. Thus, new features will increase the minor version from now on and changes like these will only increase the patch version. Additionally, the version number won't increase that fast avoiding triple digits in the minor version.

# 0.6.1 - Rubik is back
- Readded Rubik font
- Fixed line wrap in legal page

Huge credits to [this](https://www.youtube.com/watch?v=Z3bie08QGnQ) Youtube video and subsequently [this](https://gwfh.mranftl.com/fonts) website for showing how to add a font properly/legally. Also, I fixed an unwanted line wrap in the legal section.

# 0.6.0 - Layout and Legal
- Addded legal page
- Added header and footer (layout) for auth pages, landing page and legal page
- Added TTRPG Suite Icon
- Fixed styling issues
- Removed Rubik font

This one is all about that legal stuff. German/EU laws are good but annoying to implement. I basically added a legal page and a layout with links to said page and to the landing page. This made some UI issues surfaces that needed to be adressed. Additionally, I removed the Rubik font as it is a Google Font. There is so much contradicting information out there whether it is legal (in terms of the DSGVO) to use Google Fonts or not that I decided to remove the Rubik font for now. To end on somewhat of a good note, I added the first version of the TTRPG Suite icon. What a piece of art. I know.

## 0.5.0 - I18n Implementation
- Implemented i18n module
- Added English translation
- Added German translation
- Updated dependencies

Translation are now implemented properly. No more hardcoded text. Similar to theming the functionality is there but no UI. So no, you cannot change the language to German right now.

P.S. Can I say that I'm proud of how it was implemented? The fact that these are typescript files and not json files makes this so much more bearable. Additionally, I now know instantly whether I missed a translation.

## 0.4.0 - Account Creation
- Added Supabase Module - https://nuxt.com/modules/supabase
- Updated theme logic and variables
- Created landing page
- Created log in page
- Created sign up page
- Created verification page
- Created confirmation page
- Created temporary home page

This is all about account authentication with Supabase. This means log in, sign up, verification and confirmation pages and the landing page for good meassure. Creating these pages also meant updating the theme poc. Mainly putting its logic into its own composable and adding/renaming theme variables. The actual changing of the theme will be another update. Lastly, I also added a temprary home page just to test supabase functionality and allow log outs.

## 0.3.0 - Theme Change PoC
- Added theme change PoC

Added a proof of concept for changing the theme "base" and "accent". Basically separating changing between light and dark mode and the accent color of the app. There is no UI. This is just the core functionality. 

## 0.2.0 - Added Modules
- Added i18n Module - https://nuxt.com/modules/i18n
- Added VueUse Module - https://nuxt.com/modules/vueuse

Two modules that will I likely use a lot. i18n is self-explanatory and VueUse seems to streamline a lot of useful things. I would have added Supabase here as well but it needs further research.

## 0.1.0 - Setup Nuxt
- Added Nuxt and basic config settings
- Added SASS
- Initialized pages

This is my first time using Nuxt and Vue. Thus, I expect a lot of changes to the config and basically everything else in the first stages of development since I don't know what I want and need yet.

**TTRPG Suite here we come!**

---

**You reached the bottom of the changelog. Go get yourself a cookie. 🍪**