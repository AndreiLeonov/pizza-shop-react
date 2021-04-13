import classNames from 'classnames';
import React from 'react';

export const Button = ({onClick, className, outline, children}) => {
    return (
        <button onClick={onClick} className={
            classNames("button", className, {
                "button--outlined": outline,
            })
        }>{children}</button>
    );
}