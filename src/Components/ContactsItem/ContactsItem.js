import React, { Component } from 'react';
import propTypes from '../propTypes';

//Styles
import styles from './ContactsItem.module.css';

export default class ContactsItem extends Component {
  
  onDeleteBtn = (e) => {
      this.props.onDelete(this.props.item.id);
      e.stopPropagation()
  };
  
  moveToForm = () => {
      this.props.moveToForm(this.props.item);
      // console.log(this.props.item.id, this.props.item);
  };

  render() {
    const { name, surname, age, phone } = this.props.item;
    return (
      <div className = { styles.contacts_item } onClick = { this.moveToForm }>
          <div className = { styles.contacts_title }>{ name }</div>
          <div className = { styles.contacts_title }>{ surname }</div>
          <div className = { styles.contacts_title }>{ age }</div>
          <div className = { styles.contacts_title }>{ phone }</div>
          <div className = { styles.contacts_title }>
              <button className = { styles.btn_del } onClick = { this.onDeleteBtn }>Delete</button>
          </div>
      </div>
  
    );
  }
}

ContactsItem.propTypes = {
    item: propTypes.itemType.isRequired
};

