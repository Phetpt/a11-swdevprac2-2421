import Image from "next/image"
import getVenue from "@/libs/getVenue"

export default async function VenueDetailPage ({params}: {params: Promise<{vid: string}>}) {

const {vid} = await params
const venueDetail = await getVenue(vid)

/**
 * Mock Data for Demonstration Only
 */
/*
const mockVenueRepo = new Map()
mockVenueRepo.set("001", {name: "The Bloom Pavilion", image: "/img/bloom.jpg"})
mockVenueRepo.set("002", {name: "Spark Space", image: "/img/sparkspace.jpg"})
mockVenueRepo.set("003", {name: "The Grand Table", image: "/img/grandtable.jpg"})
 */

  return (
    <main className="text-center p-5">
      <h1 className="text-lg font-medium">{venueDetail.data.name}</h1>
      <div className="flex flex-row my-5">
        <Image src={venueDetail.data.picture}
        alt="Venue Image"
        width={0} height={0} sizes="100vw"
        className="rounded-lg w-[30%]"/>
        <div className="text-md mx-5 text-left">
          <div>Name: {venueDetail.data.name}</div>
          <div>Adress: {venueDetail.data.address}</div>
          <div>District: {venueDetail.data.district}</div>
          <div>Postal Code: {venueDetail.data.postalcode}</div>
          <div>Tel: {venueDetail.data.tel}</div>
          <div>Daily Rate: {venueDetail.data.dailyrate}</div>
        </div>
      </div>
    </main>
  )
}