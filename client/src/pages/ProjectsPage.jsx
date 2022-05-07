import React from "react";
import ProjectsList from "../components/ProjectsList";
import TypeBar from "../components/TypeBar";

const ProjectsPage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        marginTop: "5vh",
      }}
    >
      <div
        style={{
          width: "20vw",
          height: "80vh",
          marginLeft: "2vw",
          backgroundColor: "red",
        }}
      >
        <TypeBar />
      </div>
      <div
        style={{
          width: "75vw",
          height: "80vh",
          marginRight: "2vw",
          backgroundColor: "blue",
        }}
      >
        {/*<ProjectsList />*/}
      </div>
    </div>
  );
};

export default ProjectsPage;
