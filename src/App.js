import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting="Bienvenido a mi tienda en línea!" />
    </div>
  );
}
export default App;