import React, { useEffect, useRef, useState, useContext } from "react";
import { Context } from "../store/appContext";
import logo from "../../img/logo.png";


const AsideMenu = () => {
  const sidebarRef = useRef(null);
  const sidebarLockBtnRef = useRef(null);
  const sidebarOpenBtnRef = useRef(null);
  const sidebarCloseBtnRef = useRef(null);
  const { store, actions } = useContext(Context);
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleClass = (index) => {
    setActiveIndex(index);
     actions.setIndex(index);
  };

  const toggleLock = () => {
    const sidebar = sidebarRef.current;
    const sidebarLockBtn = sidebarLockBtnRef.current;

    sidebar.classList.toggle("locked");
    if (!sidebar.classList.contains("locked")) {
      sidebar.classList.add("hoverable");
      sidebarLockBtn.classList.replace("bx-lock-alt", "bx-lock-open-alt");
    } else {
      sidebar.classList.remove("hoverable");
      sidebarLockBtn.classList.replace("bx-lock-open-alt", "bx-lock-alt");
    }
  };

  const hideSidebar = () => {
    if (sidebarRef.current.classList.contains("hoverable")) {
      sidebarRef.current.classList.add("close");
    }
  };

  const showSidebar = () => {
    if (sidebarRef.current.classList.contains("hoverable")) {
      sidebarRef.current.classList.remove("close");
    }
  };

  const toggleSidebar = () => {
    sidebarRef.current.classList.toggle("close");
  };

  useEffect(() => {
    const sidebar = sidebarRef.current;
    const sidebarLockBtn = sidebarLockBtnRef.current;
    const sidebarOpenBtn = sidebarOpenBtnRef.current;
    const sidebarCloseBtn = sidebarCloseBtnRef.current;

    if (window.innerWidth < 800) {
      sidebar.classList.add("close");
      sidebar.classList.remove("locked");
      sidebar.classList.remove("hoverable");
    }

    sidebarLockBtn.addEventListener("click", toggleLock);
    sidebar.addEventListener("mouseleave", hideSidebar);
    sidebar.addEventListener("mouseenter", showSidebar);
    sidebarOpenBtn.addEventListener("click", toggleSidebar);
    sidebarCloseBtn.addEventListener("click", toggleSidebar);

    return () => {
      sidebarLockBtn.removeEventListener("click", toggleLock);
      sidebar.removeEventListener("mouseleave", hideSidebar);
      sidebar.removeEventListener("mouseenter", showSidebar);
      sidebarOpenBtn.removeEventListener("click", toggleSidebar);
      sidebarCloseBtn.removeEventListener("click", toggleSidebar);
    };
  }, []);

  const menuItems = [
    { icon: "bx-film", text: "Films" },
    { icon: "bx-grid-alt", text: "Characters", actionText: "people" },
    { icon: "bx-planet", text: "Planets" },
    { icon: "bxs-magic-wand", text: "Species" },
    { icon: "bx-cloud-upload", text: "Starships" },
    { icon: "bxs-car", text: "Vehicles" },
    { icon: "bx-cog", text: "Setting" },
  ];
  useEffect(() => {
    const popup = document.getElementById("myPopup");
    popup.classList.add("show");
    setTimeout(() => {
      popup.classList.remove("show");
    }, 2000);
  }, []);


  return (
    <div className="col-3 col-lg-3 col-md-3"><div id="myPopup" 	 className="popup">Hello, options there</div>
    
      <nav ref={sidebarRef} className="sidebar locked">
        <div className="logo_items flex">
        
          <span className="logo_name">INFORMATIONS</span>
          <i
            className="bx bx-lock-alt"
            id="lock-icon"
            ref={sidebarLockBtnRef}
            title="Unlock Sidebar"
          ></i>
          <i
            className="bx bx-x"
            id="sidebar-close"
            ref={sidebarCloseBtnRef}
          ></i>
        </div>
        <div className="menu_container">
          <div className="menu_items">
            {menuItems.map((item, index) => (
              <ul key={index} className="menu_item">
                <li className="item">
                  <a
                    href="#"
                    onClick={() => { toggleClass(index); if (item.actionText) actions.getData(item.actionText.toLowerCase());else actions.getData(item.text.toLowerCase());}}
                    className={
                      activeIndex === index ? "active link flex" : "link flex"
                    }
                  >
                    <i className={`bx ${item.icon}`}></i>
                    <span>{item.text}</span>
                  </a>
                </li>
              </ul>
            ))}
          </div>
        </div>
      </nav>

      <nav className="navbar flex">
        <i className="bx bx-menu-alt-left" id="sidebar-open" ref={sidebarOpenBtnRef}></i>
      </nav>
    </div>
  );
};

export default AsideMenu;
