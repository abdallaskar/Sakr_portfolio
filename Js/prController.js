import Project from "./project.js";

export default class ProjectController {
    constructor() {
        this.projects = [];
    }
    // create a new project
    createProject(name, description, live_url, git_url, img_url, img2_url, img3_url, img4_url, longDescription) {
        const project = new Project(name, description, live_url, git_url, img_url, img2_url, img3_url, img4_url, longDescription);
        this.addProject(project);
    }

    addProject(project) {
        this.projects.push(project);
    }

    getProjects(index) {
        return this.projects[index];
    }
}
//         carouselInner.style.transition = 'transform 0.5s ease-in-out';