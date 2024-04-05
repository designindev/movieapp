import React from 'react';

interface ButtonProps {
    text: string;
    type?: 'button' | 'submit' | 'reset';
    view: 'primary' | 'cancel';
    onClick?: () => void;
    style?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({ text, view, type, onClick, style }) => {
    let buttonClasses = 'py-4 px-7 border text-regular rounded-[10px] text-white transition-transform hover:scale-105';

    switch (view) {
        case 'primary':
            buttonClasses += ' bg-primary border-primary';
            break;
        case 'cancel':
            buttonClasses += ' bg-transparent border-white';
            break;
        default:
            break;
    }

    return (
        <button 
            type={type}
            className={buttonClasses}
            onClick={onClick}
            style={style}
        >
            {text}
        </button>
    );
};

export default Button;
