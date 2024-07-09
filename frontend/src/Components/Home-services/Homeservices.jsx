import React from 'react'
import freeship from '../../homeslickimg/free-shipping-icon-1.webp'
import securepay from '../../homeslickimg/Secure Payment.png'
import customercare from '../../homeslickimg/customerservice.webp'
import './Homeservices.css'

const Homeservices = () => {
  return (
    <div>
      <div className='services'>
          <div >
            <h1 className='services-head'>SERVICES</h1>
            <p className='services-context'>Our website offers a range of services to ensure a safe and convenient shopping experience for our customers. We Provide secure payment options, safe shipping to ensure that your purchases arrive at you doorstem without any hassle. Shop with confidence knowing that your satisfaction is our top priority.</p>
            <div>
              <div className="grid-container">
                <div className="grid-item">
                  <img src={freeship} alt=""/>
                  <div className="content-new">
                    <h2 className='tit'>Free Shipping and Returns</h2>
                    <p>we offer a hassle-free shipping and return policy of up to 15 days.</p>
                  </div>
                </div>
                <div className="grid-item">
                  <img src={securepay} alt=""/>
                  <div className="content-new">
                    <h2 className='tit'>Secured Payments</h2>
                    <p>With our secure payment gateway you can rest assured that your transactions are safe and secure.</p>
                  </div>
                </div>
                <div className="grid-item">
                  <img src={customercare} alt=""/>
                  <div className="content-new">
                    <h2 className='tit'>Customer Service</h2>
                    <p>If you have any questions or concerns please don't hesitate to contact us. Our team is available 24/7 to assist you :)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
    </div>
  )
}

export default Homeservices
