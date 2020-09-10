import React from 'react';
import styles from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
        <div className={styles.btnList}>
            {options.map(option => (
                <button 
                className={styles.btn}
                type='button' 
                data-source={option}
                onClick={onLeaveFeedback}>
                    {option}
                </button>
            ))}            
        </div>
    );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}