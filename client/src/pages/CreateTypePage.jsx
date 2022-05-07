import {createType} from "../http/userApi";

import React, {Component} from 'react';
import axios from "axios";

class CreateTypePage extends Component {
  sub =async ()  =>  {
    let jname = {'name': this.state.name}
    axios.post(`http://localhost:7000/api/type`, {name: this.state.name})
        .then(res => {
          console.log(res)
        })
        .catch(e => {
      console.log(e.stack)
    })
    return jname
  }
  state = {
    name: '',
  };

  setType = (event) => {
    this.setState({ name: event.target.value })
  }

  render() {
    return (
          <form style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '80vh',
  }}>
    Тип
    <input value={this.state.name} onChange={e => this.setType(e)} type="text" />
    <button type="submit" onClick={this.sub}>Создать</button>
  </form>

    );
  }
}

export default CreateTypePage;
