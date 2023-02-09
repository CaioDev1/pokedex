import React from 'react'
import {Paper, Box, styled} from '@mui/material'

// import './ListPage.scss'

const GridCard = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    lineHeight: '60px',
}));

export const ListPage = () => {
    return (
        <Box sx={{height: '100vh', padding: '2rem 0'}}>
            {new Array(5).fill('').map(item => {
                return (
                    <GridCard elevation={20} className='grid-card px-4 pt-5 pb-3'>
                        {/* <CardIndexTitle className='text-muted'>Nº 385</CardIndexTitle>
                        <h4 className='font-weight-bold'>Charmander</h4>
                        <div className='row mx-0 justify-content-center'>
                            <span className='card-tag rounded bg-success text-white px-3 py-2'>GRASS</span>
                            <span className='card-tag rounded bg-success text-white px-3 py-2'>GRASS</span>
                        </div> */}
                    </GridCard>
                )
            })}
        </Box>
    )
}