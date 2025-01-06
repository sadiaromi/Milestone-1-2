
document.addEventListener('DOMContentLoaded', function () {
    var toggleButton = document.getElementById('toggle-skills');
    var skillsContent = document.getElementById('skills-content');
    var isVisible = true;
    toggleButton.addEventListener('click', function () {
        isVisible = !isVisible;
        skillsContent.style.display = isVisible ? 'block' : 'none';
        toggleButton.textContent = isVisible ? 'Hide Skills' : 'Show Skills';
    });
});
