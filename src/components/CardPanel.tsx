'use client'

import Card from "./Card"
import { useReducer } from "react"
import Link from "next/link"

export default function CardPanel() {

  const venueReducer = (venueList:Map<string, number>, action:{type:string, venueName:string, rating: number }) => {
    switch(action.type) {
      case 'update': {
       const newVenueList = new Map(venueList)
       newVenueList.set(action.venueName, action.rating)
       return newVenueList
      }
      case 'remove': {
        const newVenueList = new Map(venueList)
        newVenueList.delete(action.venueName)
        return newVenueList
      }
      default: return venueList
    }
  }

  const [venueList, dispatchVenue] = useReducer(venueReducer, new Map<string, number>([
    ["The Bloom Pavilion", 0],
    ["Spark Space", 0],
    ["The Grand Table", 0]
  ]))

  /**
   * Mock Data for Demonstation Only
   */

    const mockVenueRepo = [
      {vid: "001", name: "The Bloom Pavilion", image: "/img/bloom.jpg"},
      {vid: "002", name: "Spark Space", image: "/img/sparkspace.jpg"},
      {vid: "003", name: "The Grand Table", image: "/img/grandtable.jpg"},
    ]

  return(
    <div style={{width: "100%"}}>
      <div style={{margin:"20px", display:"flex", 
        flexDirection:"row", flexWrap:"wrap", 
        justifyContent:"space-around", alignContent:"space-around"}}>
          {
            mockVenueRepo.map((venueItem)=>(
              <Link href={`/venue/${venueItem.vid}`} className="w-1/5" key={venueItem.vid}>
                <Card key={venueItem.vid} venueName={venueItem.name} imgSrc={venueItem.image} 
              rating={venueList.get(venueItem.name) ?? 0}
              onRatingChange={(venueName, rating) => dispatchVenue({type: 'update', venueName, rating})}
              />
              </Link>       
            )
          )
          }
        </div>

      <div>Venue List with Ratings : {venueList.size}</div>
      {Array.from(venueList).map(([venueName, rating]) => (
        <div key={venueName} data-testid={venueName} onClick={() => dispatchVenue({type:'remove', venueName, rating})}>
            {venueName} Rating : {rating}
          </div>
        ))
      }
    
    </div>
  )
}
