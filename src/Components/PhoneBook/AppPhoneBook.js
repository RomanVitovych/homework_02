import React, { Component } from 'react';
import styles from './AppPhoneBook.module.css';
import ContactForm from './ContackForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { v4 as uuidv4 } from 'uuid';
import dataBase from './dataBase.json';
import PropTypes from 'prop-types';

class AppPhoneBook extends Component {
    static propTypes = {};
    static defaultProps = {};

    state = {
        contacts: [
            { "id": "id-1", "name": "Rosie Simpson", "number": "459-12-56" },
            { "id": "id-2", "name": "Hermione Kline", "number": "443-89-12" },
            { "id": "id-3", "name": "Eden Clements", "number": "645-17-79" },
            { "id": "id-4", "name": "Annie Copeland", "number": "227-91-26" }
        ],
        filter: '',
    }

    addName = (name, number) => {
        const contact = {
            id: uuidv4(),
            name,
            number,
        }
        const checkContact = this.state.contacts.find (
            contact => contact.name === name
        ) 
        if (!checkContact) {
            this.setState(prevState => {
                return {
                    contacts: [...prevState.contacts, contact]
                }
            })
        }   else {
            alert (`${name} is allready in contacts`);
        }                    
    }

    removeName = (contactId) => {
        this.setState(prevState => {
            return {
                contacts: prevState.contacts.filter(({id}) => id !== contactId)
            }
        })
    }

    changeFilter = (filter) => {
        this.setState({filter});
    }
    getVisibleContact = () => {
        const {contacts, filter} = this.state;
        return contacts.filter (contact =>
            contact.name.toLowerCase().includes(filter.toLowerCase())
        )
    }

    render() {
        const {contacts, filter} = this.state;
        const visibleContact = this.getVisibleContact();
        return (
            <div className = {styles.general}>
                <h2 className = {styles.bookHeader} >Phonebook</h2>

                <ContactForm onAddName = {this.addName} />

                <h2 className = {styles.contactHeader} >Contacts</h2>

                <Filter 
                value = {filter}
                onChangeFilter = {this.changeFilter}/>

                {/* {contacts.length > 0 && (
                <Filter 
                value = {filter}
                onChangeFilter = {this.changeFilter}/>
                )} */}
                
                <ContactList contacts = {visibleContact} onRemoveName = {this.removeName} />              
            </div>
        );
    }
}

export default AppPhoneBook;