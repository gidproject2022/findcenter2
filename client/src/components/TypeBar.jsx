import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "..";

const TypeBar = observer(() => {
  const { project } = useContext(Context);
  return (
    <div>
      <ul>
        {project._types.map((type) => (
          <li
            style={{
              cursor: "pointer",
              color: type.id === project.selectedType.id ? "blue" : "black",
            }}
            onClick={() => project.setSelectedType(type)}
            key={type.id}
          >
            {type.name}
          </li>
        ))}
      </ul>
    </div>
  );
});

export default TypeBar;
