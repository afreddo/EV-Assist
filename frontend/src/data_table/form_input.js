function FormInput({handleChange, formInputData, handleSubmit}){
return(
    <div className="form-row row">
      <div className="col">
        <input type="text" onChange={handleChange} value={formInputData.streetName} name="streetName" className="form-control"  placeholder="Street Name" />
      </div>
      <div className="col">
        <input type="text" onChange={handleChange} value={formInputData.city} name="city" className="form-control" placeholder="City" />
      </div>
      <div className="col">
        <input type="text" onChange={handleChange} value={formInputData.state} name="state" className="form-control" placeholder="State" />
      </div>
      <div className="col">
        <input type="submit" onClick={handleSubmit} className="btn btn-primary" />
      </div>
    </div>


)
}
export default FormInput;