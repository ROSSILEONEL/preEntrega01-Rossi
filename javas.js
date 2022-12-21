// ----constantes
const carrito=[];
// ----------PRODUCTOS
function Producto(categoria,nombre,precio){
    this.categoria=categoria;
    this.nombre=nombre;
    this.precio=precio;

    
}
// -------------objetos tablas
const tabla1= new Producto("tablas","Azul",4000);
const tabla2= new Producto("tablas","Red",4600);
const tabla3= new Producto("tablas","Black",4500);
// -------------objetos buzos 
const buzo1= new Producto("buzos","negro",2500);
const buzo2= new Producto("buzos","rosa",3000);
const buzo3= new Producto("buzos","liso",2200);
// -----------MENU PRINCIPAL FUNCION 
function menuPrincipal(){
    let menu=parseInt (prompt("Selecciona la opcion que te interesa:\n1-Tablas\n2-Buzos\n3-Remeras\n4-Salir"));
return menu;
}
// ---------- FUNCION MENU TABLAS
function MenuTablas(){
    let menuT=0;
    while(menuT !=4 ){
        menuT=parseInt (prompt("Selecciona la opcion que te interesa:\n1- Modelo Azul:"+tabla1.precio +" \n2-Modelo Rosa: $"+tabla2.precio+"\n3-Modelo Red: "+tabla3.precio +"\n4-Menu principal\n5-Finalizar compra"));
    
switch(menuT){
    case 1:
    carrito.push(parseInt(tabla1.precio));
    
    
alert("Pagara por la tabla "+tabla1.nombre+" : $"+tabla1.precio);
break;


    case 2:
    carrito.push(parseInt(tabla2.precio));
    alert("Pagaras por "+ tabla2.nombre +" : $"+tabla2.precio);
    break;


    case 3:
        carrito.push(parseInt(tabla3.precio));
        alert("Pagaras por "+ tabla3.nombre +" : $"+tabla3.precio);
        break;
    case 4:
        
        menuT=4;
        
        break;
    case 5:
        menuT=4;
        
        break;
}
}
}
// ------------MENU BUZOS-------------------------------------------------
function MenuBuzos(){
    let menuT=0;
    while(menuT !=4 ){
        menuT=parseInt (prompt("Selecciona la opcion que te interesa:\n1- Buzo negro:"+buzo1.precio +" \n2-Buzo Rosa: $"+buzo2.precio+"\n3-Buzo liso: "+buzo3.precio +"\n4-Menu principal\n5-Finalizar compra"));
switch(menuT){
    case 1:
    carrito.push(parseInt(buzo1.precio));
    
    
alert("Pagara por la Buzo "+buzo1.nombre+" : $"+buzo1.precio);
break;


    case 2:
    carrito.push(parseInt(buzo2.precio));
    alert("Pagara por la Buzo "+buzo2.nombre+" : $"+buzo2.precio);
    break;


    case 3:
        carrito.push(parseInt(buzo3.precio));
        alert("Pagara por la Buzo "+buzo3.nombre+" : $"+buzo3.precio);
        break;
    case 4:
        
        menuT=4;
        
        break;
    case 5:
        menuT=4;
        
        break;
}
}
}
// ---------programa ---------------------------------------------------
alert("Bienvenidos a la tienda de Lazy Skate\ncomencemos!");


let menu2=0;
while(menu2!=5){
    menu2=menuPrincipal();
switch(menu2){
case 1:
MenuTablas();
break;
case 2 :
    MenuBuzos();
    break
    case 3 :
        MenuBuzos();
        break;
        
        case 4 :
            MenuBuzos();
            menu2=5;
            break;
            
            
            }

}


    


let total=0;
for (let i=0; i<carrito.length;i++){
total=total+parseInt(carrito[i]) ;
// alert(parseInt(carritoe[i]))
}
alert( "Total a pagar es $:"+total+"\nCantidad de productos comprados :"+carrito.length);

// let menu=parseInt (prompt("Selecciona la opcion que te interesa:\n1-\n2-\n3-\n4-"));




