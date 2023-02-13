import { Search as SearchIcon } from '@mui/icons-material';
import {Paper, InputBase, styled, alpha } from '@mui/material';
import { Fragment, useEffect, useMemo, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroller'

import './ListPage.scss';

import { AsideMenu } from '../../components/AsideMenu/AsideMenu';
import { useRequest } from '../../services/api/useRequest';
import {PokemonList} from './PokemonList/PokemonList';
import { IPokemonList } from '../../services/interfaces/pokemonList';

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
    const [pokemonsList, setPokemonsList] = useState<IPokemonList['results']>([])


    const fetchParams = useMemo(() => ({path: `https://pokeapi.co/api/v2/pokemon/?limit=100`, options: {method: 'GET'}}), [])
    
    const [fetchedPokemons, error] = useRequest<IPokemonList>(fetchParams)

    /* 
    const fetchParams = useMemo(() => ({path: `https://pokeapi.co/api/v2/pokemon/?offset=${currentOffset}&limit=${FETCH_STEP}`, options: {method: 'GET'}}), [currentOffset])

    const [currentOffset, setCurrentOffset] = useState<number>(1)
    const [hasMore, setHasMore] = useState<boolean>(true);
    const [isLoading, setLoading] = useState<boolean>(true);
    
    const FETCH_STEP: number = 50


    useEffect(() => {
        handleFetch() 
    }, [])

    async function handleFetch() {
        setLoading(true)
        setPokemonsList(value => ([...value, ...[{name: 'asdfa', url: 'sadfasdf'}]]))
        // setPokemonsList(value => ([...value, ...[1]]...((fetchedPokemons as IPokemonList)?.results ?? [])])))

        if(pokemonsList.length > 1200) setHasMore(false)
    
        const POKEAPI_URL = 'https://pokeapi.co/api/v2/pokemon';
        const response = await fetch(`${POKEAPI_URL}?offset=${currentOffset}&limit=${FETCH_STEP}`);
        const data = await response.json();

        if (!data.results.length) {
            setHasMore(false);
        }

        setTimeout(() => {
            setLoading(false)
        }, 1000)
        setPokemonsList(list =>  [...list, ...data.results]);

    } */

    async function handlePokemonCardHover(pokemon: any) {
        setCurrentPokemonPreview(pokemon)
    }

    /* function fetchPokemons(page: number) {
        console.log(page, hasMore, isLoading)

        setCurrentOffset(page * FETCH_STEP)
    } */

    return (
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
                {/* <InfiniteScroll
                    pageStart={1}
                    step={FETCH_STEP}
                    loadMore={fetchPokemons}
                    hasMore={hasMore && !isLoading}
                    threshold={100}
                > */}
                    {
                        !error
                        ? <PokemonList handlePokemonCardHover={handlePokemonCardHover} pokemonsList={fetchedPokemons as IPokemonList} />
                        : ''
                    }
                    
                {/* </InfiniteScroll> */}
            </main>
            {
                !error && currentPokemonPreview
                ? <AsideMenu pokemon={currentPokemonPreview} />
                : ''
            }
        </Fragment>
    )
}