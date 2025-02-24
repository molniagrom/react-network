import React from 'react';
import s from './FormsControls.module.css';

export const TextArea = ({ field, form: {touched, errors}, ...props}) => {

    // debugger
    const error = errors[field.name] && touched[field.name];

    return (
        <div className={`${s.formControl} ${error ? s.error : ''}`}>
            <div>
                <textarea {...field} {...props}/>
            </div>
            {error && <span>{errors[field.name]}</span>}
        </div>
    )
}
export const Input = ({ field, form: {touched, errors}, ...props}) => {

    const error = errors[field.name] && touched[field.name];

    return (
        <div className={`${s.formControl} ${error ? s.error : ''}`}>
            <div>
                <input {...field} {...props}/>
            </div>
            {error && <span>{errors[field.name]}</span>}
        </div>
    )
}


// не работает "field, form:" undefined
// import React from 'react';
// import s from './FormsControls.module.css';
//
// // Один кусок кода
// export const FormControls = ({field, form: {touched, errors}, children, ...props}) => {
//     debugger
//     const error = errors[field.name] && touched[field.name];
//
//     return (
//         <div className={`${s.formControl} ${error ? s.error : ''}`}>
//             <div>
//                 {props.children}
//             </div>
//             {error && <span>{errors[field.name]}</span>}
//         </div>
//     )
// }
//
// // 2 обертки над ним
// export const TextArea = ({field, ...props}) => {
//     return <FormControls {...props}> <textarea {...field} {...props}/></FormControls>
// }
// export const Input = ({field, ...props}) => {
//     return <FormControls {...props}> <input {...field} {...props}/></FormControls>
// }