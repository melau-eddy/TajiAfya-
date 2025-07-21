import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { Heart, ArrowLeft, Eye, EyeOff, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const GetStarted = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    gender: "",
    password: "",
    confirmPassword: "",
    conditions: [] as string[],
    termsAccepted: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleConditionChange = (condition: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      conditions: checked 
        ? [...prev.conditions, condition]
        : prev.conditions.filter(c => c !== condition)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle registration logic here
    console.log("Registration attempt:", formData);
  };

  const conditions = [
    "Diabetes Type 1",
    "Diabetes Type 2", 
    "Hypertension",
    "Heart Disease",
    "Asthma",
    "Other"
  ];

  return (
    <div className="min-h-screen bg-gradient-background py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-8 transition-colors">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>

        <Card className="shadow-medical border-border/50">
          <CardHeader className="text-center pb-6">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-gradient-primary rounded-xl shadow-medical">
                <Heart className="h-8 w-8 text-primary-foreground" />
              </div>
            </div>
            <CardTitle className="text-2xl font-bold">
              Join{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                ChronicCare
              </span>
            </CardTitle>
            <p className="text-muted-foreground">
              Create your account to start monitoring your health
            </p>
          </CardHeader>

          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Personal Information</h3>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      placeholder="John"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="border-border/50 focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="border-border/50 focus:border-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john.doe@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="border-border/50 focus:border-primary"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="border-border/50 focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="dateOfBirth">Date of Birth</Label>
                    <Input
                      id="dateOfBirth"
                      name="dateOfBirth"
                      type="date"
                      value={formData.dateOfBirth}
                      onChange={handleInputChange}
                      required
                      className="border-border/50 focus:border-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="gender">Gender</Label>
                  <Select onValueChange={(value) => setFormData(prev => ({ ...prev, gender: value }))}>
                    <SelectTrigger className="border-border/50 focus:border-primary">
                      <SelectValue placeholder="Select your gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                      <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Separator />

              {/* Health Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Health Information</h3>
                <p className="text-sm text-muted-foreground">
                  Select any chronic conditions you currently manage (optional)
                </p>
                
                <div className="grid grid-cols-2 gap-3">
                  {conditions.map((condition) => (
                    <div key={condition} className="flex items-center space-x-2">
                      <Checkbox
                        id={condition}
                        checked={formData.conditions.includes(condition)}
                        onCheckedChange={(checked) => handleConditionChange(condition, checked as boolean)}
                      />
                      <Label htmlFor={condition} className="text-sm cursor-pointer">
                        {condition}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <Separator />

              {/* Account Security */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Account Security</h3>
                
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Create a secure password"
                      value={formData.password}
                      onChange={handleInputChange}
                      required
                      className="border-border/50 focus:border-primary pr-10"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4 text-muted-foreground" />
                      ) : (
                        <Eye className="h-4 w-4 text-muted-foreground" />
                      )}
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <div className="relative">
                    <Input
                      id="confirmPassword"
                      name="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirm your password"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      required
                      className="border-border/50 focus:border-primary pr-10"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="h-4 w-4 text-muted-foreground" />
                      ) : (
                        <Eye className="h-4 w-4 text-muted-foreground" />
                      )}
                    </Button>
                  </div>
                </div>
              </div>

              {/* Terms and Privacy */}
              <div className="flex items-start space-x-3">
                <Checkbox
                  id="terms"
                  checked={formData.termsAccepted}
                  onCheckedChange={(checked) => setFormData(prev => ({ ...prev, termsAccepted: checked as boolean }))}
                  required
                />
                <div className="text-sm leading-relaxed">
                  <Label htmlFor="terms" className="cursor-pointer">
                    I agree to the{" "}
                    <Link to="/terms" className="text-primary hover:text-primary/80 transition-colors">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link to="/privacy" className="text-primary hover:text-primary/80 transition-colors">
                      Privacy Policy
                    </Link>
                  </Label>
                  <div className="flex items-center mt-1 text-muted-foreground">
                    <Shield className="h-3 w-3 mr-1" />
                    <span className="text-xs">Your health data is encrypted and secure</span>
                  </div>
                </div>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-gradient-primary shadow-medical hover:opacity-90 transition-all"
                disabled={!formData.termsAccepted}
              >
                Create Account
              </Button>
            </form>

            <div className="text-center text-sm">
              <span className="text-muted-foreground">Already have an account? </span>
              <Link to="/sign-in" className="text-primary hover:text-primary/80 transition-colors font-medium">
                Sign in here
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default GetStarted;