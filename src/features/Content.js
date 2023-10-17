import React, { useState } from 'react'
import TitleCard from "../components/Cards/TitleCard";
import ReactQuill from 'react-quill';
const Content = () => {
    const [abour, setAbout] = useState("");
    const [terms, setTerms] = useState("");
    const [Privacu, setPrivacu] = useState("");

    const [selected, setSelected] = useState("Terms And Condition")
    return (
        <>
            <TitleCard title="App Content" topMargin="mt-2" TopSideButtons={<>
                <div className="inline-block float-right">
                    <button className="btn px-6 btn-sm normal-case btn-primary" >Save</button>
                </div>
            </>}>
                <select value={selected} onSelect={(value) => {
                    setSelected(value)
                }}>
                    <option value="Terms And Condition">Terms And Condition</option>
                    <option value="Privacy Policy">Privacy Policy</option>
                    <option value="About Us">About Us</option>
                </select>
                <ReactQuill value={selected == "Terms And Condition" ? terms : selected == "Privacy Policy" ? Privacu : abour} onChange={(e)=>{

                   
                }} style={{ marginTop: 20, height: "50vh", marginBottom: 20 }} />

            </TitleCard>


        </>
    )
}

export default Content
