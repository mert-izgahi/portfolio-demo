// Import our custom CSS
import "../scss/styles.scss";
import AOS from "aos";
import "aos/dist/aos.css";
// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";
import { displayTools } from "./tools";
import { displayProjects } from "./projects";
import { displayExperiences } from "./experiences";
AOS.init();
displayTools();
displayProjects();
displayExperiences();
