import styles from './alert.module.css'
import cn from 'classnames'
import { Children } from 'react'

export default function Alert ({ type }) {
    return (
        <div 
            className = {cn({
                [styles.success]: type === 'success',
                [styles.error]: type === 'error'
            })}
        > { children }
        </div>
    )
}