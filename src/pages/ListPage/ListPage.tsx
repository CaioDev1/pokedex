import { Search as SearchIcon } from '@mui/icons-material';
import {Paper, InputBase, styled, alpha } from '@mui/material';
import { Fragment, memo, useEffect, useState } from 'react';

import { AsideMenu } from '../../components/AsideMenu/AsideMenu';
import './ListPage.scss';
import {PokemonList} from './PokemonList/PokemonList';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    backgroundColor: alpha(theme.palette.common.white, 0.85),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.95),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 'auto',
    },
}));
  
const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
        [theme.breakpoints.up('md')]: {
      },
    },
}));

export const ListPage = () => {
    const [currentPokemonPreview, setCurrentPokemonPreview] = useState<any>(null)
    const [pokemonsList, setPokemonsList] = useState<any[]>(new Array(25).fill(''))

    function handlePokemonCardHover(pokemon: any) {
        setCurrentPokemonPreview(pokemon)
    }

    const ListPageContent = (
        <Fragment>
            <main className='list-page' style={{padding: '2rem 0'}}>
                <Paper elevation={20} className='mb-3' style={{borderRadius: 15, overflow: 'hidden'}}>
                    <Search className='py-3'>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            fullWidth
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                </Paper>
                <PokemonList handlePokemonCardHover={handlePokemonCardHover} pokemonsList={pokemonsList} />
            </main>
            <AsideMenu pokemon={currentPokemonPreview} />
        </Fragment>
    )

    return ListPageContent
}