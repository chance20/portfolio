
import { ServiceCard } from '../components/ServiceCard'
import {services} from '../data'
const index = () => {
  return (
    <div className='flex flex-col px-6 pt-1'>
      <h5 className='my-3 font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat nihil quibusdam minima assumenda, nisi, nostrum voluptates dolor qui consequuntur ipsum veniam debitis molestias, dolores accusamus. Voluptatum aliquam aut dignissimos asperiores.
      Facilis a enim unde incidunt quae nam sapiente maiores commodi dolorem, in iste cumque expedita, dolores eos ex cum illo eveniet, ipsu fuga dolore quasi! Maiores nihil quas consectetur hic?</h5>
      <div className='p-4 mt-5 bg-gray-400 rounded-b-lg dark:bg-dark-100' style={{marginLeft:'-1.5rem', marginRight:'-1.5rem'}}>
        <h6 className='my-3 text-xl font-bold tracking-wide'>Qu &apos; est ce que j &apos; offre</h6>
        <div className='grid gap-4 lg:grid-cols-2'>
          {services.map((service, i)=>(
            <div className='bg-gray-200 rounded-lg dark:bg-dark-200 lg:col-span-1' key={i}>
               <ServiceCard service={service}/>
            </div>
           
          ))}
        </div>
      </div>
    </div>
  )
}

export default index


