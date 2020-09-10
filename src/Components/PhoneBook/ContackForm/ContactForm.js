import React, { Component } from 'react';
import styles from './ContactForm.module.css';
import PropTypes from 'prop-types';

class ContactForm extends Component {
    static propTypes = {};
    static defaultProps = {};

    state = {
        name: '',
        number: '',
    }

    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({
            [name]: value,
        })
    }

    hadleSubpmit = (e) => {
        const {name, number} = this.state;
        e.preventDefault();
        this.props.onAddName(name, number);
        this.setState({name: '', number: ''});
    }    

    render() {
        const {name, number} = this.state
        return (
            <div className = {styles.mainHeader} >
                <form 
                className = {styles.bookForm}
                onSubmit = {this.hadleSubpmit} >
                    <label className = {styles.bookName} >Name<br/>                       
                        <input
                        className = {styles.bookInputName}
                        placeholder = 'Name'
                        type = 'text'
                        value = {name}
                        onChange = {this.handleChange}
                        name = 'name'
                        /><br/>
                        <input
                        className = {styles.bookInputNumber}
                        placeholder = 'Number'
                        type = 'text'
                        value = {number}
                        onChange = {this.handleChange}
                        name = 'number'
                        />
                    </label><br/>
                    <button 
                    className = {styles.bookBtn}
                    type='submit' >Add contact</button>
                </form>
            </div>
        );
    }
}

export default ContactForm;