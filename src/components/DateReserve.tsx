'use client'
import { DatePicker } from "@mui/x-date-pickers"
import { LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { Select, MenuItem, TextField } from "@mui/material"
import { Dayjs } from "dayjs"
import { useState } from "react"

export default function DateReserve({onNameChange, onTelChange, onDateChange, onVenueChange}: {onNameChange: (value: string)=>void, onTelChange: (value: string)=>void, onDateChange: (value: Dayjs|null)=>void, onVenueChange: (value: string)=>void}) {

  const [reserveDate, setReserveDate] = useState<Dayjs|null>(null)
  const [vanue, setVenue] = useState("")

  return (
    <div className="bg-slate-100 rounded-lg w-fit px-10 py-6 flex flex-col gap-y-4">
      <div className="grid grid-cols-2 gap-x-6">
        <TextField variant="standard" name="Name-Lastname" label="Name-Lastname"
        onChange={(e)=>onNameChange(e.target.value)}/>
        <TextField variant="standard" name="Contact-Number" label="Contact-Number"
        onChange={(e)=>onTelChange(e.target.value)}/>
      </div>

      <div className="grid grid-cols-2 gap-x-6 items-end">

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker className="bg-white"
          value={reserveDate}
          onChange={(value)=>{setReserveDate(value); onDateChange(value)}}/>
        </LocalizationProvider>

        <Select variant="standard" name="venue" id="venue" value={vanue} className="h-[2em] w-[200px]" sx={{ width: '100%' }}
        onChange={(e)=>{setVenue(e.target.value); onVenueChange(e.target.value)}}>
          <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
          <MenuItem value="Spark">Spark Space</MenuItem>
          <MenuItem value="GrandTable">The Grand Table</MenuItem>
        </Select>

      </div>
    
  </div>
  )
  
}