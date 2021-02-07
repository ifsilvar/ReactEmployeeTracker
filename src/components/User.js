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

    return <> 
    <div className="navbar navbar-dark bg-dark">
        <div className="container">
            <h2 style={{color: "white"}}>Employee Tracker</h2>
            {console.log(employeeData)}
            <input className="form-control mb-3" placeholder="filter by last name" onChange={(event) => setFilterLastName(event.target.value)}>
            </input>

            <button type="button" className="btn btn-outline-warning" onClick={() => {
                console.log('clickhere')
                const data = employeeData.sort((emp1, emp2) => { 
                    return emp2.name.last.localeCompare(emp1.name.last)
                })
                console.log(data)
                return setEmployeeData([...data])
            }}>
            Sort by Last Name <i className="fa fa-arrow-down" aria-hidden="true"></i>
            </button>

            <button type="button" className="btn btn-outline-warning" onClick={() => {
                console.log('clickhere')
                const data = employeeData.sort((emp1, emp2) => { 
                    return (emp1.name.last.localeCompare(emp2.name.last))
                })

                console.log(data)
                return setEmployeeData([...data])
            }}>
            Sort by Last Name <i className="fa fa-arrow-up" aria-hidden="true"></i>
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
                </div>
            </div>
        <div className="container">
        <div className="row">
        {employeeData.filter((emp) => {
            return emp.name.last.startsWith(filterLastName);
        }).map((employee, index) => //need an index to use as a unique key when using .map
                <div key={index} className='mt-3 col-md-4'>
                    <div className="card text-center">
                        <div style={{color: "white"}} className="card-header bg-dark">
                            Employee
                        </div>
                        <img className="card-img-top" src={employee.picture.large} style={{width: "100%"}} alt="employeeImage"/>
                        <div className="card-body">
                            <h3 className="card-title">{`${employee.name.first} ${employee.name.last}`}</h3>
                            <h5>{`${employee.email}`}</h5>
                        </div>
                        <div className="card-footer text-muted">
                            {`${employee.phone}`}
                        </div>
                    </div>
                </div>
        )}
        </div>
        </div>
        <br></br>
    </>
}

export default FetchData;