import React from 'react';
import ReactDOM from 'react-dom/client';
import './Nivethitha/index.css';
// import './index.css';
// import Inputbox from './inputbox';
// import mastercard_text_ from './mastercard_text_.png';
// import App from './btnclick_input';
// import InputAdder from './Input_four';
// import Input from './checkbox';
// import App from './App';
// import Demo from './memo/demo';
import reportWebVitals from './reportWebVitals';
// import { Layout } from './Layout/Layout';
// import { Home } from './Layout/Home';
// import { About } from './Layout/About';
// import { Blogs } from './Layout/Blogs';
// import { Contact } from './Layout/Contact';
// ---------------------
import { Route, Routes} from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Layout from './Nivethitha/Layout';
import Skill from './Nivethitha/Skill';
import Education from './Nivethitha/Education';
import Home from './Nivethitha/Home';
import About from './Nivethitha/About';
import Blog from './Nivethitha/Blog';
import Service from './Nivethitha/Service';
import Contact from './Nivethitha/Contact';
// -----------
// import Api from './Map_api';
// import Greeting from './Greeting/Greeting';
//  import Mailbox from './Greeting/logic';
// import UseCallback from './usecallback';
// import UseCallback from './Usecallbackhook';
// import Cr from './check_rotate';
// import Cr from './card';
// import Flipcard from './flipcard';
// import { store } from './store';
// import { Provider } from 'react-redux';
// import Counter from './action';
// import { useRef } from 'react';
// import Randomcolor from './Useref';
// import Btn from './button_input';
// import Flipcard_input from './Flipcard_input'






  // const messages = ['Java', 'React', 'Python', 'SQL'];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 

  <React.StrictMode>
      {/* <Provider store ={store}>
      <Counter/>
      </Provider> */}
      
   {/* <Randomcolor/> */}
{/* <UseCallback/> */}
    {/* <Cr/>  */}
    {/* <Flipcard/> */}
    {/* <Input/> */}
    {/* <Inputbox/> */}
    {/* <Btn/> */}
    {/* <Flipcard_input/> */}

    {/* <App/> */}
    {/* <InputAdder/> */}
    {/* <UseCallback/> */}
    
    {/* <Greeting isLoggedIn = {false}/> */}
    
    {/* <Mailbox unreadMessages={messages}/> */}
    
   
    {/* <App/> */}
    {/* <Demo/> */}
   
    {/* <BrowserRouter>
      <Routes>

        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='About' element={<About/>}/>
            <Route path='Blogs' element={<Blogs/>}/>
              <Route path='Contact' element={<Contact/>}/>

              
        </Route>
      </Routes>


    </BrowserRouter> */}

     <BrowserRouter>
      <Routes>

        <Route path='/' element={<Layout/>}/>
          <Route index element={<Home/>}/>
          {/* <Route index element={<Copy/>}/> */}
          <Route path='About' element={<About/>}/>
          <Route path='Skill' element={<Skill/>}/>
          <Route path='Education' element={<Education/>}/>
            <Route path='Blog' element={<Blog/>}/>
            <Route path='Service' element={<Service/>}/>
              <Route path='Contact' element={<Contact/>}/>            
        <Route/>
      </Routes>
    </BrowserRouter>


      {/* <Api/> */}




    {/* <App /> */}
   </React.StrictMode>
 );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
