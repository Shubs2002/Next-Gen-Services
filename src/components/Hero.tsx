import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import HeroImg from '../assets/hero-illustration.svg'

export default function Hero(){
  return (
  <section className="bg-gradient-to-r from-indigo-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-lg p-8 mb-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <motion.h1 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100" initial={{opacity:0,y:10}} animate={{opacity:1,y:0}}>Loans made simple for your life</motion.h1>
          <p className="text-gray-600 dark:text-gray-300 mb-6">Car loans, home loans, and tailored financing plans with transparent rates and friendly support.</p>
          <div className="flex gap-3">
            <Link to="/apply" className="bg-indigo-600 text-white px-5 py-3 rounded-md">Apply now</Link>
            <Link to="/loans" className="px-5 py-3 rounded-md border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200">View loans</Link>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <motion.div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md max-w-md w-full" initial={{scale:0.98}} animate={{scale:1}}>
            <img src={HeroImg} alt="Illustration of lending products" className="w-full h-40 object-contain mb-4" />
            <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Example loan preview</h3>
            <div className="text-sm text-gray-600 dark:text-gray-300">Loan: Car Loan</div>
            <div className="text-xl font-bold mt-2 text-gray-900 dark:text-gray-100">$12,000</div>
            <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">12 months • from 6.5% APR</div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
