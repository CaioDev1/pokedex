import React, { FC } from "react"
import { PokemonListSkeleton } from "../../pages/ListPage/PokemonListSkeleton/PokemonListSkeleton";

interface Props {
    isLoadingComplete?: boolean
}

export const withLoading = <P extends object>(WrappedComponent: FC<P>, skeletonParams: {columns: number, rows: number}) => {
    return class WithLoading extends React.Component<P & Props> {
        state: Props = {
            isLoadingComplete: false
        };

        private _isMounted: boolean = true

        componentDidMount() {
            this._isMounted = true;

            setTimeout(() => {
                if(this._isMounted) this.setState({isLoadingComplete: true})
            }, 1000)
        }

        componentWillUnmount() {
            this._isMounted = false;
        }

        render() {
            const {isLoadingComplete} = this.state as Props
            
            return isLoadingComplete
                ? <WrappedComponent {...this.props} />
                :  <PokemonListSkeleton rows={skeletonParams.rows} columns={skeletonParams.columns} />
        }
    }
}