import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
              <Helmet>
                <title>InventTech | error</title>
            </Helmet>
             <div className="container w-11/12 mx-auto text-center mt-12 text-5xl font-bold">
            <h2>Opps </h2>
            <p>Page not found!</p>
            <Link className='btn btn-primary'>Go Home</Link>
            </div>
            
        </div>
    );
};

export default ErrorPage;