# Changelog
Welcome to the Changelog. The versioning works as follows:
- `X` is for new major features
- `Y` is for changes to existing features
- `Z` is for bug fixes and minor changes

Changes in the repository not influencing the actual application e.g. Issue Templates do not require a version change.

# 0.6.0 - Layout and Legal
- Addded legal page
- Added header and footer (layout) for auth pages, landing page and legal page
- Added TTRPG Suite Icon
- Fixed styling issues
- Removed Rubik font

This one is all about that legal stuff. German/EU laws are good but annoying to implement. I basically added a legal page and a layout with links to said page and to the landing page. This made some UI issues surfaces that needed to be adressed. Additionally, I removed the Rubik font as it is a Google Font. There is so much contradicting information out there whether it is legal (in terms of the DSGVO) to use Google Fonts or not that I decided to remove the Rubik font for now. To end on somewhat of a good note, I added the first version of the TTRPG Suite icon. What a piece of art. I know.

## 0.5.0 - I18n implementation
- Implemented i18n module
- Added English translation
- Added German translation
- Updated dependencies

Translation are now implemented properly. No more hardcoded text. Similar to theming the functionality is there but no UI. So no, you cannot change the language to German right now.

P.S. Can I say that I'm proud of how it was implemented? The fact that these are typescript files and not json files makes this so much more bearable. Additionally, I now know instantly whether I missed a translation.

## 0.4.0 - Account creation
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