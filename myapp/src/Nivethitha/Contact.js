import React from 'react'

const Contact =( )=>{

    return(
        <div>
             <section className='Main-header'>
                <h3>Nivethitha</h3>
            <div className='nav'>
              <ul> <a href='Home'><li>Home</li></a>
              <a href='About'><li>About</li></a>
              <a href='Skill'><li>Skill</li></a>
              <a href='Education'><li>Education</li></a>
              <a href='Service'><li>Service</li></a>
              <a href='Blog'><li>Blog</li></a>
              <a href='Contact'><li>Contact</li></a></ul>

            </div>
</section>
            <section className='footer'>

<div className='contact-page-container'>
<h2>Contact Me</h2>
    <p>I value simple content structure, clean design patterns and thoughtful interactions.</p>
</div>
    
    <div className='contact-section'>
        <div>
        <p>Address</p>
        <p class="contact-text">Chennai, India</p>

        <p>Email</p>
        <p class="contact-text">nivethitha.uthaya@gmail.com</p>

        <p>Phone</p>
        <p class="contact-text">9965773474</p>

        <p>Portfolio</p>
        <p class="contact-text">https://univethitha.github.io</p>

        </div>
     {/* <div className='contact-text'> 
        <p class="contact-text">Chennai, India</p>
        <p class="contact-text">nivethitha.uthaya@gmail.com</p>
        <p class="contact-text">9965773474</p>
        <p class="contact-text">https://univethitha.github.io</p>
     </div> */}
    </div>

</section>

                {/* <h1>My Contact Details</h1> */}
        </div>
    )
}
export default Contact