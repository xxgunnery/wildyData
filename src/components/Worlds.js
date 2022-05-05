import React from "react"

export default function Worlds(props) {

    const worldData = props.playerData.data.map(data => data[3])

    const countUnique = arr => {
        const counts = {}
        for(let i = 0; i < arr.length; i++) {
            counts[arr[i]] = 1 + (counts[arr[i]] || 0)
        }
        return counts
    }

    let worldCounts = countUnique(worldData)
    let sortable = []
    for(var world in worldCounts) {
        sortable.push([world, worldCounts[world]])
    }
    sortable.sort((a,b) => {
        return b[1] - a[1]
    })
    
    worldCounts = sortable

    function setWorldByClick(event) {
        props.worldClickEvent(event)
    }
    worldCounts = worldCounts.map(data => {
        if(data[1] > 15) {
            return (
                <div key={data[0]} onClick={setWorldByClick} id={data[0]} className='form__worlds__world'>World {data[0]}: {data[1]}</div>
            )
        }
    })

    return (
        <div className='form__worlds'>{worldCounts}</div>
    )
}
