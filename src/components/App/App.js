import './App.css';
import arrow from '../../images/svg/Arrow.svg';
import homes_guests_loves_array from "../../constants/homes_guests_loves_array";
import PlaceElement from "../PlaceElement/PlaceElement";
import Arrow from "../Arrow/Arrow";
import Title from "../Title/Title";

function App() {
  return (
    <div className="App">
      <section className="homes">
        <div className="container homes__container">
          <Title textContent="Homes guests loves"/>


          <div className=".places__flex-container col-12" id="homes_flex-container">
            <Arrow id="places__arrow-prev"/>
            {homes_guests_loves_array.map( item =>
                <PlaceElement key={item.id} imageUrl={item.imageUrl} name={item.name} country={item.country} city={item.city} />,
            )}
            <Arrow id="places__arrow-next"/>
          </div>


        </div>

      </section>
    </div>
  );
}

export default App;
