import { ImageWithFallback } from './figma/ImageWithFallback';
import logoImage from '../../imports/Screenshot_20260410_191521_Drive.jpg';
import { useNavigate } from 'react-router';
import { KeyRound } from 'lucide-react';
import { useState } from 'react';

export function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const handleNext = () => {
    // Basic email validation
    if (email.trim() && email.includes('@')) {
      navigate(`/password?email=${encodeURIComponent(email)}`);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header with Logo */}
      <div className="p-6">
        <ImageWithFallback
          src={logoImage}
          alt="California State University Long Beach"
          className="h-16 w-auto object-contain"
        />
      </div>

      {/* Main Content */}
      <div className="px-6 py-8 max-w-2xl">
        <h1 className="text-4xl font-normal mb-8">Sign in</h1>

        {/* Email Input */}
        <div className="mb-6">
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email, phone, or Skype"
            className="w-full border-b-2 border-blue-600 pb-2 text-base focus:outline-none placeholder:text-gray-500"
          />
        </div>

        {/* Reset Password Link */}
        <a href="#" className="text-blue-600 hover:underline inline-block mb-8">
          Reset my password
        </a>

        {/* Action Buttons */}
        <div className="flex justify-end gap-3 mb-8">
          <button
            onClick={() => navigate('/')}
            className="px-8 py-3 bg-gray-300 hover:bg-gray-400 text-black"
          >
            Back
          </button>
          <button
            onClick={handleNext}
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-50"
            disabled={!email.trim() || !email.includes('@')}
          >
            Next
          </button>
        </div>

        {/* Help Information Box */}
        <div className="bg-gray-100 p-4 mb-8">
          <p className="text-sm text-gray-800">
            For assistance, please contact the{' '}
            <a href="#" className="text-blue-600 hover:underline">
              Technology Help Desk
            </a>
            . By using this service, you acknowledge and agree to the{' '}
            <a href="#" className="text-blue-600 hover:underline">
              Information Security and Acceptable Use
            </a>
            {' '}policies.
          </p>
        </div>

        {/* Sign-in Options */}
        <button className="flex items-center gap-3 py-4 px-4 border border-gray-300 hover:bg-gray-50 w-full">
          <KeyRound className="w-5 h-5 text-gray-700" />
          <span className="text-gray-900">Sign-in options</span>
        </button>
      </div>

      {/* Footer */}
      <div className="fixed bottom-8 left-0 right-0 px-6">
        <div className="flex items-center gap-6 text-sm text-gray-600">
          <a href="#" className="hover:text-gray-900">Acceptable Use</a>
          <a href="#" className="hover:text-gray-900">Accessibility Statement</a>
          <button className="hover:text-gray-900">•••</button>
        </div>
      </div>
    </div>
  );
}
