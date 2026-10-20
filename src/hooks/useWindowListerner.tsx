'use client'

import { useState, useEffect } from "react"

export default function useWindowListerner(eventType: string, listener: EventListener) {

  useEffect(()=>{
    window.addEventListener(eventType, listener)
    return() =>{
      window.removeEventListener(eventType, listener)
    }
  }, [])
}