"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Calendar,
  Clock,
  Video,
  MapPin,
  AlertCircle
} from "lucide-react"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { useState } from "react"

const appointments = [
  {
    id: 1,
    doctor: "Dr. Sarah Johnson",
    specialty: "Cardiologist",
    date: "2024-04-15",
    time: "10:00 AM",
    type: "video",
    status: "upcoming"
  },
  {
    id: 2,
    doctor: "Dr. Michael Chen",
    specialty: "Neurologist",
    date: "2024-04-20",
    time: "2:30 PM",
    type: "in-person",
    location: "123 Medical Center, NY",
    status: "upcoming"
  }
]

export default function AppointmentsPage() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">My Appointments</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <h2 className="text-xl font-semibold mb-4">Upcoming Appointments</h2>
          <div className="space-y-4">
            {appointments.map((appointment) => (
              <Card key={appointment.id} className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold">{appointment.doctor}</h3>
                    <p className="text-muted-foreground">{appointment.specialty}</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Reschedule
                  </Button>
                </div>

                <div className="flex gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{appointment.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{appointment.time}</span>
                  </div>
                  {appointment.type === "video" ? (
                    <div className="flex items-center gap-2">
                      <Video className="w-4 h-4" />
                      <span>Video Consultation</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{appointment.location}</span>
                    </div>
                  )}
                </div>

                <div className="mt-4 flex gap-4">
                  {appointment.type === "video" && (
                    <Button className="flex-1">Join Video Call</Button>
                  )}
                  <Button variant="outline" className="flex-1">Cancel</Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Schedule New</h2>
            <CalendarComponent
              mode="single"
              selected={date}
              onSelect={setDate}
              className="mb-4"
            />
            <Button className="w-full">Find Available Slots</Button>
          </Card>

          <Card className="p-4 mt-4 bg-yellow-50 dark:bg-yellow-950 border-yellow-200 dark:border-yellow-900">
            <div className="flex gap-2">
              <AlertCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
              <div>
                <h3 className="font-semibold text-yellow-800 dark:text-yellow-200">Appointment Policy</h3>
                <p className="text-sm text-yellow-700 dark:text-yellow-300">
                  Please cancel or reschedule at least 24 hours in advance.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}