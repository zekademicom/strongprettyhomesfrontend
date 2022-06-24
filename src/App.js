import { useEffect } from "react";
import { getProperties } from "./api/property-service";
import CustomRoutes from "./router/custom-routes";
import { useStore } from "./store";
import { setProperties } from "./store/property/propertyActions";


function App() {

  const {dispatchProperty} = useStore();

  const loadData = async () =>  { 
    try {
     let resp= await getProperties();
     dispatchProperty(setProperties(resp.data))
      console.log(resp.data)
      
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    loadData();
  }, []);
  

 
      
  return (
    <div className="App">
      
      <CustomRoutes/>

    </div>
  );

}

export default App;
