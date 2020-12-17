import React from "react";

function Stat({number, color}) {
    return <span style={{color: color, fontWeight:'bold'}}>{number}</span>
}

function GlobalStats({stats}) {
    const {cases, deaths, recovered, active, updated } = stats

    return (
        <div className='global-stats'>
            <small>Updated At {new Date(updated).toLocaleString()}</small>
            <table>
                <tbody>
                    <tr>
                        <td>cases：<Stat number={cases} color='red'></Stat></td>
                        <td>deaths：<Stat number={deaths} color='gary'></Stat></td>
                        <td>recovered：<Stat number={recovered} color='green'></Stat></td>
                        <td>active：<Stat number={active} color='orange'></Stat></td>
                    </tr>
                </tbody>

            </table>
        </div>
    )
}

export default GlobalStats
