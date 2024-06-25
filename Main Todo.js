/* 

TODO
FINAL

BABEL and indiex files problem when testing
may not need seperate rewire configs

in index files i need to explicitly import each and every function from files
and then export them. This avoids using namesake as imports. 

remove top level index files that do not export functions explicitly.

once tests running as they should without issues:
BABEL and indiex files problem when testing
may not need seperate rewire configs

- testing (globals, config, login, main/inits)
- integration tests: firebase, User Authentication flow, Data Flow, Application Initialization (end2end)
- main test documentation - include doc about babel rewire vs regular tests (rewire used to test and mock functions from same module)
and how to use the babel rewire API
- README file
- domain hosting, HTTPS, eslint, scss/sass

- accessibility (buttons, image alt etc.), turn all forms into <form> with label, aria etc.
- desktop css (responsive design)
- file heading documentation
- optomistic loading to prevent UI delay with fetching data and/or loading page
- style.display/color etc use classList.add instead
- use ids for unique elements
- move firestore/base to production mode, firebase security rules
- absolute paths or using alias in imports for test.js files.
- moon icon for evening weather

PLANT PAGE
- delete/reset plant details - Are you sure? also prompt to save.
- clicking on tag to edit while plant is archived causes problem
- task tick icon
- delete/edit requirement
- better plant page aesthetics/design
- improve add new plant button

NEXT
- react refactor, node.js database/server
- new project ideas to demo node.js, react.js (e-commerce site, workspace collab etc)

------------

EXTRAS
- option to add new tagButtons
- option to delete/edit requirement/task in modal or swipe for mobile, show edit options on hover for desktop
- + icon on overview, add user comments

- tasks ideas: name, notes, date, alert, priority
- tasks needs to be 1 tas(k) in plant log
- task edit on plant page needs to update
- edit/delete requirements
- more text for the add new plant modal/slider progress
- quiz css and extra features (sliders, progress bar etc...) also progress bar for when adding new plant

- less messy event listener clearing for each render section (eg renderMyPlants removes event listeners for all other sections)

- extra feature ideas eg. schedueler, AI, chatbot, journal entries, async/await opportuinities (plant data API?)
- home page ideas: daily tasks list, blog/journal, gardening tips, suggested plants, weather/time/location

*/