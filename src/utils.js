export function transformHisory(timeline = {}){
    return Object.entries(timeline).map((entry)=> {
        const [time, number] = entry
        return {time, number}
    })
}
