import React from 'react';
import styles from './App.module.css';
import AppFeedback from './Components/FeedBack/AppFeedback';
import AppPhoneBook from './Components/PhoneBook/AppPhoneBook';

const App = () => {
    return (
        <div>
            {/* <AppFeedback /> */}
            <AppPhoneBook />
        </div>
    );
};

export default App;