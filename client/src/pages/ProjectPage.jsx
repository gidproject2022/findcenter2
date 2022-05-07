import React from "react";

const ProjectPage = () => {
  const project = {
    id: 1,
    title: "Название проекта 1",
    description: "Описание проекта",
    start_time: "7 мая",
    end_time: "8 мая",
    contacts: "ostap00092@gmail.com",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHIpM64Ts4wT_0YNJbpBT7UGBrJEoWV5FTVg&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHIpM64Ts4wT_0YNJbpBT7UGBrJEoWV5FTVg&usqp=CAU",
    ],
    type_id: [1],
  };
  return (
    <div>
      {project.title}
      {project.description}
      {project.start_time}
    </div>
  );
};

export default ProjectPage;
