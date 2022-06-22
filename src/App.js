import AdvanceSearch from "./components/users/home/search/advance-search";
import SearchBar from "./components/users/home/search/searchbar";
import StatusBar from "./components/users/home/search/status-bar";


function App() {
  return (
    <div className="App">
      <StatusBar/>
      <SearchBar/>
      <AdvanceSearch/>
    </div>
  );
}

export default App;
