import React, {useState, useEffect} from 'react';
import axios from "axios"


const fetchData = () => {
    const [profileName, setprofileName] = useState('');
    const [profileCell, setprofileCell] = useState('');
    const [profileImage, setprofileImage] = useState('');
    const [profileEmail, setprofileEmail] = useState('');

    const profileData =async () => {
        try{
            const res = await axios.get('https://randomuser.me/api/')
            setprofileCell(res.data.results[0].cell)
            setprofileEmail(res.data.results[0].email)
            setprofileImage(res.datae.results[0].image)
            setprofileName(`${res.data.results[0].name.first} ${res.data.results[0].name.last}`)
            consile.log(res)
        }catch (err){
            console.log(err)
        }
    }

    useEffect(() => {
        profileData()
    }, {})

    return <div>
        <div className='card'>
            <img src={profileImage} style={{width: "100%"}}/>
            <h1>{profileName}</h1>
            <p className='title'>{profileEmail}</p>
            <p>{profileCell}</p>
            <button>contact</button>
        </div>
    </div>
}

export default fetchData;