
import { useState } from "react";
import "./App.css"
function App() {

  const[formData,SetformData]=useState({firstName:"",lastName:"",email:"",
  country:"India", streetAdress:"",city:"",offers:false
  ,state:"",pincode:"",comments:false,
  candidates:false, pushNotification:""})

  function changeHandler(event){
    const { name, value, checked, type } = event.target;
    
    SetformData((prev)=>{
      return {
        ...prev,
        [name]:type==="checkbox" ? (checked) : (value)
      }
    })

  }
  function submitHandler(event){
    event.preventDefault();
      console.log("finally printing the form ka data")
      console.log(formData)
  }

  return (
  <div className="flex flex-col items-center">
    <form onSubmit={submitHandler} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">

    <label className= "block text-gray-700 text-sm font-bold mb-2 ml-2" htmlFor="firstName"  >Enter your Name:</label>
   <br />
      <input type="text"
      id="firstName"
      name="firstName"
      placeholder="sumit"
      value={formData.firstName}
      onChange={changeHandler}
      className=" border-2 w-[80vw] rounded border-blue-400" />

      <br />
      <br />

      <label className= "block text-gray-700 text-sm font-bold mb-2 ml-2" htmlFor="lastName">Enter your Last Name:</label>
       <br />
      <input type="text"
      id="lastName"
      name="lastName"
      placeholder="singh"
      value={formData.lastName}
      onChange={changeHandler}
      className=" border-2 w-[80vw] rounded border-blue-400"  />

      <br />
      <br />

      <label className="block text-gray-700 text-sm font-bold mb-2 ml-2" htmlFor="email">Enter your Email Id:</label>
       <br />
      <input type="email"
      id="email"
      name="email"
      placeholder="sumit123@gamil.com"
      value={formData.email}
      onChange={changeHandler}
      className=" border-2 w-[80vw] rounded border-blue-400" />
      <br />
      <br />

      <label className="block text-gray-700 text-sm font-bold mb-2 ml-2" htmlFor="country">Country:</label>
      <br />
      <select name="country"
       id="country" onChange={changeHandler}
       value={formData.country}
       className=" border-2 w-[80vw] rounded border-blue-400">
        <option value="India">India</option>
        <option value="Afganistan">Afganistan</option>
        <option value="Pakistan">Pakistan</option>
        <option value="China">China</option>
        <option value="Nepal">Nepal</option>
        <option value="UnitedStates ">UnitedStates</option>
        <option value="Germany">Germany</option>
        <option value="Srilanka">Srilanka</option>
        <option value="Maldivies">Maldivies</option>
        <option value="Mexico">Mexico</option>
      </select>

      <br />
      <br />
      <label className="block text-gray-700 text-sm font-bold mb-2 ml-2" htmlFor="streetAdress">Enter your Street Address:</label>
       <br />
      <input type="text"
      id="streetAdress"
      name="streetAdress"
      placeholder="B/25c,greatRoad"
      value={formData.streetAdress}
      onChange={changeHandler}
      className=" border-2 w-[80vw] rounded border-blue-400" />

      <br />
      <br />
      <label className="block text-gray-700 text-sm font-bold mb-2 ml-2" htmlFor="city">Enter your City Name:</label>
       <br />
      <input type="text"
      id="city"
      name="city"
      placeholder="Kolkata"
      value={formData.city}
      onChange={changeHandler}
      className=" border-2 w-[80vw] rounded border-blue-400"/>

      <br />
      <br />
      <label className="block text-gray-700 text-sm font-bold mb-2 ml-2" htmlFor="state">Enter your State/Province:</label>
       <br />
      <input type="text"
      id="state"
      name="state"
      placeholder="Westbengal"
      value={formData.state}
      onChange={changeHandler}
      className=" border-2 w-[80vw] rounded border-blue-400" />
      <br />
      <br />
      
      <label className= "block text-gray-700 text-sm font-bold mb-2 ml-2" htmlFor="pincode">Enter your Zip Code:</label>
       <br />
      <input type="number"
      id="pincode"
      name="pincode"
      placeholder="123456"
      value={formData.pincode}
       onChange={changeHandler}
       className=" border-2 w-[80vw] rounded border-blue-400" />
       <br />
       <br />
          <fieldset>
         <legend className="block text-gray-700 text-sm font-bold mb-2 ml-2">By Email</legend>
          <div>
         <input type="checkbox"
         id="comments"
         name="comments"
         checked={formData.comments}
         onChange={changeHandler}
         />
        
          <label htmlFor="comments">Comments</label>
          <p>Get notified when someone posts a comment on a posting</p>
         </div>

         <div>
         <input type="checkbox"
         id="candidates"
         name="candidates"
         checked={formData.candidates}
          onChange={changeHandler}
         />
          <label htmlFor="candidates">Candidates</label>
          <p>Get notified when candidates applies for a job</p>
         </div>


         <div>
         <input type="checkbox"
         id="offers"
         name="offers"
         checked={formData.offers}
         onChange={changeHandler}
         />
          <label htmlFor="offers">Offers</label>
          <p>Get notified when candidates accepts or rejects an offer</p>
         </div>
      </fieldset>
      <br />

      <fieldset>
        <legend className="block text-gray-700 text-sm font-bold mb-2 ml-2">Push Notifications</legend>
        <p>These are delivered via SMS to your Mobile Phone</p>

        <input type="radio" 
        id="everything"
        name="pushNotification"
        onChange={changeHandler}
        value="everything"
      
        />
        <label htmlFor="everything">Everything</label>
        <br />

        <input type="radio" 
        id="sameasEmail"
        name="pushNotification"
        onChange={changeHandler}
        value="sameasEmail"
       
        />
        <label htmlFor="sameasEmail">SameasEmail</label>
        <br />

        <input type="radio" 
        id="nopushNotification"
        name="pushNotification"
        onChange={changeHandler}
        value="nopushNotification"

        />
        <label htmlFor="nopushNotification">NopushNotification</label> 

      </fieldset>
      <br />
      <button className="outline bg-blue-500
       hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Save Now</button>
          
         



    </form>
  </div>
  );
}

export default App;
