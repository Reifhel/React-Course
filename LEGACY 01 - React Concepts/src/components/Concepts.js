import React from 'react'
import ConceptItem from './ConceptItem'

function Concepts(props) {
  return (
    <div>
        <ul id="concepts">
            {props.items.map( (item) =>
                <ConceptItem image={item.image} title={item.title} description={item.description}/>
            )}
        </ul>
    </div>
  )
}

export default Concepts