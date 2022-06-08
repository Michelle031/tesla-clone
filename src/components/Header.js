import React, { useState } from 'react';
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { selectCars } from "../features/car/carSlice";
import {useSelector} from "react-redux";
import  logo  from './images/logo.svg';

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const cars = useSelector(selectCars);
  return (
    <Container>
     <a href='./'>
       <img src={logo} alt='' />
     </a>
     <Menu>
       {cars && cars.map((car, index) => (
         <a key={index} href="./">{car}</a>
       ))}
     </Menu>
     <RightMenu>
       <a href='./'>Shop</a>
       <a href="./">Tesla Account</a>
       <CustomIcon onClick={() => setBurgerStatus(true)}/>
     </RightMenu>
     <BurgerNav show={burgerStatus}>
       <CustomClose onClick={() => setBurgerStatus(false)}/>
       {cars && cars.map((car, index) => (
         <li><a key={index} href="./">{car}</a></li>
       ))}
       <li><a href='./'>Existing Inventory</a></li>
       <li><a href='./'>Used Inventory</a></li>
       <li><a href='./'>Trade-in</a></li>
       <li><a href='./'>Cybertruck</a></li>
       <li><a href='./'>Roadster</a></li>
     </BurgerNav>
    </Container>
  )
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  padding: 0 20px;
  justify-content: space-between;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  a{
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a{
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }
`;

const CustomIcon = styled(GiHamburgerMenu)`
  cursor: pointer;
  height: 40px;
  
`;
const BurgerNav = styled.div`
  position:fixed;
  top:0;
  bottom: 0;
  right:0;
  background-color: white;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform : ${props => props.show ? "translateX(0)": "translateX(100%)"};
  
  transition: transform 0.3s ease-in;

  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0,0,0,0.2);
    a{
      font-weight: 600;
    }
  }
`;

const CustomClose = styled(AiOutlineClose)`
  position: fixed;
  top: 20px;
  right: 20px;
  cursor: pointer;
`;