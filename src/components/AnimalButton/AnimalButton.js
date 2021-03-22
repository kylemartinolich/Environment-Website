import React from 'react';
import classes from './AnimalButton.module.css';
import Plus from '../../assets/Miscellaneous/plus.png';
const animalButton = (props) => (
    <div>
        <img  className={classes.plusButton} src={Plus} alt="Plus Button"></img>
    </div>
    
);

export default animalButton;

//<div>Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>