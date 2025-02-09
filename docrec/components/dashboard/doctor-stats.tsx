"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Clock, Activity, ClipboardList } from "lucide-react"

export function DoctorStats() {
  const stats = [
    {
      title: "Total Patients",
      value: "1,234",
      icon: Users,
      change: "+12%",
      description: "from last month",
    },
    {
      title: "Today's Appointments",
      value: "12",
      icon: Clock,
      change: "+4",
      description: "from yesterday",
    },
    {
      title: "Patient Recovery Rate",
      value: "94%",
      icon: Activity,
      change: "+2.5%",
      description: "from last quarter",
    },
    {
      title: "Pending Reports",
      value: "7",
      icon: ClipboardList,
      change: "-3",
      description: "from yesterday",
    },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {stat.title}
            </CardTitle>
            <stat.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-muted-foreground">
              <span className={stat.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}>
                {stat.change}
              </span>
              {' '}{stat.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}