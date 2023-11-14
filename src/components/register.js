import React, { useState } from 'react';
import '../styles/register.css';

function Register() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    degree: '',
    workExperience: '',
    skillset:'',
    linkedin:'',
    resume: null,
  });
  const [errors, setErrors] = useState({});


  return (
    <form >
      <h3> Student Registration </h3>
      <input name="firstName" placeholder="First Name"  />
      {errors.firstName && <div>{errors.firstName}</div>}

      <input name="lastName" placeholder="Last Name" />
      {errors.lastName && <div>{errors.lastName}</div>}

      <input name="email" placeholder="Email ID" />
      {errors.email && <div>{errors.email}</div>}

      <input type="password" name="password" placeholder="Password"  />
      {errors.password && <div>{errors.password}</div>}

      <input type="password" name="confirmPassword" placeholder="Re-enter Password"  />
      {errors.confirmPassword && <div>{errors.confirmPassword}</div>}
      <input type="phone" name="phone" placeholder="Phone number"  />
      {errors.phone && <div>{errors.phone}</div>}
      <input name="degree" placeholder="Degree" />
      <textarea name="skillset" placeholder="Eg: Java, Python, SQL server....." ></textarea>
      <textarea name="workExperience" placeholder="Work Experience (if any)" ></textarea>
      <textarea name="linkedin" placeholder="Linkedin Profile URL" ></textarea>

      <input type="file" />
      {errors.resume && <div>{errors.resume}</div>}

      <button type="submit">Submit</button>
    </form>
  );
}

export default Register;