
import { ServiceCard } from '../components/ServiceCard'
import {services} from '../data'
const index = () => {
  return (
    <div className='flex flex-col px-6 pt-1'>
      <h5 className='my-3 font-medium text-justify'>
      Passionné par l&apos;univers du développement informatique et de la
      technologie, créatif, intègre, enthousiaste, innovant, dynamique,
      rigoureux dans mon travail, autonome et aime travailler en équipe,
      ouvert à la critique, capable de partager et de proposer ses idées.
      En effet, je suis un informaticien expérimenté avec une expérience éprouvée 
      dans l'industrie du commerce électronique, de la comptabilité et de 
      l&apos;intelligence artificielle. J'ai une maîtrise en programmation informatique, 
      en apprentissage automatique, en base de données et en planification stratégique.
      Je suis détenteur d&apos;une licence en mathématiques et
      informatique de l&apos;université de Kinshasa et je suis toujours à la
      recherche des belles initiatives et des nouveaux défis.</h5>
      <div className='p-4 mt-5 bg-gray-400 rounded-b-lg dark:bg-dark-100' style={{marginLeft:'-1.5rem', marginRight:'-1.5rem'}}>
        <h6 className='my-3 text-xl font-bold tracking-wide'>Qu&apos;est ce que j&apos;offre</h6>
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


