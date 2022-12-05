//simulador notas finales

alert("Boletin de notas finales");

let salir = "1";


//cree un bucle while que se interrumpe si se ingresa "1".
while (salir == "1") {
   //funcion para guardar el nombre del alumno.
   function registro(){
      let nombre = prompt("ingresa tu nombre");
      let apellido = prompt("ingresa tu apellido");
      let nombreCompleto = nombre + " " + apellido;
      return nombreCompleto;
   }
   const alumno = registro();

   alert("bienvenido "+ alumno);

   //cargo las 3 notas para realizar un promedio.
   nota1 = parseInt(prompt("ingrese la nota del primer trimestre"));
   nota2 = parseInt(prompt("ingrese la nota del segundo trimestre"));
   nota3 = parseInt(prompt("ingrese la nota del tercer trimestre"));
   notaFinal = nota1 + nota2 + nota3;
   promedio= notaFinal / 3;

   //si el promedio es mayor igual a 6,66 el alumno aprobó.
   if (notaFinal >= 20 ) {
      alert("felicidades " + alumno + " aprobaste el año con " + promedio);

   //si es menor reprueba.
   }else{
      alert("Estimado/a " + alumno + " debe presentarse a rendir en diciembre. Su promedio final fue " + promedio);
   }
   
   //condicion de salida del while
   salir = prompt("ingresa x para salir. Presiona 1 para seguir consultando.")
   alert("Hasta luego " + alumno)

}


