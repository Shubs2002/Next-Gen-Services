import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Hero(){
  return (
    <section className="bg-gradient-to-r from-indigo-50 to-white rounded-lg p-8 mb-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <motion.h1 className="text-3xl md:text-5xl font-bold mb-4" initial={{opacity:0,y:10}} animate={{opacity:1,y:0}}>Loans made simple for your life</motion.h1>
          <p className="text-gray-600 mb-6">Car loans, home loans, and tailored financing plans with transparent rates and friendly support.</p>
          <div className="flex gap-3">
            <Link to="/apply" className="bg-indigo-600 text-white px-5 py-3 rounded-md">Apply now</Link>
            <Link to="/loans" className="px-5 py-3 rounded-md border">View loans</Link>
          </div>
        </div>
        <div className="flex-1">
          <motion.div className="bg-white rounded-lg p-6 shadow-md" initial={{scale:0.98}} animate={{scale:1}}>
            <h3 className="font-semibold mb-2">Example loan preview</h3>
            <div className="text-sm text-gray-600">Loan: Car Loan</div>
            <div className="text-xl font-bold mt-2">$12,000</div>
            <div className="text-sm text-gray-500 mt-1">12 months • from 6.5% APR</div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
