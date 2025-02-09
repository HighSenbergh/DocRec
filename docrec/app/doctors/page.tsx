"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { DoctorCard } from "@/components/doctors/doctor-card"

const doctorDatabase = {
  1: {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "Cardiology",
    experience: "15 years",
    rating: 4.8,
    location: "New York, NY",
    expertise: ["Heart Disease", "Hypertension", "Cardiac Surgery"],
    languages: ["English", "Spanish"],
    consultationFee: "$200",
    nextAvailable: "Tomorrow",
    videoConsultation: true,
    available: true,
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=200&h=200"
  },
  2: {
    id: 2,
    name: "Dr. Michael Chen",
    specialty: "Neurology",
    experience: "12 years",
    rating: 4.9,
    location: "San Francisco, CA",
    expertise: ["Stroke", "Epilepsy", "Multiple Sclerosis"],
    languages: ["English", "Mandarin"],
    consultationFee: "$250",
    nextAvailable: "Next Week",
    videoConsultation: true,
    available: true,
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=200&h=200"
  },
  3: {
    id: 3,
    name: "Dr. Emily Rodriguez",
    specialty: "Gastroenterology",
    experience: "10 years",
    rating: 4.7,
    location: "Miami, FL",
    expertise: ["IBS", "Digestive Health", "Crohn's Disease"],
    languages: ["English", "Spanish"],
    consultationFee: "$180",
    nextAvailable: "Today",
    videoConsultation: true,
    available: true,
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=200&h=200"
  },
  4: {
    id: 4,
    name: "Dr. James Wilson",
    specialty: "Pulmonology",
    experience: "20 years",
    rating: 4.9,
    location: "Chicago, IL",
    expertise: ["Respiratory Issues", "Asthma", "COPD"],
    languages: ["English"],
    consultationFee: "$190",
    nextAvailable: "2 days",
    videoConsultation: true,
    available: true,
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=200&h=200"
  },
  5: {
    id: 5,
    name: "Dr. Lisa Chang",
    specialty: "Dermatology",
    experience: "8 years",
    rating: 4.6,
    location: "Los Angeles, CA",
    expertise: ["Skin Conditions", "Dermatitis", "Acne"],
    languages: ["English", "Korean"],
    consultationFee: "$160",
    nextAvailable: "1 day",
    videoConsultation: true,
    available: true,
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=200&h=200"
  }
}

const specialties = [
  "All Specialties",
  "Cardiology",
  "Neurology",
  "Gastroenterology",
  "Pulmonology",
  "Dermatology",
  "Orthopedics",
  "ENT",
  "Endocrinology",
  "Ophthalmology",
  "Psychiatry"
]

export default function DoctorsPage() {
  const [doctors, setDoctors] = useState(Object.values(doctorDatabase))
  const [specialty, setSpecialty] = useState("")
  const [location, setLocation] = useState("")
  const [search, setSearch] = useState("")

  const handleSearch = () => {
    let filtered = Object.values(doctorDatabase)

    if (specialty && specialty !== "All Specialties") {
      filtered = filtered.filter(doctor => 
        doctor.specialty.toLowerCase() === specialty.toLowerCase()
      )
    }

    if (location) {
      filtered = filtered.filter(doctor =>
        doctor.location.toLowerCase().includes(location.toLowerCase())
      )
    }

    if (search) {
      filtered = filtered.filter(doctor =>
        doctor.name.toLowerCase().includes(search.toLowerCase()) ||
        doctor.specialty.toLowerCase().includes(search.toLowerCase())
      )
    }

    setDoctors(filtered)
  }

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Find Doctors</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <Input
          placeholder="Search by name..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value)
            handleSearch()
          }}
        />
        <Select 
          value={specialty} 
          onValueChange={(value) => {
            setSpecialty(value)
            handleSearch()
          }}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select specialty" />
          </SelectTrigger>
          <SelectContent>
            {specialties.map((s) => (
              <SelectItem key={s} value={s.toLowerCase()}>
                {s}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Input
          placeholder="Enter location..."
          value={location}
          onChange={(e) => {
            setLocation(e.target.value)
            handleSearch()
          }}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {doctors.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </div>
    </div>
  )
}