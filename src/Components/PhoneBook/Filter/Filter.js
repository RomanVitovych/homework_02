import React from 'react';
import styles from './Filter.module.css';
import PropTypes from 'prop-types';

const Filter = ({value, onChangeFilter}) => {
    return (
        <div>
            <h3 className = {styles.contactSearch} >Find contacts by name</h3>
            <input 
            className = {styles.inputSearch} 
            placeholder = 'Search contact'
            type = 'text'
            value = {value}
            onChange = {e => onChangeFilter(e.target.value)}
            />
        </div>
    );
};

Filter.propTypes = {
    value: PropTypes.string,
    onChangeFilter: PropTypes.func
}

export default Filter;