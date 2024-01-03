import React from 'react'

const Blog =( )=>{

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
            <section className='myblog'>

<div className='blog-title'>
<h2>My Blog</h2>
    <p>I value simple content structure, clean design patterns and thoughtful interactions.</p>

</div>
<div className='myblog-container'>
    <div className='myblog-col-3'>
        {/* <img src={{require('./ac.png')}}></img> */}
        <p class="myblog-col-3-title">HTML / CSS</p>
        <p class="myblog-col-3-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <a href="https://univethitha.github.io" target='_blank'>Live Demo</a>
    </div>

    <div className='myblog-col-3'>
        {/* <img src={{require('./ac.png')}}></img> */}
        <p class="myblog-col-3-title">Bootstrap</p>
        <p class="myblog-col-3-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <a href="">Live Demo</a>
    </div>

    <div className='myblog-col-3'>
        {/* <img src={{require('./ac.png')}}></img> */}
        <p class="myblog-col-3-title">React JS</p>
        <p class="myblog-col-3-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <a href="http://localhost:3000/" target='_blank'>Live Demo</a>
    </div>
</div>

</section>
                {/* <h1>My Blog Details</h1> */}
        </div>
    )
}
export default Blog