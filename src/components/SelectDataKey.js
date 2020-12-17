import React from "react";

function SelectDataKey({onChange}){
    return(
        <>
            <label htmlFor="key-select">请选择：</label>
            <select name="key-select" id="key-select" onChange={onChange}>
                <option value="cases">病例人数</option>
                <option value="todayCases">今日病例人数</option>
                <option value="deaths">死亡人数</option>
                <option value="recovered">恢复人数</option>
                <option value="active">现存人数</option>
            </select>
        </>
    )
}

export default SelectDataKey
