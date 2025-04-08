// add classes for mobile navigation toggling
var CSbody = document.querySelector('body');
const CSnavbarMenu = document.querySelector('#cs-navigation');
const CShamburgerMenu = document.querySelector('#cs-navigation .cs-toggle');

CShamburgerMenu.addEventListener('click', function () {
	CShamburgerMenu.classList.toggle('cs-active');
	CSnavbarMenu.classList.toggle('cs-active');
	CSbody.classList.toggle('cs-open');
	// run the function to check the aria-expanded value
	ariaExpanded();
});

// checks the value of aria expanded on the cs-ul and changes it accordingly whether it is expanded or not
function ariaExpanded() {
	const csUL = document.querySelector('#cs-expanded');
	const csExpanded = csUL.getAttribute('aria-expanded');

	if (csExpanded === 'false') {
		csUL.setAttribute('aria-expanded', 'true');
	} else {
		csUL.setAttribute('aria-expanded', 'false');
	}
}

// mobile nav toggle code
const dropDowns = Array.from(document.querySelectorAll('#cs-navigation .cs-dropdown'));
for (const item of dropDowns) {
	const onClick = () => {
		item.classList.toggle('cs-active');
	};
	item.addEventListener('click', onClick);
}

// smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80; // Adjust this value for the padding above the section
            const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top: targetPosition, behavior: 'smooth' });
        }
    });
});

// Close mobile menu on screen resize
window.addEventListener('resize', function () {
    if (window.innerWidth > 1023) { // Adjust breakpoint as needed
        CShamburgerMenu.classList.remove('cs-active');
        CSnavbarMenu.classList.remove('cs-active');
        CSbody.classList.remove('cs-open');
        document.querySelector('#cs-expanded').setAttribute('aria-expanded', 'false');
    }
});

// Close mobile menu when a navbar link is clicked
document.querySelectorAll('#cs-navigation .cs-li-link').forEach(link => {
    link.addEventListener('click', function () {
        if (CSnavbarMenu.classList.contains('cs-active')) {
            CShamburgerMenu.classList.remove('cs-active');
            CSnavbarMenu.classList.remove('cs-active');
            CSbody.classList.remove('cs-open');
            document.querySelector('#cs-expanded').setAttribute('aria-expanded', 'false');
        }
    });

});