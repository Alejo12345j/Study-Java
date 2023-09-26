/* 
    Named Imports
    Para librerias y Frameworks

import {nombre as nombreImportado, obtenerPosts} from "./namedExports";

console.log('Mi nombre es ' + nombreImportado);
console.log(obtenerPosts());

*/

/* 
    Namespace Imports
    Para librerias y Frameworks

import * as datos from "./namespaceExports";
console.log(datos.nombre);
console.log(nombre.obtenerPosts());

/* 
    Default Imports
    Para librerias y Frameworks

import obtener from "./defaultsExpots";
console.log(obtener());
*/

/*  
    Empty Imports

    Ciclos y condicionales
*/

import './EmptyExports';
import { correo } from './EmptyExports';
console.log(correo);
