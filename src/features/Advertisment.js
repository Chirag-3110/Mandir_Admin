import React from 'react'
import TitleCard from "../components/Cards/TitleCard";

const Advertisment = () => {
  return (
    <>
       <TitleCard title="Advertisment" topMargin="mt-2" TopSideButtons={<>
                <div className="inline-block float-right">
                    <button className="btn px-6 btn-sm normal-case btn-primary" >Add New Ad</button>
                </div>
            </>}>
            <div className="overflow-x-auto w-full">

                <table className="table w-full">

                <thead>
                    <tr>
                        <th>S.no.</th>
                        <th>Screen Name</th>
                        <th>Ad</th>
                        <th>Activity</th>
                        <th>Delete Status</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                </table>
            </div>
            </TitleCard>    
    </>
  )
}

export default Advertisment
