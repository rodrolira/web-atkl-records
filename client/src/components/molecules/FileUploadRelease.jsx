import React from 'react'
import { useField, useFormikContext } from 'formik'
import { FormGroup, FormControl, FormLabel } from 'react-bootstrap'

const FileUploadRelease = () => {
    const [field, meta, helpers] = useField('coverImageUrl')
    const { setFieldValue } = useFormikContext()
    const { error, touched } = meta
    const isInvalid = touched && !!error
    const isValid = touched && !error

    return (
        <FormGroup className='mb-3' controlId='coverImageUrl'>
            <FormLabel className='block text-gray-700 font-bold mb-2'>
                Upload Profile Image
            </FormLabel>
            <FormControl
                name='coverImageUrl'
                type='file'
                className='shadow appearance-none border border-1 solid rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                onChange={event => {
                    setFieldValue('coverImageUrl', event.currentTarget.files[0])
                }}
                isInvalid={isInvalid}
                isValid={isValid}
            />
            {isInvalid && (
                <FormControl.Feedback type='invalid'>
                    {error}
                </FormControl.Feedback>
            )}
        </FormGroup>
    )
}

export default FileUploadRelease
