import React, { useEffect, useMemo, useState } from 'react';
import {Button} from '@mui/material'

import './PokemonCard.scss'

import { CardBody, CardImage } from '../CardBody/CardBody';
import { PokemonTag } from '../PokemonTag/PokemonTag';
import { IPokemonList } from '../../services/interfaces/pokemonList';
import { useFetch } from '../../services/api/useFetch';

export const PokemonCard = (props: {
    onHover?: (pokemon: any) => void, 
    onMouseOut?: () => void,
    size?: 'normal-card' | 'small-card',
    params: IPokemonList['results'][0]
}) => {
    // const fetchParams = useMemo(() => (), [props.params.url])
    const {data: pokemon, error} = useFetch<any>({path: props.params.url})

    return (
        pokemon
        ?
            <Button
                href={`/pokemon/${pokemon.id}`}
                className={`pokemon-card-btn p-0 ${props.size ?? 'normal-card'}`} 
                sx={{borderRadius: '30px', marginTop: '50px', width: '100%'}}
                onMouseEnter={() => props.onHover && props.onHover(pokemon)}
                onMouseOut={() => props.onMouseOut && props.onMouseOut()}
            >
                <CardBody cssClass={['grid-card']} style={{paddingTop: 50}}>
                    <CardImage topPosition={-50} width={props.size == 'small-card' ? '45%' : undefined} src={pokemon.sprites.front_default} />
                    <h6 className='card-index text-muted'>Nº {pokemon.order}</h6>
                    <h4 className='card-pokemon-name'>{props.params.name}</h4>
                    <div className='d-flex justify-content-center'>
                        {
                            pokemon.types.map((type: any, index: number) => {
                                return <PokemonTag key={index} type={type.type.name}>{type.type.name}</PokemonTag>
                            })
                        }
                    </div>
                </CardBody>
            </Button>
        : null
    )
}