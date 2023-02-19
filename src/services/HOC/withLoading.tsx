import React, { FC } from "react"

interface IComponentStructure<Props> {
    Component: FC<Props>,
    getProps: () => Props
}

export const withLoading = <WrappedProps extends object, LoaderProps extends object>(
    {WrappedComponent, LoaderComponent}: {
        WrappedComponent: IComponentStructure<WrappedProps>,
        LoaderComponent: IComponentStructure<LoaderProps>
    }, loadingCompleteCondition: () => boolean) => {
    return class WithLoading extends React.Component {
        render() {
            if(loadingCompleteCondition())
                return <WrappedComponent.Component {...WrappedComponent.getProps()} />
            else
                return <LoaderComponent.Component {...LoaderComponent.getProps()} />
        }
    }
}