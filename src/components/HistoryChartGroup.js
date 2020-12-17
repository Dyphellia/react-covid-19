import React, {useState} from "react";

import HistoryChart from "./HistoryChart";
import {transformHisory} from "../utils";

function HistoryChartGroup({history={}}){
    const [lastDays, setLastDays] = useState({
        cases:30,
        deaths:30,
        recovered:30
    })

    function handleLastDaysChange(e, key){
        setLastDays((prev)=>({
            ...prev,
            [key]:e.target.value
        }))
    }

    return(
        <div className='history-group'>
            <HistoryChart
                title='Cases'
                data={transformHisory(history.cases)}
                lastDays={lastDays.cases}
                onLastDaysChange={(e)=> handleLastDaysChange(e,'cases')}
            />
            <HistoryChart
                title='Deaths'
                data={transformHisory(history.deaths)}
                lastDays={lastDays.deaths}
                onLastDaysChange={(e)=> handleLastDaysChange(e,'deaths')}
            />
            <HistoryChart
                title='Recovered'
                data={transformHisory(history.recovered)}
                lastDays={lastDays.recovered}
                onLastDaysChange={(e)=> handleLastDaysChange(e,'recovered')}
            />
        </div>
    )
}

export default HistoryChartGroup
