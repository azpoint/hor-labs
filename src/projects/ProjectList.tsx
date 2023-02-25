import { useState } from "react";
import { Project } from "./Project";

import ProjectCard from "./ProjectCard";
import ProjectForm from "./ProjectForm";


interface ProjectListProps {
  projects: Project[];
}

function ProjectList({ projects }: ProjectListProps) {
  const [projectEdit, setProjectEdit] = useState({})

  const handleEdit = (project: Project) => {
    setProjectEdit(project)
  }

  const cancelEditing = () => {
    setProjectEdit({})
  }

  const items = projects.map((project) => (
    <div className="cols-sm" key={project.id}>
      {project === projectEdit ? (
        <ProjectForm onCancel={cancelEditing}/>
      ) : (
        <ProjectCard project={project} onEdit={handleEdit} />
      )}
    </div>
  ));

  return <div className="row">{items}</div>;
}

export default ProjectList;
