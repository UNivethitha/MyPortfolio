import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button } from 'react-bootstrap';

const Home = () => {

    return (
        
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
            <section className='Main-Banner'>
                <h1>Nivethitha</h1>
                <span><h6>Front End Developer</h6></span>
                {/* <Button variant="primary">Primary Button</Button>{' '}  
                <button type="button" className="btn btn-primary">Primary</button> */}

               {/* <div className='banner-icons'>
               <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
  <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
</svg>
               
               </div> */}
            </section>
            <section className='content-title'>
                <div>
                    <h2>What I do</h2>
                    <p class="content-title-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </section>

            <div className='professional'>
                <div className='col-4'>
                    {/* <img src={require("./")}/> */}
                    <div>
                        <p class="title">Working Hard</p>
                        <p className='professional-para'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        </p>
                    </div>

                    <div>
                        <p class="title">UI/UX Design</p>
                        <p className='professional-para'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        </p>
                    </div>
                    <div>
                        <p class="title">Web Design</p>
                        <p className='professional-para'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        </p>
                    </div>
                    <div>
                        <p class="title">Web Development</p>
                        <p className='professional-para'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        </p>
                    </div>
                </div>

            </div>

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

<section className='container-Skills'>

    <div className='myskill-box'>
        <h2>My skills</h2>
        <p>I value simple content structure, clean design patterns and thoughtful interactions.</p>
    </div>
    <div className='skillbox-para'>
        <div>
        <p style={{textAlign: "justify"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div className='skillbox-skills'>
        <p> HTML</p>
        
        <p>CSS</p>
        <p>Bootstrap</p>
        <p>React JS</p>
        </div>
        
    </div>
    <div className='skillbox-para'>
   
        {/* <div>
        <p>HTML</p>
        <p>CSS</p>
        <p>Bootstrap</p>
        <p>React JS</p>
        </div>
         */}
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

{/* -------------------- Working Experience--------------------------- */}

<section className='Working-Experience'>

{/* <div class="working-experience-title"> */}
    <h2>Working Experience</h2>
        <p>I value simple content structure, clean design patterns and thoughtful interactions.</p>
        {/* </div> */}
    <div className='w-experience-col-4'>
    <div>
                        <p class="w-experience-no-title">0021</p>
                        <p class="w-experience-text">Web Design Completed</p>
                    </div>

                    <div>
                        <p class="w-experience-no-title">0040</p>
                        <p class="w-experience-text">UI/UX Design Done</p>
                    </div>
                  

                    </div>
</section>
{/* ------------------------Service List-------------------------------------- */}

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
{/* --------------------------------------Testimonials----------------------------------------- */}

<section className='testimonials'>
    <div className='testimonials-title'>
    <h2>Testimonials</h2>
        <p>I value simple content structure, clean design patterns and thoughtful interactions.</p>

    </div>
    <p className='testimonial-quotes'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    <br></br>-Nivethitha U<br></br></p>

</section>
{/* ------------------------------------My Blog--------------------------------------------- */}

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
{/* --------------------------contact----------------------------------------- */}

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

        </div>
    )
}
export default Home