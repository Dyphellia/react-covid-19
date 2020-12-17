import React from "react";

function Stat({number, color}) {
    return <span style={{color: color, fontWeight:'bold'}}>{number}</span>
}

function GlobalStats({stats}) {
    const {cases, deaths, recovered, active, updated } = stats

    return (
        <div className='global-stats'>
            <small>更新于 {new Date(updated).toLocaleString()}</small>
            <table>
                <tbody>
                    <tr>
                        <td>病例：<Stat number={cases} color='red'></Stat></td>
                        <td>死亡：<Stat number={deaths} color='gary'></Stat></td>
                        <td>恢复：<Stat number={recovered} color='green'></Stat></td>
                        <td>现存：<Stat number={active} color='orange'></Stat></td>
                    </tr>
                </tbody>

            </table>
        </div>
    )
}

export default GlobalStats
