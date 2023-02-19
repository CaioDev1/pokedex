import {Grid, Grow} from '@mui/material';
import { CSSProperties, memo, useEffect, useState } from 'react';
import { PokemonCard } from '../../../components/PokemonCard/PokemonCard';
import {withLoading} from '../../../services/HOC/withLoading'
import { IPokemonList } from '../../../services/interfaces/pokemonList';
import { IPokemonListSkeleton, PokemonListSkeleton } from './PokemonListSkeleton/PokemonListSkeleton';

export interface IPokemonListProps {
    pokemonsList: IPokemonList['results'], 
    handlePokemonCardHover?: (pokemon: any) => void,
    skeletonParams?: IPokemonListSkeleton,
    justifyContent?: CSSProperties['justifyContent'],
    isLoading?: boolean
}

export const PokemonList = ({
    pokemonsList, 
    handlePokemonCardHover,
    justifyContent,
    skeletonParams,
    isLoading
}: IPokemonListProps) => {
    return (
        isLoading
        ? <PokemonListSkeleton rows={skeletonParams?.rows ?? 4} columns={skeletonParams?.columns ?? 6} />
        :
        <Grid container spacing={2} padding='1rem' display='flex' justifyContent={justifyContent}>
            {pokemonsList.map((item, index) => {
                return (
                    <Grid item key={index + 1} minWidth={250} xs={2} display='flex' justifyContent='center'>
                        <Grow in mountOnEnter unmountOnExit>
                            <div className='flex-grow-1'>
                                <PokemonCard
                                    onHover={handlePokemonCardHover && handlePokemonCardHover}
                                    onMouseOut={() => {}}
                                    params={item}
                                />
                            </div>
                        </Grow>
                    </Grid>
                )
            })}
        </Grid>
    )
}