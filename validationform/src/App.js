import React, { useState } from 'react'
import PersonalInfo from './PersonalInfo'
import AddressInfo from './AddressInfo';
import Summary from './Summary';

const App = () => {
  const [formData, setFormData] = useState({
    name : "",
    email: "",
    password: "",
    address: "",
    city: "",
    country: ""
  })
  const [errors, setErrors] = useState({});
  const [step, setStep] =useState(1)
  const handleChange=(e)=>{
    const {name, value} = e.target;
    setFormData({...formData , [name]:value})
  }
  const validate = ()=>{
    const newErrors={}
    if(step ===1){
      if(!formData.name.trim()) newErrors.name ="Name is required";
      if(!formData.email.trim()) newErrors.email ="Email is required";
      if(!formData.password.trim()) newErrors.password ="password is required";
    }else if(step ===2){
      if (!formData.address.trim()) newErrors.address = "Address is required";
      if (!formData.city.trim()) newErrors.city = "City is required";
      if (!formData.country.trim()) newErrors.country = "Country is required";
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length=== 0
  }
  const handleNext=()=>{
    if(validate()){
      setStep(step + 1)
    }
  }
  const handleSubmit =( )=>{
    if(validate()){

      setTimeout(()=>{
        alert('data submited!!!')
      },1000)
    }
  }
  return (
    <div style={{display:'flex' , justifyContent: 'center', alignItems: 'center', padding: '200px', flexDirection:'column'}}>
    <div>
      {step ===1 && <PersonalInfo data={formData} errors={errors} handleChange={handleChange}/>}
      {step ===2 && <AddressInfo data={formData} errors={errors} handleChange={handleChange}/>}
      {step ===3 && <Summary data={formData} errors={errors} handleChange={handleChange}/>}
    </div>
    {step !== 3 ? <div style={{gap: '20px'}}>
      <button onClick={() => setStep(step - 1)}>Previous</button>
      <button onClick={handleNext}>Next</button>
    </div>
    :
    <button onClick={handleSubmit}>Submit</button>
    }
    </div>
  )
}

export default App
