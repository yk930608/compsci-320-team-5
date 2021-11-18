import React, {useRef, useEffect, useState } from "react";
import { apiPost } from "../../utils/api-fetch"

function TagStore(props){
    const tags = props.tags
    const listItem = tags.map((tag,i) => (
        <li key = {tag+i}>
            {tag}
            <button
                    type = 'button'
                    onClick = {()=>{
                        let removeIndex = tags.indexOf(tag)
                        let temp = tags.slice()
                        temp.splice(removeIndex,1)
                        props.fun(temp)
                        console.log(props.tags)
                    }
                }>X</button>
        </li>
    ))
    return(
        <div>
            {listItem}
        </div>
    )
}
export default TagStore