import React, { useContext } from "react";
import { Context } from "..";

const CreateEventPaeg = () => {
  const { project } = useContext(Context);
  return (
    <form
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "80vh",
      }}
    >
      <h1>Создание мероприятия</h1>
      Название
      <input name="title" type="text" />
      Описание
      <input name="description" type="text" />
      Дата начала
      <input name="start_time" type="text" />
      Дата конца
      <input name="end_time" type="text" />
      Контакты
      <input name="contacts" type="text" />
      Типы
      <input name="typeid" type="text" />
      <select multiple={true}>
        {project._types.map((type) => (
          <option key={type.id} name="typeid" value={type.id}>
            {type.name}
          </option>
        ))}
      </select>
      Изображения
      <input name="images" type="file" multiple={true} />
      <button type="submit">Создать</button>
    </form>
  );
};

export default CreateEventPaeg;
// ({
//     /*  */
//   })
