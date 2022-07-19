import React from 'react';
import { Link } from 'react-router-dom';
/**
 * The home page
 * @returns 
 */
const Home = ()=>{
    return (
        <>
        <div className='container my-4' >
        <div className="jumbotron jumbotron-fluid ">
        <div className="container">
          <h1 className="display-4">Discite Survey</h1>
          <p className="lead"><b style={{color: 'blue'}}>Sign in with Google</b> to save your progress</p>
        </div>
      </div>
      </div>
      <div className='container my-4'>
         <Link to='/surveys'>Next</Link>
      </div>
      </>
    );
}

export default Home;