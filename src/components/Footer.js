import React from 'react';
import '../styles.css';

export default function Footer() {

    //The current date
    const currYear = new Date().getFullYear();
    const currMonth = new Date().getMonth();
    const currDay = new Date().getDay();

    return (
        <footer className='footer'>
            <p className='footer-text'>
                © 0{currMonth},0{currDay},{currYear} MovieDux. All rights reserved.
            </p>
        </footer>
    );
}