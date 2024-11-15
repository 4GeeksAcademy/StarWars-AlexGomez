
import React from 'react'
import { createRoot } from 'react-dom/client'
import "../styles/index.css";
import "../styles/Intro.css";
import "../styles/Responsive.css";
import "../styles/Navbar.css";
import "../styles/AsideMenu.css";
import "../styles/Card.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import Layout from './layout.js'

const root = createRoot(document.querySelector("#app"))
root.render(<Layout />)
