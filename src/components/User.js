import React, {useState, useEffect} from 'react';
import axios from "axios"


const FetchData = () => {
    const [profileName, setprofileName] = useState('');
    const [profileCell, setprofileCell] = useState('');
    const [profileImage, setprofileImage] = useState('');
    const [profileEmail, setprofileEmail] = useState('');

    const profileData = async () => {
        try{
            const res = await axios.get('https://randomuser.me/api/')
            setprofileCell(res.data.results[0].cell)
            setprofileEmail(res.data.results[0].email)
            setprofileImage(res.data.results[0].picture.large)
            setprofileName(`${res.data.results[0].name.first} ${res.data.results[0].name.last}`)
            console.log(res)
        }catch (err){
            console.log(err)
        }
    }

    useEffect(() => {
        profileData()
    }, {})

    return <div>
        <div className='card'>
            <img src={profileImage} style={{width: "10%"}} alt="employeeImage"/>
            <h1>{profileName}</h1>
            <p className='title'>{profileEmail}</p>
            <p>{profileCell}</p>
            <button>contact</button>
        </div>
    </div>
}

export default FetchData;