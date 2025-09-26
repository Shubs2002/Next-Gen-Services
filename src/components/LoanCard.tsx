import React from 'react'

export interface LoanCardProps {
  title: string
  description?: string
  amountRange?: string
  rate?: string
}

export default function LoanCard({title, description, amountRange, rate}: LoanCardProps){
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h4 className="font-semibold text-lg">{title}</h4>
      {description && <p className="text-sm text-gray-600 mt-1">{description}</p>}
      <div className="mt-3 flex items-center justify-between">
        <div className="text-sm text-gray-500">{amountRange}</div>
        <div className="text-indigo-600 font-semibold">{rate}</div>
      </div>
    </div>
  )
}
