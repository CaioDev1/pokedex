
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Fab, TextField } from '@mui/material';
import { Add } from '@mui/icons-material';
import { TeamAccordion } from '../../components/TeamAccordion/TeamAccordion';

import './TeamsPage.scss';
import { useState } from 'react';

export const TeamsPage = () => {
    const [modalOpen, setModalOpen] = useState(false);
    
    const handleModalOpen = () => setModalOpen(true);
    const handleModalClose = () => setModalOpen(false);

    return (
        <main className='teams-page'>
            <TeamAccordion />
            <TeamAccordion />
            <TeamAccordion />

            <Fab onClick={handleModalOpen} className='bg-danger add-team-btn' color="secondary" aria-label="add">
                <Add fontSize='large' />
            </Fab>
            <Dialog open={modalOpen} onClose={handleModalClose}>
                <DialogTitle>Team name</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Note: Team name cannot be the same a already registered team.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Name"
                        type="text"
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <Button color='error' onClick={handleModalClose}>Cancel</Button>
                    <Button color='error' onClick={handleModalClose}>Subscribe</Button>
                </DialogActions>
            </Dialog>
        </main>
    )
}