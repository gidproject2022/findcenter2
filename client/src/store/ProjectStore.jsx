import { makeAutoObservable } from "mobx";
import axios from "axios";

export default class ProjectStore  {
  constructor() {
    this._types = axios.get(`http://localhost:7000/api/type`, )
      .then(res => {
        this._types = res.data
      }).catch(e => {
      this._types = [{id: 1, name: 'НИМА'}, {id: 2, name: 'dsfsdf'}]
    })


    this._projects = [
      {
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
      },
      {
        id: 2,
        title: "Название проекта 2",
        description: "Описание проекта",
        start_time: "7 мая",
        end_time: "8 мая",
        contacts: "ostap00092@gmail.com",
        images: [
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHIpM64Ts4wT_0YNJbpBT7UGBrJEoWV5FTVg&usqp=CAU",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHIpM64Ts4wT_0YNJbpBT7UGBrJEoWV5FTVg&usqp=CAU",
        ],
        type_id: [2],
      },
      {
        id: 3,
        title: "Название проекта 3",
        description: "Описание проекта 3",
        start_time: "7 мая",
        end_time: "8 мая",
        contacts: "ostap00092@gmail.com",
        images: [
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHIpM64Ts4wT_0YNJbpBT7UGBrJEoWV5FTVg&usqp=CAU",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHIpM64Ts4wT_0YNJbpBT7UGBrJEoWV5FTVg&usqp=CAU",
        ],
        type_id: [1, 2],
      },
      {
        id: 4,
        title: "Название проекта 4",
        description: "Описание проекта 4",
        start_time: "7 мая",
        end_time: "8 мая",
        contacts: "ostap00092@gmail.com",
        images: [
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHIpM64Ts4wT_0YNJbpBT7UGBrJEoWV5FTVg&usqp=CAU",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHIpM64Ts4wT_0YNJbpBT7UGBrJEoWV5FTVg&usqp=CAU",
        ],
        type_id: [1, 2, 3],
      },
    ];
    this._selectedType = {};
    makeAutoObservable(this);
  }

  setTypeId(types) {
    this._types = types;
  }
  setProjects(projects) {
    this._projects = projects;
  }
  setSelectedType(type) {
    this._selectedType = type;
  }

  get Types() {
    return this._types;
  }
  get projects() {
    return this._projects;
  }
  get selectedType() {
    return this._selectedType;
  }
}
