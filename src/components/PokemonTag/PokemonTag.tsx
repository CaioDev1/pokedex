import { Paper } from "@mui/material"
import { PropsWithChildren } from "react"

import './PokemonTag.scss'

export const PokemonTag = (props: PropsWithChildren<{color?: string}>) => {
    return (
        <Paper sx={{backgroundColor: props.color}} className='card-tag rounded text-white px-3 py-2'>
            {props.children}
        </Paper>
    )
}