import React from 'react'
import {Box, Fade} from '@mui/material'
import { CardBody, CardImage, CardTag } from '../CardBody/CardBody'

import './AsideMenu.scss'

export const AsideMenu = (props: {pokemon: any}) => {
    return (
        <Box sx={{padding: '2rem 0', minWidth: '300px', position: 'sticky', top: '8rem'}}>
            <Fade in={!!props.pokemon} timeout={800} mountOnEnter unmountOnExit>
                <div>
                    <CardBody cssClass={['side-menu']} style={{paddingTop: '5rem'}}>
                        <CardImage topPosition={-70} width='50%' src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png' />
                        <h6 className='small text-muted'>Nº 385</h6>
                        <h4>Charmander</h4>
                        <div className='row mx-0 justify-content-center'>
                            <CardTag color='blue'>WATER</CardTag>
                            <CardTag color='grey'>STEEL</CardTag>
                        </div>
                        <p className='my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta modi possimus itaque officiis quaerat consectetur fugiat aliquam porro, vitae ducimus nulla doloribus </p>
                        <section className='detail-section'>
                            <h6 className='section-title'>Habilities</h6>
                            <span>Torrent</span>
                            <span>Defiant</span>
                        </section>
                        <section className='detail-section'>
                            <article className='d-flex flex-column'>
                                <h6 className='section-title'>HEIGHT</h6>
                                <span>1.7M</span>
                            </article>
                            <article className='d-flex flex-column'>
                                <h6 className='section-title'>HEIGHT</h6>
                                <span>1.7M</span>
                            </article>
                        </section>
                        <section className='detail-section'>
                            <h6 className='section-title'>EXP</h6>
                            <span>200</span>
                        </section>
                    </CardBody>
                </div>
            </Fade>
        </Box>
    )
}