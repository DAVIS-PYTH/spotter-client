import React, { useState } from 'react';
import { Truck } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Stepper,
  StepperIndicator,
  StepperItem,
  StepperSeparator,
  StepperTitle,
  StepperDescription,
  StepperTrigger,
} from '@components/stepper';
import GradientButton from '@components/gradient-button';

interface FormData {
  firstName: string;
  lastName: string;
  phone: string;
  address: string;
  truckMake: string;
  truckModel: string;
  truckYear: string;
  dotNumber: string;
}

const Onboarding = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    phone: '',
    address: '',
    truckMake: '',
    truckModel: '',
    truckYear: '',
    dotNumber: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleNextStep = () => {
    setIsLoading(true);
    setTimeout(() => {
      setCurrentStep((prev) => prev + 1);
      setIsLoading(false);
    }, 500);
  };

  const handlePrevStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const steps = [
    {
      title: 'Personal Information',
      description: 'Tell us about yourself',
      fields: (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-300">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className="w-full rounded-lg border border-gray-700 bg-gray-900 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-300">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className="w-full rounded-lg border border-gray-700 bg-gray-900 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-300">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full rounded-lg border border-gray-700 bg-gray-900 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-300">
              Address
            </label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className="w-full rounded-lg border border-gray-700 bg-gray-900 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      ),
    },
    {
      title: 'Truck Information',
      description: 'Enter your truck details',
      fields: (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-300">
                Make
              </label>
              <input
                type="text"
                name="truckMake"
                value={formData.truckMake}
                onChange={handleInputChange}
                className="w-full rounded-lg border border-gray-700 bg-gray-900 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-300">
                Model
              </label>
              <input
                type="text"
                name="truckModel"
                value={formData.truckModel}
                onChange={handleInputChange}
                className="w-full rounded-lg border border-gray-700 bg-gray-900 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-300">
                Year
              </label>
              <input
                type="text"
                name="truckYear"
                value={formData.truckYear}
                onChange={handleInputChange}
                className="w-full rounded-lg border border-gray-700 bg-gray-900 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-300">
                DOT Number
              </label>
              <input
                type="text"
                name="dotNumber"
                value={formData.dotNumber}
                onChange={handleInputChange}
                className="w-full rounded-lg border border-gray-700 bg-gray-900 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'Review Information',
      description: 'Confirm your details',
      fields: (
        <div className="space-y-6">
          <div>
            <h4 className="mb-3 text-lg font-medium text-white">
              Personal Information
            </h4>
            <div className="grid grid-cols-2 gap-4 text-gray-300">
              <div>
                <p className="text-sm text-gray-400">First Name</p>
                <p className="mt-1">{formData.firstName}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Last Name</p>
                <p className="mt-1">{formData.lastName}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Phone</p>
                <p className="mt-1">{formData.phone}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Address</p>
                <p className="mt-1">{formData.address}</p>
              </div>
            </div>
          </div>
          <div>
            <h4 className="mb-3 text-lg font-medium text-white">
              Truck Information
            </h4>
            <div className="grid grid-cols-2 gap-4 text-gray-300">
              <div>
                <p className="text-sm text-gray-400">Make</p>
                <p className="mt-1">{formData.truckMake}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Model</p>
                <p className="mt-1">{formData.truckModel}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Year</p>
                <p className="mt-1">{formData.truckYear}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">DOT Number</p>
                <p className="mt-1">{formData.dotNumber}</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link to="/" className="flex items-center">
              <Truck className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-xl font-bold">Spotter</span>
            </Link>
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-3xl px-4 py-16">
        <div className="mb-12">
          <Stepper value={currentStep} onValueChange={setCurrentStep}>
            {steps.map((step, index) => (
              <StepperItem
                key={index}
                step={index}
                className="[&:not(:last-child)]:flex-1"
                loading={isLoading && currentStep === index}
              >
                <div className="flex flex-col items-center">
                  <StepperTrigger asChild>
                    <StepperIndicator />
                  </StepperTrigger>
                  <div className="mt-2 text-center">
                    <StepperTitle>{step.title}</StepperTitle>
                    <StepperDescription>{step.description}</StepperDescription>
                  </div>
                </div>
                {index < steps.length - 1 && <StepperSeparator />}
              </StepperItem>
            ))}
          </Stepper>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {steps[currentStep].fields}

          <div className="flex justify-between pt-8">
            <GradientButton
              type="button"
              onClick={handlePrevStep}
              disabled={currentStep === 0}
              variant="variant"
            >
              Previous
            </GradientButton>
            {currentStep === steps.length - 1 ? (
              <GradientButton type="submit">Complete</GradientButton>
            ) : (
              <GradientButton type="button" onClick={handleNextStep}>
                Continue
              </GradientButton>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Onboarding;
