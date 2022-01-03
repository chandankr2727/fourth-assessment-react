import React, { Component } from 'react';
import StudentDetails from './StudentDetails';

class Students extends Component {
    render() {
        return (
            <div className='student'>
                <h2>Student Details</h2>
                <button className='btn'>Add Student</button>
                <div className='student-details'>
                    <div className='details-h'>
                        <div>Student</div>
                        <div>Age</div>
                        <div>Course</div>
                        <div>Batch</div>
                        <div>Edit</div>
                    </div><hr/>
                    <StudentDetails name="Jhon Doe" age="25" course="MERN" batch="2017" edit="edit" /><hr />
                    <StudentDetails name="Chandan Kumar" age="22" course="MERN" batch="2021" edit="edit" /><hr />
                    <StudentDetails name="Bhavesh Onkar" age="24" course="MEAN" batch="2020" edit="edit" /><hr />
                    <StudentDetails name="Ayushi Kumari" age="20" course="MEVN" batch="2022" edit="edit" />
                </div>
            </div>
        )
    }
}

export default Students;
