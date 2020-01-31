import React, { Component } from 'react';

//Styles
import styles from './ContactsForm.module.css';

export default class ContactsForm extends Component {
  
  onInputChange = (e) => {
    this.props.onChange({[e.target.name]: e.target.value})
    // console.log(this.props.newItem);
  };
  
  onFormSubmit = (e) => {
    e.preventDefault();
    const { name, surname, age, phone } = this.props.newItem;
    if (name !== '' && surname !== '' && age !== '' && phone !== '')
      {this.props.onFormSubmit(this.props.newItem)}
    else {return};
      // console.log(this.props.newItem);
  };

  render() {
    
    return (
      <form className = { styles.form_wrap } onSubmit = { this.onFormSubmit }>
        <div className = { styles.input_wrap }>
          <label className = { styles.label } htmlFor='name'>Имя</label>
          <input className = { styles.input } id = 'name' type='text' name = 'name' value = { this.props.newItem.name } onChange = { this.onInputChange } />
        </div>
        <div className = { styles.input_wrap }>
          <label className = { styles.label } htmlFor='surname'>Фамилия</label>
          <input className = { styles.input } id = 'surname' type='text' name = 'surname' value = { this.props.newItem.surname } onChange = { this.onInputChange } />
        </div>
        <div className = { styles.input_wrap }>
          <label className = { styles.label } htmlFor='age'>Возраст</label>
          <input className = { styles.input } id = 'age' type='text' name = 'age' value = { this.props.newItem.age } onChange = { this.onInputChange } />
        </div>
        <div className = { styles.input_wrap }>
          <label className = { styles.label } htmlFor='phone'>Телефон</label>
          <input className = { styles.input } id = 'phone' type='text' name = 'phone' value = { this.props.newItem.phone } onChange = { this.onInputChange } />
        </div>
        <div className = { styles.input_wrap }>
          <button className = { styles.btn_save }>Сохранить</button>
        </div>
      </form>
    );
  }
}

