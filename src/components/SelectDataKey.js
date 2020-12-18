import React, { useContext } from "react";

import { AppDispatch } from "../App";

function SelectDataKey({onChange}){

    const dispatch = useContext(AppDispatch)

    function onChange(e) {
        dispatch( {
            type: 'SET_KEY',
            key: e.target.value
        })
    }

    return(
        <>
            <label htmlFor="key-select"> Please Choose：</label>
            <select name="key-select" id="key-select" onChange={onChange}>
                <option value="cases">cases</option>
                <option value="todayCases">todayCases</option>
                <option value="deaths">deaths</option>
                <option value="recovered">recovered</option>
                <option value="active">active</option>
            </select>
        </>
    )
}

export default SelectDataKey
