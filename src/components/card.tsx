import ImageCard from '/images/image-card.jpg'
import AvatarImage from '/images/avatar.jpg'

export const Card = () => {
  return (
    <div className="w-[25em] h-[35em] rounded-2xl bg-black">
      <div className="w-[25em] h-[35em] rounded-2xl bg-white border hover:-translate-2 transition-all duration-75 p-5 flex flex-col gap-5">
        <img src={ImageCard} alt="Imagen de Card" className='rounded-xl'/>
        <div className='bg-purple-300 rounded w-fit px-3 py-1'> 
            <p className='font-semibold'>Learning</p>
        </div>
        <p className='text-neutral-600'>Published 21 Dec 2023</p>
        <h2 className='font-bold text-2xl '>HTML & CSS foundations</h2>
        <p className='text-neutral-600'>These languages are the backbone of every website, defining structure, content, and presentation.</p>
        <div className='flex items-center gap-3'> 
            <img src={AvatarImage} alt="Imagen de avatar" className='border border-gray-100 size-12 rounded-full' />
            <p className='font-semibold'>Agustin Martinez</p>
        </div>
      </div>
    </div>
  )
}

