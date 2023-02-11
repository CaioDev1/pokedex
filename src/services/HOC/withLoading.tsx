import React, { FC } from "react"

interface Props {
    isLoadingComplete?: boolean
}

export const withLoading = <WrappedParam extends object, LoadingParam extends object>(WrappedComponent: FC<WrappedParam>, LoadingComponent: FC<LoadingParam>) => {
    return class WithLoading extends React.Component<WrappedParam & LoadingParam> {
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
                ? <WrappedComponent {...this.props as WrappedParam} />
                :  <LoadingComponent {...this.props as LoadingParam} />
        }
    }
}