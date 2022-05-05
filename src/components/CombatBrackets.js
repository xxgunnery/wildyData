import React from "react"

export default function CombatBrackets(props) { 

    const combatData = props.playerData.data.map(data => data[1])

    const countUnique = arr => {
        const counts = {}
        for(let i = 0; i < arr.length; i++) {
            counts[arr[i]] = 1 + (counts[arr[i]] || 0)
        }
        return counts
    }

    let combatCounts = countUnique(combatData)

    let sortable = []
    for(var combat in combatCounts) {
        sortable.push([combat, combatCounts[combat]])
    }
    sortable.sort((a,b) => {
        return a[0] - b[0]
    })
    
    combatCounts = sortable

    let newArr = []
    let total = 0
    for(let i = 0; i < combatCounts.length; i++) {
        if(combatCounts[i][0] > 3 && combatCounts[i][0] <= 25) {
            total += combatCounts[i][1]
            if(combatCounts[i+1][0] > 25) {
                newArr.push(["3-25",total])
                total = 0;
            }
        } else if(combatCounts[i][0] >= 26 && combatCounts[i][0] <= 50) {
            total += combatCounts[i][1]
            if(combatCounts[i+1][0] > 50) {
                newArr.push(["26-50",total])
                total = 0;
            }            
        } else if(combatCounts[i][0] >= 51 && combatCounts[i][0] <= 75) {
            total += combatCounts[i][1]
            if(combatCounts[i+1][0] > 75) {
                newArr.push(["51-75",total])
                total = 0;
            }            
        } else if(combatCounts[i][0] >= 76 && combatCounts[i][0] <= 100) {
            total += combatCounts[i][1]
            if(combatCounts[i+1][0] > 100) {
                newArr.push(["76-100",total])
                total = 0;
            }            
        } else if(combatCounts[i][0] >= 101 && combatCounts[i][0] <= 126) {
            total += combatCounts[i][1]
            if(combatCounts[i][0] == 126) {
                newArr.push(["101-126",total])
            }            
        }
    }
    
    combatCounts = newArr

    function setcombatByClick(event) {
        props.combatClickEvent(event)
    }
    combatCounts = combatCounts.map(data => {
        if(data[1] > 0) {
            return (
                <div key={data[0]} onClick={setcombatByClick} id={data[0]} className='form__combatbrackets__bracket'>COMBAT ({data[0]}): {data[1]}</div>
            )
        }
    })

    return (
        <div className='form__combatbrackets'>{combatCounts}</div>
    )
}