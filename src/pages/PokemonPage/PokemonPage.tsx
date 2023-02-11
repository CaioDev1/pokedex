import React, { useEffect, useState } from 'react';

import './PokemonPage.scss'

import { PokemonTag } from '../../components/PokemonTag/PokemonTag';

export const PokemonPage = (pokemon: any) => {
    return (
        <div className='pt-4 px-3'>
            <main className='d-flex pb-2'>
                <div className='pokemon-image flex-grow-1'><img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png' alt="" /></div>
                <div className='flex-grow-1'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo nulla a animi at voluptatibus porro architecto fugit, consectetur, amet eius, error exercitationem ratione veniam. Nemo quibusdam voluptatibus perferendis harum necessitatibus?</p>
                    <section className='pokemon-details-container px-5 py-4'>
                        <p className='d-flex justify-content-between'>
                            <span>
                                <h6>Height</h6>
                                <strong>0.7m</strong>
                            </span>
                            <span>
                                <h6>Height</h6>
                                <strong>0.7m</strong>
                            </span>
                        </p>
                        <p className='d-flex justify-content-between'>
                            <span>
                                <h6>Height</h6>
                                <strong>0.7m</strong>
                            </span>
                            <span>
                                <h6>Height</h6>
                                <strong>0.7m</strong>
                            </span>
                        </p>
                        <p className='d-flex justify-content-between'>
                            <span>
                                <h6>Height</h6>
                                <strong>0.7m</strong>
                            </span>
                            <span>
                                <h6>Height</h6>
                                <strong>0.7m</strong>
                            </span>
                        </p>
                    </section>
                    <div className='py-3'>
                        <h6>Type</h6>
                        <section className='row mx-0'>
                            <PokemonTag color='red'>FIRE</PokemonTag>
                            <PokemonTag color='red'>FLYING</PokemonTag>
                            <PokemonTag color='red'>ICE</PokemonTag>
                        </section>
                    </div>
                </div>
            </main>
            <footer className='rounded px-4 py-3 bg-danger'>
                <h4>Evoluções</h4>
                <section className='d-flex p-2 justify-content-center'>
                    <div className='pokemon-evolution-card px-3 flex-grow-1'>
                        <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png' alt="" />
                        <span className='pokemon-name d-flex my-2'><h4 className='mb-0'>Bulbasair</h4> <span className='px-2'>N° 0001</span></span>
                        <section className='row mx-0'>
                            <PokemonTag color='red'>FIRE</PokemonTag>
                            <PokemonTag color='red'>FLYING</PokemonTag>
                        </section>
                    </div>
                    <div className='pokemon-evolution-card px-3 flex-grow-1'>
                        <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png' alt="" />
                        <span className='pokemon-name d-flex my-2'><h4 className='mb-0'>Bulbasair</h4> <span className='px-2'>N° 0001</span></span>
                        <section className='row mx-0'>
                            <PokemonTag color='red'>FIRE</PokemonTag>
                            <PokemonTag color='red'>FLYING</PokemonTag>
                        </section>
                    </div>
                    <div className='pokemon-evolution-card px-3 flex-grow-1'>
                        <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png' alt="" />
                        <span className='pokemon-name d-flex my-2'><h4 className='mb-0'>Bulbasair</h4> <span className='px-2'>N° 0001</span></span>
                        <section className='row mx-0'>
                            <PokemonTag color='red'>FIRE</PokemonTag>
                            <PokemonTag color='red'>FLYING</PokemonTag>
                        </section>
                    </div>
                </section>
            </footer>
        </div>
    )
}