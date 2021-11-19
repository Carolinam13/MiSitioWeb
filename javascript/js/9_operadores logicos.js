"Use strict"

/* &&..............AND
   ||..............OR
   ^...............XOR
*/

/* Subsidio de transporte.
Si el aprendiz tiene SISBEN pero no tiene jovenes en acción puede acceder al beneficio del subsidio.
Si el aprendiz tiene JOVENES EN ACCIÓN pero no tiene SISBEN también puede accerder al beneficio.
Si el aprendiz tiene JOVENES EN ACCIÓN y también tiene SISBEN no puede acceder al beneficio.
Si el aprendiz no tiene JJOVENES EN ACCIÓN y tampoco tiene SISBEN no puede acceder al beneficio.
 */

var SisbenAprendiz = true;
var JovenesAccionAprendiz = false;

if (SisbenAprendiz === true ^ JovenesAccionAprendiz === true) {
    console.log("Usted puede acceder al beneficio.");
}
else {
    console.log("Usted no puede acceder al beneficio.");
}