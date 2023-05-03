import React from 'react'
import LinkedProjectImg from './linkedProjectImg'
const LinkedProjectCard = (props) => {
    return (
        <div>
            {props.data.map((item) => {
                return (
                    <LinkedProjectImg id={item.ID} />
                )
            })}
        </div>
    )
}

export default LinkedProjectCard
