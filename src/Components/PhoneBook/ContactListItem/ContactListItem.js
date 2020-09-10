import React from 'react';
import styles from './ContactListItem.module.css';
import PropTypes from 'prop-types';

const ContactListItem = ({name, number, onRemove}) => {
    return (       
        <li className = {styles.contactItem} >
            <p className = {styles.contactName} >{name}: {number}</p>
            <section>
                <button
                className = {styles.deleteBtn}
                type = 'button'
                onClick = {onRemove}
                >
                Delete!</button>
            </section>
        </li>
    );
};

ContactListItem.propTypes = {
    name: PropTypes.string,
    number: PropTypes.string
}

export default ContactListItem;
