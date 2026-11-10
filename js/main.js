document.addEventListener("DOMContentLoaded", () => {
    const themeToggleBtn = document.getElementById("theme-toggle");
    const langToggleBtn = document.getElementById("lang-toggle");
    const htmlElem = document.documentElement;

    // 1. Theme Toggle
    themeToggleBtn.addEventListener("click", () => {
        const currentTheme = htmlElem.getAttribute("data-theme");
        const newTheme = currentTheme === "dark" ? "light" : "dark";
        htmlElem.setAttribute("data-theme", newTheme);
        
        themeToggleBtn.innerHTML = newTheme === "dark" 
            ? '<i class="fas fa-sun"></i>' 
            : '<i class="fas fa-moon"></i>';
    });

    // 2. Language Toggle (UZ / EN)
    let currentLang = "uz";
    langToggleBtn.addEventListener("click", () => {
        currentLang = currentLang === "uz" ? "en" : "uz";
        langToggleBtn.textContent = currentLang.toUpperCase();

        const translatableElems = document.querySelectorAll("[data-uz]");
        translatableElems.forEach(elem => {
            if (elem.hasAttribute(`data-${currentLang}`)) {
                elem.textContent = elem.getAttribute(`data-${currentLang}`);
            }
        });
    });
});
