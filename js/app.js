/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const sections = document.querySelectorAll("section");
const listContainer = document.getElementById("navbar__list");
const docFragment = document.createDocumentFragment();

/**
 * End Global Variables
* Start Helper Functions
 * 
*/
/**creating the navigation bar*/
for (let section of sections) {

    let sectionName = section.dataset.nav;
    let sectionID = section.getAttribute("id");
    let list = document.createElement("li");
    let anchor = document.createElement("a");
    
    /**creating the link text content and setting href attribute to equal the section's id*/
    anchor.innerHTML = sectionName;
    anchor.setAttribute("href", `#${sectionID}`);
    anchor.classList.add("menu__link");
    
    list.appendChild(anchor);

    docFragment.appendChild(list);
}

/**appending the created listed menu to the dom */
listContainer.appendChild(docFragment);

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


