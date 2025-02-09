import { env } from "@/lib/env"

export interface Doctor {
  id: number
  name: string
  specialty: string
  experience: string
  rating: number
  location: string
  expertise: string[]
  languages: string[]
  consultationFee: string
  nextAvailable: string
  videoConsultation: boolean
  available: boolean
  image: string
}

const doctorDatabase: Record<number, Doctor> = {
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
    expertise: ["IBS", "Crohn's Disease", "Digestive Health"],
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
    expertise: ["Asthma", "COPD", "Sleep Disorders"],
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
    expertise: ["Skin Cancer", "Acne", "Cosmetic Procedures"],
    languages: ["English", "Korean"],
    consultationFee: "$160",
    nextAvailable: "1 day",
    videoConsultation: true,
    available: true,
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=200&h=200"
  },
  6: {
    id: 6,
    name: "Dr. Robert Martinez",
    specialty: "Orthopedics",
    experience: "14 years",
    rating: 4.8,
    location: "Houston, TX",
    expertise: ["Joint Replacement", "Sports Injuries", "Spine Disorders"],
    languages: ["English", "Spanish"],
    consultationFee: "$220",
    nextAvailable: "3 days",
    videoConsultation: true,
    available: true,
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=200&h=200"
  }
}

async function analyzeWithGPT(symptoms: string) {
  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4",
        messages: [
          {
            role: "system",
            content: `You are a medical assistant. Analyze the symptoms and provide:
            1. Determine if this is an emergency situation requiring immediate medical attention
            2. A brief analysis in bullet points
            3. Recommend appropriate medical specialties from this list:
            Cardiology, Neurology, Gastroenterology, Pulmonology, Dermatology, Orthopedics, ENT, Endocrinology, Ophthalmology, Psychiatry.
            
            Format your response exactly as follows:
            EMERGENCY: [true/false]
            EMERGENCY_DETAILS: [If emergency is true, provide brief emergency instructions]
            ANALYSIS:
            • [First observation]
            • [Second observation]
            • [Third observation]
            SPECIALTIES: [comma-separated list of relevant specialties]
            
            Examples of emergency symptoms:
            - Severe chest pain
            - Difficulty breathing
            - Stroke symptoms (FAST: Face drooping, Arm weakness, Speech difficulty, Time to call emergency)
            - Severe head injury
            - Loss of consciousness
            - Severe bleeding
            - Severe allergic reaction`
          },
          {
            role: "user",
            content: `Analyze these symptoms: ${symptoms}`
          }
        ],
        temperature: 0.7,
        max_tokens: 500,
      }),
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    const result = data.choices[0].message.content

    // Parse the GPT response
    const emergencyMatch = result.match(/EMERGENCY: (true|false)/)
    const emergencyDetailsMatch = result.match(/EMERGENCY_DETAILS: (.+?)(?=\n|$)/)
    const analysisMatch = result.match(/ANALYSIS:([\s\S]*?)(?=SPECIALTIES:|$)/)
    const specialtiesMatch = result.match(/SPECIALTIES: (.*)/)

    if (!analysisMatch) {
      throw new Error("Failed to parse analysis")
    }

    const isEmergency = emergencyMatch ? emergencyMatch[1] === 'true' : false
    const emergencyDetails = emergencyDetailsMatch ? emergencyDetailsMatch[1].trim() : ''
    const analysis = analysisMatch[1].trim()
    const specialties = specialtiesMatch ? 
      specialtiesMatch[1].split(",").map(s => s.trim()) : 
      []

    return { 
      isEmergency,
      emergencyDetails,
      analysis, 
      specialties 
    }
  } catch (error) {
    console.error("Error calling GPT API:", error)
    throw new Error("Failed to analyze symptoms")
  }
}

export async function analyzeSymptoms(symptoms: string) {
  try {
    // Get analysis and recommended specialties from GPT
    const gptResponse = await analyzeWithGPT(symptoms)
    
    // Find doctors based on recommended specialties
    const matchedDoctors = Object.values(doctorDatabase).filter(doctor => 
      gptResponse.specialties.some(specialty => 
        doctor.specialty.toLowerCase() === specialty.toLowerCase()
      )
    ).sort((a, b) => b.rating - a.rating)

    return {
      isEmergency: gptResponse.isEmergency,
      emergencyDetails: gptResponse.emergencyDetails,
      analysis: gptResponse.analysis,
      doctors: matchedDoctors
    }
  } catch (error) {
    console.error("Error analyzing symptoms:", error)
    throw new Error("Failed to analyze symptoms. Please try again later.")
  }
}