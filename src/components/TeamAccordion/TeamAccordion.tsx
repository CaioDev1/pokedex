import { EmojiEvents, ExpandMore as ExpandMoreIcon } from '@mui/icons-material';
import { Accordion, AccordionDetails, AccordionSummary, Grid, Grow } from '@mui/material';
import { PokemonCard } from '../../components/PokemonCard/PokemonCard';

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
                <Grid container columns={6} spacing={2} justifyContent='space-around'>
                    {new Array(6).fill('').map((item, index) => {
                        return (
                            <Grid item key={index + 1}>
                                <Grow in mountOnEnter unmountOnExit>
                                    <div>
                                        <PokemonCard size='small-card' />
                                    </div>
                                </Grow>
                            </Grid>
                        )
                    })}
                </Grid>
            </AccordionDetails>
        </Accordion>
    )
}