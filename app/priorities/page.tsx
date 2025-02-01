import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, BookOpen, Heart, TrendingUp, Shield, Leaf } from "lucide-react";

export default function Priorities() {
  const priorities = [
    {
      title: "Food Security & Social Protection",
      description: "Achieve food security through increased food production",
      icon: TrendingUp,
      details: [
        "Build 2 mega dams for irrigation",
        "Increasing the productivity existing Irrigations Scheemes",
        "Revamp Turkana Disaster and Contigency Planning Unit for disaster preparedness",
        "Collaborate with partners to make Turkana great Again",
        "Mechanization of Agriculture and provision of farm inputs"
      ]
    },
    {
      title: "Health Care",
      description: "Ensure quality and accessible healthcare for all",
      icon: BookOpen,
      details: [
        "Ambulance to each ward in Turkana",
        "Build and equip state of the art level 6 hospital in Turkana county",
        "Equip and Increase the capacity of LCRH to handle specialized medical care",
        "Enroll PWD's Aged and Vulnerable households to SHIF/SHA",
        "Establish and Equip more dispensaries in every Devolved Unit",
        "Allocate funds for medical training to increase the number of healthcare workers in Turkana county"
      ]
    },
    {
      title: "Water and Sanitation",
      description: "Provide safe and clean drinking water for human population and livestock.",
      icon: Heart,
      details: [
        "Increase access to water by expanding the water supply system in Napuu Aquifer to supply water within Lodwar Municipality",
        "Expand water reticulation in urban centers and rural areas",
        "Build 2 mega dams along dry seasons grazing areas for livestock and pastrolist",
        "Operatalize and support existing water associations",
      ]
    },
    {
      title: "Education, Skills and Literacy",
      description: "Promote education, skills and literacy",
      icon: Shield,
      details: [
        "Equip and model ECDEs in every village unit",
        "Improve and support existing TVETs",
        "Establish mobile schools for our pastoralist communities",
        "Establish public-private partnership with Higher learning institutions"
      ]
    },
    {
      title: "Infrastructure Development",
      description: "Build modern, physical and sustainable infrastructure",
      icon: Leaf,
      details: [
        "Upgraging county roads into motorable standards",
        "Open cross boarder roads networks",
        "Install CCTVs for security survaillance",
        "Carry out urban beautification within urban centers"
      ]
    },
    {
      title: "Trade, Industrialization & Enterprise Development",
      description: "Promoting trade, industrialization & enterpise development",
      icon: BarChart,
      details: [
        "Construction of modern markets in every urban center to facilitaye trade",
        "Establish tannery for leather processing",
        "Introduce 24 hr economy in urban centers",
        "Stream and regulate fish marketing in turkana county to maximize profits",
        "Promote value addition and processing of fish and meat products for local consumption"
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold mb-8">Campaign Priorities</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {priorities.map((priority, index) => (
          <Card key={index}>
            <CardHeader>
              <priority.icon className="h-8 w-8 text-primary mb-2" />
              <CardTitle>{priority.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-muted-foreground">{priority.description}</p>
              <ul className="space-y-2">
                {priority.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="flex items-center">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2" />
                    {detail}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}