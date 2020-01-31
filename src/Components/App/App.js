import React, { Component } from 'react';

//Components
import Contacts from '../Contacts/Contacts';
import ContactsForm from '../ContactsForm/ContactsForm'

//Styles
import styles from './App.module.css';

export default class App extends Component {

  state = {
    data: [
      {
        "id": 1,
        "age": "33",
        "name": "Leanne",
        "surname": "Graham",
        "phone": "1-770-736-8031 x56442",
      },
      {
        "id": 2,
        "age": "33",
        "name": "Ervin",
        "surname": "Howell",
        "phone": "010-692-6593 x09125",
      },
      {
        "id": 3,
        "age": "33",
        "name": "Clementine",
        "surname": "Bauch",
        "phone": "1-463-123-4447",
      },
      {
        "id": 4,
        "age": "33",
        "name": "Patricia",
        "surname": "Lebsack",
        "phone": "493-170-9623 x156",
      },
      {
        "id": 5,
        "age": "33",
        "name": "Chelsey",
        "surname": "Dietrich",
        "phone": "(254)954-1289"
      },
      {
        "id": 6,
        "age": "33",
        "name": "Dennis",
        "surname": "Schulist",
        "phone": "1-477-935-8478 x6430",
      },
      {
        "id": 7,
        "age": "33",
        "name": "Kurtis",
        "surname": "Weissnat",
        "phone": "210.067.6132",
      },
      {
        "id": 8,
        "age": "33",
        "name": "Nicholas",
        "surname": "Runolfsdottir V",
        "phone": "586.493.6943 x140",
      },
      {
        "id": 9,
        "age": "33",
        "name": "Glenna",
        "surname": "Reichert",
        "phone": "(775)976-6794 x41206",
      },
      {
        "id": 10,
        "age": "33",
        "name": "Clementina",
        "surname": "DuBuque",
        "phone": "024-648-3804",
      }
    ],
    newItem: {
      id: null,
      name: '',
      surname: '',
      age: '',
      phone: ''
    },
    isFormShow: false
  };
  
  onDelete = (id) => {
    const newData= this.state.data.filter((item) => {
      return item.id !== id;
    });
    this.setState({
      data: newData
    })
  };
  
  onChange = (objChanges) => {
    this.setState({
      newItem: {
        ...this.state.newItem,
        ...objChanges
      }
    });
    // console.log(this.state.newItem);
  };
  
  onFormSubmit = (newItem) => {
    
    const index = this.state.data.findIndex((item) => newItem.id === item.id);
    // console.log(index);
    const newArr = [
        ...this.state.data.slice(0, index),
        newItem,
      ...this.state.data.slice(index + 1),
    ];
  
    this.setState({
      data: newItem === this.state.newItem && index !== -1 ? newArr : [...this.state.data, { ...newItem, id: Date.now() }],
      newItem: {
        id: null,
        name: '',
        surname: '',
        age: '',
        phone: ''
      },
      isFormShow: false
    })
  };
  
  moveToForm = (item) => {
    
    this.setState({
      newItem: {
        id: item.id,
        name: item.name,
        surname: item.surname,
        age: item.age,
        phone: item.phone
      },
      isFormShow: true
    });
    // console.log(this.state.data, this.state.newItem)
  };
  
  onDischangeForm = () => {
    this.setState({
      newItem: {
        id: null,
        name: '',
        surname: '',
        age: '',
        phone: ''
      },
      isFormShow: !this.state.isFormShow
    });
    // console.log(this.state.newItem);
  };
  
  render() {
    return (
      <div className = { styles.app }>
        <h2 className = { styles.caption }>Контакты</h2>
        <div className = { styles.app_wrap }>
          <Contacts
              data = { this.state.data }
              onDelete = { this.onDelete }
              moveToForm = { this.moveToForm }
              onDischangeForm = { this.onDischangeForm }
          />
          { this.state.isFormShow ? <ContactsForm
              onChange = { this.onChange }
              onFormSubmit = { this.onFormSubmit }
              newItem = { this.state.newItem }
          /> : null}
        </div>
      </div>
    );
  }
}

