import React, { Component } from 'react';

//Styles
import Styles from './Contacts.module.css';

//Components
import ContactsItem from '../ContactsItem/ContactsItem'

export default class Contacts extends Component {

  render() {
    
    return (
      <div className = { Styles.contacts_wrap }>
        <div className = { Styles.contacts_head }>
          <div className = { Styles.contacts_title }>Имя</div>
          <div className = { Styles.contacts_title }>Фамилия</div>
          <div className = { Styles.contacts_title }>Возраст</div>
          <div className = { Styles.contacts_title }>Телефон</div>
        </div>
        { 
          this.props.data.map((item) => {
            return (
              <ContactsItem 
                item = { item }
                key = { item.id }
              />
            )
              
          })
        }

        {/* { 
          this.props.data.map(({id, name, surname, age, phone}) => {
            return (
              <ContactsItem 
                key = { id }
                name = { name }
                surname = { surname }
                age = { age }
                phone = { phone }
              />
            )
              
          })
        } */}

      </div>
    );
  }
}

