import React from 'react'

const Education =( )=>{

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
              {/* -------------------------Educational story--------------------- */}
<section className='Educational-navbar'>

<div className='education-title'>
<h2>Educational Story</h2>
    <p>I value simple content structure, clean design patterns and thoughtful interactions.</p>
    </div>
<div className='col-3'>
<div class="education-col-4">
                    <p class="education-no-title">0021</p>
                    <p class="education-text">Web Design Completed</p>
                </div>

                <div class="education-col-4">
                    <p class="education-no-title">0040</p>
                    <p class="education-text">UI/UX Design Done</p>
                </div>

                <div class="education-col-4">
                    <p class="aeducation-no-title">0015</p>
                    <p class="education-text">Web Site Created</p>
                </div>

                </div>
</section>

                {/* <h1>Our Education Details</h1> */}
        </div>
    )
}
export default Education