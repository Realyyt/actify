import React from 'react';

export default function DisclaimerPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Disclaimer – No Provider-Client Relationship</h1>
      
      <div className="prose prose-lg">
        <p className="mb-6">
          The transmission or receipt of information via this website, contact forms, email, or any other means of electronic communication does not establish or constitute an provider-client relationship between you and Impact Delivery Group, LLC (IDG).
        </p>

        <p className="mb-6">
          You should refrain from sending confidential, sensitive, or personal information via this website or any contact form. Such communications will not create a provider-client relationship, and any information shared will not be considered privileged or confidential unless IDG has explicitly agreed to provide insurance-related services and a formal written engagement agreement has been executed.
        </p>

        <p className="mb-6">
          Additionally, your use of this website or any contact form does not create a conflict of interest that would prevent IDG from offering services to other clients or parties.
        </p>
      </div>
    </div>
  );
} 