import React from 'react';

const ChoiceButton = ({ choice, handleClick, children }) => {
    return <button onClick={() => handleClick(choice)}>{children}</button>;
};

export default ChoiceButton;