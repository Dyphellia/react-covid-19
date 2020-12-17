import React,{ useState } from "react";

import './App.css'

import GlobalStats from "./components/GlobalStats"
import CountriesChart from "./components/CountriesChart";
import SelectDataKey from "./components/SelectDataKey";

import { BASE_URL , useCoronaAPI} from './hooks/useCoronaAPI'

function App() {

    const globalStats = useCoronaAPI('/all',{
      initialData: {},
      refetchInterval: 60000
    })

  const [key, setKey] = useState('cases')
  const countries = useCoronaAPI(`/countries?sort=${key}`, {
    initialData: [],
    converter: (data)=> data.slice(0,10)
  })

  return(
      <div className='App'>
        <h1>COVID-19</h1>
        <GlobalStats stats={globalStats}></GlobalStats>
        <SelectDataKey onChange={(e)=> {setKey(e.target.value)}} />
        <CountriesChart data={countries} dataKey={key} />
      </div>
  )
}

export default App;
