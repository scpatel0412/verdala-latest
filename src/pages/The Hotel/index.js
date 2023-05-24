import React from 'react'
import * as developementStyle from "./theHotel.module.scss";
import Hotelimg1 from '../../images/hotel-img-1.png'
import Hotelimg2 from '../../images/hotel-img-2.png'
import Hotelimg3 from '../../images/hotel-img-3.png'
import Hotelimg4 from '../../images/hotel-img-3.png'
const TheHotel = () => {
  return (
    <>
      <div className={`${developementStyle.rabatandadinaSec}`}>
        <div className={`${developementStyle.rabatandadina_inner}`}>
          <div className={`${developementStyle.rabatandadina_left}`}>
            <div className={`${developementStyle.count_col}`} >
              <span className={`${developementStyle.count_number}`}>01</span>
              <p className={`${developementStyle.count_title}`}>5-Star Hotel service</p>
            </div>
          </div>
          <div className={`${developementStyle.rabatandadina_right}`}>
            <div>
              <h2 className={`${developementStyle.innerpage_h2}`}>YOUR HIDEAWAY</h2>
              <p className="">
                Designed from the ground up to be the island’s most luxurious wellness sanctuary, the Verdala Hotel offers a meticulously curated menu of therapies that blend ancient healing wisdom with the latest philosophies in fitness, beauty, and nutrition.
                As a resident of the Verdala Terraces, you’ll enjoy privileged access to personalised spa experiences and therapies, ensuring a truly rejuvenating and unforgettable experience. Reawaken your senses and rekindle your connection to nature.
              </p>

            </div>
          </div>
        </div>

        <div className={`${developementStyle.rabatandadina_bottom_inner}`}>
          <div className={`${developementStyle.rabatandadina_bottom_left}`}>
            <div className="" >
              <img src={Hotelimg1} />
            </div>
            <div className="">
              <img src={Hotelimg2} alt="" />
            </div>
          </div>
          <div className={`${developementStyle.rabatandadina_bottom_right}`}>
            <div className="" >
              <img src={Hotelimg3} />
            </div>
          </div>
        </div> 
      </div>
      <div className={`${developementStyle.services_apartment_sec}`}>
        <div className={`${developementStyle.services_apartment_inner}`}>
          <div className={`${developementStyle.services_apartment_left}`}>
            <img src={Hotelimg4} />
          </div>
          <div className={`${developementStyle.services_apartment_right}`}>
            <div className={`${developementStyle.services_apartment_subtitle}`}>
              services apartments
            </div>
            <div className={`${developementStyle.services_apartment_right_content}`}>
              <h2 className='innerpage_h2'>FIND YOUR INNER BALANCE</h2>
              <p>Our luxury serviced apartments offer a range of high-end services, making them the
                right choice for accommodating your overseas guests. With spacious living areas,
                fully equipped kitchens, and luxurious bedrooms and bathrooms, your guests will enjoy
                a comfortable and relaxing stay.</p>
              <p> Additionally, our concierge service,
                5-star hotel service, and on-site security staff ensure that all their needs are taken care of at all times.</p>
              <p> THE ULTIMATE GUEST ACCOMODATION</p>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default TheHotel