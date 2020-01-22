import React, { Component } from 'react';

//Styles
import Styles from './ContactsItem.module.css';

export default class ContactsItem extends Component {

  render() {

    return (
      <div className = { Styles.contacts_item }>
          <div className = { Styles.contacts_title }>{this.props.item.name}</div>
          <div className = { Styles.contacts_title }>{this.props.item.surname}</div>
          <div className = { Styles.contacts_title }>{this.props.item.age}</div>
          <div className = { Styles.contacts_title }>{this.props.item.phone}</div>
      </div>
  
    );
  }
}

