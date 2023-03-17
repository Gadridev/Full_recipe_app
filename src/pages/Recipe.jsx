import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components';

function Recipe() {
  let params =useParams();
  const [detail,setDetail]=useState({});
  const [activeTav,setTab]=useState("Instruction")
  const fetchDetails =async () =>{
    const data =await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.React_app_api_key}`);
      const detailData=await data.json();
      setDetail(detailData);
    

  }
  useEffect(()=>{
    fetchDetails();
  },[params.name])
 
  
  return (
    <>
      
      <DetailWrapper>
        <div>
          <h2>{detail.title}</h2>
          <img src={detail.image} alt="" />
        </div>
        <Info>
     
          <Button className={activeTav ==="Instruction" ? 'active' : ""} onClick={()=>setTab("Instruction")}>Instruction</Button>
          <Button className={activeTav ==="ingredients" ? 'active' : ""}  onClick={()=>setTab("ingredients")}>ingredients</Button>
         
            {activeTav =="Instruction" &&
             <Para>
              <p dangerouslySetInnerHTML={{__html:detail.summary}}></p>
              <p dangerouslySetInnerHTML={{__html:detail.instructions}}></p>
            </Para>
            }{activeTav =="ingredients" &&
            <ul>
            {
              detail.extendedIngredients?.map((ingredient)=>(
                <li key={ingredient.id}>{ingredient.original}</li>
              ))}
          </ul>

            }
            
          
      </Info>
      </DetailWrapper>
       
      
    </>
  )
}
const DetailWrapper=styled.div`
margin-top:10rem;
margin-bottom:5rem;
display:flex;
.active{
  background:linear-gradient(35deg,#494949,#313131);
  color:white;
}img{
  width:400px
}
h2{
  margin-bottom:2rem;
  font-size:1rem;
}

`
const Button =styled.button`
padding:1rem 2rem;
color:#313131;
background:white;
border:2px solid black;
margin-left:2rem;
font-weight:600;
`
const Info =styled.div`
margin-left:5rem;
li{
  font-family: emoji;
}
ul{
  margin-left:2.6rem;
  margin-top:1rem;
  font-weight:500;
  
}

`
const Para =styled.div`
margin-left: 30px;
font-size: 14px;
font-weight: 600;
margin-top:5px;


`

export default Recipe
