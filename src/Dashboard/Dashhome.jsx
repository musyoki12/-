import React from 'react'

function Dashhome() {
  return (
    <div>
         {/* Main content goes here */}
         <div className="flex justify-centre align-items">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <br/>
      <p>Welcome to your dashboard!</p>
      </div>
      <div>
      <div className="flex flex-wrap gap-4" >
    <div className="flex flex-row">
    
    {/* next card */}
    <div>

    <div className="max-w-sm h-40 w-96 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-2">
        <a href="#">
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">PROJECTS</h5>
        </a>
        <h1 className="mb-3 font-normal text-gray-500 dark:text-gray-400">4</h1>
       
    </div>

    </div>
    <div>

<div className="max-w-sm p-6 h-40 w-96 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-2">
    <a href="#">
        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">INVESTORS</h5>
    </a>
    <h1 className="mb-3 font-normal text-gray-500 dark:text-gray-400">5</h1>
   
</div>

</div>
</div>
{/* card three */}

<div className="max-w-sm h-40 w-96 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-2">
        <a href="#">
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white"> FINSHED PROJECTS</h5>
        </a>
        <h1 className="mb-3 font-normal text-gray-500 dark:text-gray-400">4</h1>
       
    </div>

    <div className="max-w-sm h-40 w-96 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-2">
        <a href="#">
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">UNFINSHED PROJECTS</h5>
        </a>
        <h1 className="mb-3 font-normal text-gray-500 dark:text-gray-400">4</h1>
       
    </div>

        </div>
      </div>
    </div>
  )
}

export default Dashhome
