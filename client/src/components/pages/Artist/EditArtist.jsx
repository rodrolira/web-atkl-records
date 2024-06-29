import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import Navbar from '../../organisms/Navbar'
import Button from '../../atoms/Button'
import FileUpload from '../../molecules/FileUpload'

import { useArtists } from '../../../contexts/ArtistContext'
import { getArtistRequest } from '../../../api/artists'

const validationSchema = Yup.object().shape({
    artistName: Yup.string().required('Artist name is required'),
    image: Yup.mixed(),
    role: Yup.array().of(Yup.string()), // Updated validation for role as an array of strings
})

function EditArtist () {
    const { id } = useParams()
    const navigate = useNavigate()
    const [initialValues, setInitialValues] = useState({
        artistName: '',
        image: '',
        twitterLink: '',
        instagramLink: '',
        facebookLink: '',
        soundcloudLink: '',
        bandcampLink: '',
        role: [], // Initialize as an empty array for multiple selection
    })

    const { updateArtist, deleteArtist } = useArtists()

    useEffect(() => {
        fetchArtist(id)
    }, [id])

    const fetchArtist = async artistId => {
        try {
            const response = await getArtistRequest(artistId)
            setInitialValues(response.data)
        } catch (error) {
            console.error('Error fetching artist:', error)
        }
    }

    const handleSubmit = async (values, { setSubmitting }) => {
        const formData = new FormData()
        for (const key in values) {
            formData.append(key, values[key])
        }

        try {
            await updateArtist(id, formData)
            navigate(`/artists/${id}`)
        } catch (error) {
            console.error('Error updating artist:', error)
            setSubmitting(false)
        }
    }

    const handleDelete = async () => {
        if (window.confirm('Are you sure you want to delete this artist?')) {
            try {
                await deleteArtist(id)
                navigate('/artists')
            } catch (error) {
                console.error('Error deleting artist:', error)
            }
        }
    }

    return (
        <>
            <Navbar />
            <div className='flex flex-col items-center justify-center mt-32'>
                <Formik
                    initialValues={initialValues}
                    enableReinitialize
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ isSubmitting }) => (
                        <Form className='w-full max-w-md bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
                            <h2 className='text-2xl mb-4 font-bold'>
                                Edit Artist
                            </h2>
                            <div className='mb-4'>
                                <label
                                    htmlFor='artistName'
                                    className='block text-gray-700 font-bold mb-2'
                                >
                                    Artist Name
                                </label>
                                <Field
                                    type='text'
                                    id='artistName'
                                    name='artistName'
                                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                    placeholder='Artist Name'
                                    autoComplete='off'
                                    autoFocus
                                />
                                <ErrorMessage
                                    name='artistName'
                                    component='div'
                                    className='text-red-500 text-sm mt-1'
                                />
                            </div>
                            <div className='mb-4'>
                                <FileUpload />
                            </div>
                            <div className='mb-4'>
                                <label
                                    htmlFor='role'
                                    className='block text-gray-700 font-bold mb-2'
                                >
                                    Role
                                </label>
                                <Field
                                    as='select'
                                    id='role'
                                    name='role'
                                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                >
                                    <option value='DJ'>DJ</option>
                                    <option value='Producer'>Producer</option>
                                </Field>
                                <ErrorMessage
                                    name='role'
                                    component='div'
                                    className='text-red-500 text-sm mt-1'
                                />
                            </div>
                            <div className='mb-4'>
                                <label
                                    htmlFor='twitterLink'
                                    className='block text-gray-700 font-bold mb-2'
                                >
                                    Twitter Link
                                </label>
                                <Field
                                    type='text'
                                    id='twitterLink'
                                    name='twitterLink'
                                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                    placeholder='Twitter Link'
                                />
                                <ErrorMessage
                                    name='twitterLink'
                                    component='div'
                                    className='text-red-500 text-sm mt-1'
                                />
                            </div>
                            <div className='mb-4'>
                                <label
                                    htmlFor='instagramLink'
                                    className='block text-gray-700 font-bold mb-2'
                                >
                                    Instagram Link
                                </label>
                                <Field
                                    type='text'
                                    id='instagramLink'
                                    name='instagramLink'
                                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                    placeholder='Instagram Link'
                                />
                                <ErrorMessage
                                    name='instagramLink'
                                    component='div'
                                    className='text-red-500 text-sm mt-1'
                                />
                            </div>
                            <div className='mb-4'>
                                <label
                                    htmlFor='facebookLink'
                                    className='block text-gray-700 font-bold mb-2'
                                >
                                    Facebook Link
                                </label>
                                <Field
                                    type='text'
                                    id='facebookLink'
                                    name='facebookLink'
                                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                    placeholder='Facebook Link'
                                />
                                <ErrorMessage
                                    name='facebookLink'
                                    component='div'
                                    className='text-red-500 text-sm mt-1'
                                />
                            </div>
                            <div className='mb-4'>
                                <label
                                    htmlFor='soundcloudLink'
                                    className='block text-gray-700 font-bold mb-2'
                                >
                                    SoundCloud Link
                                </label>
                                <Field
                                    type='text'
                                    id='soundcloudLink'
                                    name='soundcloudLink'
                                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                    placeholder='SoundCloud Link'
                                />
                                <ErrorMessage
                                    name='soundcloudLink'
                                    component='div'
                                    className='text-red-500 text-sm mt-1'
                                />
                            </div>
                            <div className='mb-6'>
                                <label
                                    htmlFor='bandcampLink'
                                    className='block text-gray-700 font-bold mb-2'
                                >
                                    Bandcamp Link
                                </label>
                                <Field
                                    type='text'
                                    id='bandcampLink'
                                    name='bandcampLink'
                                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                    placeholder='Bandcamp Link'
                                />
                                <ErrorMessage
                                    name='bandcampLink'
                                    component='div'
                                    className='text-red-500 text-sm mt-1'
                                />
                            </div>
                            <div className='flex items-center justify-between'>
                                <Link
                                    type='button'
                                    to={`/artists/${id}`}
                                    className='btn btn-cancel'
                                >
                                    Cancel
                                </Link>
                                <button
                                    type='submit'
                                    className='btn btn-save'
                                    disabled={isSubmitting}
                                >
                                    Save
                                </button>
                                <Button
                                    type='button'
                                    className='btn btn-delete'
                                    onClick={handleDelete}
                                >
                                    Delete
                                </Button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </>
    )
}

export default EditArtist
