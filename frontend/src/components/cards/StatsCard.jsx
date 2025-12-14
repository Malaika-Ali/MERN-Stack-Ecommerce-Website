import React from 'react'

const StatsCard = ({ statsTitle, statsNumber, arrow, icon, gridAreaNumber }) => {
    return (
        // <div className='flex flex-col justify-between gap-5 bg-white rounded-2xl p-4 col-span-12 sm:col-span-6 lg:col-span-3 2xl:w-auto flex-wrap stats'>
        <div className={`flex flex-col justify-between gap-5 bg-white rounded-2xl p-4 w-auto flex-wrap stats${gridAreaNumber} dark:bg-[#282828] dark:text-[#FFFFFF]`}>
            <div className='flex justify-between gap-8 items-start'>
                <div className="flex flex-col">
                    <h4 className='font-[500]'>{statsTitle}</h4>
                    <p className='text-gray-400 text-xs'>Last 30 days</p>
                </div>
                <div className='dark:text-white-color'>{icon}</div>
            </div>

            <div className='flex items-center gap-1'>
                {arrow}
                <span className='text-base font-[600]'>{statsNumber || `Connection Failed`}</span>
            </div>

        </div>
    )
}

export default StatsCard
