import React from 'react'

const Service =( )=>{

    return(
        <div>
 <section className='Main-header'>
                <h3>Nivethitha</h3>
            <div className='nav'>
              <ul> <a href='#'><li>Home</li></a>
              <a href='About'><li>About</li></a>
              <a href='Skill'><li>Skill</li></a>
              <a href='Education'><li>Education</li></a>
              <a href='Service'><li>Service</li></a>
              <a href='Blog'><li>Blog</li></a>
              <a href='Contact'><li>Contact</li></a></ul>

            </div>
</section>
<section className='service-list'>

<div>
<h2>Service List</h2>
    <p>I value simple content structure, clean design patterns and thoughtful interactions.</p></div>
<div className="row-1">
<div class="service-col-4">
                    <p class="service-no-title">0021</p>
                    <p class="service-text">Web Design Completed</p>
                </div>

                <div class="service-col-4">
                    <p class="service-no-title">0040</p>
                    <p class="service-text">UI/UX Design Done</p>
                </div>
              
                <div class="service-col-4">
                    <p class="service-no-title">0021</p>
                    <p class="service-text">Web Design Completed</p>
                </div>
                </div>
        <div className='row-2'>
            
             <div class="service-col-4">
                    <p class="service-no-title">0040</p>
                    <p class="service-text">UI/UX Design Done</p>
                </div>

                <div class="service-col-4">
                    <p class="service-no-title">0021</p>
                    <p class="service-text">Web Design Completed</p>
                </div>

                <div class="service-col-4">
                    <p class="service-no-title">0040</p>
                    <p class="service-text">UI/UX Design Done</p>
                </div> 
            
                </div>
</section>

                {/* <h1>Our Services</h1> */}
        </div>
    )
}
export default Service