import {Grid, Grow} from '@mui/material';
import { CSSProperties, memo, useEffect, useState } from 'react';
import { PokemonCard } from '../../../components/PokemonCard/PokemonCard';
import {withLoading} from '../../../services/HOC/withLoading'
import { IPokemonListSkeleton, PokemonListSkeleton } from '../PokemonListSkeleton/PokemonListSkeleton';

export interface IPokemonList {
    pokemonsList: any[], 
    handlePokemonCardHover?: (pokemon: any) => void,
    skeletonParams?: IPokemonListSkeleton,
    justifyContent?: CSSProperties['justifyContent']
}

const List = ({
    pokemonsList, 
    handlePokemonCardHover,
    justifyContent
}: IPokemonList) => {
    return (
        <Grid container spacing={2} padding='1rem' display='flex' justifyContent={justifyContent}>
            {pokemonsList.map((item, index) => {
                return (
                    <Grid item key={index + 1} minWidth={250} xs={2} display='flex' justifyContent='center'>
                        <Grow in mountOnEnter unmountOnExit>
                            <div>
                                <PokemonCard
                                    onHover={handlePokemonCardHover && handlePokemonCardHover}
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

const LoadingComponent = ({skeletonParams}: IPokemonList) => {
    return <PokemonListSkeleton rows={skeletonParams?.rows ?? 4} columns={skeletonParams?.columns ?? 6} />
}

export const PokemonList = withLoading(List, LoadingComponent)