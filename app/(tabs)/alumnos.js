import { FlatList, View } from "react-native";
import { useEffect, useState } from "react";
import {List, TextInput, Text, Menu} from 'react-native-paper';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


export default function Alumnos(){
  
  const [alumnos, setAlumnos] = useState([]);
  
  const [buscaAlumno, setBuscaAlumno] = useState('');
  const [campoOrden, setCampoOrden] = useState('nombre');
  const [direccionOrden, setDireccionOrden] = useState('asc');
  const [menuCampoVisible, setMenuCampoVisible] = useState(false);
  const [menuDireccionVisible, setMenuDireccionVisible] = useState(false);
  
  const alumnosFiltrados = alumnos.filter(alumno => alumno.nombre.toLowerCase().includes(buscaAlumno.toLowerCase()) || alumno.matricula.includes(buscaAlumno));
  const alumnosFiltradosOrdenados = [...alumnosFiltrados].sort((a, b) => {
    const comparacion = campoOrden === 'nombre'
      ? a.nombre.localeCompare(b.nombre)
      : Number(a.matricula) - Number(b.matricula);

    return direccionOrden === 'asc' ? comparacion : -comparacion;
  });
  
  useEffect(()=> {
    setTimeout(()=>{
      setAlumnos([{
        
        nombre: 'CANDELARIA MORA SAMANTHA',
        
        matricula: '2114354'
        
      },
      
      {
        
        nombre: 'CANTU SILVA JAVIER',
        
        matricula: '2111889'
        
      },
      
      {
        
        nombre: 'CARMONA LOZANO ANGEL EMILIANO',
        
        matricula: '2069119'
        
      },
      
      {
        
        nombre: 'CASTILLO ACOSTA JORGE',
        
        matricula: '2132842'
        
      },
      
      {
        
        nombre: 'DAVILA GONZALEZ ALDO ADRIAN',
        
        matricula: '1994122'
        
      },
      
      {
        
        nombre: 'DURAN BARRIENTOS FABRIZIO',
        
        matricula: '2018230'
        
      },
      
      {
        
        nombre: 'FLORES GONZALEZ SEBASTIAN',
        
        matricula: '21045641'
        
      },
      
      {
        
        nombre: 'DURAN BARRIENTOS FABRIZIO',
        
        matricula: '20182301'
        
      },
      
      {
        
        nombre: 'FLORES GONZALEZ SEBASTIAN',
        
        matricula: '2104564'
        
      },
      
      {
        
        nombre: 'FLORES LÓPEZ DIEGO',
        
        matricula: '2066033'
        
      },
      
      {
        
        nombre: 'FLORES MARTINEZ ERICK ADRIAN',
        
        matricula: '2132976'
        
      },
      
      {
        
        nombre: 'GARZA AVALOS DIEGO',
        
        matricula: '2066114'
        
      },
      
      {
        
        nombre: 'GONZALEZ OVALLE CHRISTIAN GABRIEL',
        
        matricula: '2031243'
        
      },
      
      {
        
        nombre: 'GRANJA PEÑA DIEGO',
        
        matricula: '20647331'
        
      },
      
      {
        
        nombre: 'IBARRA RODRIGUEZ ALEXIS',
        
        matricula: '20312431'
        
      },
      
      {
        
        nombre: 'MARTINEZ ELIAS ANGEL SEBASTIAN',
        
        matricula: '2064733'
        
      },
      
      {
        
        nombre: 'MENDIETA GONZALEZ ESMERALDA GABRIELA',
        
        matricula: '2094647'
        
      },
      
      {
        
        nombre: 'MIRELES VELAZQUEZ ALEJANDRO',
        
        matricula: '2005102'
        
      },
      
      {
        
        nombre: 'MONSIVAIS SALAZAR ANDRES',
        
        matricula: '2064574'
        
      },
      
      {
        
        nombre: 'PARRAZALEZ VALDESPINO MARTHA JULIETA',
        
        matricula: '2024783'
        
      },
      
      {
        
        nombre: 'PEÑA MUNGARRO LUIS ANGEL',
        
        matricula: '2066077'
        
      },
      
      {
        
        nombre: 'PUENTE REYNOSO JULIO CESAR',
        
        matricula: '2092151'
        
      },
      
      {
        
        nombre: 'RAMIREZ LOPEZ BRYAN',
        
        matricula: '2103708'
        
      },
      
      {
        
        nombre: 'RAMOS AVILA LILIANA VALERIA',
        
        matricula: '2115192'
        
      },
      
      {
        
        nombre: 'RICO JAUREGUI MAURICIO',
        
        matricula: '2037503'
        
      },
      
      {
        
        nombre: 'RIVERA LUNA ADRIAN',
        
        matricula: '2131513'
        
      },
      
      {
        
        nombre: 'RIVERA REYNA JOSE EMILIO',
        
        matricula: '2013503'
        
      },
      
      {
        
        nombre: 'RODRIGUEZ OLVERA ROSA ISELA',
        
        matricula: '2004613'
        
      },
      
      {
        
        nombre: 'RODRIGUEZ RODRIGUEZ ANGEL AZAEL',
        
        matricula: '2133022'
        
      },
      
      {
        
        nombre: 'SANCHEZ GALARZA JUAN CARLOS',
        
        matricula: '2026061'
        
      },
      
      {
        
        nombre: 'SOLIS ORTIZ ALFREDO',
        
        matricula: '2095320'
        
      },
      
      {
        
        nombre: 'VELAZQUEZ ABREGO HERWIN DANIEL',
        
        matricula: '2025350'
        
      },
      
      {
        
        nombre: 'VILLAGRA RODRIGUEZ ANDRES NEHUEL',
        
        matricula: '2103895'
        
      },
      
      {
        
        nombre: 'ZACATENCO OLIVE RODRIGO',
        
        matricula: '1857791'
        
      },
      
      {
        
        nombre: 'ZAVALA CANTU TERESA MARGARITA',
        
        matricula: '2025218'
        
      }
    ])
    
  }, 2000)
  
  
}, []);

if(!alumnos.length){
  return(
    <Text>Cargando alumnos...</Text>
  )
}
if(alumnos.length ===0 ){
  return(
    <Text> No hay alumnos</Text>
  )
}

return(
  
  //Op 1
  
  
  // <TextInput placeholder="hola..."></TextInput> de React native y <TextInput> de Paper no se pueden usar juntos
  <>
  <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 8 }}>
    <View style={{ flex: 4.5, marginRight: 8 }}>
      <TextInput
        placeholder="Busca por nombre o matricula"
        value={buscaAlumno}
        onChangeText={setBuscaAlumno}
        left={<TextInput.Icon icon="magnify" />}
        dense
      />
    </View>
    <View style={{ flex: 1, marginRight: 8 }}>
      <Menu
        visible={menuCampoVisible}
        onDismiss={() => setMenuCampoVisible(false)}
        anchor={(
          <TextInput
            value={campoOrden === 'nombre' ? 'Nombre' : 'Matricula'}
            editable={false}
            dense
            right={<TextInput.Icon icon="menu-down" onPress={() => setMenuCampoVisible(true)} />}
            onTouchStart={() => setMenuCampoVisible(true)}
          />
        )}
      >
        <Menu.Item onPress={() => { setCampoOrden('nombre'); setMenuCampoVisible(false); }} title="Nombre" />
        <Menu.Item onPress={() => { setCampoOrden('matricula'); setMenuCampoVisible(false); }} title="Matricula" />
      </Menu>
    </View>
    <View style={{ flex: 1 }}>
      <Menu
        visible={menuDireccionVisible}
        onDismiss={() => setMenuDireccionVisible(false)}
        anchor={(
          <TextInput
            value={direccionOrden === 'asc' ? 'Ascendente' : 'Descendente'}
            editable={false}
            dense
            right={<TextInput.Icon icon="menu-down" onPress={() => setMenuDireccionVisible(true)} />}
            onTouchStart={() => setMenuDireccionVisible(true)}
          />
        )}
      >
        <Menu.Item onPress={() => { setDireccionOrden('asc'); setMenuDireccionVisible(false); }} title="Ascendente" />
        <Menu.Item onPress={() => { setDireccionOrden('desc'); setMenuDireccionVisible(false); }} title="Descendente" />
      </Menu>
    </View>
  </View>
  
  <FlatList
  data={alumnosFiltradosOrdenados}
  keyExtractor={(item) => item.matricula}
  renderItem={({ item }) => (
    <>
    
    <List.Item title={item.nombre} description={item.matricula} left={props => <MaterialIcons name="account-circle" size={40}></MaterialIcons>}></List.Item>
    </>
  )} />
  </>
  
  //Op 2: Map sin FlatList
  // alumnos.map((alumno) => (
    //     <List.Item key={alumno.matricula} title={alumno.nombre} left={props => <MaterialIcons name="account-circle" size={40}></MaterialIcons>}></List.Item>
  // ))
)
}