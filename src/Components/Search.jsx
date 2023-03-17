import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import Searched from '../pages/Searched'



function Search() {
    const [input,setinput]=useState("")
    const Navigate =useNavigate()
    const Submithandler=(e)=>{
        e.preventDefault();
        Navigate('/searched/' + input);
    
    };
  return (
    <FormS  onSubmit={Submithandler}>
        <FaSearch />
        <input type="text" name="" value={input} onChange={(e)=>setinput(e.target.value)} id="" />
    </FormS>
  )
}
 const FormS=styled.form`

 position:relative;
 margin: 0.5rem 8rem;

 div{
    width:100%;
    position:relative;
 }
 input{
    background:linear-gradient(35deg,#494949,#313131);
     font-size:1.5rem;
     color:white;
     padding:1rem 3rem;
     border:none;
     border-radius:1rem;
     outline:none;
     width:95%;
 }
 svg{
     position:absolute;
     top:50%;
     left:0%;
     transform:translate(100%,-50%);
     color:white;

 }
 `
    


export default Search
