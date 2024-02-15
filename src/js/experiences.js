export const displayExperiences = () => {
    const experiences = document.querySelector("#experiences");
    experiences.innerHTML = "";

    fetch("../database/db.json")
        .then((response) => response.json())
        .then((data) => {
            let content = "";
            data.experiences.forEach((experience) => {
                content += `<li class="list-group-item border-primary" data-aos="fade-up">
                        <div class="d-flex align-items-start">
                            ${experience.icon}
                            <div class="ms-3">
                                <h5>${experience.company}</h5>
                                <p class="text-muted">
                                    ${experience.jobTitle}
                                </p>
                            </div>
                        </div>
                        <p>
                            ${experience.description}
                        </p>
                    </li>
                `;
            });

            experiences.innerHTML = content;
        });
};
