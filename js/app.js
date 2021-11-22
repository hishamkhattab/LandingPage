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
 * Define Global Variables
 * 
*/
const sections = document.querySelectorAll("section");
const listContainer = document.getElementById("navbar__list");
const docFragment = document.createDocumentFragment();
const scrollToTop = document.querySelector(".scroll-top");
const navIcon = document.getElementById("primary-nav-icon");
const pageFooter = document.querySelector(".page__footer");
/**
 * End Global Variables
* Start Helper Functions
*/

// build the navigation bar
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

/**appending the created listed menu to the DOM */
listContainer.appendChild(docFragment);


// Add class 'active' to section when near top of viewport
//variable to save all the links created 
const links = document.querySelectorAll("#navbar__list li a");

/** using get boundary client rect to detect when the section is in viewport and add active classes
 * and when the section leave viewport, remove active classes
 */
//listen for scrolling event
window.addEventListener("scroll", e => {
    for (let section of sections) {
        //get the top boundary for each section
        const sectionTop = section.getBoundingClientRect().top;
        //if the section's boundry is between 0 % 400 add the active class else remove it
        if (sectionTop > 0 && sectionTop < 400) {
            section.classList.add("active");
            for (let link of links) {
                //looping through links, if a link's id equal the section's id then add active class to the link
                if (link.getAttribute("id") === section.getAttribute("id")) {
                    link.classList.add("active");
                };
            };
        } else {
            section.classList.remove("active");
            for (let link of links) {
                if (link.getAttribute("id") === section.getAttribute("id")) {
                    link.classList.remove("active");
                };
            };
        };
    };
});


// Scroll to anchor ID 
/** addEventListener to listen for a 'click' on  any of the links 
 * and scroll to the respective section using the id to link both the anchor tag 
 * and the section tag
 */
listContainer.addEventListener("click", e => {
	
    e.preventDefault();
	/**check to make sure that the element been clicked is an anchor tag*/
    if (e.target.nodeName === "A") {
        for (let section of sections) {
            if (e.target.getAttribute("id") === section.getAttribute("id")) {
                section.scrollIntoView({behavior: "smooth", block: "center"});
            };
        };
    };
})

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


//scroll to top button

/**scroll to top button is display:none until srollY reach 400px or more 
 * then it will apear
 */
window.addEventListener("scroll", () => {
    if (scrollY >= 400) {
        scrollToTop.style.display = "block";
    } else {
        scrollToTop.style.display = "none";
    }
});

/**adding the click event to scroll to the top */
scrollToTop.addEventListener("click", e => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
});

/**adding an observer to change the button background when the footer is in viewport*/
const footerOption = {};

const footerObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            scrollToTop.classList.add("btn-scroll");
        } else {
            scrollToTop.classList.remove("btn-scroll");
        }
    });
}, footerOption);

footerObserver.observe(pageFooter);

/**add click event to navigation icon to display navigation bar */
navIcon.addEventListener("click", e => {
    listContainer.classList.toggle("primary-nav-display");
});