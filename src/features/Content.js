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
                <select value={selected} onChange={(value) => {
                    setSelected(value.target.value)
                }}>
                    <option value="Terms And Condition">Terms And Condition</option>
                    <option value="Privacy Policy">Privacy Policy</option>
                    <option value="About Us">About Us</option>
                </select>
                {
                    selected == "Terms And Condition" ? <ReactQuill defaultValue={terms} value={terms} onChange={(e)=>{setTerms(e)}} style={{ marginTop: 20, height: "50vh", marginBottom: 20 }} /> : selected == "Privacy Policy" ? <ReactQuill defaultValue={Privacu} value={Privacu} onChange={(e)=>{setPrivacu(e)}} style={{ marginTop: 20, height: "50vh", marginBottom: 20 }} /> : <ReactQuill defaultValue={abour} value={abour} onChange={(e)=>{setAbout(e)}} style={{ marginTop: 20, height: "50vh", marginBottom: 20 }} />

                }

            </TitleCard>


        </>
    )
}

export default Content
