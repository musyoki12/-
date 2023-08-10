import React from "react"



import prof from "./profi2.jpeg"




function Account(){
    return(

<div className="flex flex-wrap gap-4" >
    <div className="flex flex-row">
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-6">
        <a href="#">
            <img className="rounded-t-lg" src={prof} alt="" />
        </a>
        <div className="p-5">
            <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">My Profile</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Username @kanzedm <br/>Email:kanze@info.com</p>
        </div>
        </div>
    {/* next card */}
    <div>

    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-2">
        <a href="#">
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">My Investiments</h5>
        </a>
        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Project 1.Mixed use building in Kileleshwa<br/>
Raising: Ksh 700M:<br/>Project 2:Student accommodation in Roysambu<br/>
Raising: Ksh 400M</p>
       
    </div>

    </div>
    <div>

<div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-2">
    <a href="#">
        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">My Investiments</h5>
    </a>
    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Project 1.Mixed use building in Kileleshwa<br/>
Raising: Ksh 700M:<br/>Project 2:Student accommodation in Roysambu<br/>
Raising: Ksh 400M</p>
   
</div>

</div>
</div>
{/* card three */}



        </div>
    )
}
export default Account