import React from "react";

import ProjectList from "./ProjectList";
import { MOCK_PROJECTS } from "./MockProjects";

function ProjectsPage() {
  return (
    <>
      <h1>ProjectsPage</h1>
      <ProjectList projects={MOCK_PROJECTS}/>
    </>
  );
}

export default ProjectsPage;
