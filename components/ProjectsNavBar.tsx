import React, { FunctionComponent } from 'react'
import { Category } from '../type'


export const NavItem:FunctionComponent<{value:Category | "all", HandlerFilterCategory:Function }> = ({value, HandlerFilterCategory}) => {
    return <li className='capitalize cursor-pointer hover:text-blue' onClick={()=>HandlerFilterCategory(value)}>{value}</li>
}


export const ProjectsNavBar :FunctionComponent<{HandlerFilterCategory:Function}> = (props) => {
    return (
        <div className='flex px-3 py-2 space-x-3 overflow-x-auto list-none'>
            <NavItem value='all'  {...props}/>
            <NavItem value='react' {...props} />
            <NavItem value='node' {...props}/>
            <NavItem value='mongo' {...props}/>
            <NavItem value='django' {...props}/>
       
        </div>
    )
}
