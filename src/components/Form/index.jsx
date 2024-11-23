import { useState, useEffect } from 'react';

const Form = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(null); // null, 'success', or 'error'
  
  useEffect(() => {
    // Dynamically add Flodesk script
    const script = document.createElement('script');
    script.src = 'https://assets.flodesk.com/universal.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);


  const handleSubmit = async (e) => {
    e.preventDefault();

    const formId = '656c1593717e716ed03eba7c';
    try {
      const response = await fetch(`https://assets.flodesk.com/forms/${formId}/submissions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
        }),
      });
      if (response.ok) {
        setStatus('success');
        setEmail(''); 
      } else {
        throw new Error('Failed to subscribe');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  
  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-8">
     
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email address"
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d178b0] placeholder-gray-500"
          required
        />

        {/* Subscribe Button */}
        <button
          type="submit"
          className="w-full bg-[#d394e2] hover:bg-[#b56ec7] text-white font-medium py-3 rounded-md shadow-md"
        >
          subscribe!
        </button>
      </form>

      {/* Status Messages */}
      {status === 'success' && (
        <div className="text-green-600 font-medium">
          Successfully subscribed!
        </div>
      )}
      {status === 'error' && (
        <div className="text-red-600 font-medium">
          Something went wrong. Please try again.
        </div>
      )}
    </>
  );
};

export default Form;
