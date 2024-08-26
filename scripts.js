document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".filter-buttons button");
    const projects = document.querySelectorAll(".project");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const filter = button.getAttribute("data-filter");

            projects.forEach(project => {
                if (project.getAttribute("data-category") === filter || filter === "all") {
                    project.style.display = "block";
                } else {
                    project.style.display = "none";
                }
            });
        });
    });
});