import React, { useState } from 'react'
import BasicExample from '../components/SearchBar'

const URLPage = () => {
    const [url,setUrl] = useState("");
    const [msg , setmsg] = useState("");
    const [score , setscore] = useState(null);
    const [issues , setissues] = useState([]);
    const HandleAnalysis = () => {
        if(!url.trim()){
            alert("Please enter a Valid URL");
            setscore(null);
            return;
        }
        const num = Math.floor(Math.random() * 51) + 50;
        setscore(num);
        let newIssues = [];
    if (num > 90) {
        setmsg("Excellent AI readiness");
        newIssues = [
            "Minor improvements in metadata",
            "Optimize heading hierarchy",
            "Add more structured data"
        ];
    } 
    else if (num >= 80) {
        setmsg("Good, but needs improvement");
        newIssues = [
            "Missing FAQ schema",
            "Weak heading structure",
            "Limited semantic content"
        ];
    } 
    else if (num >= 65) {
        setmsg("Needs improvement");
        newIssues = [
            "No structured data",
            "Poor heading hierarchy",
            "Low content depth",
            "Missing internal linking"
        ];
    } 
    else {
        setmsg("Poor Structure");
        newIssues = [
            "No structured content",
            "Poor semantic HTML usage",
            "Missing metadata",
            "No FAQ section",
            "Low content quality"
        ];
    }

    setissues(newIssues);
    }
    
  return (
    <div>
        <BasicExample onAnalysis={HandleAnalysis}  setUrl = {setUrl}>
        </BasicExample >
            {score !== null && (
                <div style= {{textAlign : "center" , marginTop : "20px"}}>
                    <h2>
                        Score : {score}/100
                    </h2>
                    
                        <h4>{msg}</h4> 
                    <ul>
                        {issues.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            )}
    </div>
  )
}

export default URLPage