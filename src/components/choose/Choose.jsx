import React from 'react';
import '../../scss/components/_choose.scss';
import Budgeting from '../../assets/img/icon-budgeting.svg';
import Onboarding from '../../assets/img/icon-onboarding.svg';
import Online from '../../assets/img/icon-online.svg';
import Api from '../../assets/img/icon-api.svg';

const Choose = () => {
  return (
    <section className='choose section'>
        <div className="choose-container container">
            <div className="choose-data">
                <h2 className='choose-title'>Why choose Easybank?</h2>
                <p className='choose-description'>We leverage Open Banking to turn your bank account into your financial hub. Control 
                    your finances like never before.</p>
            </div>

            <div className="choose-services-container">
                <div className="choose-services-card">
                    <img src={Online} alt="online banking" className='choose-services-photo'/>
                    <h3 className='choose-services-title'>Online Banking</h3>
                    <p className='choose-services-description'>Our modern web and mobile applications allow you to keep track of your finances 
                        wherever you are in the world.</p>
                </div>

                <div className="choose-services-card">
                    <img src={Budgeting} alt="budgeting" className='choose-services-photo'/>
                    <h3 className='choose-services-title'>Simple Budgeting</h3>
                    <p className='choose-services-description'>See exactly where your money goes each month. Receive notifications when you’re 
                        close to hitting your limits.</p>
                </div>

                <div className="choose-services-card">
                    <img src={Onboarding} alt="onboarding" className='choose-services-photo'/>
                    <h3 className='choose-services-title'>Fast Onboarding</h3>
                    <p className='choose-services-description'>We don’t do branches. Open your account in minutes online and start taking control 
                        of your finances right away.</p>
                </div>

                <div className="choose-services-card">
                    <img src={Api} alt="api" className='choose-services-photo'/>
                    <h3 className='choose-services-title'>Open API</h3>
                    <p className='choose-services-description'>Manage your savings, investments, pension, and much more from one account. Tracking 
                        your money has never been easier.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Choose;