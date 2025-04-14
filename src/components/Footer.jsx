import React, { useEffect, useState } from 'react'

const Footer = () => {
  const [dateTime , setDateTime] = useState(new Date());

 useEffect(()=>{
  const timer = setInterval(() => {
setDateTime(new Date());
  },1000);
return ()=> clearInterval(timer);
 },[])


 const date=dateTime.toLocaleDateString()
 const time=dateTime.toLocaleTimeString()
  return (
    <footer className='position-absolute bottom-0 w-100'>
    {/* <footer className=' w-100'> */}
    <div className="d-flex justify-content-between align-items-center footer_content">
      <h3 className='email size18' >akashkurdekar39@gmail.com</h3>
      <div className="dateTime size18">
        <span>{date}</span>
        <span>{time}</span>
      </div>
    </div>
    </footer>
  )
}

export default Footer
