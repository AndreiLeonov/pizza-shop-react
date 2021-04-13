import classNames from 'classnames';
import React from 'react';

export const Button = (props) => {
    console.log('children:' + props.children)
    return (
        <button className={
            classNames("button", {
                "button--outlined": props.outline,
            })
        }>{props.children}</button>
    );
}