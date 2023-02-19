import React, { FC, useEffect, useMemo, useState } from 'react';

import './PokemonPage.scss'

import { PokemonTag } from '../../components/PokemonTag/PokemonTag';
import { CardBody } from '../../components/CardBody/CardBody';
import {ArrowForwardIos} from '@mui/icons-material';
import { Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { PokemonPageSkeleton } from './PokemonPageSkeleton/PokemonPageSkeleton';
import { withLoading } from '../../services/HOC/withLoading';
import { useParams } from 'react-router-dom';
import { IUseFetchRequestParams, useFetch } from '../../services/api/useFetch';

interface IPokemonPageProps {
    skeletonParams: {
        rows: number
    }
}

const LoadingComponent = ({skeletonParams}: IPokemonPageProps) => (
    <PokemonPageSkeleton rows={skeletonParams.rows} />
)

const Page = ({details}: {details: {[key: string]: any}}) => (
    <div className='pokemon-page-container pt-4 px-3 mx-auto'>
        <main className='d-flex pb-2'>
            <div className='pokemon-image px-4 py-2 flex-grow-1'>
                <img src={details.sprites.front_default} alt="" />
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
                <p>{details.flavor_text_entries[0].flavor_text}</p>
                <CardBody cssClass={['pokemon-details-container', 'px-5', 'py-4', 'd-flex', 'flex-column', 'justify-content-center']}>
                    <div className='d-flex justify-content-between'>
                        <span>
                            <h6>Height</h6>
                            <strong>{details.height}F</strong>
                        </span>
                        <hr />
                        <span>
                            <h6>Weight</h6>
                            <strong>{details.weight}KG</strong>
                        </span>
                    </div>
                    <hr />
                </CardBody>
                <section className='py-4 row mx-0'>
                    {
                        details.types.map((type: any, index: number) => {
                            return <PokemonTag key={index} type={type.type.name}>{type.type.name}</PokemonTag>
                        })
                    }
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
                        <PokemonTag type='fire'>FIRE</PokemonTag>
                        <PokemonTag type='fire'>FLYING</PokemonTag>
                    </section>
                </div>
                <ArrowForwardIos fontSize='large' />
                <div className='pokemon-evolution-card px-3 flex-grow-1'>
                    <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png' alt="" />
                    <span className='pokemon-name d-flex my-2'><h4 className='mb-0'>Bulbasair</h4> <span className='px-2'>N° 0001</span></span>
                    <section className='row mx-0'>
                        <PokemonTag type='fire'>FIRE</PokemonTag>
                        <PokemonTag type='fire'>FLYING</PokemonTag>
                    </section>
                </div>
                <ArrowForwardIos fontSize='large' />
                <div className='pokemon-evolution-card px-3 flex-grow-1'>
                    <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png' alt="" />
                    <span className='pokemon-name d-flex my-2'><h4 className='mb-0'>Bulbasair</h4> <span className='px-2'>N° 0001</span></span>
                    <section className='row mx-0'>
                        <PokemonTag type='fire'>FIRE</PokemonTag>
                        <PokemonTag type='fire'>FLYING</PokemonTag>
                    </section>
                </div>
            </section>
        </CardBody>
    </div>
)

const useFetchOnCompletion = (dependencyData: any, getRequestParams: (data: typeof dependencyData) => IUseFetchRequestParams) => {
    const {data, error, status, setRequestParams} = useFetch<any>()

    useEffect(() => {
        if(dependencyData) {
            const params = getRequestParams(dependencyData)

            setRequestParams(params)
        }
    }, [dependencyData])

    return {data, error, status}
}

export const PokemonPage = () => {
    const routeParams = useParams()

    const pokemonDetails = useFetch<{[key: string]: any}>({path: `https://pokeapi.co/api/v2/pokemon/${routeParams.id}`})
        const pokemonSpecie = useFetchOnCompletion(pokemonDetails.data, fetchedPokemonDetails => ({path: fetchedPokemonDetails.species.url}))
        
    if(pokemonDetails.error) return <div>Fetch error</div>

    const PageWithLoading = withLoading({
        WrappedComponent: {
            Component: Page,
            getProps: () => {
                return {
                    details: {
                        ...pokemonDetails.data,
                        flavor_text_entries: pokemonSpecie.data.flavor_text_entries
                    },
                    skeletonParams: {rows: 2}
                }
            }
        },
        LoaderComponent: {
            Component: LoadingComponent,
            getProps: () => ({skeletonParams: {rows: 2}})
        }
    }, () => {
        return pokemonDetails.status === 'COMPLETED' && pokemonSpecie.status === 'COMPLETED'
    })

    return <PageWithLoading  />
}