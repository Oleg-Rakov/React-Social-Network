import React from 'react'
import { Field } from 'redux-form';
import { required } from '../../../UTILS/VALIDATORS/Validators';
import styles from './FormControls.module.css'

const FormControl = ({ input, meta: { touched, error }, children, }) => {
    const hasError = touched && error;

    return (
        <div className={styles.formBlock + ' ' + (hasError ? styles.error : '')}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}


export let Textarea = (props) => {
    const { input, meta, child, ...restProps } = props;
    return <FormControl {...props}><textarea  {...input} {...restProps} /></FormControl>
}

export let Input = (props) => {
    const { input, meta, child, ...restProps } = props;
    return <FormControl {...props}><input  {...input} {...restProps} /></FormControl>
}

export let createField = (validate, name, placeholder, component, props = {}, text = '') => {
    return <div>
        <Field validate={validate} name={name}
            placeholder={placeholder} component={component}
            {...props}
        /> {text}
    </div>
}