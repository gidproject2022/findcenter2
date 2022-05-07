import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "..";
import ProjectItem from "./ProjectItem";

// const ProjectsList = observer(() => {
//   const { project } = useContext(Context);
//   return (
//     <div
//       style={{
//         display: "flex",
//         flexDirection: "row",
//         flexWrap: "wrap",
//       }}
//     >
//       {project.projects.map((project) => (
//         <ProjectItem key={project.id} project={project} />
//       ))}
//     </div>
//   );
// });
//
// export default ProjectsList;

import axios from 'axios';

export default class ProjectsList extends React.Component {
    state = {
        projects: []
    }

    componentDidMount() {
        axios.get(`http://localhost:7000/api/project`)
            .then(res => {
                const projects = res.data;
                this.setState({ projects });
            })
    }

    render() {
        return (
            <ul>
                { this.state.projects.map(project => <li>{project.name}</li>)}
            </ul>
        )
    }
}