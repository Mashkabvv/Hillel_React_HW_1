import React, { Component } from 'react';
import propTypes from '../propTypes';

//Styles
import styles from './Contacts.module.css';

//Components
import ContactsItem from '../ContactsItem/ContactsItem'

export default class Contacts extends Component {

  render() {
    
    return (
      <div className = { styles.contacts_wrap }>
        <div className = { styles.contacts_head }>
          <div className = { styles.contacts_title }>Имя</div>
          <div className = { styles.contacts_title }>Фамилия</div>
          <div className = { styles.contacts_title }>Возраст</div>
          <div className = { styles.contacts_title }>Телефон</div>
          <div className = { styles.contacts_title }>Delete</div>
        </div>
        { 
          this.props.data.map((item) => {
            return (
              <ContactsItem 
                item = { item }
                key = { item.id }
                onDelete = { this.props.onDelete }
                moveToForm = { this.props.moveToForm }
              />
            )
              
          })
        }
        <button className = { styles.btn_add } onClick = { this.props.onDischangeForm }>Add</button>
      </div>
    );
  }
}

Contacts.propTypes = {
  data: propTypes.dataType.isRequired
};

