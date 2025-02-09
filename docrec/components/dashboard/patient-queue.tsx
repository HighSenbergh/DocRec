"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"
import { Video, Clock } from "lucide-react"

export function PatientQueue() {
  const queue = [
    {
      name: "Sarah Wilson",
      time: "10:00 AM",
      type: "Video",
      status: "In Progress",
      waitTime: "5 mins",
    },
    {
      name: "Michael Brown",
      time: "10:30 AM",
      type: "In-Person",
      status: "Waiting",
      waitTime: "15 mins",
    },
    {
      name: "Emma Davis",
      time: "11:00 AM",
      type: "Video",
      status: "Scheduled",
      waitTime: "45 mins",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Patient Queue</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[300px]">
          <div className="space-y-4">
            {queue.map((patient, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 border rounded-lg"
              >
                <div className="space-y-1">
                  <p className="font-medium">{patient.name}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    {patient.time}
                    {patient.type === "Video" && (
                      <>
                        <span>•</span>
                        <Video className="h-4 w-4" />
                        Video Consult
                      </>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <Badge
                      variant={
                        patient.status === "In Progress"
                          ? "default"
                          : patient.status === "Waiting"
                          ? "secondary"
                          : "outline"
                      }
                    >
                      {patient.status}
                    </Badge>
                    <p className="text-xs text-muted-foreground mt-1">
                      Wait: {patient.waitTime}
                    </p>
                  </div>
                  <Button size="sm" variant="outline">
                    Start
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  )
}