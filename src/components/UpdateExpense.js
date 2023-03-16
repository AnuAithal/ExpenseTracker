import React from 'react'

const UpdateExpense = (props) => {

  return (

    <div>
      <form className='updateForm'>
        <div class="form-group">
            <label>Title:</label>
            <input type="text" value={props.title} class="form-control" id="title" placeholder="Enter title"/>
        </div>
        <div class="form-group">
            <label>Category:</label>
            <input type="text"  class="form-control" id="category" placeholder="Category"/>
        </div>
        <div class="form-group">
            <label>Amount:</label>
            <input type="number"  class="form-control" id="amount" placeholder="Enter Amount"/>
        </div>
        <div class="form-group">
            <label>Date:</label>
            <input type="date"  class="form-control" id="date"/>
        </div>
        
        <button style={{marginLeft:10, marginTop:10}} type="submit" class="btn btn-primary">Submit</button>
        <button style={{marginLeft:10, marginTop:10}} type="submit" class="btn btn-secondary">Cancel</button>
        </form>
    </div>
  )
}

export default UpdateExpense
