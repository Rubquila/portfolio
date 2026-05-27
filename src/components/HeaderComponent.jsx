import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/HeaderComponent.css';

export const HeaderComponent = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <span className="logo-icon"></span>
        </div>
        <nav className="nav">
          <NavLink to="/" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>Inicio</NavLink>
          <NavLink to="/aboutme" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>Sobre Mí</NavLink>
          <NavLink to="/projects" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>Proyectos</NavLink>
          <NavLink to="/articles" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>Anotaciones</NavLink>
          <NavLink to="/printingmodels" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>Impresión 3D</NavLink>
          <NavLink to="/curriculum" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>Currículum</NavLink>
          {/* <NavLink to="/trails" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>Rutas</NavLink> */}
        </nav>
      </div>
    </header>
  );
};
