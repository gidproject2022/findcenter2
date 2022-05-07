import { makeAutoObservable } from "mobx";

export default class EventStore {
  constructor() {
    this._types = [
      { id: 1, name: "Хакатон" },
      { id: 2, name: "Посвящение" },
    ];
    this._events = [
      {
        id: 1,
        title: "Название мероприятия 1",
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
        title: "Название мероприятия 2",
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
        title: "Название мероприятия 3",
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
    ];
    makeAutoObservable(this);
  }

  setTypeId(types) {
    this._types = types;
  }
  setEvents(events) {
    this._events = events;
  }

  get Types() {
    return this._types;
  }
  get events() {
    return this._events;
  }
}
