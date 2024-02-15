export const displayTools = () => {
    const tools = document.querySelector("#tools");
    tools.innerHTML = "";

    fetch("../database/db.json")
        .then((response) => response.json())
        .then((data) => {
            let content = "";
            data.tools.forEach((tool, index) => {
                content += `
                <div class="col" data-aos=${
                    index % 2 === 0 ? "fade-right" : "fade-left"
                }>
                        <div
                            class="card h-100 border border-primary tool-card"
                        >
                            <div class="card-header p-3">
                                <img
                                    src=${tool.icon}
                                    alt=""
                                    class="experience-icon"
                                />
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">${tool.title}</h5>
                                <p class="card-text text-muted">
                                    ${tool.description}
                                </p>
                            </div>
                        </div>
                    </div>
                `;
            });

            tools.innerHTML = content;
        });
};
