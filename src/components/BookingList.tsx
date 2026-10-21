"use client"
import { useAppSelector, AppDispatch } from "@/redux/store"
import { removeBooking } from "@/redux/features/bookSlice"
import { useDispatch } from "react-redux"

export default function BookingList() {

  const bookItems = useAppSelector((state)=>state.bookSlice.bookItems)
  const dispatch = useDispatch<AppDispatch>()

  if (bookItems.length === 0) {return <div className="text-2xl pt-5 w-full text-center">No Venue Booking</div>}

  return(
    <>
    {
      bookItems.map((bookingItem)=>(
        <div className="bg-slate-200 rounded px-5 mx-5 py-2 my-2" key={bookingItem.venue + bookingItem.bookDate}>
          <div className="text-xl">{bookingItem.venue === "Bloom"
          ? "The Bloom Pavilion": bookingItem.venue === "Spark"? "Spark Space"
          : bookingItem.venue === "GrandTable" ? "The Grand Table"
          : bookingItem.venue
    }
        </div>
          <div className="text-sm">Name: {bookingItem.nameLastname}</div>
          <div className="text-sm">Tel: {bookingItem.tel}</div>
          <div className="text-sm">Date: {bookingItem.bookDate}</div>
          <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm"
            onClick={()=>dispatch(removeBooking(bookingItem))}>
              Cancel Booking
          </button>
        </div>
      ))
    }
    </>
  )
}