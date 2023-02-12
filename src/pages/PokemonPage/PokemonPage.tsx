import React, { useEffect, useState } from 'react';

import './PokemonPage.scss'

import { PokemonTag } from '../../components/PokemonTag/PokemonTag';
import { CardBody } from '../../components/CardBody/CardBody';
import {ArrowForwardIos} from '@mui/icons-material';
import { Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { PokemonPageSkeleton } from './PokemonPageSkeleton/PokemonPageSkeleton';
import { withLoading } from '../../services/HOC/withLoading';

interface IPokemonPageProps {
    pokemons: any[],
    skeletonParams: {
        rows: number
    }
}

export const Page = (pokemon: IPokemonPageProps) => {
    return (
        <div className='pokemon-page-container pt-4 px-3 mx-auto'>
            <main className='d-flex pb-2'>
                <div className='pokemon-image px-4 py-2 flex-grow-1'>
                    <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png' alt="" />
                    <div>
                        <FormControl fullWidth className='mb-2'>
                            <InputLabel id="team-select-label">Team</InputLabel>
                            <Select
                                labelId="team-select-label"
                                id="team-select"
                                value={10}
                                label="Team"
                                // onChange={handleChange}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                        <Button variant='contained' color='error' fullWidth>
                            Save
                        </Button>
                    </div>
                </div>
                <div className='flex-grow-1 d-flex flex-column justify-content-center align-items-center'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo nulla a animi at voluptatibus porro architecto fugit, consectetur, amet eius, error exercitationem ratione veniam. Nemo quibusdam voluptatibus perferendis harum necessitatibus?</p>
                    <CardBody cssClass={['pokemon-details-container', 'px-5', 'py-4', 'd-flex', 'flex-column', 'justify-content-center']}>
                        <div className='d-flex justify-content-between'>
                            <span>
                                <h6>Height</h6>
                                <strong>0.7m</strong>
                            </span>
                            <hr />
                            <span>
                                <h6>Height</h6>
                                <strong>0.7m</strong>
                            </span>
                        </div>
                        <hr />
                        <div className='d-flex justify-content-between'>
                            <span>
                                <h6>Height</h6>
                                <strong>0.7m</strong>
                            </span>
                            <span>
                                <h6>Height</h6>
                                <strong>0.7m</strong>
                            </span>
                        </div>
                        <hr />
                        <div className='d-flex justify-content-between'>
                            <span>
                                <h6>Height</h6>
                                <strong>0.7m</strong>
                            </span>
                            <span>
                                <h6>Height</h6>
                                <strong>0.7m</strong>
                            </span>
                        </div>
                    </CardBody>
                    <section className='py-4 row mx-0'>
                        <PokemonTag color='red'>FIRE</PokemonTag>
                        <PokemonTag color='red'>FLYING</PokemonTag>
                        <PokemonTag color='red'>ICE</PokemonTag>
                    </section>
                </div>
            </main>
            <CardBody cssClass={['px-4', 'py-3']}>
                <h4>
                    Evoluções
                    <ArrowForwardIos />
                </h4>
                <section className='d-flex p-2 justify-content-center align-items-center'>
                    <div className='pokemon-evolution-card px-3 flex-grow-1'>
                        <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png' alt="" />
                        <span className='pokemon-name d-flex my-2'><h4 className='mb-0'>Bulbasair</h4> <span className='px-2'>N° 0001</span></span>
                        <section className='row mx-0'>
                            <PokemonTag color='red'>FIRE</PokemonTag>
                            <PokemonTag color='red'>FLYING</PokemonTag>
                        </section>
                    </div>
                    <ArrowForwardIos fontSize='large' />
                    <div className='pokemon-evolution-card px-3 flex-grow-1'>
                        <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png' alt="" />
                        <span className='pokemon-name d-flex my-2'><h4 className='mb-0'>Bulbasair</h4> <span className='px-2'>N° 0001</span></span>
                        <section className='row mx-0'>
                            <PokemonTag color='red'>FIRE</PokemonTag>
                            <PokemonTag color='red'>FLYING</PokemonTag>
                        </section>
                    </div>
                    <ArrowForwardIos fontSize='large' />
                    <div className='pokemon-evolution-card px-3 flex-grow-1'>
                        <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png' alt="" />
                        <span className='pokemon-name d-flex my-2'><h4 className='mb-0'>Bulbasair</h4> <span className='px-2'>N° 0001</span></span>
                        <section className='row mx-0'>
                            <PokemonTag color='red'>FIRE</PokemonTag>
                            <PokemonTag color='red'>FLYING</PokemonTag>
                        </section>
                    </div>
                </section>
            </CardBody>
        </div>
    )
}


const LoadingComponent = ({skeletonParams}: IPokemonPageProps) => (
    <PokemonPageSkeleton rows={skeletonParams.rows} />
)

export const PokemonPage = withLoading(Page, LoadingComponent)