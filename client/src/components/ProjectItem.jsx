import React from "react";
import { useNavigate } from "react-router-dom";
import { PROJECT_ROUTE } from "../utils/consts";

const ProjectItem = ({ project }) => {
  const navigation = useNavigate();
  return (
    <div
      style={{
        height: "auto",
        width: "250px",
        backgroundColor: "white",
        marginLeft: "10px",
        marginTop: "10px",
        cursor: "pointer",
      }}
      onClick={() => navigation(PROJECT_ROUTE + "/" + project.id)}
    >
      {project.title}
      {project.description}
      {project.images.map((src) => (
        <img src={src} height={120} width={120} alt="sdfsdf" />
      ))}
      <button>Избрать</button>
    </div>
  );
};

export default ProjectItem;
