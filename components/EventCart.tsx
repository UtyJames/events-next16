import Link from 'next/link';
import Image from 'next/image';

interface Props {
    title: string;
    image: string;
    slug: string;
    location: string;
    date: string;
    time: string;
    description: string;
}

const EventCart = ({ title, image, slug, location, date, time, description}: Props) => {
  return (
    <Link href={`/events/${slug}`} id="event-card">
        <div>
            <Image src={image} alt={title} width={410} height={300} className='poster'/>
            <div className='mt-5'> 
                <h2>{title}</h2>
            <p>{description}</p>

            <div className='flex flex-row gap-2'>
                <Image src="/icons/pin.svg" alt="location" width={8} height={8}/>
                <p>{location}</p>
            </div>

            <div className='flex flex-row gap-4'>
            <div className='flex flex-row gap-2'>
                <Image src="/icons/calendar.svg" alt="calendar" width={8} height={8}/>
                <p>{date}</p>
            </div>

             <div className='flex flex-row gap-2'>
                <Image src="/icons/clock.svg" alt="clock" width={8} height={8}/>
                <p>{time}</p>
            </div>
            </div>

            </div>
        </div>
    </Link>
  )
}

export default EventCart