import React from 'react'

export default function Footer(){
  return (
    <footer className="bg-white dark:bg-gray-800 border-t mt-12">
      <div className="container mx-auto px-4 py-8 text-sm text-gray-600 dark:text-gray-300 flex justify-between">
        <div>© {new Date().getFullYear()} NextGen Finance. All rights reserved.</div>
        <div>Contact: hello@nextgen.example</div>
      </div>
    </footer>
  )
}
