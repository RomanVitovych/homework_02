import React from 'react';
import styles from './ContactList.module.css';
import ContactListItem from '../ContactListItem/ContactListItem';
import PropTypes from 'prop-types';

const ContactList = ({contacts, onRemoveName}) => {
    return (
        <div className = {styles.secondaryHeader} >
            <ul className = {styles.contactList} >
                {contacts.map(({name, id, number}) => (
                    <ContactListItem 
                    name = {name}
                    key = {id}
                    number = {number}
                    onRemove = {() => onRemoveName(id)}
                />
                ))}              
            </ul>
        </div>
    );
};

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.exact({
        name: PropTypes.string,
        id: PropTypes.string,
        number: PropTypes.string
    }))
}

export default ContactList;
