import React from 'react'
import LoanCard from '../components/LoanCard'

const loans = [
  { title: 'Car Loan', description: 'Loans for new and used cars', amountRange: '$3,000 - $50,000', rate: 'from 6.5%' },
  { title: 'Home Loan', description: 'Mortgages and refinancing', amountRange: '$50,000+', rate: 'from 4.1%' },
  { title: 'Business Loan', description: 'Scale your business with working capital', amountRange: '$5,000 - $200,000', rate: 'from 7.9%' },
]

export default function LoanList(){
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Loan options</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {loans.map((l) => (
          <LoanCard key={l.title} title={l.title} description={l.description} amountRange={l.amountRange} rate={l.rate} />
        ))}
      </div>
    </div>
  )
}
