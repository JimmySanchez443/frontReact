import React, { useState } from 'react';
import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';
import { classNames } from 'primereact/utils';
import { useLocalState } from "../utli/useLocalStorage";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTshirt } from '@fortawesome/free-solid-svg-icons';
import  Usuario  from '../Usuario/Index';
import AddUsuario from '../AddUsuario/AddUsuario';


 const Dashboard = () => {      
  
  const[getJwt,setJwt]=useLocalState("","getJwt");
  const[user,setUser]=useLocalState("","user");
  const[rol,setRol] = useLocalState("","rol");
  const [activeItem, setActiveItem] = useState("home");
  

  function sendLogout() {
    setJwt("");
    window.location.reload();
  }

  
      
  const items = [
    {
      label: 'Home',
      icon: 'pi pi-fw pi-home',
      command: () => setActiveItem('home'),
      key:'Home'
    },
    {
      label: 'Anexo',
      key:'Anexo',
      icon:  <FontAwesomeIcon icon={faTshirt} /> ,
      items: [
        {
          label: 'Textil',
          command: () => setActiveItem('inicio-1') ,
          
          key:'Textil',
      
        },
        {
          label: 'Accesorios',
          command: () => setActiveItem('inicio-2'),
          key:'Accesorios'
        },
        {
          label: 'Funky',
          command: () => setActiveItem('inicio-3'),
          key:'Funky'
        }
      ]
    },
    {
      label: 'Acerca de',
      icon: 'pi pi-fw pi-info-circle',
      command: () => setActiveItem('acerca-de'),
      key:'Acerca'
    },
  ];

  
  if (rol == 'ROL_ADMIN') {
    items.push({
      label: 'Usuario',
      icon: 'pi pi-fw pi-user',
      key: 'Usuario',
      items: [
        {
          label: 'Añadir Usuario',
          command: () => setActiveItem('Usuario-1'),
          key: 'Usuario-1'
        },
        {
          label: 'Lista de Usuarios',
          command: () => setActiveItem('Usuario-2'),
          key: 'Usuario-2'
        }
      ]
    });
  }
 

  const endItems =
    <Button className="p-button-outlined p-button-danger p-mr-2" onClick={sendLogout}>
      <i className={classNames('pi', 'pi-power-off', 'p-px-1')}></i>
      Logout
    </Button>;
  return (
    <>
      
        
      <div>
      <Menubar model={items}   end = {endItems}/>

    {activeItem === 'home' && (
        <div>
          <h1>Aplicación de Codificación</h1>
          <h1>Bienvenido {user}  </h1>
       
        </div>
      )}

      {activeItem === 'inicio-1' && (
        
        <div>
          <h1>Anexo Textil</h1>
    
          
   
        </div>
      )}
      {activeItem === 'inicio-2' && (
        <div>
          <h1>Anexo Accesorios</h1>
          <p>Aquí hay más información sobre nuestro sitio web.</p>
        </div>
      )}
      {activeItem === 'inicio-3' && ( 
        <div>
          <h1>Anexo Funky</h1>
   
          <p>Aquí hay más información sobre nuestro sitio web.</p>
        </div>
      )}
      {activeItem === 'acerca-de' && (
        <div>
          <h1>Acerca de nosotros</h1>
          <p>Somos una empresa dedicada a crear aplicaciones web increíbles.</p>
        </div>
      )}
      <div>
      {activeItem === 'Usuario-2' && (
        <div>
        <Usuario/>
        </div>
      )}
      {activeItem === 'Usuario-1' && (
        <div>
        <AddUsuario/>
        </div>
      )}
      
      </div>
    </div>


    </>
    
    
  );
};

export default Dashboard;