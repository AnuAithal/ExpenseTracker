import React, { forwardRef } from 'react'
import { Box, Dialog, DialogContent, Fade, Grid, Typography } from '@mui/material'
import { Button } from 'reactstrap'

const Transition = forwardRef(function Transition(props,ref){
    return <Fade ref={ref} {...props} />
})

function ConfirmBox({open, closeDialog,title, deleteFunction}) {
  return (
    <Dialog
    fullWidth
    open={open}
    maxWidth="sm"
    scroll='body'
    onClose={closeDialog}
    onBackdropClick={closeDialog}
    TransitionComponent={Transition}
    >

        <DialogContent sx={{px:4,py:6,position:"relative"}}>
            <Grid container spacing={6}>
                <Grid item xs={12}>
                    <Box sx={{mb:3, display:"flex", justifyContent:"flex-start",flexDirection:"column"}}>
                        <Typography variant='body'>
                            Are you sure you want to delete "{title}"?
                        </Typography>    
                    </Box>
                </Grid>
                <Grid item xs={12} sx={{display:"flex", justifyContent:"center", gap:"2rem"}}>
                    
                        <Button onClick={deleteFunction} className="btn btn-danger btn deletebutton" size='small' color='error'>Delete</Button>
                        <Button onClick={closeDialog} size='small'  color='primary'>Cancel</Button>
                
                </Grid>
            </Grid>
        </DialogContent>

    </Dialog>
  )
}

export default ConfirmBox
