import React from 'react'

const StatsCard = ({ statsTitle, statsNumber, arrow, icon }) => {
    return (
        <div className='flex flex-col justify-between gap-5 bg-white rounded-2xl p-4 w-60 2xl:w-auto flex-wrap'>
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
