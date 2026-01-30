const questions = [

{
q:"PREGUNTA 1. Al izarse la bandera S del CIS en las inmediaciones de una baliza que hay que rodear, significa:",
a:[ 
"a. Terminar en la próxima baliza del recorrido.",
"b. Terminar entre la baliza y el mástil que muestre la bandera S.",
"c. Diríjase a la línea de llegada para terminar.",
"d. El siguiente tramo del recorrido se ha acortado."
],
c: [1],
com:""
},
{
q:"PREGUNTA 2. Cuando el comité de Regatas muestre la bandera S del CIS, esta deberá acompañarse de:",
a:[
"a. 1 señal fónica.",
"b. 2 señales fónicas.",
"c. 3 señales fónicas.",
"d. Sin señal fónica.",
"e. A, B y C son correctas."
],
c: [1],
com:""
},
{
q:"PREGUNTA 3. Nada se habla en las instrucciones de regatas de descartes en una serie en la cual se han completado 12 pruebas. ¿Cuántas pruebas se deben descartar? ",
a:[
"a. Una.",
"b. Dos.",
"c. Tres.",
"d. Una prueba por cada 4 pruebas completadas."
],
c: [0],
com:""
},
{
q:"PREGUNTA 4. Un barco que en el momento de cruzar la línea de llegada toca baliza de llegada deberá clasificarse como:",
a:[
"a. DNF",
"b. NSC",
"c. En su puesto de llegada",
"d. DSQ",
"e. RET"
],
c: [2],
com:""
},
  {
    type: "numeric-multi",
    q: "PREGUNTA 5. Tenemos un viento del 090º y queremos montar un recorrido trapezoidal para la clase ILCA 7. Indica los rumbos de los siguientes tramos:",
    parts: [
      { label: "De Baliza 1 a Baliza 2", correct: 340 },
      { label: "De Baliza 3 a Baliza 4", correct: 160 },
      { label: "De Baliza 3 a la Línea de Llegada", correct: 110 }
    ],
    com: "Directrices 5.2 para barcos sin spi y windsurfer. 110º para barcos con spi (120º)."
  },
{
q:"PREGUNTA 6. Las instrucciones de regatas establecen que 5 minutos antes de la señal de atención se dará una bandera naranja en el mástil de señales del barco del comité de regatas para indicar que una prueba comenzará en breve. El gallardete de Inteligencia ha sido izado en el comité debido a la ausencia de viento. En este caso, cuando se debe izar la bandera naranja:",
a:[
"a. 4 minutos después de arriar el gallardete de inteligencia.",
"b. 1 minuto después de arriar el gallardete de inteligencia.",
"c. 4 minutos antes de arriar el gallardete de inteligencia.",	
"d. 1 minuto antes de arriar el gallardete de inteligencia.",
"e. No hay tiempo establecido para izar la bandera Naranja."
],
c: [2],
com:""
},
{
q:"PREGUNTA 7. En el Campeonato de España de la Clase Optimist se dice en el apartado reglas: La regata se regirá por las reglas tal como se definen en el Reglamento de Regatas a Vela. Nada más se dice al respecto. ¿Cuál de las siguientes reglas NO serán de aplicación? Se pueden contestar más de una.",
a:[
"a. Las Reglas de la Clase Optimist.",
"b. Las Prescripciones de la RFEV.",
"c. El Reglamente de Competiciones de la RFEV.",
"d. Las reglas de campeonatos nacionales de la Clase Optimist.",
"e. La guía para la organización de Campeonatos de IODA.",
"f. Ninguna es de aplicación. "
],
c: [3,4],
com:""
},
{
q:"PREGUNTA 8. Un comité de regatas puede clasificar directamente a un barco que:",
a:[ 
"a. No navega el recorrido.",
"b. Aborda una baliza de llegada.",
"c. No cumple con la RRV 40.1 Dispositivos de Flotación Personal.",
"d. Cuando es exigido.",
"e. Ninguna es correcta.",
"f. Todas son correctas."
],
c: [0],
com:""
},
{
q:"PREGUNTA 9. Las balizas que forman la línea de salida no se podrán desplazar:",
a:[ 
"a. Después de la señal de atención.",
"b. Después de la señal de preparación.",
"c. Después del último minuto.",
"d. Desde el momento de izar la bandera naranja.",
"e. Se puede desplazar durante el procedimiento si ha habido un role importante de viento."
],
c: [1],
com:""
},
{
q:"PREGUNTA 10. Cuando indicará el comité de regatas el recorrido a navegaren caso de que hubiera varios recorridos previstos:",
a:[ 
"a. Antes de largar la bandera naranja.",
"b. Antes de la señal de atención.",
"c. Antes de la señal de preparación.",
"d. Antes de arriar el gallardete de inteligencia en el caso que estuviera izado.",
"e. Todas son correctas."
],
c: [1],
com:""
},
{
q:"PREGUNTA 11. Un barco que en el momento de su señal de salida se encuentra en el lado del recorrido, cruza la línea de llegada en primera posición 15 segundos antes de cumplir el tiempo límite de la prueba. El Segundo barco en terminar lo hace 5 segundos después de cumplirse el tiempo límite y a continuación termina el resto de la flota. ¿Cuál será la decisión del comité de regatas?",
a:[ 
"a.	Clasificar al primer barco que cruzó la línea de llegada como OCS.",
"b.	Clasificar al primer barco que cruzó la línea de llegada como DNS.",
"c.	Anular la prueba.",
"d.	Clasificar a todos los barcos que cruzaron la línea de llegada en sus puestos de llegada."
],
c: [2],
com:""
},
{
q:"PREGUNTA 12. Al darse la señal de salida habiéndose usado la bandera P como señal de preparación, hemos identificado a 4 barcos en el lado del recorrido por lo que el comité de regatas larga inmediatamente la bandera X del CIS con un sonido. Tres de los barcos vuelven y el cuarto sigue navegando el recorrido. ¿Cuándo deberá arriarse dicha señal?",
a:[ 
"a.	Cuando dicho barco este totalmente en la zona de presalida.",
"b.	1 minuto después de la salida.",
"c.	4 minutos después de la salida.",
"d.	Cuando ya los barcos no sean conscientes del arriado de la señal.",
"e.	No hay tiempo establecido en el RRV."
],
c: [2],
com:""
},
{
q:"PREGUNTA 13. Un barco que se salta una baliza del recorrido puede corregir su error hasta:",
a:[ 
"a.	Antes de rodear la próxima baliza del recorrido.",
"b.	Antes de terminar.",
"c.	Que deja de estar en regata.",
"d.	En la primera oportunidad razonable."
],
c: [1],
com:""
},
{
q:"PREGUNTA 14. El recorrido a navegar por un abarco es el denominado O2 (tipo trapezoidal) consistente en: Salir – 1 – 2 – 3S/3P – 2 – 3P y Llegada. Las balizas 1, 2 y 3P se dejarán por babor y la 3S por estribor. Cuando los barcos bajan la segunda popa para a continuación dirigirse a la línea de llegada, dejan ambas balizas de la puerta por babor. El comité de regatas deberá clasificarlo como:",
a:[ 
"a.	En su puesto de llegada.",
"b.	NSC",
"c.	Deberá protestar a dicho barco.",
"d.	Clasificarlo como DNF"
],
c: [0],
com:""
},
{
q:"PREGUNTA 15. Noventa segundos antes de la señal de salida se produce un role de 30 grados. En este caso el comité de regatas deberá:",
a:[ 
"a. Mover una de las balizas de salida para ajustar la línea al nuevo viento.",
"b. Esperar a dar la salida para tomar una decisión.",
"c. Anular la prueba con la bandera N.",
"d. Ninguna es correcta."
],
c: [2],
com:" El RRV no dice nada de que DEBERÁ, solo dice que podrá anular por cualquier motivo R 27.3, pero en las directrices dice que si rola más de 10º deberá aplazar, punto 9. OTRA QUE TENGO DUDA."
},
{
q:"PREGUNTA 16. El oficial de regatas al comprobar las clasificaciones como prueba que por un error suyo al pasar las observaciones de una salida del día anterior no se ha clasificado como UFD un barco que ha sido identificado como tal. ¿Cómo deberá actuar el oficial de regatas?",
a:[ 
"a.	No deberá hacer nada al haber sido un error suyo y haberse cumplido el plazo de protestas." ,
"b.	Solicitar una reparación para dicho barco.",
"c.	Modificar los resultados de oficio.",
"d.	Informar de ello al comité de protestas.",
"e.	Todas son correctas."
],
c: [2],
com:""
},
{
q:"PREGUNTA 17. En una salida con bandera negra el comité de regatas identifica a una serie de barcos en el triángulo formado por los extremos de la línea de salida y la baliza 1 en el minuto previo a su señal de salida. El comité de regatas señala una llamada general y publica 6 barcos en la pizarra como BFD. Tras esto se acerca uno de los barcos publicados en la pizarra y le dice al comité de regatas que va a navegar la prueba y a protestar contra un barco que le ha empujado y lo ha sacado fuera de la línea y solicita reparación. El barco navega el recorrido y termina. ¿Cómo debe clasificar el comité de regatas a dicho barco?",
a:[ 
"a.	En su puesto de llegada hasta que el comité de protestas resuelva.",
"b.	DNE",
"c.	BFD",
"d.	Esperará a que el comité de regatas resuelva para clasificarlo."
],
c: [1],
com:""
},
{
q:"PREGUNTA 18. El comité de regatas puede anular una prueba con la bandera N en el último minuto previo a la señal de salida por cualquier razón.",
a:[ 
"Verdadero",
"Falso"
],
c: [0],
com:" Regla 27.3 Antes de la señal de salida, el comité de regatas puede, por cualquier motivo, aplazar (mostrando el gallardete GI, GI sobre H, o GI sobre A, con dos sonidos) o anular la prueba (mostrando las banderas N, N sobre H, o N sobre A, con tres sonidos)."
},
{
q:"PREGUNTA 19. La neumática de un entrenador amarrada al barco del comité de regatas en la línea de salida NO es parte de la baliza de salida.",
a:[ 
"Verdadero",
"Falso"
],
c: [1],
com:""
},
{
q:"PREGUNTA 20. Un barco puede terminar una prueba sin haber navegado el recorrido.",
a:[ 
"Verdadero",
"Falso"
],
c: [0],
com:" En la definición de TERMINAR no habla de tener que navegar el recorrido. Un barco termina cuando, después de su señal de salida, cualquier parte de su casco cruza la línea de llegada desde el lado del recorrido."
},
{
q:"PREGUNTA 21. Un barco volcado con su tripulación encima del casco cumple con la definición de terminar.",
a:[ 
"Verdadero",
"Falso"
],
c: [0],
com:""
},
{
q:"PREGUNTA 22. El comité de regatas puede cambiar en instrucciones de regatas la dirección en la que los barcos deben cruzar la línea de llegada para terminar.",
a:[ 
"Verdadero",
"Falso"
],
c: [0],
com:""
},
{
q:"PREGUNTA 23. Un barco que está en el minuto previo a su señal de salida con bandera U en el lado del recorrido de la línea de salida y en el momento de la señal de salida está completamente en el lado de presalida de la línea y posteriormente cruza la línea de salida cumple con la definición de salir.",
a:[ 
"Verdadero",
"Falso"
],
c: [0],
com:" Salir. Un barco sale cuando, habiendo estado su casco completamente en el lado de pre-salida de la línea de salida en el momento de su señal de salida o después de ésta, y habiendo cumplido con la regla 30.1 cuando ésta sea aplicable, cualquier parte de su casco cruza la línea de salida desde el lado de pre-salida hacia el lado del recorrido. ES DECIR, CON U LA REGLA 30.1 NO ES DE APLICACIÓN, LA U ES LA REGLA 30.3"
},
{
q:"PREGUNTA 24. La bandera D del CIS izada en tierra con una señal fónica significa: Los barcos pueden dirigirse a la zona de regatas",
a:[ 
"Verdadero",
"Falso"
],
c: [1],
com:""
},
{
q:"PREGUNTA 25. Un barco termina cuando después de su señal de salida cualquier parte de su casco, tripulación o equipo cruza la línea de llegada desde el lado del recorrido.",
a:[ 
"Verdadero",
"Falso"  
],
c: [1],
com:" La definición de TERMINAR, dice:  Un barco termina cuando, después de su señal de salida, cualquier parte de su casco cruza la línea de llegada desde el lado del recorrido., SOLO HABLA DE LA PARTE DEL CASCO, NO DICE NADA DE LA TRIPULACIÓN O EQUIPO."
},
{
q:"PREGUNTA 26. Un comité de regatas puede ser parte de una audiencia.",
a:[ 
"Verdadero",
"Falso"
],
c: [0],
com:""
},
{
q:"PREGUNTA 27. Cuando el primer barco que haya navegado el recorrido termina, se dará una señal fónica.",
a:[ 
"Verdadero",
"Falso"
],
c: [1],
com:""
},
{
q:"PREGUNTA 28. Un comité de regatas que solicite reparación para un barco no tiene que informarle de ello.",
a:[ 
"Verdadero",
"Falso"
],
c: [0],
com:""
},
{
q:"PREGUNTA 29. Las reglas marcadas como DP pueden ser, a discreción del comité de regatas, menor que la descalificación.",
a:[ 
"Verdadero",
"Falso"     
],
c: [1],
com:"Porque el comité de regatas NO las pone, es a discreción del de protesta"
},
{
q:"PREGUNTA 30. Al señalar un cambio en el siguiente tramo del recorrido no es obligatorio fondear una nueva baliza de cambio diferente a las balizas originales.",
a:[ 
"Verdadero",
"Falso"
],
c: [0],
com:""
},
{
q:"PREGUNTA 31. La bandera negra como señal de preparación siempre se izará después de haberse dado una llamada general.",
a:[ 
"Verdadero",
"Falso"
],
c: [1],
com:""
},
{
q:"PREGUNTA 32. ¿ Quién publica el Anuncio de Regata?",
a:[ 
"a.	El Comité de Regata",
"b.	La Autoridad Organizadora",
"c.	El Comité de Protestas",
"d.	La Autoridad Nacional"
],
c: [1],
com:""
},
{
q:"PREGUNTA 33. De acuerdo con las Reglas de la WS, ¿se pueden hacer modificaciones en las instrucciones de regata?",
a:[ 
"a.	solamente publicándolas en el tablón oficial de anuncios",
"b.	por escrito, notificándolo en el tablón oficial de anuncios en el plazo apropiado o comunicándolas a cada barco en el agua antes de la señal de atención.",
"c.	oralmente, en cualquier momento antes de la señal de preparación.",
"d.	izando la bandera L."
],
c: [1],
com:""
},
{
q:"PREGUNTA 34. Las instrucciones de regata pueden alterar",
a:[ 
"a.	la definición de salir",
"b.	la regla babor-estribor (10)",
"c.	la regla de la bandera I (30.1 )",
"d.	las Reglas de la Introducción"
],
c: [2],
com:" RRV 86.1 (B) No se puede modificar una regla del reglamento de regatas salvo si así lo permite la misma regla o de la manera siguiente: (a) Las prescripciones de una autoridad nacional pueden modificar una regla del reglamento excepto las Definiciones; las reglas de la Introducción; las Partes 2 o 7; las reglas 1, 2, 3, 5, 6, 42, 43, 47, 50, 63.3, 69, 70, 71, 72, 75, 76.2(b) o 79; una regla de un apéndice que modifique alguna de las anteriores; los Apéndices H o N, o una regla en uno de los Códigos de World Sailing enumerados en la regla 6.1. (b) El anuncio o las instrucciones de regata pueden modificar una regla del reglamento, excepto las reglas 4, 76.1 o 76.2(a), el Apéndice R y las reglas enumeradas en la regla 86.1(a). (c) Las reglas de clase pueden modificar únicamente las reglas 42, 49, 51, 52, 53, 54, 55 y 78.2."
},
{
q:"PREGUNTA 35. Las balizas de la línea de salida pueden cambiarse hasta",
a:[ 
"a.	la señal del recorrido",
"b.	la señal de atención",
"c.	la señal de preparación",
"d.	la señal de salida"
],
c: [2],
com:""
},
{
q:"PREGUNTA 36. Si por causa de un súbito empeoramiento del tiempo, el Comité de Regata quiere parar una prueba después de la salida junto con otra que está en procedimiento de salida enviando los barcos a tierra, deberá hacer la siguiente señal:",
a:[ 
"a.	las banderas Inteligencia sobre H",
"b.	las banderas N sobre H",
"c.	las banderas N sobre X",
"d.	las banderas N sobre 1er Repetidor"
],
c: [1],
com:""
},
{
q:"PREGUNTA 37. La configuración del recorrido es un trapecio olímpico. Para asegurar que el primer barco termine dentro del tiempo límite, Vd. acorta 400 m la salchicha exterior acercando la baliza 2 hacia la baliza 3. ¿Qué señal hará en la baliza 3?",
a:[ 
"a.	Bandera C con sonidos repetitivos",
"b.	Bandera C, un signo ( - ) y sonidos repetitivos.",
"c.	El rumbo hacia la siguiente baliza y sonidos repetitivos.",
"d.	Bandera C con el rumbo hacia la siguiente baliza y sonidos repetitivos"
],
c: [1],
com:""
},
{
q:"PREGUNTA 38. El Comité de Regata observa que un barco ha tocado una baliza de salida antes de salir sin aceptar la penalización requerida. ¿Cuál de las siguientes afirmaciones es correcta?",
a:[ 
"a.	El barco debe ser clasificado DNS ya que no se ha exonerado.",
"b.	El Comité de Regata puede decidir descalificar al barco sin audiencia porque no ha salido correctamente.",
"c.	El Comité de Regata decide hacer una protesta contra el barco por tocar una baliza de salida antes de salir.",
"d.	El Comité de Regata no emprende ninguna acción ya que solamente otro barco puede hacer una protesta por infracciones de la Parte 3ª"
],
c: [2],
com:""
},
{
q:"PREGUNTA 39. Un barco toca una baliza de llegada cuando está cruzando la línea de llegada. ¿Cuál de lo siguiente es correcto?",
a:[ 
"a.	El barco se exonera tan pronto como da un giro alrededor de la baliza de llegada.",
"b.	El barco debe aceptar su penalización, volver completamente al lado del recorrido de la línea de llegada y terminar.",
"c.	Debe aceptar su penalización en el lado del recorrido de la línea de llegada y terminar.",
"d.	Debe dar dos completos de 360º y terminar."
],
c: [1],
com:""
},
{
q:"PREGUNTA 40. Un barco está en regata hasta el momento en que:",
a:[ 
"a.	deja el área de regata.",
"b.	No tiene más obligaciones hacia los barcos que están todavía regateando",
"c.	termina y deja libre la línea y las balizas de llegada.",
"d.	cualquier parte de su casco, tripulación o equipo en posición normal cruza la línea de llegada en dirección de la última baliza del recorrido."
],
c: [2],
com:""
},
{
q:"PREGUNTA 41. Esta pregunta es sobre resultados de regata y puntuación. ¿Cuál de las siguientes afirmaciones es la correcta?",
a:[ 
"a.	Todos los barcos cuya inscripción haya sido aceptada y hayan cumplido sus obligaciones de inscripción (si las hubiere), deberían recibir una puntuación por cada prueba y una puntuación final.",
"b.	Sólo los barcos que hayan navegado en una prueba y terminado, deberán recibir una puntuación por esa prueba.",
"c.	Sólo los barcos admitidos como salidos en una o más pruebas deben recibir puntuación.",
"d.	Todos los barcos que hayan enviado su solicitud de inscripción deberán ser puntuados, sin tener en cuenta si han llegado a la regata o pagaron sus derechos de inscripción."
],
c: [0],
com:""
},
{
q:"PREGUNTA 42. La longitud de una puerta debe ser:",
a:[ 
"a.	4 esloras",
"b.	Depende de si son barcos con Spi o sin Spi",
"c.	6 esloras",
"d.	10 esloras"
],
c: [3],
com:""
},
{
q:"PREGUNTA 43. Después de publicar en el TOA las clasificaciones de una prueba, el comité de regata que según sus notas un barco ha sido clasificado erróneamente. ¿Qué hace el comité de regatas?",
a:[ 
"a.	Pide al comité de protestas que corrija el error",
"b.	Pide una reparación para el barco",
"c.	Corrige directamente el error publicando una nueva clasificación.",
"d.	Espera a que el barco haga una solicitud."
],
c: [2],
com:""
},
{
q:"PREGUNTA 44. Desde donde se mide el viento en una situación de corriente:",
a:[ 
"a.	Se mide desde el barco del comité de regatas anclado",
"b.	Se mide desde el barco del comité de regatas anclado y se corrige",
"c.	Se mide con el barco a la deriva"
],
c: [2],
com:" Ver 4.4 de Política de Comités - El viento se medirá desde embarcaciones no fondeadas."
},
{
q:"PREGUNTA 45. La baliza 1 debe estar en posición:",
a:[ 
"a.	Desde la señal de atención",
"b.	Desde la señal de preparación",
"c.	Desde la salida",
"d.	No hay regla específica sobre ello"
],
c: [3],
com:""
},
{
q:"PREGUNTA 46. Un comité de regata que quiere protestar a un barco por hechos ocurridos en el área de regata no tiene que cumplir con el tiempo límite para protestar",
a:[ 
"Verdadero",
"Falso"
],
c: [1],
com:""
},
{
q:"PREGUNTA 47. Tan pronto como un barco cruza con la proa la línea de llegada, puede usar el motor para dejar la línea y volver a puerto",
a:[ 
"Verdadero",
"Falso"
],
c: [1],
com:""
},
{
q:"PREGUNTA 48. La regla del fallo de una señal acústica no se tomará en cuenta. Aplica a cualquier señal del Comité de Regata.",
a:[ 
"Verdadero",
"Falso"
],
c: [1],
com:""
},
{
q:"PREGUNTA 49. El recorrido deberá ser señalado no más tarde que la señal de preparación",
a:[ 
"Verdadero",
"Falso"
],
c: [1],
com:" Antes de la señal de Atención."
},
{
q:"PREGUNTA 50. Las instrucciones de regata pueden indicar intervalos de tiempo mayores o menores entre las señales de atención y preparación sin indicar que cambia la regla 26",
a:[ 
"Verdadero",
"Falso"
],
c: [0],
com:""
},
{
q:"PREGUNTA 51. El Comité de Regata puede reemplazar una baliza perdida por otra similar sin señalarlo a los competidores.",
a:[ 
"Verdadero",
"Falso"
],
c: [0],
com:""
},
{
q:"PREGUNTA 52. El Comité de Regata puede acortar el recorrido solamente si está especificado en las Instrucciones de Regata",
a:[ 
"Verdadero",
"Falso"
],
c: [1],
com:""
},
{
q:"PREGUNTA 53. Un barco no necesita cruzar la línea de llegada completamente para terminar.",
a:[ 
"Verdadero",
"Falso"
],
c: [0],
com:""
},
{
q:"PREGUNTA 54. Un barco que rellena una protesta puede volver a la Oficina de Regata y retirarla con tal de que lo haga antes de terminar el tiempo para protestar",
a:[ 
"Verdadero",
"Falso"
],
c: [1],
com:""
},
{
q:"PREGUNTA 55. Un barco que en el momento de su señal de salida con bandera P tiene el casco completamente en el lado de pre-salida con un tripulante en el trapecio en el lado del recorrido sale correctamente.",
a:[ 
"Verdadero",
"Falso"
],
c: [0],
com:""
},
{
q:"PREGUNTA 56. En una regata donde se establece la penalización por puntuación RRV 44.3. Si un barco toca varias balizas de recorrido, ¿necesita tomar una penalización de puntuación por cada incidente?",
a:[ 
"Verdadero",
"Falso"
],
c: [0],
com:""
},
{
q:"PREGUNTA 57. El comité de regatas puede anular una prueba después que algún barco haya terminado",
a:[ 
"Verdadero",
"Falso"
],
c: [0],
com:""
},
{
q:"PREGUNTA 58. Un barco que el Comité de Regatas ve que está recibiendo ayuda exterior puede ser descalificado por el Comité de Regata sin audiencia",
a:[ 
"Verdadero",
"Falso"
],
c: [1],
com:""
},
{
q:"PREGUNTA 59. El lado de babor de la primera ceñida está favorecido para la flota debido a una corriente adversa en el lado de estribor del recorrido. Cuando coloca la línea de salida, ¿cómo debe favorecerla?",
a:[ 
"a.	Favorece 5 grados babor",
"b.	Coloca una línea perpendicular",
"c.	Favorece 5 grados estribor",
"d.	Favorece ambos extremos"
],
c: [2],
com:""
},
{
q:"PREGUNTA 60. La distancia entre las balizas de una puerta de sotavento por norma general será de:",
a:[ 
"a.	6 esloras",
"b.	50 metros",
"c.	10 esloras",
"d.	8 esloras",
"e.	80 metros",
"f.	Según la intensidad del viento"
],
c: [2],
com:""
},
{
q:"PREGUNTA 61. Un barco es OCS navega el recorrido y termina 10 segundos antes de que se acabe el tiempo límite para la prueba. El segundo barco termina 20 segundos después del primero. En este caso el comité de regatas, deberá:",
a:[ 
"a.	Clasificar al primer barco como OCS y al resto como DNF",
"b.	Clasificar a todos los barcos en su orden de llegada",
"c.	Anular la prueba",
"d.	Clasificar al primer barco que no es OCS (el segundo) en primera posición y al resto a continuación según su orden de llegadas."
],
c: [2],
com:""
},
{
q:"PREGUNTA 62. Un barco que no navega el recorrido puede terminar una prueba",
a:[ 
"Verdadero",
"Falso"
],
c: [0],
com:""
},
{
q:"PREGUNTA 63. Un barco que no navega el recorrido será clasificado directamente por el Comité de Regatas",
a:[ 
"Verdadero",
"Falso"
],
c: [0],
com:""
},
{
q:"PREGUNTA 64. Una penalización discrecional será impuesta por el CR, comité técnico o comité de protestas sin audiencia pudiendo la penalización ser más leve que la descalificación.",
a:[ 
"Verdadero",
"Falso"
],
c: [1],
com:"Solo puede ser el comité de protestas RRV 64"
},
{
q:"PREGUNTA 65. Una tabla con intención de protestar deberá informar al barco del comité en la línea de llegadas sobre su intención de protestar.",
a:[ 
"Verdadero",
"Falso"
],
c: [0],
com:""
},
{
q:"PREGUNTA 66. ¿Puede el comité de regatas anular una prueba después que todos los barcos hayan terminado?",
a:[ 
"Verdadero",
"Falso"
],
c: [0],
com:""
},
{
q:"PREGUNTA 67. Esta pregunta es sobre resultados de regata y puntuación. ¿Cuál de las siguientes afirmaciones es la correcta?",
a:[ 
"a.	Todos los barcos cuya inscripción haya sido aceptada y hayan cumplido sus obligaciones de inscripción (si las hubiere), deberían recibir una puntuación por cada prueba y una puntuación final.",
"b.	Sólo los barcos que hayan navegado en una prueba y terminado, deberán recibir una puntuación por esa prueba.",
"c.	Sólo los barcos admitidos como salidos en una o más pruebas deben recibir puntuación.",
"d.	Todos los barcos que hayan enviado su solicitud de inscripción deberán ser puntuados, sin tener en cuenta si han llegado a la regata o pagaron sus derechos de inscripción."
],
c: [0],
com:""
},
{
q:"PREGUNTA 68. Si la bandera Y es izada en el mar junto con o antes de la señal de atención, los regatistas deberán hacer uso de flotación personal...",
a:[ 
"a.	Desde la señal de atención hasta que terminen",
"b.	Desde la señal de preparación hasta que dejen de estar en regata",
"c.	Desde la señal de preparación hasta acabar todas las pruebas del día",
"d.	Solo si lo indican las reglas de clase de lo contrario tendría que haberse izado la Y en tierra."
],
c: [1],
com:" RRV 40.2-A La regla 40.1 se aplica si se muestra la bandera Y a flote con un sonido antes o junto con la señal de atención, mientras se esté en regata en esa prueba."
},
{
q:"PREGUNTA 69. Como se mide el viento en una situación de corriente:",
a:[ 
"a.	Se mide desde el barco del comité de regatas anclado",
"b.	Se mide desde el barco del comité de regatas anclado y se corrige",
"c.	Se mide con el barco a la deriva"
],
c: [2],
com:"Ver 4.4 de Política de Comités - El viento se medirá desde embarcaciones no fondeadas."
},
{
q:"PREGUNTA 70. El comité de regatas identifica un barco en el triángulo formado por los extremos de la línea de salida y la primera baliza durante el último minuto de una salida con bandera negra. Se da llamada general y el CR publica los números de veía identificados. Cuando está pasando los BFD a tierra se da cuenta que en la pizarra hay un número de vela que no corresponde con el que tiene grabado en sus anotaciones y este barco está navegando la prueba. ¿Cómo actuará el Oficial de Regatas?",
a:[ 
"a.	Eliminará dicho número del listado",
"b.	Clasificará a dicho barco como BFD",
"c.	Clasificará a dicho barco como DNE",
"d.	Solicitará reparación para ese barco"
],
c: [1],
com:"VER Caso 96"
},
{
q:"PREGUNTA 71. En el campeonato del mundo de la clase Optimist nada se dice en el anuncio ni las instrucciones de regatas que será de aplicación las prescripciones de la autoridad nacional. ¿Deben aplicarse en este caso?",
a:[ 
"a.	SI",
"b.	NO",
"c.	Solo a los regatistas del país organizador"
],
c: [0],
com:"RRV 88.1 Prescripciones de Aplicación. Las prescripciones que se aplican en una regata son las de la autoridad nacional con la que esté asociada la autoridad organizadora de acuerdo con la regla 89.1. Sin embargo, si los barcos pasan por aguas de más de una autoridad nacional mientras están en regata, el anuncio de regatas deberá identificar las prescripciones que se aplican y cuándo se aplican."
},
{
q:"PREGUNTA 72. Un barco se inscribe sin presentar la licencia federativa tal como es exigido por el anuncio de regata. Una vez navegada la primera prueba el comité de regatas toma conocimiento de ello. ¿Cómo deberá actuar?",
a:[ 
"a.	Deberá protestar a dicho barco",
"b.	Deberá clasificar al barco DNC en todas las pruebas de la regata",
"c.	Deberá eliminarlo de la clasificación y listados de inscritos",
"d.	Es un error del comité de regatas y deberá clasificarlo en sus puestos de llegada"
],
c: [0],
com:"RRV 76 – no lo puede eliminar pues debería de haberlo hecho antes del comienzo de la primera prueba, tal como indica el reglamento"
},
{
q:"PREGUNTA 73. Cuando sea de aplicación el Reglamento Internacional para Evitar abordajes en la mar, esto se establecerá en:",
a:[ 
"a.	Apartado reglas de las Instrucciones de Regatas",
"b.	Apartado reglas del anuncio de regatas",
"c.	Apartado reglas tanto del anuncio como de las instrucciones de regatas",
"d.	No hace falta establecerlo si es en una regata que se navega después de la puesta del sol."
],
c: [1],
com:"Introducción de la Parte 2. Cuando un barco que navega bajo estas reglas se encuentra con una embarcación que no lo hace, deberá cumplir con el Reglamento Internacional para Prevenir los Abordajes (RIPA) o las disposiciones administrativas de derecho de paso. Si el anuncio de regatas así lo establece, las reglas de la Parte 2 serán reemplazadas por las reglas de derecho de paso del RIPA o por las disposiciones administrativas de derecho de paso."
},
{
q:"PREGUNTA 74. Las instrucciones de regatas establecen que no se dará una señal de atención antes de 45 minutos después de largar la bandera Gl Gallardete de inteligencia en tierra. La salida de la primera prueba está programada a las 12:00 horas y el comité de regatas iza en tierra Inteligencia sobre numeral 2 a las 11:30. A las 13:30 horas arria la inteligencia sobre numeral 2 en tierra. ¿A partir de qué hora se puede dar una señal de atención?",
a:[ 
"a.	13:30 horas",
"b.	14:00 horas",
"c.	14:15 horas",
"d.	15:30 horas"
],
c: [2],
com:""
},
{
q:"PREGUNTA 75. El comité de regatas iza la bandera Oscar junto con la señal de atención en una prueba de la clase 470. Durante el procedimiento de salida el viento amaina por debajo de lo indicado en las regias de Ciase. ¿Cómo procederá el comité de regatas?",
a:[ 
"a.	Continuará la prueba pues es potestativo",
"b.	Aplazará la prueba y arriará la Oscar antes de o con la señal de atención",
"c.	Aplazará la prueba y largará la Romeo antes de o con la señal de atención",
"d.	Aplazará la prueba y largará la bandera Oscar antes de o con la señal de atención"
],
c: [2],
com:" RRV P5.2 Antes de la Señal de Salida. (a) El comité de regatas puede señalar que se permite el bombeo (pumping), el balanceo (rocking) y el envión (ooching), tal como prevén las reglas de clase, izando la bandera O antes de o junto con la señal de atención. (b) Si, después de izar la bandera O, el viento amaina por debajo de la velocidad límite establecida, el comité de regatas puede aplazar la prueba. A continuación, antes de o junto con la nueva señal de atención, el comité de regatas izará o bien la bandera R, a fin de señalar que se aplica la regla 42 tal como haya sido modificada por las reglas de clase, o bien la bandera O, tal como se establece en la regla P.5.2(a). (c) Cuando la bandera O ó la bandera R se icen antes de o junto con la señal de atención, se mantendrán izadas hasta la señal de salida."
},
{
q:"PREGUNTA 76. El comité de regatas puede modificar cualquier regla de clase....",
a:[ 
"a.	Con la aprobación de la autoridad nacional en regatas bajo su jurisdicción",
"b.	Cuando lo haga por escrito y lo publique dentro del tiempo establecido en las IR.",
"c.	Nunca se puede modificar las reglas de clase",
"d.	Con la aprobación por escrito de la clase internacional"
],
c: [3],
com:"RRV 87 MODIFICACIONES A LAS REGLAS DE CLASE. El anuncio de regatas puede modificar una regla de clase solo si las reglas de clase así lo permiten, o cuando se exponga en el tablón oficial de avisos la autorización para el cambio emitida por escrito por la asociación de la clase."
},
{
q:"PREGUNTA 77. En una regata de patín a vela, la línea de salida está muy cerca de la orilla de la playa y cuando faltan 3 minutos para la señal de salida aún hay barcos en tierra que son echados a flote por el patrón sin recibir ayuda alguna por parte de otras personas y toman la salida de la prueba. ¿Qué puede hacer el comité de regatas en este caso?",
a:[ 
"a.	Nada pues todo es correcto",
"b.	Clasificar al barco como DNS",
"c.	Clasificar al barco como DNC",
"d.	Protestar al barco.",
"e.	Ponerle una DPI",
"f.	Hablar con el medidor para que verifique el barco"
],
c: [0],
com:""
},
{
q:"PREGUNTA 78. ¿Qué significa una bandera naranja izada en el barco de señales del comité de regatas?",
a:[ 
"a.	La próxima señal de atención no se dará antes de 5 minutos después de izarse esta señal",
"b.	Indica un extremo de la línea de salida",
"c.	No tiene significado si no se establece en las instrucciones de regatas",
"d.	La respuesta A y B son correctas"
],
c: [1],
com:" Otras Señales del RRV - Bandera Naranja. La percha que arbola esta bandera es un extremo de la línea de salida. Para que sean lo de los 5 minutos se ha de indicar en las instrucciones de regata."
},
{
q:"PREGUNTA 79. ¿ Quién publica el Anuncio de Regata?",
a:[ 
"a.	El Comité de Regata",
"b.	La Autoridad Organizadora",
"c.	El Comité de Protestas",
"d.	La Autoridad Nacional"
],
c: [1],
com:""
},
{
q:"PREGUNTA 80. De acuerdo con las Reglas de la WS, se pueden hacer modificaciones en las instrucciones de regata",
a:[ 
"a.	solamente publicándolas en el tablón oficial de avisos.",
"b.	por escrito, notificándolo en el tablón oficial de avisos en el plazo apropiado o comunicándolas a cada barco en el agua antes de la señal de atención.",
"c.	oralmente, en cualquier momento antes de la señal de preparación.",
"d.	izando la bandera L."
],
c: [1],
com:""
},
{
q:"PREGUNTA 81. Las instrucciones de regata pueden alterar",
a:[ 
"a.	la definición de salir",
"b.	la regla babor-estribor (10)",
"c.	la regla de acortar el recorrido (32)",
"d.	las Reglas de la Introducción"
],
c: [2],
com:""
},
{
q:"PREGUNTA 82. Las balizas de la línea de salida pueden cambiarse hasta", 
a:[ 
"a.	la señal del recorrido",
"b.	la señal de atención",
"c.	la señal de preparación",
"d.	la señal de salida"
],
c: [2],
com:""
},
{
q:"PREGUNTA 83. Si por causa de un súbito empeoramiento del tiempo, el Comité de Regata quiere parar una prueba después de la salida junto con otra que está en procedimiento de salida enviando los barcos a tierra, deberá hacer la siguiente señal:",
a:[ 
"a.	las banderas Inteligencia sobre H",
"b.	las banderas N sobre H",
"c.	las banderas N sobre X",
"d.	las banderas N sobre 1er Repetidor"
],
c: [1],
com:""
},
{
q:"PREGUNTA 84. La configuración del recorrido es un trapecio olímpico. Para asegurar que el primer barco termine dentro del tiempo límite, Vd. acorta 400 m el bastón exterior acercando la baliza 2 hacia la baliza 3. ¿Qué señal hará en la baliza 3?",
a:[ 
"a.	Bandera C con sonidos repetitivos.",
"b.	Bandera C, un signo (-) y sonidos repetitivos.",
"c.	El rumbo hacia la siguiente baliza y sonidos repetitivos.",
"d.	Bandera C con el rumbo hacia la siguiente baliza y sonidos repetitivos."
],
c: [1],
com:""
},
{
q:"PREGUNTA 85. El Comité de Regata observa que un barco ha tocado una baliza de salida antes de salir sin aceptar la penalización requerida. ¿Cuál de las siguientes afirmaciones es correcta?",
a:[ 
"a.	El barco debe ser clasificado DNS 'ya que no se ha exonerado",
"b.	El Comité de Regata puede decidir descalificar al barco sin audiencia porque no ha salido correctamente.",
"c.	El Comité de Regata decide hacer una protesta contra el barco por tocar una baliza de salida antes de salir",
"d.	El Comité de Regata no emprende ninguna acción ya que solamente otro barco puede hacer una protesta por infracciones de la Parte 3°"
],
c: [2],
com:""
},
{
q:"PREGUNTA 86. Un barco toca una baliza de llegada cuando está cruzando la línea de llegada. ¿Cuál de lo siguiente es correcto?",
a:[ 
"a.	El barco se exonera tan pronto como da un giro alrededor de la baliza de llegada.",
"b.	El barco debe aceptar su penalización, volver completamente al lado del recorrido de la línea de llegada y terminar.",
"c.	Debe aceptar su penalización en el lado del recorrido de la línea de llegada y terminar.",
"d.	Debe dar dos completos de 360° y terminar."
],
c: [1],
com:""
},
{
q:"PREGUNTA 87. Un barco está en regata hasta el momento en que:",
a:[ 
"a.	deja el área de regata.",
"b.	no tiene más obligaciones hacia los barcos que están todavía regateando.",
"c.	termina y deja libre la línea y las balizas de llegada.",
"d.	cualquier parte de su casco, tripulación o equipo en posición normal cruza la línea de llegada en dirección de la última baliza del recorrido."
],
c: [2],
com:""
},
{
q:"PREGUNTA 88. Esta pregunta es sobre resultados de regata y puntuación. ¿Cuál de las siguientes afirmaciones es la correcta?",
a:[ 
"a.	Todos los barcos cuya inscripción haya sido aceptada y hayan cumplido sus obligaciones de inscripción (si las hubiere), deberían recibir una puntuación por cada prueba y una puntuación final.",
"b.	Sólo los barcos que hayan navegado en una prueba y terminado, deberán recibir una puntuación por esa prueba.",
"c.	Sólo los barcos admitidos como salidos en una o más pruebas deben recibir puntuación.",
"d.	Todos los barcos que hayan enviado su solicitud de inscripción deberán ser puntuados, sin tener en cuenta si han llegado a la regata o pagaron sus derechos de inscripción."
],
c: [0],
com:""
},
{
q:"PREGUNTA 89. La longitud de una puerta debe ser:",
a:[ 
"a.	4 esloras",
"b.	Depende de si son barcos con Spi o sin Spi",
"c.	6 esloras",
"d.	10 esloras"
],
c: [3],
com:""
},
{
q:"PREGUNTA 90. Después de publicar en el TOA las clasificaciones de una prueba, el comité de regata se da cuenta de que según sus notas un barco ha sido clasificado erróneamente. ¿Qué debe hacer?",
a:[ 
"a.	Pide al comité de protestas que corrija el error",
"b.	Pide una reparación para el barco",
"c.	Corrige directamente el error publicando una nueva clasificación.",
"d.	Espera a que el barco haga una solicitud."
],
c: [2],
com:""
},
{
q:"PREGUNTA 91. La baliza 1 debe estar en posición:",
a:[ 
"a.	Desde la señal de atención",
"b.	Desde la señal de preparación",
"c.	Desde la salida",
"d.	No hay regla específica sobre ello"
],
c: [3],
com:""
},
{
q:"PREGUNTA 92. En una regata de monotipos, en la que el recorrido es barlovento-sotavento, el viento está disminuyendo rápidamente, y la flota se encuentra navegando hacia la baliza de barlovento por segunda vez. No estás seguro de que pueden acabar la popa con esa intensidad de viento. ¿Qué harías?",
a:[ 
"a.	Anular la prueba",
"b.	Dejar que terminen la prueba con el riesgo de que nadie entre en tiempo limite",
"c.	Acortar el recorrido en la baliza de barlovento",
"d.	Clasificar a los barcos con el orden de llegada de la baliza anterior"
],
c: [2],
com:""
},
{
q:"PREGUNTA 93. Las instrucciones de regatas establecen que no se dará una señal de atención antes de 45 minutos después de largar la bandera Gl Gallardete de inteligencia en tierra. La salida de la primera prueba está programada a las 12:00 horas y el comité de regatas iza en tierra Inteligencia sobre numeral 2 a las 11:30. A las 13:30 horas arria la inteligencia sobre numeral 2 en tierra. ¿A partir de qué hora se puede dar una señal de atención?",
a:[ 
"a.	13:30 horas",
"b.	14:00 horas",
"c.	15:30 horas",
"d.	14:15 horas"
],
c: [3],
com:""
},
{
q:"PREGUNTA 94. Un comité de regata que quiere protestar a un barco por hechos ocurridos en el área de regata no tiene que cumplir con el tiempo límite para protestar",
a:[ 
"Verdadero",
"Falso"
],
c: [1],
com:""
},
{
q:"PREGUNTA 95. Tan pronto como un barco cruza con la proa la línea de llegada, puede usar el motor para dejar la línea y volver a puerto",
a:[ 
"Verdadero",
"Falso"
],
c: [1],
com:""
},
{
q:"PREGUNTA 96. La regla -el fallo de una señal acústica no se tomará en cuenta - aplica a cualquier señal del Comité de Regata.",
a:[ 
"Verdadero",
"Falso"
],
c: [1],
com:""
},
{
q:"PREGUNTA 97. El recorrido deberá ser señalado no más tarde que la señal de preparación",
a:[ 
"Verdadero",
"Falso"
],
c: [1],
com:"El recorrido deberá ser señalado no más tarde que la señal de ATENCION"
},
{
q:"PREGUNTA 98. Las instrucciones de regata pueden indicar intervalos de tiempo mayores o menores entre las señales de atención y preparación sin indicar que cambia la regla 26",
a:[ 
"Verdadero",
"Falso"
],
c: [0],
com:""
},
{
q:"PREGUNTA 99. El Comité de Regata puede reemplazar una baliza perdida por otra similar sin señalarlo a los competidores.",
a:[ 
"Verdadero",
"Falso"
],
c: [0],
com:""
},
{
q:"PREGUNTA 100. El Comité de Regata puede acortar el recorrido solamente si está especificado en las Instrucciones de Regata",
a:[ 
"Verdadero",
"Falso"
],
c: [1],
com:""
},
{
q:"PREGUNTA 101. Un barco no necesita cruzar la línea de llegada completamente para terminar.",
a:[ 
"Verdadero",
"Falso"
],
c: [0],
com:""
},
{
q:"PREGUNTA 102. Un barco que rellena una protesta puede volver a la Oficina de Regata y retirarla con tal de que lo haga antes de terminar el tiempo para protestar",
a:[ 
"Verdadero",
"Falso"
],
c: [1],
com:""
},
{
q:"PREGUNTA 103. Un barco que en el momento de su señal de salida con bandera P tiene el casco completamente en el lado de pre-salida con un tripulante en el trapecio en el lado del recorrido sale correctamente.",
a:[ 
"Verdadero",
"Falso"
],
c: [0],
com:""
},
{
q:"PREGUNTA 104. En una regata donde se establece la penalización por puntuación RRV 44.3. Si un barco toca varias balizas de recorrido, ¿necesita tomar una penalización de puntuación por cada incidente?",
a:[ 
"Verdadero",
"Falso"
],
c: [0],
com:""
},
{
q:"PREGUNTA 105. El comité de regatas puede anular una prueba después que algún barco haya terminado",
a:[ 
"Verdadero",
"Falso"
],
c: [0],
com:""
},
{
q:"PREGUNTA 106. Un barco que está recibiendo ayuda exterior puede ser descalificado por el Comité de Regata sin audiencia",
a:[ 
"Verdadero",
"Falso"
],
c: [1],
com:"No, solo lo puede hacer el Comité de Protestas"
},
{
q:"PREGUNTA 107. Si la bandera Y es izada en el mar junto con o antes de la señal de atención, los regatistas deberán hacer uso de flotación personal desde la señal de atención hasta que terminen.",
a:[ 
"Verdadero",
"Falso"
],
c: [1],
com:"Desde la señal de PREPARACIÓN"
},
{
q:"PREGUNTA 108. Un barco que no navega el recorrido será clasificado directamente por el Comité de regatas.",
a:[ 
"Verdadero",
"Falso"
],
c: [0],
com:"Como NSC"
},
{
q:"PREGUNTA 109. El comité de regatas, debe de anular una prueba si tras decidir un cambio de recorrido, el balizador no llega a tiempo de avisar a todos los barcos de la flota.",
a:[ 
"Verdadero",
"Falso"
],
c: [1],
com:" Podrá anular o no marcar el cambio."
},
{
q:"PREGUNTA 110. Cuando un barco se equivoca al navegar el recorrido, puede ser instruido por el Comité de regatas de su error para que lo corrija lo antes posible.",
a:[ 
"Verdadero",
"Falso"
],
c: [1],
com:""
},
{
q:"PREGUNTA 111. Es de la exclusiva responsabilidad del Comité de regatas decidir si un barco participa en una prueba o si continúa en regata.",
a:[ 
"Verdadero",
"Falso"
],
c: [1],
com:""
},
{
q:"PREGUNTA 112. Si durante el procedimiento de salida, no se produce la señal fónica al izarse la bandera P, el procedimiento debe de ser parado.",
a:[ 
"Verdadero",
"Falso"
],
c: [1],
com:"RRV 26 SISTEMAS DE SALIDA. Se dará la salida de las pruebas usando las siguientes señales. Los tiempos se cronometrarán desde las señales visuales; la ausencia de una señal fónica no se tomará en cuenta."
},
{
q:"PREGUNTA 113. Las instrucciones de regata pueden cambiar el tiempo de la señal de atención. (Más de 5 minutos)",
a:[ 
"Verdadero",
"Falso"
],
c: [0],
com:"RRV 26"
},
{
q:"PREGUNTA 114. Si una baliza se ha perdido o está fuera de posición mientras los barcos estén en regata, el Comité de regatas solo podrá solucionarlo situando la baliza en su posición correcta o sustituirla por una nueva de aspecto similar.",
a:[ 
"Verdadero",
"Falso"
],
c: [1],
com:" También puede señalar su posición con la bandera M"
},
{
q:"PREGUNTA 115. A no ser que las instrucciones de regata o el anuncio de regatas establezcan otra cosa, la puntuación de la serie de cada barco será, la suma de las puntuaciones de cada prueba excluyendo su peor puntuación.",
a:[ 
"Verdadero",
"Falso"
],
c: [0],
com:""
},
{
q:"PREGUNTA 116. Las siglas para un barco que salió de línea con bandera U, serán UCS",
a:[ 
"Verdadero",
"Falso"
],
c: [1],
com:"Será UFD"
},
{
q:"PREGUNTA 117. Si las instrucciones de regata no establecen otra cosa, la bandera naranja significa: La percha que arbola esta bandera es un extremo de la línea de salida.",
a:[ 
"Verdadero",
"Falso"
],
c: [0],
com:""
},
{
q:"PREGUNTA 118. Una tabla con intención de protestar deberá informar al barco del comité en la línea de llegada de su intención al llegar.",
a:[ 
"Verdadero",
"Falso"
],
c: [0],
com:""
},
{
q:"PREGUNTA 119. Se da la señal de salida en la posición 1 y un barco por efecto de la corriente navega como se muestra en la imagen siguiente. Hay algo que deba hacer el Comité de Regatas",
img:"img/p119.png",
a:[
"a. No, todo es correcto",
"b. Protestar al barco",
"c. Puntuarlo DNS",
"d. Puntuarlo NSC"
],
c: [3],
com:"Ver CASO 90"
},
{
q:"PREGUNTA 120. En una prueba donde todas las balizas se dejarán por babor, el comité de regatas señala un recorrido acortado y dos barcos cruzan la línea de llegada como se muestra en la imagen siguiente. En la posición 4 se van para puerto. ¿Cómo actuará el comité de regatas?",
img:"img/p120.png",
a:[
"a. Clasificar ambos en su puesto",
"b. Clasificar a Azul en su puesto y NSC a gris",
"c. Clasificar Azul en su puesto y Protestar a Gris",
"d. Ningún barco termina y clasificarlos DNF",
"e. Protestar a ambos barcos"
],
c: [1],
com:""
},
{
q:"PREGUNTA 121. Establece el orden de llegada de los barcos de la siguiente imagen:",
img:"img/p121.png",
a:[
"a. amarillo-azul-verde",
"b. Azul-verde-amarillo",
"c. Azul-amarillo-verde",
"d. Verde-amarillo-azul"
],
c: [2],
com:""
},
{
q:"PREGUNTA 122. En una regata de cruceros el comité de regatas comunica oralmente en el agua tal como está previsto en la RRV 90.2(c), que el recorrido a navegar es: salir, baliza 1 por babor, baliza 2 por estribor, baliza 3 por estribor, baliza 4 por estribor, baliza 2 por estribor, baliza 5 por estribor, terminar tal como se muestra en la imagen de arriba. El barco sale navega el recorrido que se ve en la siguiente imagen de abajo y termina. ¿Cómo debe ser clasificado dicho barco?",
img:"img/p122.png",
a:[
"a. Debe ser puntuado NSC",
"b. Debe ser puntuado en su orden de llegada",
"c. Debe ser puntuado DNF",
"d. El comité de regatas protestará a ese barco"
],
c: [1],
com:""
},
{
q:"PREGUNTA 123. Un barco toca la baliza de llegada como se ve en la siguiente imagen y se va para puerto sin penalizarse. Como será clasificado por el Comité de Regatas.",
img:"img/p123.png",
a:[
"a. DNF",
"b. DSQ",
"c. NSC",
"d. En su puesto de llegada"
],
c: [3],
com:"Después PUEDE presentar una protesta."
},
{
q:"PREGUNTA 124. Con 6 nudos de viento y corriente en contra, un barco está en la posición que se ve en el diagrama en la línea de llegada. En ese momento pone el motor y se va para tierra. Como debe actuar el comité de regatas.",
img:"img/p124.png",
a:[
"a. Clasificarlo en su puesto de llegada",
"b. Clasificarlo NSC",
"c. Protestar al barco",
"d. Clasificarlo DNC",
"e. Descalificar al barco"
],
c: [2],
com:"El barco sigue en regata, pues debe deja libre la línea y las balizas de llegada"
}

  // 👉 aquí sigues añadiendo el resto de preguntas
];

