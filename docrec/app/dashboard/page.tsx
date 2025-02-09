"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Settings } from "lucide-react"
import { HealthMetrics } from "@/components/dashboard/health-metrics"
import { UpcomingAppointments } from "@/components/dashboard/upcoming-appointments"
import { HealthAssistant } from "@/components/dashboard/health-assistant"

export default function DashboardPage() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <Button variant="outline" size="icon">
          <Settings className="h-4 w-4" />
        </Button>
      </div>

      <HealthMetrics />

      <div className="grid gap-4 md:grid-cols-2">
        <UpcomingAppointments />

        <div className="space-y-4">
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
            </CardContent>
          </Card>

          <HealthAssistant />
        </div>
      </div>
    </div>
  )
}