import Image from "next/image";
import InteractiveCard from "./InteractiveCard";
import { Rating } from '@mui/material';

export default function EventCard ({venueName, imgSrc, rating, onRatingChange} : {venueName:string, imgSrc:string, rating?:number, onRatingChange?:(venueName:string, rating:number)=>void}) {

  return(
    <InteractiveCard>
      <div className='w-full h-[70%] relative rounded-t-lg'>
        <Image src={imgSrc} alt="Card" fill={true} className='object-cover rounded-t-lg'/>
      </div>
      <div className='w-full h-[30%] p-2.5 flex flex-col gap-1'>
        <div>{venueName}</div>
        { rating !== undefined && onRatingChange ?
          <div onClick={(e)=> e.stopPropagation()}>
          <Rating 
            id={`${venueName} Rating`} 
            name={`${venueName} Rating`} 
            data-testid={`${venueName} Rating`}
            value={rating}
            onChange={(event, newValue) => onRatingChange?.(venueName, newValue ?? 0)}
          />
        </div>:''
        }
        
      
      </div>
    </InteractiveCard>

  )
}