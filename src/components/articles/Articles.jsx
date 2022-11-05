import React from 'react';
import '../../scss/components/_articles.scss';
import Confetti from '../../assets/img/image-confetti.jpg';
import Currency from '../../assets/img/image-currency.jpg';
import Plane from '../../assets/img/image-plane.jpg';
import Restaurant from '../../assets/img/image-restaurant.jpg';

const Articles = () => {
  return (
    <section className='articles section' id='articles'>
        <h2 className='articles-title'>Latest Articles</h2>
        <div className="articles-container container grid">

            <div className="articles-data-card">
                <img src={Currency} alt="currency" className='articles-data-img'/>
                <div className="articles-data-info">
                    <span className='articles-data-author'>By Claire Robinson</span>
                    <h3 className='articles-data-title'>Receive money in any currency with no fees</h3>
                    <p className='articles-data-description'>The world is getting smaller and we’re becoming more mobile. So why should you be 
                        forced to only receive money in a single …</p>
                </div>
            </div>

            <div className="articles-data-card">
                <img src={Restaurant} alt="restaurant" className='articles-data-img'/>
                <div className="articles-data-info">
                    <span className='articles-data-author'>By Wilson Hutton</span>
                    <h3 className='articles-data-title'>Treat yourself without worrying about money</h3>
                    <p className='articles-data-description'>Our simple budgeting feature allows you to separate out your spending and set 
                        realistic limits each month. That means you …</p>
                </div>
            </div>

            <div className="articles-data-card">
                <img src={Plane} alt="plane" className='articles-data-img'/>
                <div className="articles-data-info">
                    <span className='articles-data-author'>By Wilson Hutton</span>
                    <h3 className='articles-data-title'>Take your Easybank card wherever you go</h3>
                    <p className='articles-data-description'>We want you to enjoy your travels. This is why we don’t charge any fees on purchases 
                        while you’re abroad. We’ll even show you …</p>
                </div>
            </div>

            <div className="articles-data-card">
                <img src={Confetti} alt="confetti" className='articles-data-img'/>
                <div className="articles-data-info">
                    <span className='articles-data-author'>By Claire Robinson</span>
                    <h3 className='articles-data-title'>Our invite-only Beta accounts are now live!</h3>
                    <p className='articles-data-description'>After a lot of hard work by the whole team, we’re excited to launch our closed beta. 
                        It’s easy to request an invite through the site ...</p>
                </div>
            </div>

        </div>
    </section>
  )
}

export default Articles;