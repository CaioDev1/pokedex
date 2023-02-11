import React, { CSSProperties, PropsWithChildren } from 'react'
import {Paper} from '@mui/material'
import classNames from 'classnames'

import './CardBody.scss'

export const CardImage = (props: {
    topPosition?: number,
    src: string,
    height?: number | string
    width?: number | string
}) => {
    return (
        <div style={{top: props.topPosition}} className='card-image'>
            <img src={props.src} style={{height: props.height ?? 'initial', width: props.width ?? 'initial'}} alt="card" />
        </div>
    )
}

export const CardBody = (props: PropsWithChildren<{
    cssClass?: string[],
    style?: CSSProperties
}>) => {
    return (
        <Paper
            elevation={20}
            className={classNames(
                'card-body', 'px-4', 'pb-3',
                (props.cssClass ?? []),
                (props.style && !props.style.paddingTop && 'pt-5')
            )}
            style={props.style}
        >
            {props.children}
        </Paper>
    )
}