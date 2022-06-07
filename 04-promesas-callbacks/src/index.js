import {buscarHeroe as buscarHeroeCallback} from './js/callbacks'
import { buscarHeroe } from './js/promesas';
import './styles.css';

const heroeId1 = 'capi';
const heroeId2 = 'iron';

// buscarHeroe( heroeId1, (err, heroe1) =>{

//     if (err) { return console.error (err); } 

//     buscarHeroe( heroeId2, (err, heroe2) => {

//         if (err) { return console.error (err); } 

//         console.log (`enviando al ${heroe1.nombre} y ${heroe2.nombre} a la mision`);
//     })
    
// });

buscarHeroe (heroeId1).then ( heroe => {
    console.log (`enviando a ${heroe.nombre} a la mision`)
});

console.log ('fin del programa')