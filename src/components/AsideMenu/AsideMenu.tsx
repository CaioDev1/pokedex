import React, { useMemo } from 'react'
import {Box, Fade} from '@mui/material'
import { CardBody, CardImage } from '../CardBody/CardBody'

import './AsideMenu.scss'
import { PokemonTag } from '../PokemonTag/PokemonTag'
import { useRequest } from '../../services/api/useRequest'

export const AsideMenu = (props: {pokemon: any}) => {
    const fetchParams = useMemo(() => ({path: props.pokemon.species.url}), [props.pokemon.species.url])
    const [pokemonDetails, error] = useRequest<any>({path: props.pokemon.species.url})

    return (
        props.pokemon && pokemonDetails
        ?
        <Box sx={{padding: '2rem 0', minWidth: '300px', position: 'sticky', top: '8rem'}}>
            <Fade in={!!props.pokemon} timeout={800} mountOnEnter unmountOnExit>
                <div>
                    <CardBody cssClass={['side-menu']} style={{paddingTop: '5rem'}}>
                        <CardImage topPosition={-70} width='50%' src={props.pokemon.sprites.front_default} />
                        <h6 className='small text-muted'>Nº {props.pokemon.order}</h6>
                        <h4>Charmander</h4>
                        {/*! NEED TO BE OPTIMIZED  */}
                        <div className='row mx-0 justify-content-center'>
                            {
                                props.pokemon.types.map((type: any, index: number) => {
                                    return <PokemonTag key={index} type={type.type.name}>{type.type.name}</PokemonTag>
                                })
                            }
                        </div>
                        <p className='my-3'>{pokemonDetails.flavor_text_entries[0].flavor_text}</p>
                        <section className='detail-section'>
                            <h6 className='section-title'>Habilities</h6>
                            {
                                props.pokemon.abilities.map((item: any, index: any) => {
                                    return <span key={index}>{item.ability.name}</span>
                                })
                            }
                        </section>
                        <section className='detail-section'>
                            <article className='d-flex flex-column'>
                                <h6 className='section-title'>HEIGHT</h6>
                                <span>{props.pokemon.height}M</span>
                            </article>
                            <article className='d-flex flex-column'>
                                <h6 className='section-title'>WEIGHT</h6>
                                <span>{props.pokemon.weight}KG</span>
                            </article>
                        </section>
                        <section className='detail-section'>
                            <h6 className='section-title'>HP</h6>
                            <span>{props.pokemon.stats[0].base_stat}</span>
                        </section>
                    </CardBody>
                </div>
            </Fade>
        </Box>
        : null
    )
}