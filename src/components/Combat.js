import React from "react"
import CombatBrackets from "./CombatBrackets"
import playerDataParse from "../playerDataParse"

export default function Combat(props) {
    const playerData = props.playerData
    const maximized = props.maximized

    const [formData,setFormData] = React.useState(
        {combat: ""}
    )

    React.useEffect(() => {
        playerDataParse(props.playerData, {form: "Combat", value: formData.combat}, false)
    }, [formData])

    function resetFormData(event) {
        event.preventDefault()
        setFormData({combat: ""})
    }

    function combatClickEvent(event) {
        setFormData(prevFormData => {
            const {id} = event.target
            console.log(id)
            return {
                ...prevFormData,
                combat: id
            }
        }) 
    }

    function handleChange(event) {
        setFormData(prevFormData => {
            const {value} = event.target
            console.log("HI")
            playerDataParse(props.playerData, {form: "Combat", value: value}, maximized)
            return {
                ...prevFormData,
                combat: value
            }
        })
    }
    return (
        <form className="form">
            <input className="form__combatInput" type="text" placeholder="Combat Brackets" onChange={handleChange} name="Combat" value={formData.combat}/>
            <button onClick={resetFormData}>SHOW ALL</button>
            <CombatBrackets combatClickEvent={combatClickEvent} playerData={playerData}/>
        </form>
    )
}
