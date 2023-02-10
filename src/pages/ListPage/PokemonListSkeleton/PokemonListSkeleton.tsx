import { Grid, Skeleton } from '@mui/material';

export const PokemonListSkeleton = (props: {rows: number, columns: number}) => {
    return (
        <Grid container spacing={2} columns={props.columns} padding='5rem 3rem'>
            {
                new Array((props.rows * props.columns) ?? 10).fill('').map((item, i) => {
                    return (
                        <Grid item key={i} xs={1} display='flex' justifyContent='center'>
                            <Skeleton animation='pulse' variant="rounded" width={200} height={150} style={{borderRadius: 30}} />
                        </Grid>
                    )
                })
            }
        </Grid>
    ) 
}