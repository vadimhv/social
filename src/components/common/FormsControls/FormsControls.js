import React from 'react'
import style from './FormsControls.module.css';
import {Field} from "redux-form";

const Element = Element => ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={ style.formControl + " " + (hasError ? style.error : "") }>
            <Element {...input} {...props} />
            { hasError && <span> { meta.error } </span> }
        </div>
    );
};

export const Textarea = Element("textarea");

export const Input = Element("input");

export const createField = (type, placeholder, name, validators, component, props, text = '') => (
        <div className={style.wrapper}>
            <Field type={type} placeholder={placeholder} component={component} name={name} validate={validators} {...props}/> <div>{text}</div>
        </div>
)