import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Activity, Stethoscope, Calendar, FileText } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      {/* Hero Section */}
      <section className="py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
          Your Health, Our Priority
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Connect with top healthcare professionals, manage your appointments, and take control of your health journey.
        </p>
        <div className="flex gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/symptoms">Check Symptoms</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/doctors">Find Doctors</Link>
          </Button>
        </div>
      </section>

      {/* Features Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="p-6">
          <Activity className="w-12 h-12 mb-4 text-primary" />
          <h3 className="text-xl font-semibold mb-2">Symptom Checker</h3>
          <p className="text-muted-foreground">
            Advanced AI-powered symptom analysis for accurate health assessments
          </p>
        </Card>

        <Card className="p-6">
          <Stethoscope className="w-12 h-12 mb-4 text-primary" />
          <h3 className="text-xl font-semibold mb-2">Expert Doctors</h3>
          <p className="text-muted-foreground">
            Connect with qualified healthcare professionals in your area
          </p>
        </Card>

        <Card className="p-6">
          <Calendar className="w-12 h-12 mb-4 text-primary" />
          <h3 className="text-xl font-semibold mb-2">Easy Scheduling</h3>
          <p className="text-muted-foreground">
            Book and manage appointments with just a few clicks
          </p>
        </Card>

        <Card className="p-6">
          <FileText className="w-12 h-12 mb-4 text-primary" />
          <h3 className="text-xl font-semibold mb-2">Health Records</h3>
          <p className="text-muted-foreground">
            Secure storage and easy access to your medical history
          </p>
        </Card>
      </section>
    </div>
  )
}