let selected = [], current = 0, score = 0, startTime, timerInt;

function shuffle(a) { return a.sort(() => Math.random() - 0.5); }

function startTest() {
  selected = shuffle([...questions]).slice(0, 10);
  current = 0; score = 0;
  document.getElementById("start").classList.add("hidden");
  document.getElementById("end").classList.add("hidden");
  document.getElementById("quiz").classList.remove("hidden");
  startTime = Date.now();
  timerInt = setInterval(updateTimer, 1000);
  showQuestion();
}

function updateTimer() {
  const t = Math.floor((Date.now() - startTime) / 1000);
  document.getElementById("timer").textContent =
    String(Math.floor(t / 60)).padStart(2, "0") + ":" +
    String(t % 60).padStart(2, "0");
}

function showQuestion() {
  const q = selected[current];

  document.getElementById("progress").textContent =
    `Pregunta ${current + 1} de ${selected.length}`;
  document.getElementById("question").textContent = q.q;

  const img = document.getElementById("qImage");
  const wrap = document.getElementById("imgWrapper");
  wrap.classList.add("hidden");
  if (q.img) { img.src = q.img; wrap.classList.remove("hidden"); }

  const ans = document.getElementById("answers");
  ans.innerHTML = "";
  document.getElementById("feedback").innerHTML = "";
  const nextBtn = document.getElementById("nextBtn");
  nextBtn.classList.add("hidden");

  // 🔢 NUMÉRICA MÚLTIPLE
  if (q.type === "numeric-multi") {
    q.parts.forEach((p, i) => {
      const div = document.createElement("div");
      div.innerHTML = `<label>${p.label}</label>
        <input type="number" id="num_${i}" placeholder="Introduce el rumbo">`;
      ans.appendChild(div);
    });
    nextBtn.textContent = "Comprobar";
    nextBtn.onclick = () => checkNumericMulti(q);
    nextBtn.classList.remove("hidden");
    return;
  }

  // 🅰️ TEST NORMAL
  q.a.forEach((txt, i) => {
    const b = document.createElement("button");
    b.textContent = txt;
    b.onclick = () => answer(b, i);
    ans.appendChild(b);
  });
}

