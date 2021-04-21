import React from 'react'
import MuiAlert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';

function SnackBar({open, message, severity, handleClose}) {
    
    const Alert = (props) => {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    }

    return (
        <Snackbar style={{height: '35px'}} open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity={severity}>
            {message}
            </Alert>
        </Snackbar>
    )
}

export default SnackBar
