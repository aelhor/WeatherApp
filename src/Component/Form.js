import React from 'react'

const Form = props=>
    (
        <form className='searchclass' onSubmit = {e=>props.getWeather(e)}>
            <input  type='text' name='city'  placeholder = 'city...' required/>
            <input  type='text' name='country'  placeholder = 'country...' />

            <button>Get Weather</button>       
        </form>
    )

 
export default Form