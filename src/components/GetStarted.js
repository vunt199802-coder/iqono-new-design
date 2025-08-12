import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const GetStarted = () => {
  const form = useRef();
  const emailjsConfigured = false;
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    description: ''
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'First name is required';
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }
    if (!formData.company.trim()) {
      newErrors.company = 'Company name is required';
    }
    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setErrors({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setStatus({ submitting: true, submitted: false, error: null });

      console.log('Form data submitted:', formData);

      if (emailjsConfigured) {
        // When EmailJS is configured, uncomment and use this code
        // const serviceId = 'YOUR_SERVICE_ID';
        // const templateId = 'YOUR_TEMPLATE_ID';
        // const publicKey = 'YOUR_PUBLIC_KEY';

        // emailjs.sendForm(serviceId, templateId, form.current, publicKey)
        //   .then((result) => {
        //     console.log('Email sent successfully:', result.text);
        //     setStatus({ submitting: false, submitted: true, error: null });
        //     resetForm();
        //   })
        //   .catch((error) => {
        //     console.error('Failed to send email:', error.text);
        //     setStatus({ submitting: false, submitted: false, error: error.text });
        //   });
      } else {
        setTimeout(() => {
          setStatus({ submitting: false, submitted: true, error: null });
          resetForm();
        }, 1000);
      }
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
      description: ''
    });
  };

  return (
    <div className="relative bg-[url(/public/GetStarted.png)] bg-contain bg-no-repeat bg-bottom mt-[-72px]">
      <div className='grid sm:grid-cols-2 items-center justify-between'>
        <div className='flex justify-center md:justify-end'>
          <form
            ref={form}
            onSubmit={handleSubmit}
            className='w-full z-10 max-w-full px-4 md:max-w-[384px] lg:max-w-[512px] xl:max-w-[640px] 2xl:max-w-[768px] md:pl-4'
          >
            <div className='flex flex-col justify-end'>
              <p className='uppercase text-white text-5xl'>Get Started</p>
              <p className='text-white text-lg opacity-80 mt-5'>
                Ready to Accelerate Payments?
              </p>
              <div className='flex flex-col gap-5 mt-10'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                  <div>
                    <input
                      type='text'
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className='bg-[#423ADC19] border border-[#FFFFFF0D] rounded-2xl placeholder-[#FFFFFF66] text-base text-white p-4 focus:outline-none w-full'
                      placeholder='Name'
                    />
                    {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <input
                      type='text'
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className='bg-[#423ADC19] border border-[#FFFFFF0D] rounded-2xl placeholder-[#FFFFFF66] text-base text-white p-4 focus:outline-none w-full'
                      placeholder='Last Name'
                    />
                    {errors.lastName && <p className="text-red-400 text-sm mt-1">{errors.lastName}</p>}
                  </div>
                  <div>
                    <input
                      type='email'
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className='bg-[#423ADC19] border border-[#FFFFFF0D] rounded-2xl placeholder-[#FFFFFF66] text-base text-white p-4 focus:outline-none w-full'
                      placeholder='Email'
                    />
                    {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <input
                      type='text'
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className='bg-[#423ADC19] border border-[#FFFFFF0D] rounded-2xl placeholder-[#FFFFFF66] text-base text-white p-4 focus:outline-none w-full'
                      placeholder='Phone'
                    />
                    {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
                  </div>
                </div>
                <div>
                  <input
                    type='text'
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className='bg-[#423ADC19] border border-[#FFFFFF0D] rounded-2xl placeholder-[#FFFFFF66] text-base text-white p-4 focus:outline-none w-full'
                    placeholder='Company'
                  />
                  {errors.company && <p className="text-red-400 text-sm mt-1">{errors.company}</p>}
                </div>
                <div>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    className='h-[160px] bg-[#423ADC19] border border-[#FFFFFF0D] rounded-2xl placeholder-[#FFFFFF66] text-base text-white p-4 resize-none focus:outline-none w-full'
                    placeholder='Description'
                  />
                  {errors.description && <p className="text-red-400 text-sm mt-1">{errors.description}</p>}
                </div>
                {status.submitted && (
                  <p className="text-green-400 text-sm mb-3">
                    {emailjsConfigured 
                      ? "Your message has been sent successfully!" 
                      : "Form submitted successfully! (Demo mode - check console for form data)"}
                  </p>
                )}
                {status.error && (
                  <p className="text-red-400 text-sm mb-3">Failed to send message: {status.error}</p>
                )}
                <button
                  type="submit"
                  disabled={status.submitting}
                  className='w-full uppercase flex items-center justify-center gap-2 px-5 py-3 rounded-lg font-normal text-sm leading-[1.1] text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-opacity-50 bg-[#423ADC] border border-[#423ADC] hover:bg-[#423ADC44] disabled:opacity-50 disabled:cursor-not-allowed'
                >
                  {status.submitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <div className='flex w-4 h-4'>
                        <div className='flex flex-col w-2'>
                          <div className='w-2 h-2 bg-white' />
                        </div>
                        <div className='flex flex-col justify-end w-2'>
                          <div className='w-2 h-2 bg-white' />
                        </div>
                      </div>
                      send
                    </>
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className='flex justify-center md:justify-end'>
          <img className='object-cover' src="/start.png" alt="Get Started" />
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
