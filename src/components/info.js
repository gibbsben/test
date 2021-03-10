import React from 'react';
import '../App.css';
import './info.css';
import EventItem from './EventItem'
import './EventItem.css'


function Info() {
  return (
    <section className='info-container'>
         <article class='info-box'>
        
        <h1>Upcoming Events</h1>
  
        <ul>
        
         <li ><p>TBA</p></li>
     
   
        </ul>
  
        </article>
       

      <article class='info-box'>
        
      <h1>Previous Events</h1>

       <EventItem
        src='https://i.imgur.com/I5iUzuT.png?1'
        name='SinterKlass Boxes'
        text="3/12/20 A huge thank you to everyone that helped us make this possible 💜
        Silke, Corinna and Mostafa assembled 27 Sinterklaas heavy boxes !! 🎁
        What's inside ? 🤔
        Not all boxes are the same but in general each box contains: a pair of socks, a pack of tobacco, dice/cards, a towel, body wash/soap, deodorant/perfume, razors, nail polish and makeup for females, hair ties and headphones.
        The present boxes with the cookies and cards reached the local homeless shelter tonight 🎊
        Happy Sinterklaas to/for all !"
        link = "https://www.instagram.com/p/CIWgSdIlWgZ/"
        />
      
        
    <EventItem
        src='https://i.imgur.com/5c7mQuM.jpg'
        name='Pool night'
        text="4/12/2019 we organized a bingo & pool night🌟 Giving scarfs, gloves, socks and tobacco 🎁 Cozy evening to warm up the freezing end of the year! Wish you a happy national volunteer day!"
        link ="https://www.instagram.com/p/B5r94XsFYbx/"
       />

      </article>
    
    

      
            </section>
  );
}

export default Info;
