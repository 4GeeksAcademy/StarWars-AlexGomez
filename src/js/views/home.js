import React, { useState, useEffect, useContext } from 'react'; 
import { Context } from '../store/appContext';
import { People } from "../component/People.jsx";
import { Planets } from "../component/Planets.jsx";
import { Vehicles } from "../component/Vehicles.jsx";
import Search from '../component/search.jsx';


export const Home = () => {
	 const { store, actions } = useContext(Context); 
	 const [isDataLoaded, setIsDataLoaded] = useState(false); 
	 useEffect(() => { 
		const checkData = () => { 
			if ( store.people && store.planets && store.vehicles && store.infopeople && store.infoplaneta && store.infoVehicles && store.people.length > 0 && store.planets.length > 0 && store.vehicles.length > 0 && store.infopeople.length > 0 && store.infoplaneta.length > 0 && store.infoVehicles.length > 0 ) {
				 setIsDataLoaded(true); 
				} };
				 checkData(); 
				 const intervalId = setInterval(checkData, 500);
				  
				  return () => clearInterval(intervalId); 
				}, [store]); if (!isDataLoaded) { 
					return <div style={{ textAlign: 'center', marginTop: '20px' }}><img width={"50%"} height={"50%"} src="https://media1.tenor.com/images/87058114d20205df7cd9f84c2125992a/tenor.gif?itemid=9638892" alt=''/></div>;}

return(
	<>
		<div className="container">	
				<Search />	
				<People />
				<Planets />
				<Vehicles/>	
		</div>
	</>)
};
