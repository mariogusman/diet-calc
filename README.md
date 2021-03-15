# diet-calc
 Daily Calory Calculator


Built using Bootstrap and Vanilla JavaScript

loosely based on https://medium.com/@singhamritpal49/creating-simple-addition-calculator-with-javascript-563ede3527e2

Formula from https://blog.nasm.org/nutrition/resting-metabolic-rate-how-to-calculate-and-improve-yours#:~:text=The%20Mifflin%2DSt%20Jeor%20formula,%C3%97%20age%20in%20years)%20%2D%20161

removing class name javascript https://www.w3schools.com/howto/howto_js_remove_class.asp


# MS2 – Daily Calory Calculator

![opener](readmeAssets\amIresponsive.jpg)

[The website](https://apometricstk.github.io/ci_ms2_aggregator/) is intended to help front-end development students to 
  compare the popularity (depicted by GitHub stars and Google Trends) of different JavaScript packages
   and keywords.

## Table of Contents
1. [UX](#UX)
   1. [Strategy & Scope](#Strategy-&-Scope)
   2. [Structure & Skeleton](#Structure-&-Skeleton)
   3. [Surface](#Surface) 
2. [Features](#Features)
   1. [Existing Features](#Existing-Features)
      1. [Meta](#Meta)
      2. [Google Trends chart](#Google-Trends-chart)
      3. [Package table](#Package-table)
      4. [Data Counter](#Data-Counter)
      5. [Text Search](#Text-Search)
      6. [Range row chart](#Range-row-chart)
      7. [Multiple keyword selector](#Multiple-keyword-selector)
   2. [Features left to Implement](#Features-left-to-Implement)
3. [Technologies](#Technologies)
4. [Testing](#Testing)
   1. [Validators](#Validators)
   2. [Manual testing](#Manual-testing)
      - [Test cases](#Test-cases)
   3. [Automated testing](#Automated-testing)
5. [Deployment](#Deployment)
6. [Credits](#Credits)
 
---

## UX

### Strategy & Scope

A selection of the major objectives and selected ways to achieve them in form of user stories and conclusions.

As a…

#### front-end development student...

I want to learn the best technology to foster my career. I have difficulties to decide which is the most relevant 
technology, because I lack the experience to evaluate the quality of software libraries. 
-> Basic Assumption: Depending on the experience of others
   
1. I want to use the experience of many professionals (not just one subjective opinion) to create a shortlist of 
   libraries to research. 
   -> GitHub Stars as metric

2. I want to get a feeling about the different trends of the libraries on my shortlist, because I don't want to 
   accidentally select the technology, which will be obsolete before I get relevant experience with it. 
   -> Google Trends timeline
   
3. I don't want to miss the library which is a perfect fit for my needs, because I did my research only on the superstar 
   of the bunch. 
   -> Selection and comparison by tags/keywords

4. I have to do research on my shortlist, to find my best fit. The evaluation of the relevance in my region is possible 
   with Google Trends, the technical research is best done on the repositories. 
   -> Include Links to both
   
### Structure & Skeleton

The value for the user is mainly in the embedded Google Trends chart, and the filterable data table. So both of them
are presented at the top of the page. The control elements connecting them are anchored between them.

On bigger screens, the main filter elements are placed next to the table, on mobiles they switch below the table, to
prevent user-irritation (clear binding to the table, not the trends-chart) and maintain the table in a readable width.

The feature to search all the keywords present in the dataset is combined with a filter-slider, to prevent overloading
the tagcloud to an unusable list (the 4,000 packages in the dataset got over 6,000 unique keywords (already normalized 
to lowercase)), but maintain the usability of the feature.

The about-section was positioned beneath the main data to hook the user with the most asked question ("Angular, React or
Vue?"), afterwards guiding to critical thinking about the provided data and further research on package use.

The disclaimer and contacts sections are of minor value for the user, but the disclaimer and contacts should be
presented on the same page, as the used data and therefore positioned at the bottom of the page.

#### Mobile wireframe
![wireframes mobile](/readmeAssets/Mobiles.png)

#### Desktop wireframe
![wireframes bigger as mobile](/readmeAssets/Desktop.png)

### Surface

As preset, I embed the well known Google brand colors (via the Google Trends chart).
Without customization of inputs many browsers use blue as default color.
To stay in the range but clearly differentiate from Googles content, I picked green for my main color and used a
gradient to blue from Google and the browsers for my gradient.

![google colors](/readmeAssets/googleColors.jpg)

![color palette](/readmeAssets/baseColors.jpg)

![gradient colors](/readmeAssets/gradientColors.jpg)

---

[Back to top](#Table-of-Contents)

## Features

### Existing Features

#### Meta

- The navigation bar allows to scroll to the relevant part of the website all time.

- The about text introduces users to different approaches to evaluate libraries and links to more content about it. 

- The disclaimer informs users on the unaffiliated status of the project and its educational purpose.

- The contact links enable the users to get in touch with the author.

- The charts except of the Google chart (embedded, no public API available) interact with each other
  (selecting a filter applies the filter to the shared dataset).

#### Google Trends chart

- On the first load of the page the actual comparison which led to the project idea is generated to promote the feature.

- If a problem with browser settings (privacy, cookies - see known bugs/features left to implement) appears, the user is
informed, and a workaround is shown.

- A button to open Google Trends (preloaded with selection) in a new tab is presented, for individual research
on users' selection.

- The chart shows the trends of the worldwide search terms (the package names selected by the user) of the past 5 years.
The user can evaluate the popularity of the different packages in relative terms based on it.

#### Package table

- On the first load of the page the most popular packages (based on GitHub stars provided by cdnjs) are listed with a
  link to their project page, their actual GitHub stars and the keywords, used to tag the packages.
  
- A pagination is used to maintain the overview for users and prevent a list of thousands on small screens. Two buttons
  let the user turn the pages.
  
- A checkbox allows the user to select a package for GoogleTrends.

- As soon as packages are selected, a user can remove them by clicking on the generated button labeled with the name of
  the package, remove all by clicking a reset button or reload the Google Trends chart by clicking the "Show me the 
  trends!"-Button.
  
- If the user tries to select more than the intended 3 packages, a modal informs the user to just select up to 3 
  packages.
  
#### Data Counter

- The data counter below the chart displays the total records, the sample size and contains a button to reset filters.

#### Text Search

- A set of freetext inputs enables users to search by the package name, the owner and a specific keyword by text entry.

#### Range row chart

- A row chart differentiates the selection by popularity based on GitHub stars. A click on a row filters on the selected
  range (multiple ranges selectable).

- defined segments 
    - more than 100,000 stars
    - 10,000 to 100,000 stars
    - 1,000 to 10,000 stars
    - 100 to 1,000 stars
    - 10 to 100 stars
    - 1 to 10 stars
    - zero stars
    - stars not provided

- The segments were chosen this way to fulfill the different criteria of users. 
    - compare unicorns like Facebook's React to Google's Angular
    - compare niche packages like plugins for specialised use-cases
    
#### Multiple keyword selector

- The multiple keyword selector lists all keywords used to tag packages in the selection, normalized to lowercase.

- The thousands of packages in the unfiltered dataset contain a multiple of almost 1,5 unique (lowercase) keywords.
  To maintain a processable amount of useful keywords, a range slider filters the keywords based on appearance.
  
- Checkboxes filter the selection to contain one of the selected keywords. The selected keywords are not filtered the
  slider.

### Features left to Implement
- Add a Backend to prevent loading of full dataset resources on page load and speed up TTI
- Prevent layout shifting due to embed/chart generation
- Customization of checkboxes and range-input for uniform cross-browser look.
- Dynamic data table pagination, depending on viewport size/user input (Now: Table size 10 packages hardcoded)
  - Always show selected packages
- Add a widget with all active filters (for onclick removal) (Now: Find the specific chart/filter or reset all)
- Customize hover-charts tooltips
- Google Trends
    - Find alternative way to implement Google Trends (Now: Cross-Site-Origin Error if no-track / cookies missing/
      blocked);
      Google seems to set x-frame-options: sameorigin on their embedded response, if Googles cookies are missing.
      [Reference](https://bugzilla.mozilla.org/show_bug.cgi?id=1624914)
    - Reverse engineer their whole embed API to make all parameters accessible for users (high risk to break, if 
      API change) 

- Keyword features
  - Build a dataset of keyword-counts and 
    - filter via range checkboxes/chart (analog GitHub star partials) or two inputs-slider (Now: slider)
    - set default value of keyword cloud based on selection (Now: 50 packages hardcoded)
  - Alternative display of keywords, tagcloud by popularity (Now: alphabetical list)
  - Show packages which contain all selected keywords (Now: packages which contain one of selected keywords)
  - Rewrite filter on text search widget to allow multiple keywords
  - Highlight keywords matching the keyword text filter
    
- Write automated tests

---

[Back to top](#Table-of-Contents)
    
## Technologies

#### [cdnjs API](https://cdnjs.com/)
- for the dataset
- [Documentation](https://cdnjs.com/api)

#### [Google Trends](https://trends.google.com/)
- for the embedded trends chart
- No documentation available via [Google APIs Explorer](https://developers.google.com/apis-explorer) and search on
  [Google developers](https://developers.google.com/)
- A post (dated 2014) on an abandoned blog (last post 2016) provides some insights, but uses at least an outdated entry-
point. [Hacking the Google Trends API, Techslides](http://techslides.com/hacking-the-google-trends-api)


#### [HTML](https://en.wikipedia.org/wiki/HTML)
- for the main pages

#### [CSS](https://en.wikipedia.org/wiki/CSS)
- for everything styling related

##### [Bootstrap](https://getbootstrap.com/)
- for the responsive layout and modal

##### [FontAwesome](https://fontawesome.com/)
- for link symbols

##### [Google Font *Lato*](https://fonts.google.com/specimen/Lato)
- for Lato for a clean readable impression

#### [JavaScript](https://en.wikipedia.org/wiki/JavaScript)

##### [jQuery](https://jquery.com/)
- as dependency of Bootstrap modal

##### For Charting and Data handling
- [D3](https://d3js.org/)
- [crossfilter](http://crossfilter.github.io/crossfilter/)
- [dc.js](https://dc-js.github.io/dc.js/)

##### [Jasmine](https://jasmine.github.io/)
- for tests on load process

#### [Git](https://git-scm.com/) / [GitHub](https://github.com)
- for version control
- for deployment

#### [gitpod](https://gitpod.io)
- as IDE

#### [Pycharm](https://www.jetbrains.com/pycharm/)
- as IDE, after gitpod was unavailable to frequently

#### [code institute gitpod template](https://github.com/Code-Institute-Org/gitpod-full-template)
- as a starter for the gitpod environment

#### [code institute readme template](https://github.com/Code-Institute-Solutions/readme-template)
- as a starter for the readme.md

#### [coolors](https://www.coolors.co)
- for the color scheme

---

[Back to top](#Table-of-Contents)

## Testing

### Validators

Validators were used by "copy and pasting" the code into validators.
- Strg+A
- Strg+C
- Strg+V

Validation was used on regular basis while developing and before submission.

#### HTML Validator

##### index.html

The index.html was validated by [HTML validator](https://validator.w3.org/) and passed without issues.

##### specrunner.html

The specrunner.html was validated by [HTML validator](https://validator.w3.org/) and returned a warning.
The criticised "type="application/javascript"" was removed and afterwards it passed without errors.

##### 404.html

The 404.html was validated by [HTML validator](https://validator.w3.org/) and passed without issues.

#### CSS Validator

The styles.css was validated by [jigsaw validator](https://jigsaw.w3.org/css-validator/) and passed without issues.

#### JS Validator

##### script.js

The script.js was validated by [JSHint](https://jshint.com/).

As it returned warnings, the following options were set;
- esversion: 8 (to use "async function"; coverage per caniuse.com: 92,69%, assumption: front-end devs will use 
  up-to-date browsers)
- globals: d3, crossfilter, dc, trends, $, console (first ones imported via index.html script tags, console just error 
  log)

No warnings remained.

##### spec.js

The spec.js was validated by [JSHint](https://jshint.com/).

As it returned warnings, the following options were set;

- esversion: 8 (see script.js)
- globals like in script js, added Jasmine specifics (describe, it, expect) and cdnjsFullList, cdnjsProcessedList (
  declared in script.js)

No warnings remained.

#### Lighthouse

The Chrome [Lighthouse](https://developers.google.com/web/tools/lighthouse) tool was used to generate reports.

![Lighthouse desktop](/readmeAssets/LighthouseDesktop.jpg)

![Lighthouse mobile](/readmeAssets/LighthouseMobile.jpg)

##### Performance

The Performance issue is due to:
1. The big dataset to load for basic functionality
    - API call (about 200 kB)
    - building crossfilter dimensions
      - A possible way to improve the behaviour could be a custom backend, serving just the data needed or , but this is 
        beyond the scope of this project.

![Main task](/readmeAssets/mainTask.jpg)  

2. the call to Google Trends
    - with disabled disk cache: More than 1.2 MB of 1.9 MB transferred
    - only embedded version available
    - undocumented API
    
I don't know how to circumvent or improve this issue.

![Google Trends network](/readmeAssets/googleTrendsNetwork.jpg)

##### Accessibility

The Accessibility score of 97 was improved to 98, by changing the heading level of the social links (h5 to h3).
The missing 2 points depend on color contrast on links and buttons.

Tests with a comparison of bold, color: black, original and text-stroke (2px black), resulted in the decision to stay 
with the original style for best legibility.

![Lighthouse mobile](/readmeAssets/btnColors.jpg)

##### Best Practices

The Best Practices score of 93 was improved to 100, by adding "rel="noreferrer"" to outgoing links.
  
### Manual testing

The Browsers Chrome(v89.0.4389.82) and Firefox (v86.0) were used for testing.
The deployed version of the page was tested.

- A console warning derived from a removed d3 color scheme, supported by dc for backward compatibility, was removed by 
selecting another default color scheme (script.js line 113).
![console warning](/readmeAssets/consoleWarning.jpg)

- A console warning derived from the DataCount widget. Contrary to error message the crossfilter method was already used.
  - ![console warning](/readmeAssets/dataCountWarning.jpg)
  - ![console warning](/readmeAssets/dataCountSource.jpg)
  - the dc.filterAll() call triggers warning
    - ![console warning](/readmeAssets/dataCountFilterAll.jpg)
    - the logger information traces down to applyFilters() in base-mixin.js (line 987), using this.dimension(); this is 
      not easily changed by the author and was dismissed as out of scope of the project.
      - No Issue filed, due to intentional rewrite for clarity [Reference](https://github.com/dc-js/dc.js/issues/1499)
      

- On verbose logging level Chrome reports a violation due to non-passive event listener to a scroll blocking 
  "mousewheel" event. Probably a problem with d3 / dc js brush implementation. It was noticed, but not handled.
  - [Reference](https://www.chromestatus.com/feature/5745543795965952)

- Depending on browser configuration, Google Trends embedded frame is not rendered. Google seems to set x-frame-options: 
  sameorigin on their embedded response, if Googles cookies are missing.
  - ![console warning](/readmeAssets/xFrameError.jpg)
  - [Reference](https://bugzilla.mozilla.org/show_bug.cgi?id=1624914)
  - To inform the user, a custom error message is generated. As the browser cannot interfere with elements inside an 
    iframe, the app uses a defined style attribute (provided by the embedded frame, if present) as indicator for the 
    working feature.
  - ![iFrame error message](/readmeAssets/customErrorMessage.jpg)
  
- All htmls were examined on different widths and responsive behavior was observed.
  - 280px, 320px (as representation for mobiles)
  - Bootstrap breakpoint 
    - 575px, 576px
    - 767px, 768px
    - 991px, 992px
    - 1199px, 1200px
  - 3000px (as representation for high resolution displays - 4k, 5k)
    
- Google Trends in new tab button changed from google.de... to google.com.

- The index.html was tabbed through.
  - Popularity row chart was not tabable; .keyboardAccessible(true) added to fix.

#### Chrome exclusive, deployed page

##### Test cases

1. Responsiveness
    - Procedure    
        1. Open Homepage
        2. Left click on the page and open Dev Tools (Strg + Alt + i)
        3. Toggle device toolbar
        4. Resize with from wide to narrow
    - Expected
        1. Layout aligns according to wireframes
        2. Charts redraw after resizing
        3. No Scroll bars (Exception: table, as defined in the wireframe) on page elements
        4. No breaking of the layout
    - Outcome
        1. Pass
        2. Pass
        3. Pass
        4. Pass
    
2. Usability and Functionality
    1. Nav
        - Procedure
            1. Scroll the page down, beginning top, observe
            2. For every nav button: click, observe
            3. Modify url (for example: "https://apometricstk.github.io/ci_ms2_aggregator/inex.html")
        - Expected
            1. Navbar sticks to top and enables user to move to distinct location on page.
            2. Every button moves the user to the according section of the page.
            3. User gets redirected to custom 404.html, where a link is available to return to index.html.
        - Outcome
            1. Pass
            2. Pass
            3. Pass
    
    2. Filters
        1. Filtering 
            - Procedure        
                1. Apply a filter from every filtering element
                    1. the text filters (name, owner, keyword); enter a string
                    2. popularity row chart; click on a row
                    3. multiple keyword range; select some checkboxes
                2. Audit expected filter behaviour
                    1. Modify text input
                    2. Click on the same row
                    3. Click on "reset" button of multiple keyword selector
                3. Audit expected behaviour
                4. Click on "Reset All"
                    1. Audit expected behaviour
            - Expected behaviour
                - Filter behaviour
                    - Text filters
                        - The filtered table column contains only elements, with the lowercased input chars in given
                        order, without other chars in between. Before and after the sequence, other chars are allowed.
                            - name: filters first table column (package name)
                            - owner: filters second table column, hover over link symbol to compare string between the 
                            last two slashes, appearing in bottom left of the browser
                            - keyword: filters last table column (keywords provided)
                        - Adding/Removing chars to the inputs modifies filters accordingly
                    - Popularity filter
                        - The stars' column of the table contains only elements, described by the label of the row.
                            - Exception: "stars not provided": 0 is allowed
                        - The clicked row is highlighted
                        - Another click on selected row removes highlight and filter
                    - Multiple keywords range
                        - The last table column (keywords provided) contains at least *one* of the keywords selected by
                        the checkboxes.
                        - If no checkbox is checked, "reset" button is disabled.
                        - Click on "reset" button removes this filter. All other filters still apply.
                    - Every adding / removing filter updates the connected elements, especially the table and the 
                    counter next to the "Reset All" button.
                - "Reset All" behaviour
                    - All filters are dropped, full dataset is displayed by the elements.
                    - "Reset All" button is disabled
            - Outcome
                - Pass
        2. Subfiltering multiple keywords
            - Procedure
                1. Moving the slider "narrow down by popularity" to the far right, observe.
                2. Moving the slider to the far left, observe.
            - Expected Behaviour
                - right: fewer keywords displayed, sentence below slider contains bold "100".
                - left: more keywords displayed, sentence below slider contains bold "1".
            - Outcome
                - Pass
    
    3. Google Trends Comparison
        1. Selection        
            - Procedure
                1. Click on up to 3 checkboxes in the table, observe
                2. Hover over appearing button, observe 
                3. Click on one of the buttons, observe
                4. Try to check 4 checkboxes, observe
            - Expected behaviour
                1. Buttons with package name appear
                2. Text is crossed out
                3. The checkbox of the package named is unchecked, button disappears.
                4. A modal appears, informing you to check 1-3 boxes, just 3 boxes are checked.
            - Outcome
                1. Pass
                2. Pass
                3. Pass
                4. Pass
        2. Comparing
            - Procedure
                1. With up to 3 boxes checked, click on "Show me the trends!"
                2. With up to 3 boxes checked, click on "Google Trends in new tab"
                3. With 0 boxes checked, click on "Google Trends in new tab"
            - Expected behaviour
                1. The trends chart updates accordingly
                2. A Google Trends tab opens, preloaded with checked search-terms.
                3. A modal appears, informing you to check 1-3 boxes.
            - Outcome
                1. Pass
                2. Pass
                3. Pass
            
    4. Data table
        - Procedure
            - "Next Page" and "Previous Page" buttons click
            - The GitHub link symbol of a button click
        - Expected behaviour
            - The table pages turn accordingly, data updates in the table and next to the buttons
            - The correct GitHub page opens in a new tab
        - Outcome
            - Pass

   5. About Section
       - Procedure
           - Click every link
       - Expected behaviour
           - The link clicked opens in anew tab
       - Outcome
           - Pass
       
    6. Contacts footer
        - Procedure
            - Click the contacts symbols
        - Expected behaviour
            - The authors contact pages opens an in new tab
       - Outcome
            - Pass

    7. General
        - Procedure
            - All buttons were hovered
        - Expected behaviour
            - If not disabled, the color changes
        - Outcome
            - Pass

### Automated testing

[The testing site](https://apometricstk.github.io/ci_ms2_aggregator/specrunner.html) includes basic tests on correct
import of font, stylesheets, libraries and the loading and processing of the data.

![Jasmine specrunner](/readmeAssets/jasmineBasics.jpg)

### User-Story verification

#### front-end development student
   
1. I want to use the experience of many professionals (not just one subjective opinion) to create a shortlist of 
   libraries to research. 
   -> GitHub Stars as metric
    ![GitHub stars as metric](/readmeAssets/userStory1.jpg)

2. I want to get a feeling about the different trends of the libraries on my shortlist, because I don't want to 
   accidentally select the technology, which will be obsolete before I get relevant experience with it. 
   -> Google Trends timeline
   ![Google Trends timeline](/readmeAssets/userStory2.jpg)
   
3. I don't want to miss the library which is a perfect fit for my needs, because I did my research only on the superstar 
   of the bunch. 
   -> Selection and comparison by tags/keywords
   ![Select and compare by tags/keywords](/readmeAssets/userStory3.jpg)

4. I have to do research on my shortlist, to find my best fit. The evaluation of the relevance in my region is possible 
   with Google Trends, the technical research is best done on the repositories. 
   -> Include Links to both, no further input needed.
   ![Deeper research by included links](/readmeAssets/userStory4.jpg)

### Slack review
The project was posted to the Code Institute community Slack channel peer-code-review and to the Hackathon group-chat
for different pairs of eyes.

### Readme
Readme was observed on GitHub. All links were clicked.

A cross-browser issue was found
  - Windows 10 Firefox didn't embed a specific image of an error message, even if the links were correct. Clearing cache, 
    reloading the page and restart of the browser didn't solve the issue.

![Firefox missing error](/readmeAssets/readmeErrorFirefox.jpg)

  - Windows 10 Chrome embeds same image

![Chrome error](/readmeAssets/readmeErrorChrome.jpg)

  - Manjaro Firefox & Chromium embeds, other Machine Windows 10 Firefox, Edge and Chrome embeds.

  - Error was classified as browser-installation specific and afterwards tracked down to an Ad-blocker. Renaming of the 
    File solved the issue.

---

[Back to top](#Table-of-Contents)

## Deployment

The relevant files for deployment of the project are
- index.html
- 404.html (for custom 404 error page, optional)
- specrunner.html (for automated tests on loading, optional)
- assets/css folder
- assets/images folder (for the favicon, optional, but will return console error if omitted)
- assets/js folder

The easiest way (but not the tiniest in terms of filesize - the download includes the development gitpod files) is to 
click on "Code" on the top of this page (top right above the file list) and on "Download zip".  
Afterwards extract the zip (most operating systems include a packaging program for it, just right click on it) into the 
required folder (read below).

### Local
For local use, download the files and the folder, put them (or extract) into the same directory and open the 
**index.html** file with your browser.

### Deployed / Hosted
For deployed use, download the files and folders, put/upload/extract them into the folder advised by your hoster 
(e.g. "www", but it depends on the individual vendor - check back with your hoster / the documentation!).  
Be cautious not to alter the file hierarchy.

#### with GitHub pages
If you are logged into your GitHub Account (if not: Sign up - it's free!) just click on "Fork" on the top right of this 
page.
Afterwards in the "Settings" (top menu, right beyond the name of the repository) menu, go to "Options" (top menu item), 
and afterwards scroll down to "GitHub Pages", select "Master branch" as source and click "Save".
To get to the deployed site afterwards, click on the link.  
Further [documentation](https://docs.github.com/en/free-pro-team@latest/github/working-with-github-pages)

#### with other git instances
Clone this repository according to the documentation of your editor/git-gui 
(CLI: "git clone https://github.com/apometricsTK/ci_ms2_aggregator.git").


#### this actual deployment
The content was deployed via GitHub pages by configuring the repository according to the above walkthrough. Updates
pushed to the GitHub repository will be automatically included a few minutes afterwards.

---

[Back to top](#Table-of-Contents)

## Credits

### Content

#### Data
- [cdnjs](https://cdnjs.com/)

- [GitHub](https://github.com)

- [Google](https://trends.google.com/)

#### Components
- Browser compatibility verification with [caniuse](https://caniuse.com/)

- [Bootstrap](https://getbootstrap.com/) components
    - Layout system / grid
    - Navbar
    - Button
    - Modal
    - Card
    - Accordion

### Media
* The Font Awesome symbols were made by [Font Awesome](https://fontawesome.com/).

* The first readme screenshot was taken with [ami.responsive](http://ami.responsivedesign.is/)

* The color palettes screenshots were taken with [coolors.co](https://coolors.co/)

* The favicon was generated with [favicon.ico and app icon generator](https://www.favicon-generator.org/)

* The wireframes were drawn with [Balsamiq](https://balsamiq.com/)

### Acknowledgments
* My mentor Brian Macharia for his support and feedback.

* My [team from Code Institute hackathon March 2021](https://hackathon.codeinstitute.net/teams/39/) for feedback and
support.

* The Code Institute slack community for their support.

[Back to top](#Table-of-Contents)