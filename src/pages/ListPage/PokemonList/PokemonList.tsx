import {Grid, Grow} from '@mui/material';
import { useEffect, useState } from 'react';
import { PokemonCard } from '../../../components/PokemonCard/PokemonCard';
import {withLoading} from '../../../services/HOC/withLoading'

const PokemonList = ({pokemonsList, handlePokemonCardHover}: {pokemonsList: any[], handlePokemonCardHover: (pokemon: any) => void}) => {
    
    return (
        <Grid container spacing={2} padding='1rem'>
            {pokemonsList.map((item, index) => {
                return (
                    <Grid item key={index + 1} minWidth={250} xs={2} display='flex' justifyContent='center'>
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
    )
}

export default withLoading(PokemonList, {rows: 4, columns: 6})