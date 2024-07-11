import React from 'react'
import { getStarted } from '../../data/getStarted'
import GetStartedCard from './GetStartedCard'

const GetStartedUp = () => {
    return (
        <div className="mb-6 md:mb-8 xl:mb-10">
            <div className="pb-6 md:pb-8 xl:pb-10">
                <h2 className="text-3xl font-semibold tracking-tighter md:text-6xl mdl:w-[820px]">
                    Get started easily
                </h2>
            </div>
            <div>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-3 lgs:grid-cols-3 lgs:gap-5 ">
                    {
                        getStarted.map(data => (
                            <GetStartedCard data={data} key={data.id} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default GetStartedUp