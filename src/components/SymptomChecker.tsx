import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, AlertTriangle, MapPin, Phone } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Question {
  id: number;
  text: string;
  options: string[];
}

interface RiskAssessment {
  level: 'low' | 'medium' | 'high';
  condition: string;
  description: string;
  recommendations: string[];
}

const questions: Question[] = [
  {
    id: 1,
    text: "Are you experiencing any of the following symptoms?",
    options: ["Excessive thirst", "Frequent urination", "Blurred vision", "Fatigue", "None of these"]
  },
  {
    id: 2,
    text: "How long have you been experiencing these symptoms?",
    options: ["Less than a week", "1-2 weeks", "Several weeks", "Months"]
  },
  {
    id: 3,
    text: "Do you have a family history of diabetes or heart disease?",
    options: ["Yes, diabetes", "Yes, heart disease", "Both", "No family history"]
  }
];

const SymptomChecker = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [assessment, setAssessment] = useState<RiskAssessment | null>(null);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Generate assessment based on answers
      generateAssessment(newAnswers);
      setIsCompleted(true);
    }
  };

  const generateAssessment = (userAnswers: string[]) => {
    // Simple risk assessment logic
    const diabetesSymptoms = userAnswers[0]?.includes("thirst") || userAnswers[0]?.includes("urination");
    const duration = userAnswers[1];
    const familyHistory = userAnswers[2]?.includes("diabetes");

    if (diabetesSymptoms && (duration?.includes("weeks") || duration?.includes("Months")) && familyHistory) {
      setAssessment({
        level: 'high',
        condition: 'Possible Diabetes',
        description: 'Your symptoms and risk factors suggest you should consult a healthcare provider immediately.',
        recommendations: [
          'Schedule an appointment with your doctor within 24-48 hours',
          'Consider getting blood glucose tests',
          'Monitor your symptoms closely',
          'Stay hydrated and avoid excessive sugar intake'
        ]
      });
    } else if (diabetesSymptoms) {
      setAssessment({
        level: 'medium',
        condition: 'Monitor Symptoms',
        description: 'Some of your symptoms warrant attention. Consider consulting a healthcare provider.',
        recommendations: [
          'Schedule a routine check-up with your doctor',
          'Keep a symptom diary',
          'Maintain a healthy diet and exercise routine',
          'Monitor your blood pressure if possible'
        ]
      });
    } else {
      setAssessment({
        level: 'low',
        condition: 'General Wellness',
        description: 'Your symptoms appear to be low risk, but maintain healthy habits.',
        recommendations: [
          'Continue regular health check-ups',
          'Maintain a balanced diet',
          'Stay physically active',
          'Monitor any changes in symptoms'
        ]
      });
    }
  };

  const resetChecker = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setAssessment(null);
    setIsCompleted(false);
  };

  const getRiskColor = (level: string) => {
    switch (level) {
      case 'high': return 'destructive';
      case 'medium': return 'warning';
      case 'low': return 'secondary';
      default: return 'secondary';
    }
  };

  const getRiskIcon = (level: string) => {
    switch (level) {
      case 'high': return <AlertTriangle className="h-5 w-5" />;
      case 'medium': return <AlertTriangle className="h-5 w-5" />;
      case 'low': return <CheckCircle className="h-5 w-5" />;
      default: return <CheckCircle className="h-5 w-5" />;
    }
  };

  if (isCompleted && assessment) {
    return (
      <section id="symptom-checker" className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-card animate-fade-in">
            <CardHeader className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Badge variant={getRiskColor(assessment.level) as any} className="text-sm px-3 py-1">
                  {getRiskIcon(assessment.level)}
                  <span className="ml-2 capitalize">{assessment.level} Risk</span>
                </Badge>
              </div>
              <CardTitle className="text-2xl">{assessment.condition}</CardTitle>
              <p className="text-muted-foreground">{assessment.description}</p>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold mb-3">Recommended Actions:</h3>
                <ul className="space-y-2">
                  {assessment.recommendations.map((rec, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {assessment.level !== 'low' && (
                <div className="bg-accent p-4 rounded-lg">
                  <h3 className="font-semibold mb-2 flex items-center">
                    <MapPin className="h-5 w-5 mr-2" />
                    Find Nearby Healthcare Providers
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-2 bg-card rounded border">
                      <div>
                        <div className="font-medium">City General Hospital</div>
                        <div className="text-sm text-muted-foreground">0.8 miles away</div>
                      </div>
                      <Button size="sm" variant="outline">
                        <Phone className="h-4 w-4 mr-1" />
                        Call
                      </Button>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-card rounded border">
                      <div>
                        <div className="font-medium">Health Plus Clinic</div>
                        <div className="text-sm text-muted-foreground">1.2 miles away</div>
                      </div>
                      <Button size="sm" variant="outline">
                        <Phone className="h-4 w-4 mr-1" />
                        Call
                      </Button>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex justify-center space-x-4">
                <Button onClick={resetChecker} variant="outline">
                  Take Assessment Again
                </Button>
                <Button className="bg-gradient-primary">
                  Create Patient Account
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="symptom-checker" className="py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Symptom Assessment</h2>
          <p className="text-muted-foreground">
            Get personalized health insights based on your symptoms
          </p>
        </div>

        <Card className="shadow-card animate-fade-in">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Question {currentQuestion + 1} of {questions.length}</CardTitle>
              <div className="w-24 bg-muted rounded-full h-2">
                <div 
                  className="bg-gradient-primary h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                ></div>
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <h3 className="text-lg font-medium">{questions[currentQuestion].text}</h3>
            
            <div className="grid gap-3">
              {questions[currentQuestion].options.map((option, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="justify-start text-left h-auto p-4 hover:bg-accent transition-all"
                  onClick={() => handleAnswer(option)}
                >
                  {option}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SymptomChecker;