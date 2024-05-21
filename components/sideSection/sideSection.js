import './sideSection.css';

//! MENU HAMBURGUESA

export const sideMenu = () => {
  const divMenu = document.createElement('div');
  const ulList = document.createElement('ul');
  const pInicio = document.createElement('li');
  const pNotificaciones = document.createElement('li');
  const pMensajes = document.createElement('li');
  const pPerfil = document.createElement('li');
  const pExplorar = document.createElement('li');
  const pCrear = document.createElement('li');

  pInicio.textContent = 'Inicio';
  pNotificaciones.textContent = 'Notificaciones';
  pMensajes.textContent = 'Mensajes';
  pPerfil.textContent = 'Perfil';
  pExplorar.textContent = 'Explorar';
  pCrear.textContent = 'Crear';
  divMenu.classList.add('sideSection');


  ulList.appendChild(pInicio);
  ulList.appendChild(pNotificaciones);
  ulList.appendChild(pMensajes);
  ulList.appendChild(pPerfil);
  ulList.appendChild(pExplorar);
  ulList.appendChild(pCrear);
  divMenu.appendChild(ulList);
  document.body.append(divMenu);
}