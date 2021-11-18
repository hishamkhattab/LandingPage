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



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
for (let section of sections) {

    let sectionName = section.dataset.nav;
    let sectionID = section.getAttribute("id");
    let list = document.createElement("li");
    let anchor = document.createElement("a");
    
    /**creating the link text content and setting href attribute to equal the section's id*/
    anchor.innerHTML = sectionName;
    anchor.setAttribute("href", `#${sectionID}`);
    anchor.classList.add("menu__link");
    
    /**Link the list with its respective section, to trigger the active class*/
    anchor.setAttribute("id", sectionID);
    list.appendChild(anchor);

    docFragment.appendChild(list);
}

/**appending the created listed menu to the dom */
listContainer.appendChild(docFragment);


// Add class 'active' to section when near top of viewport

/** using intersection observer API to detect when the section is in viewport and add active classes
 * and when the section leave viewport, remove active classes
 */

/**Adding option for intersection observer
 * when 70% of the section is in the viewport fire the observe function 
   */
const sectioOptions = {
    threshold: 0.7
};

/**Creating an instance of  IntersectionObserver class*/
const sectionObserver = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        let anchor = document.getElementById(entry.target.id);
        if (!entry.isIntersecting) {
            /** if the target section is not in the viewport,
             * remove active class from section and from related link */
            entry.target.classList.remove("your-active-class");
            anchor.classList.remove("your-active-class")
        } else {
            /** else add active class from section and from related link */
            entry.target.classList.add("your-active-class");
            anchor.classList.add("your-active-class")
        }
    })
}, sectioOptions)

/**Iterate through all section to fire intersection observer to each one of them */
for (let section of sections) {
    sectionObserver.observe(section)
}

// Scroll to anchor ID 
/** addEventListener to listen for a 'click' on  any of the links 
 * and scroll to the respective section using the id to link both the anchor tag 
 * and the section tag
 */
listContainer.addEventListener("click", function(e) {
	
    e.preventDefault();
	/**check to make sure that the element been clicked is an anchor tag*/
    if (e.target.nodeName === "A") {
        /**grap the section by using the anchor id*/
        let sector = document.querySelector(`section#${e.target.getAttribute("id")}`);
        sector.scrollIntoView({behavior: "smooth", block: "center"});
    }
})

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active



