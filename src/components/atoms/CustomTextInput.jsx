<<<<<<< HEAD
import React from 'react'
import { useField, ErrorMessage } from 'formik'

const CustomTextInput = (props) => {
    const [field] = useField(props)
=======
import React from 'react';
import { useField, ErrorMessage } from 'formik';

const CustomTextInput = (props) => {
    const [field] = useField(props);
>>>>>>> 8bdbd8a2f72f04acc13eaae10f9f32042ff8ae96

    return (
        <>
            <input {...field} {...props} />
            <ErrorMessage name={props.name} component="span" className="error" />
        </>
<<<<<<< HEAD
    )
}

export default CustomTextInput
=======
    );
};

export default CustomTextInput;
>>>>>>> 8bdbd8a2f72f04acc13eaae10f9f32042ff8ae96
