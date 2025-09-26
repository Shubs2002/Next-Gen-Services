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
    <div className="bg-white dark:bg-gray-800 p-6 rounded shadow">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Thank you</h3>
      <p className="text-gray-600 dark:text-gray-300">We received your application and will contact you shortly.</p>
    </div>
  )

  return (
    <div className="max-w-xl mx-auto bg-white dark:bg-gray-800 p-6 rounded shadow">
      <h2 className="text-2xl font-semibold mb-4">Loan application</h2>
      <form onSubmit={submit} className="space-y-4">
        <div>
          <label htmlFor="fullName" className="block text-sm text-gray-900 dark:text-gray-100">Full name</label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            title="Full name"
            placeholder="e.g. Jane Doe"
            required
            className="w-full border rounded p-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            value={name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm text-gray-900 dark:text-gray-100">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            title="Email address"
            placeholder="you@company.com"
            required
            className="w-full border rounded p-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="amount" className="block text-sm text-gray-900 dark:text-gray-100">Requested amount</label>
          <input
            id="amount"
            name="amount"
            type="number"
            title="Requested loan amount"
            placeholder="Amount in USD"
            required
            className="w-full border rounded p-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
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
