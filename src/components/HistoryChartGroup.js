import React, { useContext } from "react";

import HistoryChart from "./HistoryChart";
import { transformHisory } from "../utils";

import { AppDispatch } from "../App";

function HistoryChartGroup( {history={}, lastDays={} }){

    const dispatch = useContext(AppDispatch)

    function handleLastDaysChange(e, key){
        dispatch(
            {
                type:'SET_LASTDYAS',
                key,
                days: e.target.value
            }
        )
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
