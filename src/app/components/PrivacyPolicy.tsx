export function PrivacyPolicy() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 24px', fontFamily: 'system-ui, -apple-system, sans-serif', color: '#1a1a1a', lineHeight: '1.7' }}>
      <h1 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '8px' }}>Privacy Policy</h1>
      <p style={{ color: '#666', fontSize: '14px', marginBottom: '32px' }}>Last updated: April 22, 2026</p>

      <p>This Privacy Policy describes how on-god-lab2.com (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects, uses, and protects information in connection with our cybersecurity educational demonstration, operated as part of a university course project at California State University, Long Beach (CSULB), CECS 378 — Introduction to Computer Security.</p>

      <h2 style={{ fontSize: '20px', fontWeight: 600, marginTop: '32px', marginBottom: '12px' }}>1. Purpose</h2>
      <p>This website is an <strong>educational demonstration</strong> created solely for academic purposes as part of a semester project in CECS 378. It is designed to illustrate how phishing and smishing attacks work in order to teach cybersecurity awareness and defense techniques. This site is not a commercial product or service.</p>

      <h2 style={{ fontSize: '20px', fontWeight: 600, marginTop: '32px', marginBottom: '12px' }}>2. Information We Collect</h2>
      <p>During the course of this educational demonstration, the following information may be collected from <strong>consenting participants only</strong>:</p>
      <ul style={{ paddingLeft: '24px', marginTop: '8px' }}>
        <li style={{ marginBottom: '8px' }}>Name and email address (provided voluntarily through a registration form)</li>
        <li style={{ marginBottom: '8px' }}>Phone number (provided voluntarily through a registration form)</li>
        <li style={{ marginBottom: '8px' }}>Simulated credential entries (email and password entered on demonstration pages)</li>
        <li style={{ marginBottom: '8px' }}>Verification codes entered during the demonstration</li>
        <li style={{ marginBottom: '8px' }}>Basic technical information such as browser user-agent and timestamp</li>
      </ul>

      <h2 style={{ fontSize: '20px', fontWeight: 600, marginTop: '32px', marginBottom: '12px' }}>3. How We Use Information</h2>
      <p>All information collected is used <strong>exclusively</strong> for the following purposes:</p>
      <ul style={{ paddingLeft: '24px', marginTop: '8px' }}>
        <li style={{ marginBottom: '8px' }}>Demonstrating the mechanics of a phishing attack in an educational setting</li>
        <li style={{ marginBottom: '8px' }}>Presenting findings in a classroom environment as part of our course project</li>
        <li style={{ marginBottom: '8px' }}>Sending SMS messages for the purposes of demonstrating smishing attack techniques to consenting participants</li>
      </ul>
      <p>We do <strong>not</strong> sell, share, trade, or transfer any collected information to third parties. We do <strong>not</strong> use collected information for any commercial, marketing, or advertising purpose.</p>

      <h2 style={{ fontSize: '20px', fontWeight: 600, marginTop: '32px', marginBottom: '12px' }}>4. Consent</h2>
      <p>All participants in this demonstration are <strong>consenting members</strong> of our project team or classmates who have voluntarily agreed to participate. No information is collected from individuals who have not consented. Participants may withdraw consent at any time by contacting us, and all their data will be promptly deleted.</p>

      <h2 style={{ fontSize: '20px', fontWeight: 600, marginTop: '32px', marginBottom: '12px' }}>5. SMS Messaging</h2>
      <p>We use Twilio to send SMS messages as part of this educational demonstration. By providing your phone number through our registration form, you consent to receive text messages related to this demonstration. Message frequency is minimal and limited to the scope of the project demonstration. Message and data rates may apply. You may opt out at any time by replying STOP to any message or by contacting us directly.</p>

      <h2 style={{ fontSize: '20px', fontWeight: 600, marginTop: '32px', marginBottom: '12px' }}>6. Data Retention and Deletion</h2>
      <p>All data collected during this demonstration is temporary. Data will be permanently deleted upon completion of the course project and grading period, no later than the end of the Spring 2026 semester. Data is stored on a secured server and is accessible only to the project team members.</p>

      <h2 style={{ fontSize: '20px', fontWeight: 600, marginTop: '32px', marginBottom: '12px' }}>7. Data Security</h2>
      <p>We take reasonable measures to protect collected information, including using HTTPS encryption for data in transit and restricting access to the data to authorized project team members only. However, as this is an educational project, we cannot guarantee absolute security.</p>

      <h2 style={{ fontSize: '20px', fontWeight: 600, marginTop: '32px', marginBottom: '12px' }}>8. Third-Party Services</h2>
      <p>This project uses the following third-party services:</p>
      <ul style={{ paddingLeft: '24px', marginTop: '8px' }}>
        <li style={{ marginBottom: '8px' }}><strong>Twilio</strong> — for sending SMS messages and voice calls. Subject to <a href="https://www.twilio.com/legal/privacy" style={{ color: '#0067b8' }}>Twilio&apos;s Privacy Policy</a>.</li>
        <li style={{ marginBottom: '8px' }}><strong>Google Sheets</strong> — for storing registration form responses. Subject to <a href="https://policies.google.com/privacy" style={{ color: '#0067b8' }}>Google&apos;s Privacy Policy</a>.</li>
        <li style={{ marginBottom: '8px' }}><strong>Railway</strong> — for hosting the application. Subject to <a href="https://railway.app/legal/privacy" style={{ color: '#0067b8' }}>Railway&apos;s Privacy Policy</a>.</li>
      </ul>

      <h2 style={{ fontSize: '20px', fontWeight: 600, marginTop: '32px', marginBottom: '12px' }}>9. Contact Information</h2>
      <p>If you have any questions about this Privacy Policy, wish to request deletion of your data, or wish to opt out of SMS messages, please contact us at:</p>
      <p style={{ marginTop: '8px' }}>
        <strong>Email:</strong> soroush.mirzaee01@student.csulb.edu<br />
        <strong>Course:</strong> CECS 378 — Introduction to Computer Security, Section 3<br />
        <strong>Institution:</strong> California State University, Long Beach
      </p>

      <div style={{ marginTop: '48px', paddingTop: '24px', borderTop: '1px solid #e0e0e0', fontSize: '13px', color: '#888' }}>
        <p>This project is for educational purposes only. It is not affiliated with or endorsed by Microsoft, CSULB IT services, or any other organization whose branding may appear in the demonstration.</p>
      </div>
    </div>
  );
}
