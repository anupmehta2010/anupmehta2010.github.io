window.onload = function() {
    // Change header color on mouseover and mouseout
    var header = document.querySelector('header');
    header.addEventListener('mouseover', function() {
        this.style.color = 'blue';
    });
    header.addEventListener('mouseout', function() {
        this.style.color = '';
    });

    // Alert when a skill is clicked
    var skills = document.querySelectorAll('section:nth-child(1) ul li');
    skills.forEach(function(skill) {
        skill.addEventListener('click', function() {
            alert('You clicked on skill: ' + this.textContent);
        });
    });

    // Open social links in a new tab
    var socials = document.querySelectorAll('section:nth-child(2) ul li a');
    socials.forEach(function(social) {
        social.target = '_blank';
    });

    // Alert when a tech stack item is clicked
    var techStacks = document.querySelectorAll('section:nth-child(3) ul li');
    techStacks.forEach(function(techStack) {
        techStack.addEventListener('click', function() {
            alert('You clicked on tech stack: ' + this.textContent);
        });
    });
};