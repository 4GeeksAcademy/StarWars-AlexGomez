import React,{useContext} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import  {Home}  from "./views/home";
import { Description } from "./views/Description.jsx";
import injectContext from "./store/appContext";
import { Navbar } from "./component/Navbar.jsx";
import { Context } from "./store/appContext.js";


const Layout = () => {
	
	const { store, actions } = useContext(Context);
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
				 {!store.intro?<Navbar />:null} 
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/home" element={<Home />} />
							<Route path="/Description/:id" element={<Description />} />
							<Route path="*" element={<h1>Not found!</h1>} />
						</Routes>
	
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
