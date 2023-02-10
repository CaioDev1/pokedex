import React, { useEffect, useState } from 'react';
import {Button} from '@mui/material'

import './PokemonCard.scss'

import { CardBody, CardImage, CardTag } from '../CardBody/CardBody';

export const PokemonCard = (props: {
    onHover?: (pokemon: any) => void, 
    onMouseOut?: () => void,
    size?: 'normal-card' | 'small-card'
}) => {
    return (
        <Button
            className={`pokemon-card-btn p-0 ${props.size ?? 'normal-card'}`} 
            sx={{borderRadius: '30px', marginTop: '50px'}}
            onMouseEnter={() => props.onHover && props.onHover({})}
            onMouseOut={() => props.onMouseOut && props.onMouseOut()}
        >
            <CardBody cssClass={['grid-card']} style={{paddingTop: 50}}>
                <CardImage topPosition={-50} width={props.size == 'small-card' ? '45%' : undefined} src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png' />
                <h6 className='card-index text-muted'>Nº 385</h6>
                <h4 className='card-pokemon-name'>Charmander</h4>
                <div className='d-flex justify-content-center'>
                    <CardTag color='green'>GRASS</CardTag>
                    <CardTag color='red'>FIRE</CardTag>
                </div>
            </CardBody>
        </Button>
    )
}