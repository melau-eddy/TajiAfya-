import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { 
  Heart, 
  Droplets, 
  Weight, 
  Activity, 
  TrendingUp, 
  TrendingDown,
  AlertTriangle,
  CheckCircle,
  Calendar,
  Bell
} from "lucide-react";

interface HealthMetric {
  value: number;
  unit: string;
  status: 'normal' | 'warning' | 'critical';
  trend: 'up' | 'down' | 'stable';
  lastReading: string;
}

interface PatientData {
  name: string;
  condition: string;
  bloodPressure: HealthMetric;
  bloodSugar: HealthMetric;
  weight: HealthMetric;
  heartRate: HealthMetric;
}

const PatientDashboard = () => {
  const [isLogVisible, setIsLogVisible] = useState(false);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    systolic: "",
    diastolic: "",
    bloodSugar: "",
    weight: "",
    heartRate: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSaveReading = () => {
    // Simulate saving reading
    toast({
      title: "Reading Saved",
      description: "Your health metrics have been recorded successfully.",
    });
    setFormData({
      systolic: "",
      diastolic: "",
      bloodSugar: "",
      weight: "",
      heartRate: ""
    });
    setIsLogVisible(false);
  };

  const handleScheduleAppointment = () => {
    toast({
      title: "Appointment Request",
      description: "Your appointment request has been sent to your healthcare provider.",
    });
  };

  const handleViewAlerts = () => {
    toast({
      title: "Alerts Center",
      description: "Viewing all your health alerts and notifications.",
    });
  };
  const [patientData] = useState<PatientData>({
    name: "Sarah Johnson",
    condition: "Type 2 Diabetes, Hypertension",
    bloodPressure: {
      value: 145,
      unit: "mmHg",
      status: 'warning',
      trend: 'up',
      lastReading: "2 hours ago"
    },
    bloodSugar: {
      value: 180,
      unit: "mg/dL",
      status: 'critical',
      trend: 'up',
      lastReading: "30 minutes ago"
    },
    weight: {
      value: 165,
      unit: "lbs",
      status: 'normal',
      trend: 'stable',
      lastReading: "This morning"
    },
    heartRate: {
      value: 78,
      unit: "bpm",
      status: 'normal',
      trend: 'stable',
      lastReading: "1 hour ago"
    }
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'critical': return 'destructive';
      case 'warning': return 'warning';
      case 'normal': return 'secondary';
      default: return 'secondary';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'critical': return <AlertTriangle className="h-4 w-4" />;
      case 'warning': return <AlertTriangle className="h-4 w-4" />;
      case 'normal': return <CheckCircle className="h-4 w-4" />;
      default: return <CheckCircle className="h-4 w-4" />;
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return <TrendingUp className="h-4 w-4 text-destructive" />;
      case 'down': return <TrendingDown className="h-4 w-4 text-secondary" />;
      case 'stable': return <Activity className="h-4 w-4 text-muted-foreground" />;
      default: return <Activity className="h-4 w-4 text-muted-foreground" />;
    }
  };

  const MetricCard = ({ 
    title, 
    icon: Icon, 
    metric 
  }: { 
    title: string; 
    icon: any; 
    metric: HealthMetric;
  }) => (
    <Card className="shadow-card hover:shadow-medical transition-all">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-medium flex items-center">
            <Icon className="h-4 w-4 mr-2" />
            {title}
          </CardTitle>
          <Badge variant={getStatusColor(metric.status) as any} className="text-xs">
            {getStatusIcon(metric.status)}
            <span className="ml-1 capitalize">{metric.status}</span>
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div>
            <div className="text-2xl font-bold">
              {metric.value}
              <span className="text-sm text-muted-foreground ml-1">{metric.unit}</span>
            </div>
            <div className="text-xs text-muted-foreground">{metric.lastReading}</div>
          </div>
          {getTrendIcon(metric.trend)}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section id="dashboard" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Patient Dashboard</h2>
          <p className="text-muted-foreground">
            Monitor your health metrics and receive personalized insights
          </p>
        </div>

        {/* Patient Header */}
        <Card className="mb-8 shadow-card">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-xl">{patientData.name}</CardTitle>
                <p className="text-muted-foreground">{patientData.condition}</p>
              </div>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm" onClick={handleScheduleAppointment}>
                  <Calendar className="h-4 w-4 mr-2" />
                  Schedule Appointment
                </Button>
                <Button size="sm" className="bg-gradient-primary" onClick={handleViewAlerts}>
                  <Bell className="h-4 w-4 mr-2" />
                  View Alerts
                </Button>
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* Health Metrics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <MetricCard
            title="Blood Pressure"
            icon={Heart}
            metric={patientData.bloodPressure}
          />
          <MetricCard
            title="Blood Sugar"
            icon={Droplets}
            metric={patientData.bloodSugar}
          />
          <MetricCard
            title="Weight"
            icon={Weight}
            metric={patientData.weight}
          />
          <MetricCard
            title="Heart Rate"
            icon={Activity}
            metric={patientData.heartRate}
          />
        </div>

        {/* Current Alerts */}
        <Card className="mb-8 shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center">
              <AlertTriangle className="h-5 w-5 mr-2 text-destructive" />
              Active Alerts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 p-3 bg-destructive/10 border border-destructive/20 rounded-lg">
                <AlertTriangle className="h-5 w-5 text-destructive mt-0.5" />
                <div className="flex-1">
                  <div className="font-medium">High Blood Sugar Alert</div>
                  <div className="text-sm text-muted-foreground">
                    Your blood sugar level of 180 mg/dL is above your target range. 
                    Consider checking your medication schedule and contact your healthcare provider.
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">30 minutes ago</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 p-3 bg-warning/10 border border-warning/20 rounded-lg">
                <AlertTriangle className="h-5 w-5 text-warning mt-0.5" />
                <div className="flex-1">
                  <div className="font-medium">Elevated Blood Pressure</div>
                  <div className="text-sm text-muted-foreground">
                    Your blood pressure reading of 145/90 mmHg is slightly elevated. 
                    Monitor closely and ensure you're taking your prescribed medication.
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">2 hours ago</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Log New Reading */}
        <Card className="shadow-card">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Log New Reading</CardTitle>
              <Button 
                variant="outline" 
                onClick={() => setIsLogVisible(!isLogVisible)}
              >
                {isLogVisible ? 'Hide Form' : 'Add Reading'}
              </Button>
            </div>
          </CardHeader>
          
          {isLogVisible && (
            <CardContent className="animate-fade-in">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <Label htmlFor="bp-systolic">Blood Pressure</Label>
                  <div className="flex space-x-2">
                    <Input
                      id="bp-systolic"
                      name="systolic"
                      placeholder="120"
                      value={formData.systolic}
                      onChange={handleInputChange}
                      className="w-full"
                    />
                    <span className="flex items-center text-muted-foreground">/</span>
                    <Input
                      name="diastolic"
                      placeholder="80"
                      value={formData.diastolic}
                      onChange={handleInputChange}
                      className="w-full"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="blood-sugar">Blood Sugar (mg/dL)</Label>
                  <Input
                    id="blood-sugar"
                    name="bloodSugar"
                    placeholder="100"
                    value={formData.bloodSugar}
                    onChange={handleInputChange}
                  />
                </div>
                
                <div>
                  <Label htmlFor="weight">Weight (lbs)</Label>
                  <Input
                    id="weight"
                    name="weight"
                    placeholder="165"
                    value={formData.weight}
                    onChange={handleInputChange}
                  />
                </div>
                
                <div>
                  <Label htmlFor="heart-rate">Heart Rate (bpm)</Label>
                  <Input
                    id="heart-rate"
                    name="heartRate"
                    placeholder="72"
                    value={formData.heartRate}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              
              <div className="flex justify-end mt-6 space-x-2">
                <Button variant="outline" onClick={() => setIsLogVisible(false)}>Cancel</Button>
                <Button className="bg-gradient-primary" onClick={handleSaveReading}>Save Reading</Button>
              </div>
            </CardContent>
          )}
        </Card>
      </div>
    </section>
  );
};

export default PatientDashboard;