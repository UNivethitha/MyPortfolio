import React from 'react'

const Skill =( )=>{

    return(
        <div>

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

                {/* <h1>Our Skills</h1> */}
        </div>
    )
}
export default Skill