import React from 'react'

export default function Print(props) {
    return (
        <div>
            <h1>
                {props.item.id} 
                {props.item.name}
                {props.item.email}
            </h1>
        </div>
    )
}
