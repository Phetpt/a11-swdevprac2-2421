"use client"
import DateReserve from "@/components/DateReserve"
import { useState } from "react"
import { Dayjs } from "dayjs"
import { useDispatch } from "react-redux"
import { AppDispatch } from "@/redux/store"
import { addBooking } from "@/redux/features/bookSlice"
import { BookingItem } from "../../../interface"
import dayjs from "dayjs"


export default function Booking() {

  const dispatch = useDispatch<AppDispatch>()

  const makeReservation = ()=>{
    if(nameLastName && tel && venue && reserveDate) {
      const item: BookingItem = {
        nameLastname: nameLastName,
        tel: tel,
        venue: venue,
        bookDate: dayjs(reserveDate).format("YYYY/MM/DD")
      }
      dispatch(addBooking(item))
    }
  }

  const [nameLastName, setNameLastName] = useState("")
  const [tel, setTel] = useState("")
  const [reserveDate, setReserveDate] = useState<Dayjs|null>(null)
  const [venue, setVenue] = useState("")

  return(
    <main className="w-[100%] flex flex-col items-center space-y-4"> 
      <div className="text-xl font-medium pt-3">Venue Booking</div>     
      <div className="w-fit space-y-2">
        <div className="text-md text-left text-gray-600">Date and Venue</div>
        <DateReserve
        onNameChange={(value: string)=>{setNameLastName(value)}}
        onTelChange={(value: string) => {setTel(value)}}
        onDateChange={(value: Dayjs | null) => {setReserveDate(value)}}
        onVenueChange={(value: string) => {setVenue(value)}}/>
      </div>

      <button name="Book Venue" className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm"
      onClick={makeReservation}>
        Book Venue
      </button>

    </main>
  )
}