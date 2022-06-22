import PropertyCard from "./components/users/common/property-card/PropertyCard";
import SearchBar from "./components/users/home/search/searchbar";
import StatusBar from "./components/users/home/search/status-bar";
import CustomRoutes from "./router/custom-routes";


function App() {
  return (
    <div className="App">
   
      <StatusBar/>
      <SearchBar/>
        <CustomRoutes/>
     
    </div>
  );
}

export default App;
