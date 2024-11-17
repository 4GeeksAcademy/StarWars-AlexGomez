import React, { useState, useEffect, useContext } from 'react'; 
import { Context } from '../store/appContext';
import  Intro  from '../component/Intro.jsx';
import AsideMenu from '../component/AsideMenu.jsx';
import { People } from '../component/People.jsx';
import { Cards } from '../component/Cards.jsx';



export const Home = () => {

	const { store, actions } = useContext(Context);
return(
		<>
			<div className="container">	
				
				{store.intro?<Intro/>:null}
				{!store.intro?<AsideMenu/>:null}
				{!store.intro?<><Cards/></>:null}
			</div>
		</>
		
	)
};