function answer(btn, i) {
  const q = selected[current];
  document.querySelectorAll("#answers button").forEach(b => b.disabled = true);

  if (q.c.includes(i)) {
    btn.classList.add("correct"); score++;
  } else {
    btn.classList.add("wrong");
    q.c.forEach(ci =>
      document.querySelectorAll("#answers button")[ci].classList.add("correct")
    );
  }

  let fb = q.c.includes(i) ? "Acierto" : "Fallo";
  if (q.com) fb += `<br><em>${q.com}</em>`;
  document.getElementById("feedback").innerHTML = fb;

  const nextBtn = document.getElementById("nextBtn");
  nextBtn.textContent = "Siguiente";
  nextBtn.onclick = nextQuestion;
  nextBtn.classList.remove("hidden");
}

function checkNumericMulti(q) {
  let ok = 0;
  let fb = "";
  q.parts.forEach((p, i) => {
    const v = Number(document.getElementById(`num_${i}`).value);
    if (v === p.correct) {
      fb += `✔ ${p.label}: Correcto (${p.correct}º)<br>`; 
      ok++;
    } else {
      fb += `❌ ${p.label}: Incorrecto. Correcto: ${p.correct}º<br>`;
    }
  });
  if (ok === q.parts.length) score++;
  if (q.com) fb += `<br><em>${q.com}</em>`;
  document.getElementById("feedback").innerHTML = fb;

  const nextBtn = document.getElementById("nextBtn");
  nextBtn.textContent = "Siguiente";
  nextBtn.onclick = nextQuestion;
}

function nextQuestion() {
  current++;
  if (current < selected.length) showQuestion();
  else endTest();
}

function endTest() {
  clearInterval(timerInt);
  document.getElementById("quiz").classList.add("hidden");
  const perc = Math.round(score / selected.length * 100);
  document.getElementById("end").classList.remove("hidden");
  document.getElementById("end").innerHTML =
    `<h2>${perc >= 80 ? "APTO" : "NO APTO"}</h2>
     <p>${score}/${selected.length} (${perc}%)</p>
     <p>Tiempo: ${document.getElementById("timer").textContent}</p>
     <button onclick="startTest()">Repetir test</button>`;
}

// 🌙 modo oscuro
document.getElementById("themeToggle").onclick = () => {
  document.body.dataset.theme =
    document.body.dataset.theme === "dark" ? "" : "dark";
};

// 📦 PWA
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js");
}
