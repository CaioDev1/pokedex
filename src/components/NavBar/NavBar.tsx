import React from 'react'
import {AppBar, Toolbar, Divider, Slide, IconButton} from '@mui/material'
import {CatchingPokemon, EmojiEvents} from '@mui/icons-material';

import './NavBar.scss'

import PokemonLogo from '../../assets/pokemon-logo.png'

export const NavBar = () => {
    return (
        <Slide direction='up' in mountOnEnter unmountOnExit>
            <AppBar elevation={7} position='fixed' sx={{left: 0, top: 'auto', bottom: 20, border: '1'}} className='bg-danger navbar'>
                <Toolbar className='d-flex'>
                    <img src={PokemonLogo} alt="pokemon-logo" className='menu-bar-pokemon-logo' />
    
                    <section className='flex-grow-1 d-flex align-items-center justify-content-around'>
                        <IconButton>
                            <CatchingPokemon fontSize='large' htmlColor='white' />
                        </IconButton>
                        <Divider orientation="vertical" variant="middle" flexItem sx={{borderRightWidth: 2, borderColor: '#FFF'}} />
                        <IconButton>
                            <EmojiEvents fontSize='large' htmlColor='white' />
                        </IconButton>
                    </section>
                </Toolbar>
            </AppBar>
        </Slide>
    )
}