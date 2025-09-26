import React, {useState} from 'react'

export default function LoanApplication(){
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [amount, setAmount] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function submit(e: React.FormEvent){
    e.preventDefault()
    // Basic front-end validation
    if(!name || !email || !amount) return alert('Please fill all fields')
    setSubmitted(true)
  }

  if(submitted) return (
    <div className="bg-white p-6 rounded shadow">
      <h3 className="text-xl font-semibold">Thank you</h3>
      <p className="text-gray-600">We received your application and will contact you shortly.</p>
    </div>
  )

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-semibold mb-4">Loan application</h2>
      <form onSubmit={submit} className="space-y-4">
        <div>
          <label htmlFor="fullName" className="block text-sm">Full name</label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            title="Full name"
            placeholder="e.g. Jane Doe"
            required
            className="w-full border rounded p-2"
            value={name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            title="Email address"
            placeholder="you@company.com"
            required
            className="w-full border rounded p-2"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="amount" className="block text-sm">Requested amount</label>
          <input
            id="amount"
            name="amount"
            type="number"
            title="Requested loan amount"
            placeholder="Amount in USD"
            required
            className="w-full border rounded p-2"
            value={amount}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAmount(e.target.value)}
          />
        </div>
        <div className="flex justify-end">
          <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded">Submit application</button>
        </div>
      </form>
    </div>
  )
}
