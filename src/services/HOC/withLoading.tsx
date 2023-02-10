import React, { FC } from "react"
import { PokemonListSkeleton } from "../../pages/ListPage/PokemonListSkeleton/PokemonListSkeleton";

interface Props {
    isLoadingComplete: boolean
}

export const withLoading = <P extends object>(WrappedComponent: FC<P>, skeletonQuantity?: number) => {
    return class WithLoading extends React.Component<P & Props> {
        state = {
            isLoadingComplete: false
        };

        componentDidMount() {
            setTimeout(() => this.setState({isLoadingComplete: true}), 1000)
        }   

        render() {
            const {isLoadingComplete} = this.state as Props
            
            return isLoadingComplete
                ? <WrappedComponent {...(this.props as P)} />
                :  <PokemonListSkeleton quantity={skeletonQuantity} />
        }
    }
}