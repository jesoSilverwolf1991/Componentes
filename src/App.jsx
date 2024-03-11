
import './index.css'
import './components/SaludoSimple'
import SaludoSimple from './components/SaludoSimple'
import Nombre from './components/Nombre'
import ListaSimple from './components/ListaSimple'
import Boton from './components/Boton'
import CalculadoraSimple from './components/CalculoSimple'
import HoraActual from './components/HoraActual'
import Articulo from './components/Articulo'
import Contador from './components/Contador'
import MensajeConEstilo from './components/MensajeConEstilo'
import ListaDeNombres from './components/ListaDeNombres'


function App() {


  return (
    <>
      <SaludoSimple/>
      <Nombre/>
      <ListaSimple/>
      <Boton/>
      <CalculadoraSimple/>
      <HoraActual/>
     <Articulo titulo='Ultima noticias: Warner Bros. Discovery cierra Rooster Teeth, el estudio de animación de RWBY y Gen:Lock 'mensaje='El estudio de animación en Internet con sede en Austin, Texas, Rooster Teeth, propiedad de Warner Bros. Discovery, se cerrará después de 21 años. El gerente general Jordan Levin anunció el cierre de los estudios en una reunión con todas las manos y una carta de acompañamiento el miércoles 6 de marzo.'/>
    <Contador/>
    <MensajeConEstilo />
   <ListaDeNombres nombres={['Diana Fernanda','Michael Ferrero','Dylan Cruz,','Penelope Diaz']}/>
   
    </>
  )
}

export default App
