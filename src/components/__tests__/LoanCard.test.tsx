/// <reference types="vitest" />
import { render, screen } from '@testing-library/react'
import LoanCard from '../LoanCard'

describe('LoanCard', () => {
  it('renders title and rate', () => {
    render(<LoanCard title="Test Loan" rate="from 5%" />)
    expect(screen.getByText('Test Loan')).toBeInTheDocument()
    expect(screen.getByText('from 5%')).toBeInTheDocument()
  })
})
