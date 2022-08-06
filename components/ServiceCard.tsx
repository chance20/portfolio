import React, { FunctionComponent } from 'react'
import { IService } from '../type'

export const ServiceCard:FunctionComponent<{
    service:IService
}> = ({service:{Icon,about,title}}) => {

    const createMarkup = () =>{
        return {
            __html:about,
        }
    }
    return (
        <div  className='flex items-center p-2 space-x-4 '>
            <Icon className='w-24 h-24 text-blue'/>
            <div>
                <h4 className='font-bold'>{title}</h4>
                <p dangerouslySetInnerHTML={createMarkup()}/>
            </div>
        </div>
    )
}
