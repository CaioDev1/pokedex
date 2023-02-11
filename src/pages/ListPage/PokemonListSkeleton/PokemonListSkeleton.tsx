import { Grid, Skeleton } from '@mui/material';

export interface IPokemonListSkeleton {
    rows: number,
    columns: number
} 

export const PokemonListSkeleton = (props: IPokemonListSkeleton) => {
    return (
        <Grid container spacing={2} columns={props.columns} padding='5rem 3rem'>
            {
                new Array((props.rows * props.columns) ?? 10).fill('').map((item, i) => {
                    return (
                        <Grid item key={i} minWidth={250} xs={2} display='flex' justifyContent='center'>
                            <Skeleton animation='pulse' variant="rounded" width={200} height={150} style={{borderRadius: 30}} />
                        </Grid>
                    )
                })
            }
        </Grid>
    ) 
}