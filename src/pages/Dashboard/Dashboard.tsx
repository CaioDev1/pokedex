import React, { useEffect, useState } from 'react';
import {Outlet} from 'react-router-dom'
import { NavBar } from '../../components/NavBar/NavBar';
import { CatchingPokemon } from '@mui/icons-material';
import { Container} from '@mui/material';

import './Dashboard.scss'

export const Dashboard = () => {
    return (
        <Container maxWidth={false} className='d-flex bg-light' sx={{minHeight: '100vh', alignItems: 'start', paddingBottom: '7rem'}}>
            <CatchingPokemon id='background-page-icon' htmlColor='grey' />
            
            <Outlet />
            <NavBar />
        </Container>
    )
}