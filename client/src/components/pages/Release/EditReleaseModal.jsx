import React, { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import Navbar from '../../organisms/Navbar'
import Button from '../../atoms/Button'
import FileUpload from '../../molecules/FileUpload'

import { useReleases } from '../../../contexts/ReleaseContext'
import {
    getReleaseRequest,
    updateReleaseRequest,
    deleteReleaseRequest,
} from '../../../api/releases'
import Modal from '../../atoms/Modal'

const validationSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    artist: Yup.string().required('Artist is required'),
    coverImageUrl: Yup.mixed(),
    releaseDate: Yup.date().required('Release Date is required'),
    description: Yup.string(),
    genreId: Yup.string().required('Genre is required'),
    releaseType: Yup.string().required('Release Type is required'),
    bandcampLink: Yup.string().url('Invalid URL'),
    beatportLink: Yup.string().url('Invalid URL'),
    spotifyLink: Yup.string().url('Invalid URL'),
    appleMusicLink: Yup.string().url('Invalid URL'),
    youtubeLink: Yup.string().url('Invalid URL'),
    soundcloudLink: Yup.string().url('Invalid URL'),
})

function EditReleaseModal({ onClose }) {
    const { id } = useParams()
    const navigate = useNavigate()
    const [initialValues, setInitialValues] = useState({
        title: '',
        artist: '',
        coverImageUrl: '',
        releaseDate: '',
        isExplicit: false,
        description: '',
        genreId: '',
        releaseType: '',
        bandcampLink: '',
        beatportLink: '',
        spotifyLink: '',
        appleMusicLink: '',
        youtubeLink: '',
        soundcloudLink: '',
    })

    const { updateRelease, deleteRelease } = useReleases()

    useEffect(() => {
        fetchRelease(id)
    }, [id])

    const fetchRelease = async (releaseId) => {
        try {
            const response = await getReleaseRequest(releaseId)
            setInitialValues(response.data)
        } catch (error) {
            console.error('Error fetching release:', error)
        }
    }

    const handleSubmit = async (values, { setSubmitting }) => {
        const formData = new FormData()
        for (const key in values) {
            formData.append(key, values[key])
        }

        try {
            await updateRelease(id, formData)
            onClose()
        } catch (error) {
            console.error('Error updating release:', error)
            setSubmitting(false)
        }
    }

    const handleDelete = async () => {
        if (window.confirm('Are you sure you want to delete this release?')) {
            try {
                await deleteRelease(id)
                navigate('/releases')
            } catch (error) {
                console.error('Error deleting release:', error)
            }
        }
    }

    return (
        <div className='flex flex-col items-center justify-center'>
            <Formik
                initialValues={initialValues}
                enableReinitialize
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
                    <Form className='w-full bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 text-center'>
                        <h2 className='text-2xl mb-4 font-bold'>Edit Release</h2>
                        <div className='mb-4'>
                            <label
                                htmlFor='title'
                                className='block text-gray-700 font-bold mb-2'
                            >
                                Title
                            </label>
                            <Field
                                type='text'
                                id='title'
                                name='title'
                                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                placeholder='Title'
                                autoComplete='off'
                                autoFocus
                            />
                            <ErrorMessage
                                name='title'
                                component='div'
                                className='text-red-500 text-sm mt-1'
                            />
                        </div>
                        <div className='mb-4'>
                            <label
                                htmlFor='artist'
                                className='block text-gray-700 font-bold mb-2'
                            >
                                Artist
                            </label>
                            <Field
                                type='text'
                                id='artist'
                                name='artist'
                                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                placeholder='Artist'
                            />
                            <ErrorMessage
                                name='artist'
                                component='div'
                                className='text-red-500 text-sm mt-1'
                            />
                        </div>
                        <div className='mb-4'>
                            <FileUpload />
                        </div>
                        <div className='mb-4'>
                            <label
                                htmlFor='releaseDate'
                                className='block text-gray-700 font-bold mb-2'
                            >
                                Release Date
                            </label>
                            <Field
                                type='date'
                                id='releaseDate'
                                name='releaseDate'
                                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            />
                            <ErrorMessage
                                name='releaseDate'
                                component='div'
                                className='text-red-500 text-sm mt-1'
                            />
                        </div>
                        <div className='mb-4'>
                            <label
                                htmlFor='isExplicit'
                                className='block text-gray-700 font-bold mb-2'
                            >
                                Explicit Content
                            </label>
                            <Field
                                type='checkbox'
                                id='isExplicit'
                                name='isExplicit'
                                className='mr-2 leading-tight'
                            />
                        </div>
                        <div className='mb-4'>
                            <label
                                htmlFor='description'
                                className='block text-gray-700 font-bold mb-2'
                            >
                                Description
                            </label>
                            <Field
                                as='textarea'
                                id='description'
                                name='description'
                                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                placeholder='Description'
                            />
                            <ErrorMessage
                                name='description'
                                component='div'
                                className='text-red-500 text-sm mt-1'
                            />
                        </div>
                        <div className='mb-4'>
                            <label
                                htmlFor='genreId'
                                className='block text-gray-700 font-bold mb-2'
                            >
                                Genre
                            </label>
                            <Field
                                as='select'
                                id='genreId'
                                name='genreId'
                                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            >
                                <option value=''>Select Genre</option>
                                {/* Add your genre options here */}
                            </Field>
                            <ErrorMessage
                                name='genreId'
                                component='div'
                                className='text-red-500 text-sm mt-1'
                            />
                        </div>
                        <div className='mb-4'>
                            <label
                                htmlFor='releaseType'
                                className='block text-gray-700 font-bold mb-2'
                            >
                                Release Type
                            </label>
                            <Field
                                as='select'
                                id='releaseType'
                                name='releaseType'
                                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            >
                                <option value=''>Select Release Type</option>
                                {/* Add your release type options here */}
                            </Field>
                            <ErrorMessage
                                name='releaseType'
                                component='div'
                                className='text-red-500 text-sm mt-1'
                            />
                        </div>
                        <div className='mb-4'>
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
                        <div className='mb-4'>
                            <label
                                htmlFor='beatportLink'
                                className='block text-gray-700 font-bold mb-2'
                            >
                                Beatport Link
                            </label>
                            <Field
                                type='text'
                                id='beatportLink'
                                name='beatportLink'
                                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                placeholder='Beatport Link'
                            />
                            <ErrorMessage
                                name='beatportLink'
                                component='div'
                                className='text-red-500 text-sm mt-1'
                            />
                        </div>
                        <div className='mb-4'>
                            <label
                                htmlFor='spotifyLink'
                                className='block text-gray-700 font-bold mb-2'
                            >
                                Spotify Link
                            </label>
                            <Field
                                type='text'
                                id='spotifyLink'
                                name='spotifyLink'
                                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                placeholder='Spotify Link'
                            />
                            <ErrorMessage
                                name='spotifyLink'
                                component='div'
                                className='text-red-500 text-sm mt-1'
                            />
                        </div>
                        <div className='mb-4'>
                            <label
                                htmlFor='appleMusicLink'
                                className='block text-gray-700 font-bold mb-2'
                            >
                                Apple Music Link
                            </label>
                            <Field
                                type='text'
                                id='appleMusicLink'
                                name='appleMusicLink'
                                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                placeholder='Apple Music Link'
                            />
                            <ErrorMessage
                                name='appleMusicLink'
                                component='div'
                                className='text-red-500 text-sm mt-1'
                            />
                        </div>
                        <div className='mb-4'>
                            <label
                                htmlFor='youtubeLink'
                                className='block text-gray-700 font-bold mb-2'
                            >
                                YouTube Link
                            </label>
                            <Field
                                type='text'
                                id='youtubeLink'
                                name='youtubeLink'
                                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                placeholder='YouTube Link'
                            />
                            <ErrorMessage
                                name='youtubeLink'
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
                        <div className='flex items-center justify-between'>
                            <Link
                                type='button'
                                onClick={onClose} // Cambia a navigate para cerrar el modal
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
    )
}

export default EditReleaseModal
