import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

// Keyframes for smooth elastic transitions
const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(-10px);
  }
`;

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #333;
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  margin: 0 10px;
  cursor: pointer;
`;

const DropdownMenu = styled.div<{ isOpen: boolean }>`
  position: inherit;
  top: 100%;
  left: 0;
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  animation: ${(props) => (props.isOpen ? fadeIn : fadeOut)} 0.3s ease-in-out forwards;
`;

const SubMenu = styled.ul`
  position:absolute;
  // min-widht:220px;
  list-style: none;
  padding: 0;
`;

const SubLink = styled.li`
  margin: 5px 0;
  background-color: #edeff2;
`;

const Navbar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  return (
    <NavContainer>
      <NavLink href="#">Link 1</NavLink>
      <NavLink href="#">Link 2</NavLink>
      <div onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
        <NavLink href="#">Dropdown</NavLink>
        <DropdownMenu isOpen={isDropdownOpen}>
          <SubMenu>
            <SubLink>Sublink 1</SubLink>
            <SubLink>Sublink 2</SubLink>
            <SubLink>Sublink 3</SubLink>
            <SubLink>
              Sublink with arrow
              <span>&#10148;</span>
              <ul>
                <li>Dropdown Link 1</li>
                <li>Dropdown Link 2</li>
                <li>Dropdown Link 3</li>
              </ul>
            </SubLink>
          </SubMenu>
        </DropdownMenu>
      </div>
      <NavLink href="#">Link 3</NavLink>
    </NavContainer>
  );
};

export default Navbar;
