import { ScheduleType } from "./Scheduling";

type SchedulingArrayType = ScheduleType[] | undefined

export const createSchedulingTree = (schedulingArray: SchedulingArrayType, targetIndex?: string| undefined): ScheduleType[] => {
    // let targetIndex: number | undefined
    // console.log(schedulingArray)
    if (!schedulingArray) return []

    let response: ScheduleType[] = []
    let childs: ScheduleType[] = []
    let parentArray: string[] = []

    schedulingArray.forEach( (item: ScheduleType, index: number) => {
        if (item.parentIndex === targetIndex) {
            response.push({
                ...item,
                // index: item.index ? item.index : index.toString(),
                pp: index.toString()
            })
        } else {
            // console.log(item)
            childs.push({
                ...item,
                // index: item.index ? item.index : index.toString(),
                pp: index.toString()
            })
            
            if (!parentArray.includes(item.parentIndex)) parentArray.push(item.parentIndex)
            
        }
    })

    parentArray.forEach( (item) => {
        response.filter( (resItem, resIndex) => {
            // return resItem.index === item)[0].childs = createSchedulingTree(childs, item)
            // console.log('!!!',resItem.index, item)
            if (resItem.id === item) {
                response[resIndex].childs = createSchedulingTree(childs, item)
                // console.log('!!!', resItem)
            }
        })
    })

    // console.log('response: ', response)
    // console.log('parentArray: ', parentArray)
    // console.log('childs: ', childs)

    return response
}

// const getList = (index: number, schedulingArray: SchedulingArrayType): SchedulingArrayType[] => {
    
// }