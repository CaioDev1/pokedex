import { Search as SearchIcon } from '@mui/icons-material';
import {Paper, InputBase, styled, alpha } from '@mui/material';
import { Fragment, useCallback, useEffect, useMemo, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component'

import './PokemonListPage.scss';

import { AsideMenu } from '../../components/AsideMenu/AsideMenu';
import { useFetch } from '../../services/api/useFetch';
import {PokemonList} from './PokemonList/PokemonList';
import { IPokemonList } from '../../services/interfaces/pokemonList';
import { usePaginationFetch } from '../../services/api/usePaginationFetch';

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

export const PokemonListPage = () => {
    const [currentPokemonPreview, setCurrentPokemonPreview] = useState<any>(null)
    const [pokemonsList, setPokemonsList] = useState<IPokemonList['results']>([])
    const [hasMore, setHasMore] = useState<boolean>(true);
    
    const FETCH_STEP: number = 10

    const {
        data: fetchedPokemons,
        status,
        error,
        setOffset
    } = usePaginationFetch<IPokemonList>({
        getUrl: (currentOffset: number, pageSize: number) => {
            return `https://pokeapi.co/api/v2/pokemon/?offset=${currentOffset}&limit=${pageSize}`
        },
        options: {method: 'GET'},
        pageSize: FETCH_STEP
    })

    useEffect(() => {
        if(fetchedPokemons) {
            if(!fetchedPokemons.results.length) {
                setHasMore(false)
            } else {
                setPokemonsList(currentList => [...currentList, ...fetchedPokemons.results])
            }
        }
    }, [fetchedPokemons])

    async function handlePokemonCardHover(pokemon: any) {
        setCurrentPokemonPreview(pokemon)
    }

    if(error) return <div>Fetch error</div>

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
                <InfiniteScroll
                    dataLength={pokemonsList.length}
                    next={() => {setOffset(pokemonsList.length)}}
                    hasMore={hasMore}
                    loader={null}
                    pullDownToRefreshThreshold={150}
                    style={{overflow: 'initial'}}
                >
                    <PokemonList isLoading={status === 'LOADING'} handlePokemonCardHover={handlePokemonCardHover} pokemonsList={pokemonsList ?? []} />
                </InfiniteScroll>
            </main>
            {currentPokemonPreview && <AsideMenu pokemon={currentPokemonPreview} />}
        </Fragment>
    )
}