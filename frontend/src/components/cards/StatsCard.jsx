import React from 'react'

const StatsCard = ({ statsTitle, statsNumber, arrow, icon, gridAreaNumber }) => {
    console.log(gridAreaNumber)
    return (
        // <div className='flex flex-col justify-between gap-5 bg-white rounded-2xl p-4 col-span-12 sm:col-span-6 lg:col-span-3 2xl:w-auto flex-wrap stats'>
        <div className={`flex flex-col justify-between gap-5 bg-white rounded-2xl p-4 2xl:w-auto flex-wrap stats${gridAreaNumber} `}>
            <div className='flex justify-between gap-12 items-start'>
                <div className="flex flex-col">
                    <h4 className='font-[500]'>{statsTitle}</h4>
                    <p className='text-gray-400 text-sm'>Last 30 days</p>
                </div>

                <div className=''>{icon}</div>
            </div>

            <div className='flex items-center gap-1'>
                {arrow}
                <span className='text-2xl'>{statsNumber}</span>
            </div>

        </div>
    )
}

export default StatsCard
