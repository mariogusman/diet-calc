# **Daily Calorie Calculator**
![AmIResponsive Screenshot - This project is responsive!](https://raw.githubusercontent.com/mariogusman/diet-calc/main/readmeAssets/amIresponsive.jpg)

This project is an effective and straight-to-the-point TDEE Calculator that will assist users in finding out how many calories they should be ingesting daily to maintain, gain or lose weight.

JavaScript with jQuery, Bootstrap, and a few lines of CSS were used to build this project.

[View Live Website ↗](https://mariogusman.github.io/diet-calc/)
 
## **UX**

This website was designed with simplicity in mind. A very straight forward approach that allows users to get their results in just a few seconds.
Any person who's interested in knowing how many calories to ingest will benefit from this calculator. 
The website also contains an FAQ section with valuable information about how the formulas work.

The layout was always meant to be simple and free of distractions. The image below illustrates the initial concept that was easily achieved using Bootstrap's components:

![Initial Wireframe](https://raw.githubusercontent.com/mariogusman/diet-calc/main/readmeAssets/wireframe.jpg)

This wireframe was created using [Wireframe.cc](https://wireframe.cc/).


### **User Story #1:**
- I'm John, a 30 years old man trying to improve my general eating habits in order to lose weight.
- A friend recommended that I start counting calories and I came to this website to find out how many calories should I be eating.
- After completing the form I became aware that I was eating a bit more than recommended and that I should lower my daily intake to 2036 kcals in order to lose weight.
- I also checked the FAQ and learned a bit about the formulas and that if I do as advised I might lose up to half kilo every week!

### **User Story #2:**
- My name is Mary, a 24 years old female amateur athlete.
- I have good nutrition knowledge and am already counting calories as part of my training regimen.
- To always keep on track, I come back to this website every week to re-calculate my TDEE and keep progressing.
- I like this website because it is clutter free and easy to navigate on mobile!

## **Features**
 
### **Existing Features**
- The main feature is the TDEE Calculator: User fills the Personal Details form and can see the Results after submitting it.
- The Results box is only available after submitting the form and will be cleared upon resetting the form to avoid confusion.
- The second feature is the FAQ which helps users understands terminology and how the formulas work.

### **Features Left to Implement**
- Integration with an API such as [myfitnesspal](https://myfitnesspalapi.com/) or [EDAMAM](https://developer.edamam.com/edamam-docs-recipe-api) to let users see Nutritional Facts about their favorite foods.
- A toggler to change between Metric and Imperial units, though the formula uses metric units, some users might prefer imperial.

### **Technologies Used**

In this section, you should mention all of the languages, frameworks, libraries, and any other tools that you have used to construct this project. For each, provide its name, a link to its official site and a short sentence of why it was used.

- [HTML 5](https://whatwg.org/) - To create the main page's content structure.

- [CSS 3](https://www.w3.org/TR/CSS/#css) - Used with HTML to style this website's content.

- [Bootstrap 5](https://getbootstrap.com/) - CSS framework directed used to create this responsive, mobile-first website.

- [JavaScript](https://www.javascript.com/) - The project uses JavaScript to provide interaction and build the calculator.

- [JQuery](https://jquery.com) - The project uses JQuery for easier DOM manipulation.

- [Github](https://Github.com) - Used for hosting and for version control using Git.

- [Animate.CSS](https://animate.style/) - Animate.css is a library of ready-to-use, cross-browser animations.

- [Hover.CSS](https://ianlunn.github.io/Hover/) - A collection of CSS3 powered hover effects.

- [FontAwesome](https://fontawesome.com/) - Font Awesome is a font and icon toolkit based on CSS and Less.

- [DirtyMarkup Beautifier](https://www.10bestdesign.com/dirtymarkup/) - Used to improve code presentation of HTML, CSS and JS code.


## **Testing**

### **Manual Testing**

#### **Testing User Story #1: John**
- While on my computer, I come to the website and fill the Personal Information form with my details:
  - **Gender**: Male
  - **Weight**: 100 kg.
  - **Height**: 180 cm.
  - **Age**: 30 yrs.
  - **Activity Level**: 1. Sedentary
  - After clicking on the "*Calculate*" button, I'm presented with the results:
    - BMR of 2122 kcals;
    - TDEE of 2546 kcals;
    - To burn fat 2037 kcals;
    - To gain muscle 2800 kcals.  
- I'm not very sure how It all works, but I see that there is an FAQ sections below the Results:
  - I click the 1st Question and am presented with an explanation of what BMR and TDEE mean.
  - After clicking the 2nd Question, I get to understand how the Results were calculated.
  - Further down I see the 3rd Question and now I understand that the suggestions are not arbitrary but based on science!


#### **User Story #2: Mary**
- As I regularly do, I open the website on my phone in order to get updated results by filling the form with this week's weight:
  - **Gender**: Female
  - **Weight**: 58 kg.
  - **Height**: 160 cm.
  - **Age**: 24 yrs.
  - **Activity Level**: 4. Very Active
  - After clicking on the "*Calculate*" button, I'm presented with this week's results:
      - BMR of 1376 kcals;
      - TDEE of 2373 kcals;
      - To burn fat 1898 kcals;
      - To gain muscle 2610 kcals. 
- I take note of it and am now ready to update my meal plan for the week. See you next week!

#### **Cross Browser Manual Testing**
- This website was extensivelly checked on **Google Chrome** during its development.
- The deployed page was also tested on **Mozilla Firefox**, **Safari** and **Microsoft Edge** with no issues.

- **Testing was done by**:
    - Loading the page on each of the browsers mentioned above and checking for visual discrepancies in the layout.
    - Multiple resolutions were used by dragging and expanding the window size to test responsiveness.
    - Clicking the Logo, Home and FAQ items in the navigation bar.
    - Filling the form and clicking on the Calculate and Clear buttons.
        - Form was filled with multiple details combinations to test the formula and form validation.
        - Attempted to submit form with missing information or incorrect details filled and failed, as expected.
    - Resizing screen with Results visible to check for broken layout upon re-sizing.
    - Clearing form content and Results box after made visible.
    - Clicking the FAQ accordions.
    - Clicking the external links in the FAQ sections.
    - Clicking the Github and Linkedin social icons at the footer.

### **Automated Testing**

#### **Validators**
- The **index.html** page was validated using [W3.org](https://validator.w3.org/nu/?doc=https%3A%2F%2Fmariogusman.github.io%2Fdiet-calc%2F)'s validator.
    - It originally showed a few errors that are now fixed - No errors or warnings to show.

- The **style.css** file was validated using [W3.org](https://jigsaw.w3.org/css-validator/)'s validator and passed without errors.
    - When validating the whole page instead of the style.css file, [some errors](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fmariogusman.github.io%2Fdiet-calc%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en) are shown. These are due to external CSS files from Bootstrap, Hover.css, Animate.css, and Fontawesome.

- The **app.js** code, the main JavaScript code for this website, was validated using [JSHint](https://jshint.com/) and passed without errors.


#### **Google Lighthouse**
- The deployed page was tested on [Lighthouse](https://developers.google.com/web/tools/lighthouse) through Chrome Dev Tools(F12).
- The initial test showed that some aspects could be improved.
- These included multiple minor changes such as adding "noreferrer noopener" to external links and improving contrast in the footer section.
 
    ![Lighthouse Test Before](https://github.com/mariogusman/diet-calc/blob/main/readmeAssets/Lighthouse-mobile-before.jpg?raw=true)
    

- After reviewing the suggestions, the new result is near perfect.
    
    ![Lighthouse Test After](https://github.com/mariogusman/diet-calc/blob/main/readmeAssets/lighthouse-mobile-after.jpg?raw=true)


## **Deployment**

This website was deployed using GitHub Pages. [Click here to view the live project 🌐](https://mariogusman.github.io/diet-calc/).

**GitHub Pages** is a free hosting service provided by **GitHub** by following the steps below:

- Go to the [repository page](https://github.com/mariogusman/diet-calc) > Click Settings > go to the "GitHub Pages" section > Select the Source > Click Save.

### **Cloning**
To clone this project follow the instructions below, adapted from GitHub's Documentation:

- On GitHub, navigate to the main page of this repository or [Click Here](https://github.com/mariogusman/diet-calc).
- Above the list of files, click on "Code".
    - To clone the repository using HTTPS, under "Clone with HTTPS", click the "copy" icon.
    - To clone the repository using an SSH key, including a certificate issued by your organization's SSH certificate authority, click Use SSH, then click the "copy" icon.
    - To clone a repository using GitHub CLI, click Use GitHub CLI, then click the "copy" icon.
- Open Git Bash.
    - Change the current working directory to the location where you want the cloned directory.
    - Type git clone, and then paste the URL you copied earlier.
        > $ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
    - Press Enter to create your local clone.



## **Credits**

### **Content**
- The content from FAQ section was taken from [Steelfit USA](https://steelfitusa.com/blogs/health-and-wellness/calculate-tdee) and slightly modified.
- The formulas used on this calculated were found on [NASM.org](https://blog.nasm.org/nutrition/resting-metabolic-rate-how-to-calculate-and-improve-yours).
- Most of the HTML components on the page were taken from [Bootdstrap Docs](https://getbootstrap.com/docs/5.0/components/).

### **Acknowledgements**
- In special, I wish to thank **Code Institute** for giving me a new horizon I can sail to, through these difficult times!
- This calculator was loosely inspired by [Amritpal Singh](https://medium.com/@singhamritpal49/creating-simple-addition-calculator-with-javascript-563ede3527e2)'s tutorial on Medium.
- All the members in the Code Institute's Slack Community for being supportive and helpful.
- Some parts of the code were imported from public sources such as Bootstrap Documentation page, w3Schools or StackOverflow. 
    - These can be identified by looking at the comments in the code.
