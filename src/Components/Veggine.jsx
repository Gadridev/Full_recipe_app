import React, { useEffect,useState } from 'react'
import styled from 'styled-components';
import { Splide,SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { Link } from 'react-router-dom';

function Veggine() {
  const[Veggie,SetVeggie]=useState([])
  useEffect(()=>{
    getpopuplar();
  },[])
    const getpopuplar =async()=>{
      const check =localStorage.getItem('popular')
      if(check){
        SetVeggie(JSON.parse(check))
      }else{
        const api =await fetch
        (`https://api.spoonacular.com/recipes/random?apiKey=${process.env.React_app_api_key}&number=9&tags=vegetarian`);
        const data =await api.json();
        localStorage.setItem('Veggie',JSON.stringify(data.recipes))
        SetVeggie(data.recipes)
        console.log(data)
      }
    }
  return (
    <>
    <Wrapper>
      <h3>Our Vegetarin Picks</h3>
      <Splide options={{
        perPage:3,
        arrows:false,
        pagination:false,
        drag:"free",
        gap:"1rem",
        
    
      }}>
        {
          Veggie.map((recipe)=>{
            return(
              <SplideSlide key={recipe.id}>
                <Card >
                  <Link to={"/recipe/"+recipe.id}>
                  <p>{recipe.title}</p>
                  <img src={recipe.image} alt="" />
                  </Link>
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

  overflow:hidden;
  position:relative;

  img{
    border-radius:2rem;
    width:100%;
    left:0;
    height:100%
    objetig-fit:cover;
    box-shadow: inset 1px 1px 150px #000;

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

export default Veggine
