import React from 'react'
import './css/card.css'
import Button from '@mui/material/Button';
export const Card = (props) => {
  return (
    <div className='card'>
    <div className='cardimg' style={{backgroundImage: `url(${props.img})`}}></div>
        <div className='cardtitle'><span className='highlight'>{props.title}</span></div>
        <div className='cardcontent'>{props.data}</div>
        <div className='cardbtn'>
        <Button variant="contained" style={{backgroundColor:'#C770F0',}}><a className='giturl' href={props.githuburl}>Github</a></Button>
        </div>
    </div>
  )
}
