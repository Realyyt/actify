"use client";

import { useState, useEffect, useCallback, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { X, Loader2 } from 'lucide-react';
import { z } from 'zod';

type Pathway = 1 | 2 | 3;

const pathwayNames = {
  1: 'Improve Our Program (Donors & Governments)',
  2: 'Submit Inquiry (Local Operators & Providers)',
  3: 'Partner With Us (Businesses & Investors)',
} as const;

// Zod schema
const baseSchema = z.object({
  fullName: z.string().min(2, { message: "Full name must be at least 2 characters" }),
  jobTitle: z.string().min(2, { message: "Job title is required" }),
  workEmail: z.string().email({ message: "Please enter a valid email address" }),
  organizationName: z.string().min(2, { message: "Organization name is required" }),
  sectorType: z.string().min(1, { message: "Please select a sector type" }),
  countryOfImplementation: z.string().min(2, { message: "Country is required" }),
});

const pathway1Schema = z.object({
  programSize: z.string().min(10, { message: "Please describe your program or investment size (at least 10 characters)" }),
  mainChallenge: z.string().min(10, { message: "Please describe the main challenge (at least 10 characters)" }),
});

const pathway2Schema = z.object({
  bottleneck: z.string().min(10, { message: "Please describe your bottleneck (at least 10 characters)" }),
  trainingNeeded: z.string().min(10, { message: "Please describe the training needed (at least 10 characters)" }),
});

const pathway3Schema = z.object({
  assetClass: z.string().min(10, { message: "Please describe the asset class or industry (at least 10 characters)" }),
  partnershipModel: z.string().min(1, { message: "Please select Yes or No" }),
});

interface InquiryModalProps {
  pathway: Pathway;
  children: ReactNode;
}

export default function InquiryModal({ pathway, children }: InquiryModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  // Base fields
  const [fullName, setFullName] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [workEmail, setWorkEmail] = useState('');
  const [organizationName, setOrganizationName] = useState('');
  const [sectorType, setSectorType] = useState('');
  const [countryOfImplementation, setCountryOfImplementation] = useState('');

  // Pathway-specific
  const [programSize, setProgramSize] = useState('');
  const [mainChallenge, setMainChallenge] = useState('');
  const [bottleneck, setBottleneck] = useState('');
  const [trainingNeeded, setTrainingNeeded] = useState('');
  const [assetClass, setAssetClass] = useState('');
  const [partnershipModel, setPartnershipModel] = useState('');

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const open = () => { setIsOpen(true); setSuccess(false); setFormError(null); setFieldErrors({}); };
  const close = () => setIsOpen(false);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') close();
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, handleKeyDown]);

  const validate = (): Record<string, string> => {
    const errors: Record<string, string> = {};

    const baseResult = baseSchema.safeParse({
      fullName, jobTitle, workEmail, organizationName, sectorType, countryOfImplementation,
    });
    if (!baseResult.success) {
      for (const issue of baseResult.error.issues) {
        const field = issue.path[0] as string;
        if (!errors[field]) errors[field] = issue.message;
      }
    }

    if (pathway === 1) {
      const r = pathway1Schema.safeParse({ programSize, mainChallenge });
      if (!r.success) {
        for (const issue of r.error.issues) {
          const field = issue.path[0] as string;
          if (!errors[field]) errors[field] = issue.message;
        }
      }
    } else if (pathway === 2) {
      const r = pathway2Schema.safeParse({ bottleneck, trainingNeeded });
      if (!r.success) {
        for (const issue of r.error.issues) {
          const field = issue.path[0] as string;
          if (!errors[field]) errors[field] = issue.message;
        }
      }
    } else if (pathway === 3) {
      const r = pathway3Schema.safeParse({ assetClass, partnershipModel });
      if (!r.success) {
        for (const issue of r.error.issues) {
          const field = issue.path[0] as string;
          if (!errors[field]) errors[field] = issue.message;
        }
      }
    }

    return errors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }
    setFieldErrors({});
    setIsSubmitting(true);

    const payload: Record<string, string> = {
      fullName, jobTitle, workEmail, organizationName, sectorType, countryOfImplementation,
      pathway: String(pathway),
      pathwayName: pathwayNames[pathway],
    };

    if (pathway === 1) {
      payload.programSize = programSize;
      payload.mainChallenge = mainChallenge;
    } else if (pathway === 2) {
      payload.bottleneck = bottleneck;
      payload.trainingNeeded = trainingNeeded;
    } else if (pathway === 3) {
      payload.assetClass = assetClass;
      payload.partnershipModel = partnershipModel;
    }

    try {
      const res = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const result = await res.json();
      if (result.success) {
        setSuccess(true);
      } else {
        if (result.fieldErrors) {
          setFieldErrors(result.fieldErrors);
        } else {
          setFormError(result.message || 'Failed to send inquiry.');
        }
      }
    } catch {
      setFormError('An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFullName(''); setJobTitle(''); setWorkEmail(''); setOrganizationName('');
    setSectorType(''); setCountryOfImplementation('');
    setProgramSize(''); setMainChallenge('');
    setBottleneck(''); setTrainingNeeded('');
    setAssetClass(''); setPartnershipModel('');
  };

  const inputClass = "w-full border border-gray-200 p-3 focus:outline-none focus:border-gray-400 text-sm md:text-base transition-colors";
  const labelClass = "block text-gray-600 uppercase text-xs md:text-sm mb-2 tracking-wider";
  const errorClass = "text-red-500 text-xs md:text-sm mt-1";

  const modalContent = (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 z-[9998]" onClick={close} />

      {/* Modal Panel */}
      <div className="relative z-[9999] bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto mx-4 shadow-2xl">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-100">
          <h2 className="text-xl md:text-2xl font-light text-gray-900">
            {pathwayNames[pathway]}
          </h2>
          <button onClick={close} className="text-gray-500 hover:text-gray-700 transition-colors">
            <X size={24} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          {success ? (
            <div className="bg-gray-50 border border-gray-100 text-gray-900 p-6 text-center">
              <h3 className="text-lg md:text-xl font-light mb-2">Thank You!</h3>
              <p className="text-gray-600">Thank you. We&apos;ll be in touch shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {formError && (
                <div className="mb-6 bg-gray-50 border border-gray-100 text-gray-900 p-4 text-sm">
                  {formError}
                </div>
              )}

              {/* Baseline Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className={labelClass}>Full Name</label>
                  <input type="text" className={`${inputClass} ${fieldErrors.fullName ? 'border-red-500' : ''}`}
                    value={fullName} onChange={(e) => setFullName(e.target.value)} required />
                  {fieldErrors.fullName && <p className={errorClass}>{fieldErrors.fullName}</p>}
                </div>
                <div>
                  <label className={labelClass}>Job Title</label>
                  <input type="text" className={`${inputClass} ${fieldErrors.jobTitle ? 'border-red-500' : ''}`}
                    value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} required />
                  {fieldErrors.jobTitle && <p className={errorClass}>{fieldErrors.jobTitle}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className={labelClass}>Work Email</label>
                  <input type="email" className={`${inputClass} ${fieldErrors.workEmail ? 'border-red-500' : ''}`}
                    value={workEmail} onChange={(e) => setWorkEmail(e.target.value)} required />
                  {fieldErrors.workEmail && <p className={errorClass}>{fieldErrors.workEmail}</p>}
                </div>
                <div>
                  <label className={labelClass}>Organization Name</label>
                  <input type="text" className={`${inputClass} ${fieldErrors.organizationName ? 'border-red-500' : ''}`}
                    value={organizationName} onChange={(e) => setOrganizationName(e.target.value)} required />
                  {fieldErrors.organizationName && <p className={errorClass}>{fieldErrors.organizationName}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className={labelClass}>Sector Type</label>
                  <select className={`${inputClass} bg-white ${fieldErrors.sectorType ? 'border-red-500' : ''}`}
                    value={sectorType} onChange={(e) => setSectorType(e.target.value)} required>
                    <option value="">Select a sector type</option>
                    <option value="Public/Government">Public/Government</option>
                    <option value="Donor Agency">Donor Agency</option>
                    <option value="Corporate Investor">Corporate Investor</option>
                    <option value="Local Operator/NGO">Local Operator/NGO</option>
                    <option value="Other">Other</option>
                  </select>
                  {fieldErrors.sectorType && <p className={errorClass}>{fieldErrors.sectorType}</p>}
                </div>
                <div>
                  <label className={labelClass}>Country of Implementation</label>
                  <input type="text" className={`${inputClass} ${fieldErrors.countryOfImplementation ? 'border-red-500' : ''}`}
                    value={countryOfImplementation} onChange={(e) => setCountryOfImplementation(e.target.value)} required />
                  {fieldErrors.countryOfImplementation && <p className={errorClass}>{fieldErrors.countryOfImplementation}</p>}
                </div>
              </div>

              {/* Pathway-Specific Fields */}
              {pathway === 1 && (
                <>
                  <div className="mb-4">
                    <label className={labelClass}>What is your current program or investment size?</label>
                    <textarea rows={3} className={`${inputClass} ${fieldErrors.programSize ? 'border-red-500' : ''}`}
                      value={programSize} onChange={(e) => setProgramSize(e.target.value)} required />
                    {fieldErrors.programSize && <p className={errorClass}>{fieldErrors.programSize}</p>}
                  </div>
                  <div className="mb-4">
                    <label className={labelClass}>What is the main challenge preventing this initiative from becoming self-sustaining?</label>
                    <textarea rows={3} className={`${inputClass} ${fieldErrors.mainChallenge ? 'border-red-500' : ''}`}
                      value={mainChallenge} onChange={(e) => setMainChallenge(e.target.value)} required />
                    {fieldErrors.mainChallenge && <p className={errorClass}>{fieldErrors.mainChallenge}</p>}
                  </div>
                </>
              )}

              {pathway === 2 && (
                <>
                  <div className="mb-4">
                    <label className={labelClass}>Describe your primary operational bottleneck or daily workflow friction point.</label>
                    <textarea rows={3} className={`${inputClass} ${fieldErrors.bottleneck ? 'border-red-500' : ''}`}
                      value={bottleneck} onChange={(e) => setBottleneck(e.target.value)} required />
                    {fieldErrors.bottleneck && <p className={errorClass}>{fieldErrors.bottleneck}</p>}
                  </div>
                  <div className="mb-4">
                    <label className={labelClass}>What type of hands-on training or technical support do you need?</label>
                    <textarea rows={3} className={`${inputClass} ${fieldErrors.trainingNeeded ? 'border-red-500' : ''}`}
                      value={trainingNeeded} onChange={(e) => setTrainingNeeded(e.target.value)} required />
                    {fieldErrors.trainingNeeded && <p className={errorClass}>{fieldErrors.trainingNeeded}</p>}
                  </div>
                </>
              )}

              {pathway === 3 && (
                <>
                  <div className="mb-4">
                    <label className={labelClass}>What specific asset class, industry, or public utility are you seeking to enter or co-finance?</label>
                    <textarea rows={3} className={`${inputClass} ${fieldErrors.assetClass ? 'border-red-500' : ''}`}
                      value={assetClass} onChange={(e) => setAssetClass(e.target.value)} required />
                    {fieldErrors.assetClass && <p className={errorClass}>{fieldErrors.assetClass}</p>}
                  </div>
                  <div className="mb-4">
                    <label className={labelClass}>Are you looking for a direct public-private partnership (PPP) model?</label>
                    <div className="flex gap-6 mt-2">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="partnershipModel" value="Yes"
                          checked={partnershipModel === 'Yes'} onChange={(e) => setPartnershipModel(e.target.value)} />
                        <span className="text-sm text-gray-600">Yes</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="partnershipModel" value="No"
                          checked={partnershipModel === 'No'} onChange={(e) => setPartnershipModel(e.target.value)} />
                        <span className="text-sm text-gray-600">No</span>
                      </label>
                    </div>
                    {fieldErrors.partnershipModel && <p className={errorClass}>{fieldErrors.partnershipModel}</p>}
                  </div>
                </>
              )}

              <div className="mt-6">
                <button
                  type="submit"
                  className="bg-gray-900 text-white px-8 py-3 uppercase text-sm font-medium tracking-wider hover:bg-gray-800 transition-colors flex items-center"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin mr-2" size={18} />
                      Submitting...
                    </>
                  ) : (
                    'Submit Inquiry'
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <>
      <span onClick={() => { resetForm(); open(); }} className="cursor-pointer">
        {children}
      </span>
      {isMounted && isOpen && createPortal(modalContent, document.body)}
    </>
  );
}
