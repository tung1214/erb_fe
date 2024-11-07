import React from 'react';
import Title from './Title';
import {tours} from '../data';

function Tours() {
  return (
    <section className="section" id="tours">
    <Title main_title='featured' sub_title='tours' />

    <div className="section-center featured-center">
      {/* <!-- first tour --> */}
      {tours.map((tour) => {
        return( 
        <article key={tour.id} className="tour-card">
        <div className="tour-img-container">
          <img src= {tour.image} className="tour-img" alt="" />
          <p className="tour-date">{tour.date}</p>
        </div>
        <div className="tour-info">
          <h4>{tour.title}</h4>
          <p>{tour.info}</p>
          <div className="tour-footer">
            <ul className="tour-footer-info">
              <li><i className="fa-solid fa-map"></i>{tour.location}</li>
              <li>{tour.duration}</li>
              <li>{tour.cost}</li>
            </ul>
          </div>
        </div>
      </article>)})}
      {/* <article className="tour-card">
        <div className="tour-img-container">
          <img src="./images/1.jpg" className="tour-img" alt="" />
          <p className="tour-date">Aug 26th, 2024</p>
        </div>
        <div className="tour-info">
          <h4>VIP beach</h4>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, quae!</p>
          <div className="tour-footer">
            <ul className="tour-footer-info">
              <li><i className="fa-solid fa-map"></i>Hong Kong</li>
              <li>12 hours</li>
              <li>from $12000</li>
            </ul>
          </div>
        </div>
      </article>
      {/* <!-- second tour --> */}
      {/* <article className="tour-card">
        <div className="tour-img-container">
          <img src="./images/2.jpg" className="tour-img" alt="" />
          <p className="tour-date">Aug 26th, 2024</p>
        </div>
        <div className="tour-info">
          <h4>Relax beach</h4>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, quae!</p>
          <div className="tour-footer">
            <ul className="tour-footer-info">
              <li><i className="fa-solid fa-map"></i>Hong Kong</li>
              <li>3 hours</li>
              <li>from $7500</li>
            </ul>
          </div>
        </div>
      </article> */}
      {/* <!-- third tour --> */}
      {/* <article className="tour-card">
        <div className="tour-img-container">
          <img src="./images/3.png" className="tour-img" alt="" />
          <p className="tour-date">Aug 26th, 2024</p>
        </div>
        <div className="tour-info">
          <h4>Garden beach</h4>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, quae!</p>
          <div className="tour-footer">
            <ul className="tour-footer-info">
              <li><i className="fa-solid fa-map"></i>Hong Kong</li>
              <li>1.5 hours</li>
              <li>from $4500</li>
            </ul>
          </div>
        </div>
      </article> */}
      {/* <!-- four tour --> */}
      {/* <article className="tour-card">
        <div className="tour-img-container">
          <img src="./images/4.png" className="tour-img" alt="" />
          <p className="tour-date">Aug 26th, 2024</p>
        </div>
        <div className="tour-info">
          <h4>Mountain beach</h4>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, quae!</p>
          <div className="tour-footer">
            <ul className="tour-footer-info">
              <li><i className="fa-solid fa-map"></i>Hong Kong</li>
              <li>6 hours</li>
              <li>from $9000</li>
            </ul>
          </div>
        </div>
      </article>  */}
    </div>
  </section>
  )
}

export default Tours