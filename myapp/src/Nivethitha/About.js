import React from 'react'

const About =( )=>{

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
             {/* --------------------------------------------------About us ------------------------------------- */}

             <section className='container-about-page'>
                <div class="two-col-one">
                    <img src={require('./images/dog_check - Copy.png')} />
                </div>
                <div class="two-col-two">
                    <h1 className=' section.content-title'> Hello! This is Nivethitha</h1>
                    <p className='about-page-p'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                    <p className='about-page-p'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                    {/* <div class="aboutus-links">
                    <span>
                <a href='#' >See Resume</a>{" "} {" "}</span>
                <span><a href='#' >Hire Me</a>{" "} {" "}</span>
                </div> */}
                    <button>See Resume</button>{" "}
                    <button>Hire Me</button>
                </div>

               
            </section>
            <div class="col-4-about">
                    <div class="about-col-4">
                        <p class="about-no-title">0021</p>
                        <p class="about-text">Web Design Completed</p>
                    </div>

                    <div class="about-col-4">
                        <p class="about-no-title">0040</p>
                        <p class="about-text">UI/UX Design Done</p>
                    </div>

                    <div class="about-col-4">
                        <p class="about-no-title">0015</p>
                        <p class="about-text">Web Site Created</p>
                    </div>

                    <div class="about-col-4">
                        <p class="about-no-title">0085</p>
                        <p class="about-text">Cups Coffee Taken</p>
                    </div>
                </div>
            {/* ----------------------------------About us------------------------------- */}

            {/* <section className='container-about-page'>
                <h1> Hello! This is Nivethitha</h1>
                <p className='about-page-p'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                <p className='about-page-p'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                <button type='submit'>See Resume</button>{" "} {" "}
                <button type='submit'>Hire Me</button>
                </section> */}
        </div>
    )
}
export default About