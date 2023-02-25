import { useState } from "react";
import { Project } from "./Project";

import ProjectCard from "./ProjectCard";
import ProjectForm from "./ProjectForm";


interface ProjectListProps {
  projects: Project[];
  onSave: (project: Project) => void
}

function ProjectList({ projects, onSave }: ProjectListProps) {
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
        <ProjectForm onCancel={cancelEditing} onSave={onSave} project={project}/>
      ) : (
        <ProjectCard project={project} onEdit={handleEdit} />
      )}
    </div>
  ));

  return <div className="row">{items}</div>;
}

export default ProjectList;
