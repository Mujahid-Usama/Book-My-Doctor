import React, {useState} from 'react'
import { Col, Row, Input,  DatePicker,Select,Radio, InputNumber } from 'antd';

const appointmentInitialValues = {
    doctorName: "",
    specialization: "",
    appointmentDate:"",
    availablehours:""

}

const Appointment = () => {
    const [appointment, setappointment] = useState(appointmentInitialValues)
    const [drName, setdrName] = useState("")
    const [gender, setgender] = useState("")

  return (
    <section style={{padding: '0 15rem'}} >

     <h1> Appointment Doctor</h1>   

    <Row>
      <Col span={12}>
        <input type='text' placeholder="Dr. Name" onChange={(e) => setdrName(e.target.value)} value={drName} />
    </Col>

{/* {console.log('drName', drName)} */}
      <Col span={12}>
      <div className='row'>
        <p>Spacilization Doctor:</p>
      <Select
    
    placeholder="Select a person"
    
    options={[
      {
        value: 'gynacologist',
        label: 'Gynacologist',
      },
      {
        value: 'heart',
        label: 'Heart',
      },
      {
        value: 'kidney',
        label: 'Kidney',
      },
    ]}
  />
  </div>
      </Col>
    </Row>
    {/* ----------- first row----------------------------- */}
    
    <Row>
      <Col span={12}>  

      <DatePicker />
      
    </Col>

      <Col span={12}>
      <p> Available Hours:</p>

      <Radio.Group >
      <Radio >9:00 AM</Radio>
      <Radio >11:00 AM</Radio>
      <Radio >01:00 PM</Radio>
      <Radio >03:00 PM</Radio>
    </Radio.Group>
      </Col>
    </Row>
<hr/>
{/* -------------------------------------- 2nd row------------------- */}

<Row>
      <Col span={12}>  
      <input type='text' placeholder='Patient Name' />
    </Col>


      <Col span={12}>
        <div className='row'>
            <p>Age:</p>
        <InputNumber min={0} max={100} defaultValue={0}  />
        </div>
    
      </Col>
    </Row>
    {/* -------------------- 3rd row----------------------------- */}
    

<Row>
      <Col span={12}>  
      <p> Gender:</p>

<div>

<input type="radio" name="gender" value="male" onClick={(e)=> setgender(e.target.value)} /> Male <br/>
<input type="radio" name="gender" value="female" onClick={(e)=> setgender(e.target.value)} /> Female <br/>
<input type="radio" name="gender" value="transgender" onClick={(e)=> setgender(e.target.value)} /> Transgender
<br/>
</div>
</Col>
<br/>


      <Col span={12}>
      <input placeholder='Phone Number' type="number" />
      </Col>
    </Row>
     {/* ------------------- 4th row-------------------------- */}
<Row>
     <Col span={12}>  
      <input type='text' placeholder="City/Province" />
    </Col>
    


      <Col span={12}>
          <input type='text' placeholder="Home Address" />
      </Col>
    </Row>
    
        <Row>
            <Col>

            {drName}
            <span style={{color: 'tomato'}}>
            {gender}
                </span>


                {appointment.doctorName}
                {appointment.specialization}
                {appointment.appointmentDate}
                {appointment.availablehours}
            </Col>
        </Row>
    </section>
  )
}

export default Appointment;