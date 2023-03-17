import React, { useEffect,useState } from 'react'
import styled from 'styled-components';
import { Splide,SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { Link } from 'react-router-dom';

function Popular() {
  const[Popular,SetPopualr]=useState([])
  useEffect(()=>{
    getpopuplar();
  },[])
    const getpopuplar =async()=>{
      const check =localStorage.getItem('popular')
      if(check){
        SetPopualr(JSON.parse(check))
      }else{
        const api =await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.React_app_api_key}&number=9`);
        const data =await api.json();
        localStorage.setItem('popular',JSON.stringify(data.recipes))
        SetPopualr(data.recipes)
        console.log(data)
      }
    }
    
  return (
    <>
  
    <Wrapper>
      <h3>Popular Pick</h3>
      <Splide options={{
        perPage:4,
        arrows:false,
        pagination:false,
        drag:"free",
        gap:"1rem",
        
    
      }}>
        {
          Popular.map((recipe)=>{
            return(
              <SplideSlide key={recipe.id}>
                <Card >
                  <Link to={"/recipe/"+recipe.id}>
                  <p>{recipe.title}</p>
                  <img src={recipe.image}  alt="" />
                  </Link>
                  <Gradient />
                </Card>
              </SplideSlide>
            )
          })
        }
      </Splide>
    </Wrapper>
      
    </>
  )
}
const Wrapper =styled.div`
margin:4rem 0rem;
`
const Card=styled.div`
  min-height:0rem;
  overflow:hidden;
  position:relative;


  img{
    border-radius:2rem;
    width:100%;
    height:40vh;
    left:0;
    height:100%
    objetig-fit:cover;
  background: linear-gradient(to bottom, #ffffff 0%, #333300 100%);


   
  }
  p{
    position:absolute;
    z-index:10;
    left:50%;
    bottom:0%;
    transform:translate(-50%,0%);
    color:white;
    text-align:center;
    font-weight:600;
    font-size:0.5rem;
    height:50px;
    display:flex;
    justify-content:center;
    align-item:center;
    
  }
`
const Gradient =styled.div`
 z-index:3;
 position:absolute;
 width:100%;
 height:100%;
 background:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5));

`

export default Popular
