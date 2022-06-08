import React from 'react';
import styled from "styled-components";
import Section from './Section';
import modelS from "./images/model-s.jpg";
import modelY from "./images/model-y.jpg";
import model3 from "./images/model-3.jpg";
import modelX from "./images/model-x.jpg";
import accessories from "./images/accessories.jpg"
import solarP from './images/solar-panel.jpg';
import solarR from './images/solar-roof.jpg';

function Home() {
  return (
    <Container>
        <Section 
        title="Model S"
        description="Order Online for Touchless Delivery"
        backgroundImg={modelS}
        leftBtnText="Custom order"
        rightBtnText="Existing Inventory"
        />
        <Section 
        title="Model Y"
        description="Order Online for Touchless Delivery"
        backgroundImg={modelY}
        leftBtnText="Custom order"
        rightBtnText="Existing Inventory"
        />
        <Section 
        title="Model 3"
        description="Order Online for Touchless Delivery"
        backgroundImg={model3}
        leftBtnText="Custom order"
        rightBtnText="Existing Inventory"
        />
        <Section 
        title="Model X"
        description="Order Online for Touchless Delivery"
        backgroundImg={modelX}
        leftBtnText="Custom order"
        rightBtnText="Existing Inventory"
        />
        <Section 
        title="Lowest Cost Solar Panels in America"
        description="Money-back guarantee"
        backgroundImg={solarP}
        leftBtnText="Order now"
        rightBtnText="Learn more"/>
        <Section 
        title="Solar for New Roofs"
        description="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
        backgroundImg={solarR}
        leftBtnText="Order now"
        rightBtnText="Learn more"/>
        <Section 
        title="Accessories"
        description=""
        backgroundImg={accessories}
        leftBtnText="Shop now"
        />
    </Container>
  )
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;