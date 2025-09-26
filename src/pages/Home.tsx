import React from 'react'
import Hero from '../components/Hero'
import LoanCard from '../components/LoanCard'

export default function Home(){
  return (
    <div>
      <Hero />
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <LoanCard title="Car Loan" description="Flexible terms for new and used vehicles" amountRange="$3,000 - $50,000" rate="from 6.5%" />
        <LoanCard title="Home Loan" description="Competitive mortgage rates for first-time buyers" amountRange="$50,000+" rate="from 4.1%" />
        <LoanCard title="Personal Loan" description="Quick approvals for personal needs" amountRange="$1,000 - $25,000" rate="from 8.9%" />
      </section>

      <section className="mt-8 bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-2">Why choose us</h3>
        <p className="text-gray-600">Transparent fees, fast approvals, and personalized service to help you get the right loan.</p>
      </section>
    </div>
  )
}
