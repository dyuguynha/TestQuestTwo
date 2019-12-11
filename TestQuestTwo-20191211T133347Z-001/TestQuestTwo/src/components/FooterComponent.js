import React, { Component } from "react";

/**
 *  Footer Component
 */
export default class FooterComponent extends Component {

  render() {
    return (
     
     <div className='container-fluid footer mt-27'>
        <div className='row ml-5 pt-4 justify-content-md-center'>
          <div className='col-xs-1 col-lg-5 col-xl-6'>
            <p className='text-white a1'>
              Footer do site da prova
            </p>
          </div>
        </div>
        <hr className='footer-line' />
        <div className='text-center text-white py-3'>
          <span>
            Rodapé do site feito para Prova
          </span>
        </div>
      </div>
    );
  }
}
