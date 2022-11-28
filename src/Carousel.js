import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import GTHomePage from "./GrowthToolsHomePage.jpg";
import GTBookingPage from "./GrowthToolsBookingPage.jpg";
import GTBookingThankYouPage from "./GrowthToolsBookingThankYou.jpg";
import GUModal from "./GUmodal.jpg";
import GUPartnerships from "./GUPartnerships.jpg";
import AppopticsHomeKeyFeatures from "./AppopticsHomeKeyFeatures.jpg";
import AppopticsIntegrations from "./AppopticsIntegrations.jpg";
import SolarWindsAppopticsHomeKeyFeatures from "./SolarWindsAppopticsHomeKeyFeatures.jpg";
import SolarWindsLibrato from "./SolarWindsLibrato.jpg";
import SolarWindsPapertrail from "./SolarWindsPapertrail.jpg";
import SolarWindsPingdom from "./SolarWindsPingdom.jpg";

export default class Carousel extends Component {
  render() {
    const settings = {
      arrows: true,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <SliderWrapper>
        <Slider {...settings}>
          <div>
            <h3>Growth Tools Home Page</h3>
            <img src={GTHomePage} alt="GTHomePage" />
          </div>
          <div>
            <h3>Growth Tools Booking Page</h3>
            <img src={GTBookingPage} alt="GTBookingPage" />
          </div>
          <div>
            <h3>Growth Tools Booking Thank You Page</h3>
            <img src={GTBookingThankYouPage} alt="GTBookingThankYouPage" />
          </div>
          <div>
            <h3>Growth University Modal</h3>
            <img src={GUModal} alt="GUModal" />
          </div>
          <div>
            <h3>Growth University Partnerships Page</h3>
            <img src={GUPartnerships} alt="GUPartnerships" />
          </div>
          <div>
            <h3>AppopticsHomeKeyFeatures</h3>
            <img src={AppopticsHomeKeyFeatures} alt="AppopticsHomeKeyFeatures" />
          </div>
          <div>
            <h3>AppopticsIntegrations</h3>
            <img src={AppopticsIntegrations} alt="AppopticsIntegrations" />
          </div>
          <div>
            <h3>SolarWindsAppopticsHomeKeyFeatures</h3>
            <img src={SolarWindsAppopticsHomeKeyFeatures} alt="SolarWindsAppopticsHomeKeyFeatures" />
          </div>
          <div>
            <h3>SolarWindsLibrato</h3>
            <img src={SolarWindsLibrato} alt="SolarWindsLibrato" />
          </div>
          <div>
            <h3>SolarWindsPapertrail</h3>
            <img src={SolarWindsPapertrail} alt="SolarWindsPapertrail" />
          </div>
          <div>
            <h3>SolarWindsPingdom</h3>
            <img src={SolarWindsPingdom} alt="SolarWindsPingdom" />
          </div>
        </Slider>
      </SliderWrapper>
    );
  }
}


const SliderWrapper = styled.div`
  margin-bottom: 10rem;
  background-color: whitesmoke;

  .slick-dots {
    top: 50px;
    bottom: none;
  }
  h3 {
    text-align: center;
  }
  img {
    margin: auto;
    margin-bottom: 3rem;
    margin-top: 4rem;
    width: 75rem;
  }
  .slick-arrow.slick-prev {
    position: relative;
    top: 25px;
    left: 0;
  }
  .slick-arrow.slick-next {
    position: absolute;
    top: 25px;
    right: 0;
  }
  
  .slick-prev::before, .slick-next::before {
    opacity: 1;
    color: black;
  }
}`;
