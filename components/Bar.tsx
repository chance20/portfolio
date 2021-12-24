import React, { FunctionComponent } from 'react'
import { ISkill } from '../type'

export const Bar:FunctionComponent<{
    data:ISkill
}> = ({data:{Icon, level, name}}) => {
    return (
        <div className='text-white my-2 bg-gray-300 dark:bg-dark-200 rounded-full'>

            <div className="px-4 py-1 flex items-center rounded-full bg-gradient-to-r from-blue to-gray-600"
            style={{width:level}}>
                <Icon className='mr-3'/>
                {name}
            </div>
        </div>
    )
}
