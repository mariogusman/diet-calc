# diet-calc
 Daily Calorie Calculator


Built using Bootstrap and Vanilla JavaScript

loosely based on https://medium.com/@singhamritpal49/creating-simple-addition-calculator-with-javascript-563ede3527e2

Formula from https://blog.nasm.org/nutrition/resting-metabolic-rate-how-to-calculate-and-improve-yours#:~:text=The%20Mifflin%2DSt%20Jeor%20formula,%C3%97%20age%20in%20years)%20%2D%20161

removing class name javascript https://www.w3schools.com/howto/howto_js_remove_class.asp
testing - achecker web accessibility checker https://achecker.ca/checker/index.php

---
![alt text](readmeAssets\amIresponsive.jpg "Daily Calorie Calculator is Responsive!")
# Daily Calorie Calculator

This project is a simple and straight to the point Calculator that will assist users in finding out how many calories they should be ingesting daily in order to maintain, gain or lose weight.

It was built using JavaScript, Bootstrap and a few lines of CSS.

[View Live Website ↗](https://mariogusman.github.io/diet-calc/)
 
## UX

This website was designed with simplicity in mind. A very straight forward approach that allows users to get their results in just a few seconds.
Any person who's interested in knowing how many calories to ingest will benefit from this calculator. 
The website also contains an FAQ section with valuable information about how the formulas work.

The layout was always meant to be simple and free of distractions. The image below illustrates the initial concept that was easily achieved using Bootstrap's components:

![alt text](readmeAssets\wireframe.jpg "Initial Wireframe")

This wireframe was created using [Wireframe.cc](https://wireframe.cc/).


### User Story #1:
- I'm John, a 30 years old man trying to improve my general eating habits in order to lose weight.
- A friend recommended that I start counting calories and I came to this website to find out how many calories should I be eating.
- After completing the form I became aware that I was eating a bit more than recommended and that I should lower my daily intake to 2036 kcals in order to lose weight.
- I also checked the FAQ and learned a bit about the formulas and that if I do as advised I might lose up to half kilo every week!

### User Story #2:
- My name is Mary, a 24 years old female amateur athlete.
- I have good nutrition knowledge and am already counting calories as part of my training regimen.
- To always keep on track, I come back to this website every week to re-calculate my TDEE and keep progressing.
- I like this website because it is clutter free and easy to navigate on mobile!

## Features
 
### Existing Features
- The main feature is the TDEE Calculator: User fills the Personal Details form and can see the Results after submitting it.
- The Results box is only available after submitting the form and will be cleared upon resetting the form to avoid confusion.
- The second feature is the FAQ which helps users understands terminology and how the formulas work.

### Features Left to Implement
- Integration with an API such as [myfitnesspal](https://myfitnesspalapi.com/) or [EDAMAM](https://developer.edamam.com/edamam-docs-recipe-api) to let users see Nutritional Facts about their favorite foods.
- A toggler to change between Metric and Imperial units, though the formula uses metric units, some users might prefer imperial.

## Technologies Used

In this section, you should mention all of the languages, frameworks, libraries, and any other tools that you have used to construct this project. For each, provide its name, a link to its official site and a short sentence of why it was used.

- [HTML 5](https://whatwg.org/)
    - To create the main page.

- [CSS 3](https://www.w3.org/TR/CSS/#css)
    - Used with HTML to style this website's content.

- [Bootstrap 5](https://getbootstrap.com/)
  - CSS framework directed used to create this responsive, mobile-first website.

- [JavaScript](https://www.javascript.com/)
    - The project uses **JavaScript** to provide interaction and to build the calculator.

- [JQuery](https://jquery.com)
    - The project uses **JQuery** to simplify DOM manipulation, particularly to avoid the form from being submitted.

- [Github](https://Github.com)
  - Used for hosting and for version control using Git.

- [Animate.CSS](https://animate.style/)
    - **Animate.css** is a library of ready-to-use, cross-browser animations.

- [Hover.CSS](https://ianlunn.github.io/Hover/)
    - A collection of CSS3 powered hover effects.

- [FontAwesome](https://fontawesome.com/)
    - **Font Awesome** is a font and icon toolkit based on CSS and Less.

## Testing

### Manual Testing

#### Testing User Story #1
- While on my computer, I come to the website and fill the Personal Information form with my details:
  - **Gender**: Male
  - **Weight**: 100 kg.
  - **Height**: 180 cm.
  - **Age**: 30 yrs.
  - **Activity Level**: 1. Sedentary
  - After clicking on the "*Calculate*" button, I'm presented with the results:
    - BMR of 2121 kcals;
    - TDEE of 2545 kcals;
    - To burn fat 2036 kcals;
    - To gain muscle 2800 kcals.  
- I'm not very sure how It all works, but I see that there is an FAQ sections below the Results:
  - I click the 1st Question and am presented with an explanation of what BMR and TDEE mean.
  - After clicking the 2nd Question, I get to understand how the Results were calculated.
  - Further down I see the 3rd Question and now I understand that the suggestions are not arbitrary but based on science!


#### User Story #2
- As I regularly do, I open the website on my phone in order to get updated results by filling the form with this week's weight:
  - **Gender**: Female
  - **Weight**: 58 kg.
  - **Height**: 160 cm.
  - **Age**: 24 yrs.
  - **Activity Level**: 4. Very Active
  - After clicking on the "*Calculate*" button, I'm presented with this week's results:
      - BMR of 1375 kcals;
      - TDEE of 2373 kcals;
      - To burn fat 1898 kcals;
      - To gain muscle 2610 kcals. 
- I take note of it and am now ready to update my meal plan for the week. See you next week!




Whenever it is feasible, prefer to automate your tests, and if you've done so, provide a brief explanation of your approach, link to the test file(s) and explain how to run them.

For any scenarios that have not been automated, test the user stories manually and provide as much detail as is relevant. A particularly useful form for describing your testing process is via scenarios, such as:

1. Contact form:
    1. Go to the "Contact Us" page
    2. Try to submit the empty form and verify that an error message about the required fields appears
    3. Try to submit the form with an invalid email address and verify that a relevant error message appears
    4. Try to submit the form with all inputs valid and verify that a success message appears.

In addition, you should mention in this section how your project looks and works on different browsers and screen sizes.

You should also mention in this section any interesting bugs or problems you discovered during your testing, even if you haven't addressed them yet.

If this section grows too long, you may want to split it off into a separate file and link to it from here.

## Deployment

This section should describe the process you went through to deploy the project to a hosting platform (e.g. GitHub Pages or Heroku).

In particular, you should provide all details of the differences between the deployed version and the development version, if any, including:
- Different values for environment variables (Heroku Config Vars)?
- Different configuration files?
- Separate git branch?

In addition, if it is not obvious, you should also describe how to run your code locally.


## Credits

### Content
- The text for section Y was copied from the [Wikipedia article Z](https://en.wikipedia.org/wiki/Z)

### Media
- The photos used in this site were obtained from ...

### Acknowledgements

- I received inspiration for this project from X

---
* The Code Institute slack community for their support.

[Back to top](#Table-of-Contents)