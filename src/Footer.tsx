import React from 'react';

export const Footer = () => {
    return (
        <footer className="footer bg-dark py-4 position-absolute text-white w-100">
            <div className="container d-flex justify-content-center">
                {/*<ContactForm/>*/}
                Still need to do:

                <ul className="mb-0">
                    <li>Authorization</li>
                    <li>Search</li>
                    <li>Episodes</li>
                    <li>Add slider?</li>
                    <li>Lazy images?</li>
                </ul>
            </div>
        </footer>
    );
};