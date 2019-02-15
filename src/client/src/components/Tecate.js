import React, { Component } from 'react';
import Head from './global/Head'
import { Tab, Tabs } from 'react-tabify';
import Typography from '@material-ui/core/Typography';
import CreatePost from './post'

const Card = {
    background: "white",
    height: "400px",
    width: "300px",
    position: "fixed",
    top: "10vh",
    left:"4vw",
    display: "block",
    margin: "0 auto",
    fontSize: "20px",
    fontWeight: "700",
    textAlign: "center",
    padding: "40px",
    borderRadius:"5px",
    boxShadow:"0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2)",
}

const Card2 = {
    background: "white",
    height: "560px",
    width: "750px",
    position: "fixed",
    top: "10vh",
    left:"35vw",
    display: "block",
    margin: "0 auto",
    fontSize: "15px",
    fontWeight: "600",
    textAlign: "left",
    padding: "40px",
    borderRadius:"5px",
    boxShadow:"0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2)",
    overflowY: 'auto'
}

const Container = {
  width: "100%",
  height: "calc( 100vh - 50px)",
}

var imageName = require('./Te.jpg')

class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeKey: 0
    };
  }

  handleTabSelect = activeKey => {
     this.setState({ activeKey });
   };

  render() {
    return (

      <div className="App">

        <header>
          <Head/>
        </header>

        <div style={Container}>
          <div style={Card}>
            <img src={imageName} alt="Tecate" height="150" />
            <br /><br />
            <label>Tecate</label>
          </div>

          <div style={Card2}>

              <Tabs activeKey={this.state.activeKey} onSelect={this.handleTabSelect}>

                <Tab label="Historia"><Typography paragraph></Typography><Typography paragraph>
                  Por decreto del Presidente Benito Juárez se crea la colonia agrícola Tecate y años después, en 1919, se levanta
                  el primer plano urbano a cargo del ingeniero Luis Pavón. Sólo queda el testimonio del franciscano Francisco Garcés
                  (Diario fechado en Tubutama el 3 de enero de 1777) sobre la primitiva población de indígenas y los pequeños grupos
                  sobrevivientes en las localidades de Las Juntas de N"ji (Nejí) y de Ku"at asentadas en la región central del norte
                  de Baja California. El nombre de Tecate aparece en los libros de registro de la misión de San Diego de Alcalá,
                  fundada por Fray Junípero Serra en 1769 como una estación o lugar de descanso. </Typography><Typography paragraph> Se ignora
                  hasta la actualidad el significado real de Tecate (existen varias versiones) y solamente se sabe que sus pobladores
                  indígenas lo llamaron así; sin embargo, Antonio Cuero, patriarca de la tribu Manteca, confirma en 1954 que el nombre
                  nació de la deformación de Valle Zacate, y era el nombre que tenía el lugar cuando llegaron los primeros pobladores
                  blancos. </Typography><Typography paragraph> En 1833 se otorgó a Juan Bandini, peruano de origen residente en San Diego, una
                  concesión de tierras que dio origen al rancho de Tecate. El presidente Benito Juárez, en 1863, crea por decreto la
                  colonia agrícola de Tecate con una superficie de 25,112 ha. Para 1870 Tecate era la segunda población del Municipio
                  de la Frontera. En 1900 tenía sólo 127 habitantes y 10 años más tarde, ascendió a 190. En 1915, se inauguró el
                  ferrocarril Tijuana-Tucson, por lo que Tecate quedó comunicado con Tijuana y Mexicali. Para estas fechas Tecate contaba
                  con una población de 400 personas y un poco más en el medio rural adyacente. Pero aun así el gobernador Esteban Cantú
                  constituyó el municipio hasta el 8 de marzo de 1917. A petición de los que constituyeron el primer Ayuntamiento, el
                  gobernador José Inocencio Lugo decretó la desaparición del municipio el 2 de enero de 1923, y su territorio se agregó
                  al de Mexicali. </Typography><Typography paragraph> El 15 de octubre 1925 se creó la municipalidad de Tijuana y se incorporó a
                  ella la jurisdicción de Tecate. Finalmente el 29 de diciembre de 1953 se constituye nuevamente el municipio, al amparo
                  de la Ley Orgánica decretada en esa fecha con cabecera en la ciudad del mismo nombre y las delegaciones Valle de la
                  Palmas y La Rumorosa.</Typography><Typography paragraph> Hoy más que nunca Tecate se une con fuerza a su pasado indígena, con sus
                  tres significados, revive con fuerza el dialecto de las tribu Kumiai recordando la "Tecata" nombre indígena de la corteza
                  de encino, o tan sólo la pai pai al considerarla "agua limpia", o finalmente "palo cortado". Indistintamente de su
                  significación, lo relevante es su pasado indígena, donde debe revivir en los tecatenses como signo diferencial en su
                  contexto bajacaliforniano y nacional. En este mismo sentido, resalta su pasado Misional remontando su nombre al Siglo
                  XVIII, así como su localización cultural en sus representaciones pictóricas rupestres en La Rumorosa.</Typography><Typography paragraph>
                  La Historia de Tecate, no es sólo importante por su relevancia en la formación bajacaliforniana, sino en el sinnúmero de
                  oportunidades que se presentan en su futuro inmediato. Esa historia se remonta en la Colonia a los libros de registro del
                  fray Junípero Serra en 1769 de la Misión de San Diego, donde Tecate estaba conformado por rancherías, tierras de pastoreo
                  y estaciones.</Typography><Typography paragraph> El siglo pasado fue escenario de un desarrollo de tierras de pastoreo, ganado y de
                  agricultura. En 1887 se forma la segunda colonia agrícola, donde se privilegiaba la fertilidad, clima benigno, humedad,
                  valles con posibilidad de buenos cultivos. En 1895 la cosecha se orientó al trigo, cebada, maíz, frijol, papa, ajos, paja
                  de trigo, legumbres y frutas (uvas); a su vez contaban con cabezas de ganado vacuno, caballar, lanar, cerdos y aves de
                  corral.</Typography><Typography paragraph> En 1917, la aspiración revolucionaria visualizó la constitución de un nuevo centro de
                  riqueza de México, principalmente en la agricultura, minería e industria, con su primera aparición de la Fábrica de Harinas.
                  Se consolidó en 1924 con el establecimiento de la fábrica de whisky de maíz (bourbon); en 1929 se estableció la Compañía
                  Manufacturera de Malta, S.A., cediendo los cultivos de trigo por los de malta, creando la Compañía Aceites Vegetales de
                  Tecate, S.A., industria extractiva que importaba copra; en 1940 se funda el rancho "La Puerta" y en 1943 se construyó la
                  Cervecería de Tecate, S.A. Así mismo, se instaló una embotelladora de aguas gaseosas. </Typography><Typography paragraph> Actualmente
                  la industria sobresaliente en la ciudad sigue siendo la Cervecera con dos plantas, los productos de barro diversos, la
                  elaboración de muebles finos, la herrería artística y las maquiladoras.</Typography><Typography paragraph> Personajes Ilustres: Juan
                  Bandini, Abraham Gilbert, Juan de Dios Ortega, Luis E. Torres, Estanislao Flores, Antonio Downey entre otros.
                </Typography></Tab>
                <Tab label="¿Qué hacer?"><Typography paragraph></Typography><Typography paragraph>
                   ✪ Viñedos:</Typography><Typography> Los viñedos en la puerta norte a la Ruta del Vino en Tecate se encuentran hacia el sur en
                  el Valle de las Palmas y Valle de Tanamá, y hacia el este en el Valle de San Valentiín. Puedes visitar las casas vinícolas
                  y conocer sobre el cultivo de la vid, la elaboración de los vinos, y su degustación. Los viñedos de Tecate ofrecen al visitante
                  una amplia gama de creadores de deliciosos vinos, así como en la época de la Vendimia se realiza también Fiestas de la Vendimia
                  en Tecate, eventos que no puedes perdértelos. Es por ello que sin duda, los Viñedos de Tecate son una experiencia ideal para
                  conocer en pareja o con toda la familia.</Typography><Typography paragraph> Sugerencias: </Typography><Typography> ROSA DE CASTILLA
                </Typography><Typography> <a href="https://www.facebook.com/vinicola.rosadecastilla">https://www.facebook.com/vinicola.rosadecastilla</a>
                </Typography><Typography paragraph></Typography><Typography> SAN VALENTIN</Typography><Typography paragraph>
                <a href="www.facebook.com/VinasSanValentin">www.facebook.com/VinasSanValentin</a></Typography><Typography paragraph>-</Typography>
                <Typography paragraph>  ✪ Atractivos locales:
                </Typography><Typography paragraph> Si quieres descubrir el por qué de la mención como "Pueblo Mágico" tienes que conocer sus antepasados
                y el lugar ideal para ello es nuestro Museo Comunitario; mismo que se divide en tres partes; la Prehistoria e Historia de los Kumiai,
                Época de Ranchos y Tecate en la Modernidad. </Typography><Typography paragraph> Un viaje a la historia y al presente. Imperdible una visita a este lugar. ¡Añádelo en tu
                itinerario! Este museo cuenta con una biblioteca regional especializada y única en el Estado con información de la historia de los
                diferentes municipios de Baja California, se puede accesar a los libros de manera gratuita. En el museo también se pueden encontrar
                muestras de cestería, cerámica, elementos de cacería y parte de un arco de flecha, una antigüedad encontrada en una cueva. </Typography> <Typography paragraph>
                ¡Conócelo y Sorpréndete!</Typography><Typography paragraph> MUSEO COMUNITARIO</Typography><Typography>TLALOC NO 40 COLONIA CUAUHTÉMOC (DENTRO DEL ÁREA
                DEL CECUTEC)</Typography><Typography>(665) 521-3191</Typography><Typography> museotecate@outlook.com </Typography><Typography paragraph>
                <a href="http://www.carem.org/museokumiai/">http://www.carem.org/museokumiai/</a>
                </Typography></Tab>
                <Tab label="Publicaciones"><Typography paragraph></Typography>
                  <CreatePost> </CreatePost>
                </Tab>
              </Tabs>
          </div>
        </div>

      </div>

    );

  }
}

export default Profile;