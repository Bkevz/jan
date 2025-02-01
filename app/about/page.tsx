import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export default function About() {
  const achievements = [
    {
      year: "2022-To Date",
      title: "Member of Parliament - Turkana South",
      description: "Led initiatives for economic development and education reform",
    },
    {
      year: "2016-2018",
      title: "Turkana County Chief Officer - Roads and Transport",
      description: "Led initiatives for economic development and education reform",
    },
    {
      year: "2013-2016",
      title: "Turkana County Budget Controller",
      description: "Championed local infrastructure projects and community programs",
    },
    {
      year: "2009-2013",
      title: "Fund Account Manager",
      description: "Founded grassroots organizations for social justice and equality",
    },
  ];

  const education = [
    {
      year: "2013-2017",
      title: "Moi University",
      description: "Doctor of Philosophy(Ph.D), Finance, General",
    },
    {
      year: "2010 - 2012",
      title: "University of Nairobi",
      description: "Master of Business Administration(M.B.A), Accounting and Finance",
    },
    {
      year: "2006 - 2008",
      title: "Moi University",
      description: "BBA Accounting and Finance",
    },
    {
      year: "1997-2000",
      title: "Lodwar High School",
      description: "",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Biography Section */}
      <section className="mb-16">
        <h1 className="text-4xl font-bold mb-8">About Dr. John Ariko Namoit</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img
              src="/dozer.jpg"
              alt="Dr. John Ariko Namoit"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="space-y-4">
            <p className="text-lg">
              Dr. John Ariko Namoit has dedicated his life to public service and community
              leadership. Born and raised in our Turkana, he understands the
              challenges and opportunities that face our communitty.
            </p>
            <p className="text-lg">
              With over 15 years of experience in public service, Dr. John Ariko Namoit
              consistently demonstrated his commitment to creating positive change
              through collaborative leadership and innovative solutions.
            </p>
            <p className="text-lg">
              His background in Accounts and Finance, combined with his
              hands-on experience in community organizing, makes him uniquely
              qualified to represent our county in 2027.
            </p>
          </div>
        </div>
      </section>

      {/* Education Timeline */}
      <section>
        <h2 className="text-3xl font-bold mb-8">Education</h2>
        <div className="space-y-8">
          {education.map((education, index) => (
            <Card key={index} className="relative">
              <div className="absolute left-4 top-4">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <CardContent className="pl-16 py-4">
                <div className="mb-2">
                  <span className="text-sm font-medium text-muted-foreground">
                    {education.year}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{education.title}</h3>
                <p className="text-muted-foreground">{education.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>


      {/* Achievement Timeline */}
      <section>
        <h2 className="text-3xl font-bold mb-8">Career Highlights</h2>
        <div className="space-y-8">
          {achievements.map((achievement, index) => (
            <Card key={index} className="relative">
              <div className="absolute left-4 top-4">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <CardContent className="pl-16 py-4">
                <div className="mb-2">
                  <span className="text-sm font-medium text-muted-foreground">
                    {achievement.year}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                <p className="text-muted-foreground">{achievement.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}