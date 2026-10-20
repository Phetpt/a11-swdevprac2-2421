'use client'
import { DatePicker } from "@mui/x-date-pickers"
import { LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { Select, MenuItem, TextField } from "@mui/material"

export default function DateReserve() {
  return (
    <div className="bg-slate-100 rounded-lg w-fit px-10 py-6 flex flex-col gap-y-4">
      <div className="grid grid-cols-2 gap-x-6">
        <TextField variant="standard" name="Name-Lastname" label="Name-Lastname"/>
        <TextField variant="standard" name="Contact-Number" label="Contact-Number"/>
      </div>

      <div className="grid grid-cols-2 gap-x-6 items-end">

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker className="bg-white"/>
        </LocalizationProvider>

        <Select variant="standard" name="venue" id="venue" className="h-[2em] w-[200px]" sx={{ width: '100%' }}>
          <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
          <MenuItem value="Spark">Spark Space</MenuItem>
          <MenuItem value="GrandTable">The Grand Table</MenuItem>
        </Select>

      </div>
    
  </div>
  )
  
}