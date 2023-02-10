import { Search as SearchIcon } from '@mui/icons-material';
import {Grid, Paper, Grow, InputBase, styled, alpha } from '@mui/material';
import { FC, Fragment, memo, useEffect, useState } from 'react';

import { AsideMenu } from '../../components/AsideMenu/AsideMenu';
import { PokemonCard } from '../../components/PokemonCard/PokemonCard';
import './ListPage.scss';
import {withLoading} from '../../services/HOC/withLoading'

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
    // height: '100%',
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

    function handlePokemonCardHover(pokemon: any) {
        setCurrentPokemonPreview(pokemon)
    }

    const ListPageContent: FC<any> = memo((props: any) => (
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
                <Grid container>
                    {new Array(25).fill('').map((item, index) => {
                        return (
                            <Grid item key={index + 1} xs={3}>
                                <Grow in mountOnEnter unmountOnExit>
                                    <div>
                                        <PokemonCard
                                            onHover={handlePokemonCardHover}
                                            onMouseOut={() => {}} 
                                        />
                                    </div>
                                </Grow>
                            </Grid>
                        )
                    })}
                </Grid>
            </main>
            <AsideMenu pokemon={currentPokemonPreview} />
        </Fragment>
    ))

    const ListPageContentWithLoading = withLoading(ListPageContent, 43)

    return <ListPageContentWithLoading />
}