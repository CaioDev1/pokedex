import { EmojiEvents, ExpandMore as ExpandMoreIcon } from '@mui/icons-material';
import { Accordion, AccordionDetails, AccordionSummary, Grid, Grow } from '@mui/material';
import {PokemonList} from '../../pages/ListPage/PokemonList/PokemonList';

export const TeamAccordion = () => {
    return (
        <Accordion className='team-accordion' defaultExpanded>
            <AccordionSummary
                className='bg-light py-3'
                expandIcon={<ExpandMoreIcon />}
            >
                <EmojiEvents fontSize='large' />
                <h3 className='mx-3 mb-0'>Team 1</h3>
            </AccordionSummary>
            <AccordionDetails className='pb-4'>
                <PokemonList justifyContent='center' skeletonParams={{rows: 1, columns: 6}}  pokemonsList={[1, 2, 3, 4, 5, 6]} />
            </AccordionDetails>
        </Accordion>
    )
}