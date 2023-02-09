import { CatchingPokemon } from '@mui/icons-material';
import { Box, Container, Grid, Grow } from '@mui/material';
import { useEffect, useState } from 'react';

import { AsideMenu } from '../AsideMenu/AsideMenu';
import { PokemonCard } from '../PokemonCard/PokemonCard';
import './ListPage.scss';
import { PokemonListSkeleton } from './PokemonListSkeleton/PokemonListSkeleton';

export const ListPage = () => {
    const [loading, setLoading] = useState<boolean>(true)
    const [currentPokemonPreview, setCurrentPokemonPreview] = useState<any>(null)

    useEffect(() => {
      setTimeout(() => setLoading(false), 1000)
    }, [])

    function handlePokemonCardHover(pokemon: any) {
        setCurrentPokemonPreview(pokemon)
    }

    return (
        <Container maxWidth={false} className='d-flex bg-light'>
            <CatchingPokemon id='background-page-icon' htmlColor='grey' />

            {
                loading
                ? <PokemonListSkeleton />
                : (
                    <Box sx={{padding: '2rem 0', marginBottom: '6rem'}}>
                        <Grid container /* spacing={2} */>
                            {new Array(25).fill('').map((item, index) => {
                                return (
                                    <Grid item key={index + 1} xs={3} minWidth={250}>
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
                    </Box>
                )
            }
            <AsideMenu pokemon={currentPokemonPreview} />
        </Container>
    )
}