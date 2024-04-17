import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaHome, FaAddressBook, FaBriefcase, FaCogs, FaChevronRight, FaShoppingCart, FaCubes, FaWrench, FaUsers, FaChartLine, FaBoxes } from 'react-icons/fa';
import DynamicContent from './DynamicContent';
import { Link } from 'react-router-dom';

interface SidebarProps {
  collapsed: boolean;
}

const Sidebar = styled.div<SidebarProps>`
  height: 100%;
  width: ${({ collapsed }) => (collapsed ? '80px' : '200px')};
  position: fixed;
  top: 0;
  left: 0;
  background-color: #e0e0e0; /* Reduced brightness for background color */
  overflow-x: hidden;
  transition: width 0.5s;
`;

const SidebarHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  color: #333; /* Darker text color */
`;

const SidebarNav = styled.div`
  padding-top: 20px;
`;

const Nav = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const NavLink = styled(Link)<{ active: boolean }>`
  display: block;
  align-items: center;
  padding: 10px 20px;
  color: ${({ active }) => (active ? '#ff0000' : '#fff')}; /* Red color for active route */
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ccc; /* Slightly darker background on hover */
  }
`;

const NavSubLink = styled.a<{ active: boolean; visible: boolean }>`
  display: ${({ visible }) => (visible ? 'block' : 'none')};
  align-items: center;
  padding: 10px 20px;
  color: ${({ active }) => (active ? '#ff0000' : '#fff')}; /* Red color for active sublink */
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ccc; /* Slightly darker background on hover */
  }
`;

const NavTitle = styled.span<{ collapsed: boolean }>`
  display: ${({ collapsed }) => (collapsed ? 'none' : 'inline')};
`;

const Navbar = styled.nav<{ sidebarWidth: string }>`

  margin-left: ${({ sidebarWidth }) => sidebarWidth};
  transition: margin-left 0.5s;
  background-color: #e0e0e0; /* Reduced brightness for background color */
  color: #333; /* Darker text color */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;

const Links = styled.div`
  display: flex;
  align-items: center;
`;

const NavbarLink = styled(Link)`
  color: #fff; /* White text color */
  text-decoration: none;
  margin-right: 20px;
`;

const AuthLinks = styled.div`
  display: flex;
  align-items: center;
`;

const AuthLink = styled.a`
  color: #fff; /* White text color */
  text-decoration: none;
  margin-left: 20px;
`;

const HideButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 5px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const NavbarSkelet = ({ children }: React.PropsWithChildren) => {
  const [activeRoute, setActiveRoute] = useState('');

  const [collapsed, setCollapsed] = useState(false);
  const sidebarWidth = collapsed ? '80px' : '200px';
  const [sublinkVisible, setSublinkVisible] = useState({
    works: false,
    services: false,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };


  const handleSublinkHover = (section: string, isVisible: boolean) => {
    setSublinkVisible((prevState) => ({
      ...prevState,
      [section]: isVisible,
    }));
    setActiveRoute(section);
  };
  
  return (
    <>
      <Navbar sidebarWidth={sidebarWidth}>
        <HideButton onClick={toggleSidebar}>
          Hide
        </HideButton>
        <Links>
          <NavbarLink to="/">Home</NavbarLink>
          <NavbarLink to="/contacts">Contacts</NavbarLink>
          <NavbarLink to="/TestAllBeauty">All Functions</NavbarLink>
        </Links>
        <AuthLinks>
          <AuthLink href="#">Login / Signup</AuthLink>
          <AuthLink href="#">Logout</AuthLink>
        </AuthLinks>
      </Navbar>
      <Sidebar collapsed={collapsed}>
        <SidebarHeader>Logo</SidebarHeader>
        <SidebarNav>
          <Nav>
            {/* Nav links and sublinks */}
          </Nav>
        </SidebarNav>
      </Sidebar>

      <DynamicContent sidebarWidth={sidebarWidth}>
        {children}
      </DynamicContent>
    </>
  );
};

export default NavbarSkelet;
