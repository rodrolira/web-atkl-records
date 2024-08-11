import { useState } from 'react'
<<<<<<< HEAD
import AddReleaseForm from '../pages/Release/AddReleaseForm'
=======
import Button from '../atoms/Button'
import AddReleaseForm from '../pages/Release/AddReleaseForm';
>>>>>>> 8bdbd8a2f72f04acc13eaae10f9f32042ff8ae96

const AddReleaseButton = () => {
    const [open, openChange] = useState(false)
    const functionOpenPopup = () => {
        openChange(true)
    }
    const closePopup = () => {
        openChange(false)
    }

    return (
        <>
            <AddReleaseForm
                onClick={functionOpenPopup}
                open={open}
                closePopup={closePopup}
            />
        </>
    )
}

export default AddReleaseButton
