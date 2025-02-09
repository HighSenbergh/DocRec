"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { useState } from "react"
import { Video, MapPin } from "lucide-react"

export function AppointmentList() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [view, setView] = useState("all")

  const appointments = [
    {
      id: 1,
      patientName: "John Doe",
      time: "09:00 AM",
      type: "Video",
      status: "Confirmed",
      symptoms: "Headache, Fever",
    },
    {
      id: 2,
      patientName: "Jane Smith",
      time: "10:30 AM",
      type: "In-Person",
      status: "Completed",
      symptoms: "Back pain",
    },
    {
      id: 3,
      patientName: "Mike Johnson",
      time: "02:00 PM",
      type: "Video",
      status: "Pending",
      symptoms: "Allergies",
    },
  ]

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Appointments</CardTitle>
            <Select value={view} onValueChange={setView}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Appointments</SelectItem>
                <SelectItem value="upcoming">Upcoming</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {appointments.map((appointment) => (
              <div
                key={appointment.id}
                className="flex items-center justify-between p-4 border rounded-lg"
              >
                <div>
                  <p className="font-medium">{appointment.patientName}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                    <span>{appointment.time}</span>
                    {appointment.type === "Video" ? (
                      <Badge variant="secondary">
                        <Video className="w-3 h-3 mr-1" />
                        Video
                      </Badge>
                    ) : (
                      <Badge variant="outline">
                        <MapPin className="w-3 h-3 mr-1" />
                        In-Person
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Symptoms: {appointment.symptoms}
                  </p>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <Badge
                    variant={
                      appointment.status === "Confirmed"
                        ? "default"
                        : appointment.status === "Completed"
                        ? "secondary"
                        : "outline"
                    }
                  >
                    {appointment.status}
                  </Badge>
                  <Button size="sm" variant="outline">
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Calendar</CardTitle>
        </CardHeader>
        <CardContent>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
          />
          <div className="mt-4">
            <Button className="w-full">Schedule New Appointment</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}