import React from 'react'
import { useField, useFormikContext } from 'formik'
import { FormGroup, FormControl, FormLabel } from 'react-bootstrap'

const FileUpload = () => {
    const [field, meta, helpers] = useField('image')
    const { setFieldValue } = useFormikContext()
    const { error, touched } = meta
    const isInvalid = touched && !!error
    const isValid = touched && !error

    return (
        <FormGroup className="mb-3" controlId="image">
            <FormLabel>Upload Profile Image</FormLabel>
            <FormControl
                name="image"
                type="file"
                onChange={(event) => {
                    setFieldValue('image', event.currentTarget.files[0])
                }}
                isInvalid={isInvalid}
                isValid={isValid}
            />
            {isInvalid && (
                <FormControl.Feedback type="invalid">
                    {error}
                </FormControl.Feedback>
            )}
        </FormGroup>
    )
}

export default FileUpload
