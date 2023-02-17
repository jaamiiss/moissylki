import Image from 'next/image';
import '@/styles/globals.css';
import { get } from '@vercel/edge-config';


function LinkCard({ href, title, image }: {
  href: string;
  title: string;
  image?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center p-1 w-full rounded-md hover:scale-105 transition-all border border-gray-300 bg-gray-100 mb-3 max-w-3xl">
        <div className='flex text-center w-full'>
          <div className='w-10 h-10'>
            {image && (
            <Image 
              className='rounded-sm'
              alt={title}
              src={image}
              width={40}
              height={40}
            />
            )}
          </div>
          <h2 className='flex justify-center items-center font-semibold w-full text-center text-gray-700 -ml-10'>{title}</h2>                    
          </div>
      </a>
  )
}

function Socials({ href, title, image }: {
  href: string;
  title: string;
  image?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer">
        <div className='flex text-center w-full mt-4' >
          <div className='w-10 h-10'>
            {image && (
            <Image 
              className='rounded-sm fill-white-500'
              alt={title}
              src={image}
              width={40}
              height={40}
            />
            )}
          </div>                  
        </div>
      </a>
  )
}

export default async function Home() {
  const data = await get('mylinks');

  return (
    <div className='flex items-center flex-col mx-auto w-full justify-center mt-16 px-8'>
      <Image 
        className='rounded-full'
        alt={data.name}
        src={data.avatar}
        width={120}
        height={120}
      />
      <h1 className='font-bold mt-4 mb-8 text-xl'>{data.name}</h1>
      {data.links.map((link: JSX.IntrinsicAttributes & { href: string; title: string; image?: string | undefined; }) => (
        <LinkCard key={link.href} {...link} />
      ))}
      {data.socials.map((link: JSX.IntrinsicAttributes & { href: string; title: string; image?: string | undefined; }) => (
        <Socials key={link.href} {...link} />
      ))}
    </div>
  );
}
