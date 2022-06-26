import {useState, useEffect, FunctionComponent} from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'


const NavItem:FunctionComponent<{
activeItem:string,
setActiveItem:Function,
name:string,
route:string
}>=({activeItem,setActiveItem, name, route})=>{
    return activeItem !==name ? (
              <Link href={route}>
                  <a><span onClick={()=>setActiveItem(name)} className='hover:text-blue'>{name}</span>  </a>
              </Link>
              ):null  
}
const Navbar = () => {

    const [activeItem, setActiveItem] = useState<string>('')
    const {pathname} = useRouter();
    
    useEffect(()=>{
        if(pathname ==='/') setActiveItem('Accueil')
        if(pathname ==='/projects') setActiveItem('Projets')
        if(pathname ==='/resume') setActiveItem('Résumé')
    }, [pathname])
    return (
        <div className="flex justify-between px-5 py-2 my-3">
          <span className="text-xl font-bold border-b-4 text-blue border-blue md:text-2xl">{activeItem}</span>
          <div className="flex space-x-5 text-lg">       
         <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name="Accueil" route="/"/>
         <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name="Projets" route="/projects"/>
         <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name="Résumé" route="/resume"/>
          </div>
        </div>
    )
}

export default Navbar
