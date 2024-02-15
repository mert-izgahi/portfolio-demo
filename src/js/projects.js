export const displayProjects = () => {
    const projects = document.querySelector("#projects");
    projects.innerHTML = "";

    fetch("../database/db.json")
        .then((response) => response.json())
        .then((data) => {
            let content = "";
            data.projects.forEach((project, index) => {
                content += `
               <div class="col" data-aos=${
                   index % 2 === 0 ? "fade-right" : "fade-left"
               }>
                        <div
                            class="card h-100 border border-primary experience-card"
                        >
                            <div class="card-header p-0">
                                <img
                                    src=${project.image}
                                    alt=""
                                    class="card-img-top"
                                />
                            </div>
                            <div class="card-body">
                                <div class="d-flex justify-content-between">
                                    <h5 class="card-title">
                                        ${project.title}
                                    </h5>
                                    <a href=${
                                        project.url
                                    } target="_blank" class="nav-link">
                                        <i class="bi bi-github"></i>
                                    </a>
                                </div>
                                <p class="card-text text-muted">
                                    ${project.description}
                                </p>
                            </div>
                        </div>
                    </div>
                `;
            });

            projects.innerHTML = content;
        });
};
