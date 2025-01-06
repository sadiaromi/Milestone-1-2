
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-skills') as HTMLButtonElement;
    const skillsContent = document.getElementById('skills-content') as HTMLDivElement;

    let isVisible = true;

    toggleButton.addEventListener('click', () => {
        isVisible = !isVisible;
        skillsContent.style.display = isVisible ? 'block' : 'none';
        toggleButton.textContent = isVisible ? 'Hide Skills' : 'Show Skills';
    });
});