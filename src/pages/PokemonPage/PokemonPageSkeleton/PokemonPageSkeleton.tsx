import { Box, Skeleton } from "@mui/material"

export const PokemonPageSkeleton = (props: {rows: number}) => {
    return (
        <Box sx={{margin: '0 auto', width: '80vw', padding: '3rem 0', maxWidth: '1000px;'}}>
            {
                new Array(props.rows).fill('').map(() => {
                    return <Skeleton variant="rectangular" height={210} style={{borderRadius: 30, marginBottom: '2rem', flex: '1'}} />
                })
            }
        </Box>
    )
}