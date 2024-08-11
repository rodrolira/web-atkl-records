// DialogManager.jsx
<<<<<<< HEAD
import React, { useState } from 'react'
import { Dialog } from '@mui/material'
import Button from '../../atoms/Button'

const DialogManager = ({ children }) => {
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)
=======
import React, { useState } from 'react';
import { Dialog } from '@mui/material';
import Button from '../../atoms/Button';

const DialogManager = ({ children }) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
>>>>>>> 8bdbd8a2f72f04acc13eaae10f9f32042ff8ae96

    return (
        <>
            <Button onClick={handleOpen} className="btn-add mx-auto" variant="contained">
                Add Release
            </Button>
            <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
                {children(handleClose)}
            </Dialog>
        </>
<<<<<<< HEAD
    )
}

export default DialogManager
=======
    );
};

export default DialogManager;
>>>>>>> 8bdbd8a2f72f04acc13eaae10f9f32042ff8ae96
