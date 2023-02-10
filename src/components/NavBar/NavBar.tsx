import React, { Fragment } from 'react'
import {AppBar, Toolbar, Divider, Slide, Tooltip, IconButton} from '@mui/material'
import {CatchingPokemon, EmojiEvents} from '@mui/icons-material';

import './NavBar.scss'

import PokemonLogo from '../../assets/pokemon-logo.png'

export const NavBar = () => {
    return (
        <Slide direction='up' in mountOnEnter >
            <AppBar elevation={7} position='fixed' sx={{left: 0, top: 'auto', bottom: 20, border: '1'}} className='bg-danger navbar'>
                <Toolbar className='d-flex'>
                    <img src={PokemonLogo} alt="pokemon-logo" className='menu-bar-pokemon-logo' />
    
                    <section className='flex-grow-1 d-flex align-items-center justify-content-around'>
                        <Tooltip title='Pokedex'>
                            <IconButton href='/'>
                                <CatchingPokemon fontSize='large' htmlColor='white' />
                            </IconButton>
                        </Tooltip>
                        <Divider orientation="vertical" variant="middle" flexItem sx={{borderRightWidth: 2, borderColor: '#FFF'}} />
                        <Tooltip title='Meus times'>
                            <IconButton href='/teste'>
                                <EmojiEvents fontSize='large' htmlColor='white' />
                            </IconButton>
                        </Tooltip>
                    </section>
                </Toolbar>
                <span style={{fontSize: '0.7rem'}}>
                    Made with ❤️ by Caio
                </span>
            </AppBar>
        </Slide>
    )
}