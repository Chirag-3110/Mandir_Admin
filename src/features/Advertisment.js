import React from 'react'
import TitleCard from "../components/Cards/TitleCard";
import { useDispatch } from 'react-redux';
import { MODAL_BODY_TYPES } from '../utils/globalConstantUtil';
import { openModal } from './common/modalSlice';

const TopSecondButton = () => {

    const dispatch = useDispatch()

    const openAddNewLeadModal = () => {
        dispatch(openModal({title : "Add Advertisment", bodyType : MODAL_BODY_TYPES.ADD_ADVERTISMENT}))
    }

    return(
        <div className="inline-block float-right" style={{marginLeft: 10,}}>
            <button className="btn px-6 btn-sm normal-case btn-primary" onClick={() => openAddNewLeadModal()}>Add Advertisment</button>
        </div>
    )
}

const Advertisment = () => {
  return (
    <>
       <TitleCard title="Advertisment" topMargin="mt-2" TopSideButtons={<>
            <TopSecondButton/>    
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
