const tabsContainer = document.querySelector(".about-tabs"),
skillsSection = document.querySelector(".skills-section");
tabsContainer.addEventListener("click", (e)=>{
    if(e.target.classList.contains("tab-item") && !e.target.classList.contains("active")){
        tabsContainer.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        const target=e.target.getAttribute("data-target");
        skillsSection.querySelector(".tab-content.active").classList.remove("active");
        skillsSection.querySelector(target).classList.add("active");
    }
})