import React, { useState, createContext } from "react";

export const UnitContext = createContext()
const URL = "http://localhost:8000"

export const UnitProvider = (props) => {
    const [units, setUnits] = useState([])
    const [searchTerms, setSearchTerms] = useState("")

    const getUnits = () => {
        return fetch(`${URL}/units`, {
            headers: {
                Authorization: `Token ${localStorage.getItem(swl_token)}`
            },
        })
            .then(res => res.json())
            .then(setUnits)
    }

    const getUnitById = (unitId) => {
        return fetch(`${URL}/units/detail/${unitId}`, {
            Authorization: `Token ${localStorage.getItem(swl_token)}`
        }).then(res => res.json)
    }

    return (
        <UnitContext.Provider value={{
            units, getUnits, getUnitById, searchTerms, setSearchTerms
        }}>
            {props.children}
        </UnitContext.Provider>
    )

}