const fetchDetails = async (items, detailUrl) => {
  console.log(items);
  
    const promises = items.map(async item => {
      const response = await fetch(`${detailUrl}/${item.uid}`);
      if (!response.ok) throw new Error("La respuesta de la red no fue correcta (4 fetchDetails)");
      const data = await response.json();
      return data.result.properties;
    });
  
    return await Promise.all(promises);
  };
  
  export default fetchDetails;
  