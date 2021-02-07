import React, {useState, useEffect} from 'react';
import axios from "axios"


const FetchData = () => { 
    const [employeeData, setEmployeeData] = useState([]);
    const [filterLastName, setFilterLastName] = useState('');

    const profileData = async () => {
        try{
            const res = await axios.get('https://randomuser.me/api/?results=50')
            setEmployeeData(res.data.results)

        }catch (err){
            console.log(err)
        }
    }

    useEffect(() => {
        profileData()
    }, [])

    return <div className="container">
        {console.log(employeeData)}
        <input placeholder="filter by last name" onChange={(event) => setFilterLastName(event.target.value)}>
        </input>
        <button onClick={() => {
            console.log('clickhere')
            const data = employeeData.sort((emp1, emp2) => { 
                return emp2.name.last.localeCompare(emp1.name.last)
            })
            console.log(data)
            return setEmployeeData([...data])
        }}>
        Sort by Last Name
        </button>

        <button onClick={() => {
            console.log('clickhere')
            const data = employeeData.sort((emp1, emp2) => { 
                return (emp1.name.last.localeCompare(emp2.name.last))
            })

            console.log(data)
            return setEmployeeData([...data])
        }}>
        Sort by Last Name
        </button>

        {/* <button onClick={() => {
            console.log('clickhere')
            function fn(reversed){
                return () => {
                    reversed = !reversed;
                    return (emp1, emp2) => {
                        return (emp1.name.last == emp2.name.last ? 0 : emp1.name.last < emp2.name.last ? -1 : 1) * (reversed ? -1 : 1)
                    }
                }
            }
            console.log(fn())
            return setEmployeeData([...data])
        }}>
        Sort test
        </button> */}
        
        {employeeData.filter((emp) => {
            return emp.name.last.startsWith(filterLastName);
        }).map((employee, index) => //need an index to use as a unique key when using .map
                <div key={index} className='card'>
                    <img src={employee.picture.large} style={{width: "10%"}} alt="employeeImage"/>
                    <h1>{`${employee.name.first} ${employee.name.last}`}</h1>
                    <p className='title'>{employee.email}</p>
                    <p>{employee.phone}</p>
                    {/* <button>contact</button> */}
                </div>
        )}
    </div>
}

export default FetchData;