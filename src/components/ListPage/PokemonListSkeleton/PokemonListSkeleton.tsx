import { Grid, Skeleton } from '@mui/material';

export const PokemonListSkeleton = () => {
    return (
        <Grid container spacing={2} padding='5rem 0'>
            {
                new Array(10).fill('').map((item, i) => {
                    return (
                        <Grid item key={i}>
                            <Skeleton animation='pulse' variant="rounded" width={200} height={150} style={{borderRadius: 30}} />
                        </Grid>
                    )
                })
            }
        </Grid>
    ) 
}