import { ImageWithFallback } from './figma/ImageWithFallback';
import logoImage from '../../imports/Screenshot_20260410_191521_Drive.jpg';
import { useNavigate, useSearchParams } from 'react-router';
import { useState } from 'react';

export function EnterPassword() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const email = searchParams.get('email') || '';
  const [password, setPassword] = useState('');

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
        {/* Email Display */}
        <div className="text-sm text-gray-800 mb-6">{email}</div>

        <h1 className="text-4xl font-normal mb-6">Enter password</h1>

        <p className="text-base text-gray-800 mb-8">
          Your organizational policy requires you to sign in again after a certain time period.
        </p>

        {/* Password Input */}
        <div className="mb-6">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full border-b-2 border-gray-300 focus:border-blue-600 pb-2 text-base focus:outline-none placeholder:text-gray-500"
          />
        </div>

        {/* Reset Password Link */}
        <a href="#" className="text-blue-600 hover:underline inline-block mb-4">
          Reset my password
        </a>

        {/* Sign in with another account */}
        <div className="mb-8">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              navigate('/sign-in');
            }}
            className="text-blue-600 hover:underline inline-block"
          >
            Sign in with another account
          </a>
        </div>

        {/* Sign In Button */}
        <div className="flex justify-end mb-8">
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white">
            Sign in
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
