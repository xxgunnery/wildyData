import { tab } from "@testing-library/user-event/dist/tab"
import React from "react"
import World from "./World"
import Combat from "./Combat"

export default function Form(props) {
    const playerData = props.playerData
    const maximized = props.maximized
    const setMaximized = props.setMaximized
    const tab = props.tab
    const setTab = props.setTab

    const tabNames = ["Worlds","Combat"]
    function Tabs() {

        const tabNamesComponent = tabNames.map(tabName => {
            if(tabName === tab.clicked) {
                return <div key={tabName} style={{border: "4px solid black"}} onClick={getTab} id={tabName} className="form__tabs--tab">{tabName}</div>
            } else {
                return <div key={tabName} style={{border: ""}} onClick={getTab} id={tabName} className="form__tabs--tab">{tabName}</div>
            }
        })

        return (
            tabNamesComponent
        )
    }

    function getTab(event) {
        event.preventDefault()
        const tabSelected = event.target.id
        setTab({clicked: tabSelected})
    }

    function returnTab() {
        if(tab.clicked === "Worlds") {
            return <World maximized={maximized} playerData={playerData}/>
        } else if(tab.clicked === "Combat") {
            return <Combat maximized={maximized} playerData={playerData}/>
        }
    }

    function maximizeMap() {
        document.getElementById("maximized").style.display = "flex"
        setMaximized(true)
    }

    return (
        <div className="left__container">
            <div className="form__container">
                <div className="form__tabs">
                    <Tabs />
                </div>
                {returnTab()}
            </div>
            <button onClick={maximizeMap}>MAXIMIZE MAP</button>
        </div>
    )
}

