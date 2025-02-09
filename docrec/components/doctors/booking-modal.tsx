"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Calendar } from "@/components/ui/calendar"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { bookAppointment } from "@/lib/api"
import { useToast } from "@/components/ui/use-toast"

interface BookingModalProps {
  doctor: {
    id: number
    name: string
    specialty: string
  }
  open: boolean
  onClose: () => void
}

export function BookingModal({ doctor, open, onClose }: BookingModalProps) {
  const [date, setDate] = useState<Date>()
  const [time, setTime] = useState("")
  const [type, setType] = useState<"video" | "in-person">("video")
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleBooking = async () => {
    if (!date || !time) {
      toast({
        title: "Please select date and time",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)
    try {
      await bookAppointment({
        doctorId: doctor.id.toString(),
        date: date.toISOString(),
        time,
        type,
      })
      toast({
        title: "Appointment booked successfully",
        description: `Your appointment with ${doctor.name} is confirmed`,
      })
      onClose()
    } catch (error) {
      toast({
        title: "Failed to book appointment",
        description: "Please try again later",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Book Appointment with {doctor.name}</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
            />
          </div>
          <Select value={time} onValueChange={setTime}>
            <SelectTrigger>
              <SelectValue placeholder="Select time" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="09:00">9:00 AM</SelectItem>
              <SelectItem value="10:00">10:00 AM</SelectItem>
              <SelectItem value="11:00">11:00 AM</SelectItem>
              <SelectItem value="14:00">2:00 PM</SelectItem>
              <SelectItem value="15:00">3:00 PM</SelectItem>
            </SelectContent>
          </Select>
          <Select value={type} onValueChange={(value: "video" | "in-person") => setType(value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select appointment type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="video">Video Consultation</SelectItem>
              <SelectItem value="in-person">In-Person Visit</SelectItem>
            </SelectContent>
          </Select>
          <Button onClick={handleBooking} disabled={isLoading}>
            {isLoading ? "Booking..." : "Confirm Booking"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}