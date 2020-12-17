import React from "react";

function SelectDataKey({onChange}){
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
