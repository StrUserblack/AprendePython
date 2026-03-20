import { useState, useCallback, useRef } from "react";

const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
const norm = (s) => s.trim().split("\n").map((l) => l.trimEnd()).join("\n");
const STARTER = "# Escribe tu código aquí\n";
const INTENTOS_SOL = 4;

function gen1a() {
  const datos = [
    { nombre: "Carlos",    edad: 28, ciudad: "Madrid"    },
    { nombre: "María",     edad: 22, ciudad: "Barcelona" },
    { nombre: "Lucas",     edad: 31, ciudad: "Valencia"  },
    { nombre: "Sofía",     edad: 25, ciudad: "Bilbao"    },
    { nombre: "Alejandro", edad: 34, ciudad: "Málaga"    },
    { nombre: "Elena",     edad: 27, ciudad: "Zaragoza"  },
  ];
  const d = pick(datos);
  const expected = `Hola, soy ${d.nombre}, tengo ${d.edad} años y vivo en ${d.ciudad}.`;
  return { id:"1a", titulo:"Tarjeta de presentación",
    task:`Crea una presentación personal en Python.\n\nUsa variables para guardar tu nombre ("${d.nombre}"), tu edad (${d.edad}) y tu ciudad ("${d.ciudad}"), e imprímelas en una sola línea usando un f-string.`,
    pista:"Declara las tres variables y usa un f-string: print(f\"...{nombre}...{edad}...{ciudad}...\")",
    expected, solution:`nombre = "${d.nombre}"\nedad = ${d.edad}\nciudad = "${d.ciudad}"\nprint(f"Hola, soy {nombre}, tengo {edad} años y vivo en {ciudad}.")`, starter:STARTER };
}
function gen1b() {
  const items = [
    { producto:"Teclado",     precio:49.99, cantidad:3 },
    { producto:"Auriculares", precio:29.99, cantidad:2 },
    { producto:"Ratón",       precio:19.99, cantidad:4 },
    { producto:"Webcam",      precio:59.99, cantidad:3 },
  ];
  const a = pick(items);
  const total = Math.round(a.precio * a.cantidad * 100) / 100;
  const expected = `Producto: ${a.producto} | Precio unitario: ${a.precio}€ | Total: ${total}€`;
  return { id:"1b", titulo:"Recibo de compra",
    task:`Tienes un producto llamado "${a.producto}" con un precio unitario de ${a.precio}€ y una cantidad de ${a.cantidad} unidades.\n\nGuarda esos datos en variables, calcula el precio total e imprímelo todo en una sola línea con formato claro.`,
    pista:"El total es precio * cantidad. Guárdalo en una variable y usa un f-string.",
    expected, solution:`producto = "${a.producto}"\nprecio = ${a.precio}\ncantidad = ${a.cantidad}\ntotal = precio * cantidad\nprint(f"Producto: {producto} | Precio unitario: {precio}€ | Total: {total}€")`, starter:STARTER };
}
function gen1c() {
  const temps = [0, 20, 37, 50, 100, 25];
  const c = pick(temps);
  const f = c * 9 / 5 + 32;
  const expected = `${c}°C equivalen a ${f}°F`;
  return { id:"1c", titulo:"Conversor de temperatura",
    task:`Convierte ${c}°C a Fahrenheit y muestra el resultado en pantalla.\n\nGuarda la temperatura en una variable y usa la fórmula de conversión entre grados Celsius y Fahrenheit.`,
    pista:"Guarda celsius en una variable, calcula fahrenheit con la fórmula y usa un f-string con el símbolo °.",
    expected, solution:`celsius = ${c}\nfahrenheit = celsius * 9/5 + 32\nprint(f"{celsius}°C equivalen a {fahrenheit}°F")`, starter:STARTER };
}
function gen1p() {
  const empleados = [
    { nombre:"Carlos Ruiz",  puesto:"Desarrollador",    salario:2800, exp:4 },
    { nombre:"Ana Gómez",    puesto:"Diseñadora UX",     salario:2500, exp:3 },
    { nombre:"Marcos León",  puesto:"Analista de datos", salario:3100, exp:6 },
    { nombre:"Lucía Pardo",  puesto:"DevOps Engineer",   salario:3400, exp:5 },
  ];
  const e = pick(empleados);
  const l1 = `Empleado: ${e.nombre} — ${e.puesto}`;
  const l2 = `Salario: ${e.salario}€/mes | Experiencia: ${e.exp} años`;
  return { id:"1p", titulo:"🏗️ Proyecto: Ficha de empleado", esProyecto:true,
    task:`Crea una ficha de empleado para ${e.nombre}, que trabaja como ${e.puesto}, cobra ${e.salario}€/mes y tiene ${e.exp} años de experiencia.\n\nUsa variables para cada dato e imprímelo en dos líneas: una con el nombre y puesto, otra con el salario y la experiencia.`,
    pista:"Necesitas dos print(). Primero nombre y puesto, luego salario y años_experiencia.",
    expected:`${l1}\n${l2}`, solution:`nombre = "${e.nombre}"\npuesto = "${e.puesto}"\nsalario = ${e.salario}\naños_experiencia = ${e.exp}\nprint(f"Empleado: {nombre} — {puesto}")\nprint(f"Salario: {salario}€/mes | Experiencia: {años_experiencia} años")`, starter:STARTER };
}
function gen2a() {
  const casos = [
    { item:"huevos",   total:247, caja:12 },{ item:"naranjas", total:185, caja:8 },
    { item:"botellas", total:310, caja:24 },{ item:"libros",   total:134, caja:9 },
  ];
  const sc = pick(casos);
  const cajas = Math.floor(sc.total / sc.caja);
  const sobran = sc.total % sc.caja;
  const cap = sc.item[0].toUpperCase() + sc.item.slice(1);
  return { id:"2a", titulo:"División con resto",
    task:`Tienes ${sc.total} ${sc.item} para empaquetar en cajas de ${sc.caja}.\n\nCalcula cuántas cajas completas puedes llenar y cuántos ${sc.item} sobran. Imprime ambos resultados.`,
    pista:"Usa // para la división entera y % para el resto.",
    expected:`Cajas completas: ${cajas}\n${cap} sobrantes: ${sobran}`,
    solution:`${sc.item} = ${sc.total}\npor_caja = ${sc.caja}\nprint(f"Cajas completas: {${sc.item} // por_caja}")\nprint(f"${cap} sobrantes: {${sc.item} % por_caja}")`, starter:STARTER };
}
function gen2p() {
  const casos = [
    {precio:120,pct:25},{precio:80,pct:10},{precio:200,pct:30},{precio:150,pct:20},
  ];
  const c = pick(casos);
  const desc = c.precio * c.pct / 100;
  const final = c.precio - desc;
  return { id:"2p", titulo:"🏗️ Proyecto: Calculadora de descuentos", esProyecto:true,
    task:`Un artículo cuesta ${c.precio}€ y tiene un descuento del ${c.pct}%.\n\nCalcula el importe del descuento y el precio final. Imprime ambos resultados.`,
    pista:"El descuento es precio_original * descuento_pct / 100. El precio final es precio_original menos el descuento.",
    expected:`Descuento aplicado: ${desc}€\nPrecio final: ${final}€`,
    solution:`precio_original = ${c.precio}\ndescuento_pct = ${c.pct}\ndescuento = precio_original * descuento_pct / 100\nprecio_final = precio_original - descuento\nprint(f"Descuento aplicado: {descuento}€")\nprint(f"Precio final: {precio_final}€")`, starter:STARTER };
}
function gen3a() {
  const notas = [
    {val:9.5,res:"Matrícula"},{val:8.0,res:"Notable"},{val:7.5,res:"Notable"},
    {val:6.5,res:"Bien"},{val:5.5,res:"Aprobado"},{val:4.0,res:"Suspenso"},
  ];
  const n = pick(notas);
  return { id:"3a", titulo:"Clasificador de notas",
    task:`nota = ${n.val}\n\nClasifica la nota con if/elif/else e imprime la calificación correspondiente:\n· Matrícula si nota >= 9\n· Notable si nota >= 7\n· Bien si nota >= 6\n· Aprobado si nota >= 5\n· Suspenso en cualquier otro caso`,
    pista:"Usa if/elif/else ordenando las condiciones de mayor a menor.",
    expected:n.res, solution:`nota = ${n.val}\nif nota >= 9:\n    print("Matrícula")\nelif nota >= 7:\n    print("Notable")\nelif nota >= 6:\n    print("Bien")\nelif nota >= 5:\n    print("Aprobado")\nelse:\n    print("Suspenso")`, starter:STARTER };
}
function gen3b() {
  const edades = [
    {edad:3,res:"gratis"},{edad:7,res:"8€"},{edad:12,res:"8€"},
    {edad:18,res:"15€"},{edad:45,res:"15€"},{edad:65,res:"7€"},
  ];
  const e = pick(edades);
  return { id:"3b", titulo:"Calculadora de tarifas",
    task:`Un parque cobra según la edad del visitante:\n  · Menores de 5 años: gratis\n  · De 5 a 12 años: 8€\n  · De 13 a 64 años: 15€\n  · 65 años o más: 7€\n\nedad = ${e.edad}\n\nImprime la tarifa que corresponde a esa edad.`,
    pista:"Usa if/elif/else. Puedes usar elif 5 <= edad <= 12 para rangos.",
    expected:`Tarifa: ${e.res}`, solution:`edad = ${e.edad}\nif edad < 5:\n    print("Tarifa: gratis")\nelif edad <= 12:\n    print("Tarifa: 8€")\nelif edad <= 64:\n    print("Tarifa: 15€")\nelse:\n    print("Tarifa: 7€")`, starter:STARTER };
}
function gen3p() {
  const casos = [
    {saldo:500,retiro:200},{saldo:300,retiro:150},{saldo:1000,retiro:400},
  ];
  const c = pick(casos);
  const nuevo = c.saldo - c.retiro;
  const expected = `Retiro de ${c.retiro}€ realizado. Nuevo saldo: ${nuevo}€`;
  return { id:"3p", titulo:"🏗️ Proyecto: Cajero automático", esProyecto:true,
    task:`saldo = ${c.saldo}\nretiro = ${c.retiro}\npin_correcto = True\n\nSimula un cajero automático que comprueba tres condiciones en orden:\n1. Si el PIN no es correcto, avisa al usuario\n2. Si el retiro supera el saldo disponible, avisa de saldo insuficiente\n3. Si todo está bien, descuenta el importe e informa del nuevo saldo`,
    pista:"if not pin_correcto → primera condición. elif retiro > saldo → segunda. else → ejecuta el retiro.",
    expected, solution:`saldo = ${c.saldo}\nretiro = ${c.retiro}\npin_correcto = True\nif not pin_correcto:\n    print("PIN incorrecto")\nelif retiro > saldo:\n    print("Saldo insuficiente")\nelse:\n    saldo = saldo - retiro\n    print(f"Retiro de {retiro}€ realizado. Nuevo saldo: {saldo}€")`, starter:STARTER };
}
function gen4a() {
  const limites = [10, 20, 30, 40, 50];
  const lim = pick(limites);
  let suma = 0;
  for (let i = 2; i <= lim; i += 2) suma += i;
  return { id:"4a", titulo:"Suma de pares",
    task:`Suma todos los números pares del 2 al ${lim} (incluido) usando un bucle for.\n\nImprime la suma total al final.`,
    pista:`Usa range(2, ${lim+1}, 2) para generar solo los pares. Acumula la suma empezando en 0.`,
    expected:`Suma de pares del 2 al ${lim}: ${suma}`,
    solution:`suma = 0\nfor i in range(2, ${lim+1}, 2):\n    suma += i\nprint(f"Suma de pares del 2 al ${lim}: {suma}")`, starter:STARTER };
}
function gen4b() {
  const inicios = [3, 5, 7, 10];
  const desde = pick(inicios);
  const nums = Array.from({length:desde},(_,i)=>String(desde-i)).join("\n");
  return { id:"4b", titulo:"Cuenta atrás",
    task:`Usa un bucle while para contar hacia atrás desde ${desde} hasta 1.\nCada número en su propia línea.\nAl terminar imprime: ¡Despegue!`,
    pista:`Empieza con contador = ${desde}. Dentro del bucle: imprime y luego resta 1. El mensaje va FUERA del bucle.`,
    expected:`${nums}\n¡Despegue!`,
    solution:`contador = ${desde}\nwhile contador >= 1:\n    print(contador)\n    contador -= 1\nprint("¡Despegue!")`, starter:STARTER };
}
function gen5a() {
  const precios = [50, 100, 200, 80, 120];
  const precio = pick(precios);
  const resultado = precio * 1.21;
  return { id:"5a", titulo:"Calculadora de IVA",
    task:`Define una función que calcule el precio con IVA dado un precio base. El IVA por defecto debe ser del 21%.\n\nLlámala con ${precio}€ e imprime el resultado.`,
    pista:"Usa return para devolver el resultado. El parámetro iva tiene valor por defecto 21.",
    expected:`Precio con IVA (21%): ${resultado}€`,
    solution:`def calcular_precio_iva(precio, iva=21):\n    return precio * (1 + iva / 100)\nresultado = calcular_precio_iva(${precio})\nprint(f"Precio con IVA (21%): {resultado}€")`, starter:STARTER };
}
function gen7p() {
  const grupos = [
    { "María":[8,7,9,6,8], "Pedro":[5,4,6,5,7], "Sofía":[9,10,8,9,10] },
    { "Lucas":[7,8,6,9,7], "Elena":[4,5,3,6,4], "Diego":[10,9,8,9,10] },
    { "Carla":[6,5,7,6,8], "Rubén":[8,9,7,8,9], "Nuria":[5,4,6,5,5]  },
  ];
  const g = pick(grupos);
  let mejorNombre = "", mejorMedia = 0;
  const lineas = Object.entries(g).map(([nombre,notas]) => {
    const media = Math.round(10*notas.reduce((a,b)=>a+b,0)/notas.length)/10;
    const estado = media >= 5 ? "Aprobado" : "Suspenso";
    if (media > mejorMedia) { mejorMedia = media; mejorNombre = nombre; }
    return `${nombre} → Media: ${media} | ${estado}`;
  });
  lineas.push(`Mejor alumno: ${mejorNombre}`);
  const dictStr = Object.entries(g).map(([n,ns])=>`"${n}": ${JSON.stringify(ns)}`).join(", ");
  const taskDict = Object.entries(g).map(([n,ns])=>`    "${n}": ${JSON.stringify(ns)}`).join(",\n");
  return { id:"7p", titulo:"🏗️ Proyecto: Sistema de calificaciones", esProyecto:true,
    task:`alumnos = {\n${taskDict}\n}\n\nCalcula la media de cada alumno (redondeada a 1 decimal) e indica si está aprobado o suspenso. Al final muestra quién tiene la mejor media.`,
    pista:"Recorre alumnos.items(). Usa sum(notas)/len(notas) y round(...,1). Guarda el mejor mientras iteras.",
    expected:lineas.join("\n"),
    solution:`alumnos = {${dictStr}}\nmejor_nombre = ""\nmejor_media = 0\nfor nombre, notas in alumnos.items():\n    media = round(sum(notas) / len(notas), 1)\n    estado = "Aprobado" if media >= 5 else "Suspenso"\n    print(f"{nombre} → Media: {media} | {estado}")\n    if media > mejor_media:\n        mejor_media = media\n        mejor_nombre = nombre\nprint(f"Mejor alumno: {mejor_nombre}")`, starter:STARTER };
}

function buildCurriculo() {
  return [
    { id:1, titulo:"Salida y Variables", emoji:"📦", color:"#2563eb",
      explicacion:`print() muestra información en pantalla.\n\nVariables — guardan datos con el operador =\n  nombre = "Ana"     # string (texto) → comillas\n  edad   = 25        # int (entero)\n  altura = 1.75      # float (decimal)\n  activo = True      # bool (True/False)\n\nf-strings — insertar variables en texto:\n  print(f"Me llamo {nombre} y tengo {edad} años")\n  →  Me llamo Ana y tengo 25 años\n\nOperaciones: +  -  *  /  **  //  %`,
      ejercicios:[gen1a(), gen1b(), gen1c()], proyecto:gen1p() },
    { id:2, titulo:"Operadores y Tipos", emoji:"🔢", color:"#7c3aed",
      explicacion:`ARITMÉTICOS:\n  +  suma   -  resta   *  multiplicación\n  /  división   //  div.entera   %  módulo   **  potencia\n  17 // 5 → 3     17 % 5 → 2     2 ** 8 → 256\n\nCOMPARACIÓN (devuelven True/False):\n  ==  !=  >  <  >=  <=\n\nLÓGICOS:\n  and  →  True si AMBOS son True\n  or   →  True si al menos UNO es True\n  not  →  invierte el booleano\n\nCONVERSIÓN:\n  int("42") → 42    float("3.14") → 3.14\n  str(100)  → "100" bool(0)       → False`,
      ejercicios:[gen2a(),
        { id:"2b", titulo:"Verificación de acceso",
          task:`usuario = "admin"\nclave_correcta = True\nedad = 20\n\nComprueba si el usuario tiene acceso: debe ser "admin", tener la clave correcta y ser mayor de edad. Imprime el resultado booleano.`,
          pista:"Combina las tres condiciones con and dentro de un solo print().",
          expected:"True", solution:`usuario = "admin"\nclave_correcta = True\nedad = 20\nprint(usuario == "admin" and clave_correcta and edad >= 18)`, starter:STARTER },
        { id:"2c", titulo:"Par o impar",
          task:`numero = 7\n\nImprime True si el número es par, False si es impar.`,
          pista:"Usa % para el resto de dividir entre 2 y compara si es igual a 0.",
          expected:"False", solution:`numero = 7\nprint(numero % 2 == 0)`, starter:STARTER }],
      proyecto:gen2p() },
    { id:3, titulo:"Condicionales", emoji:"🔀", color:"#dc2626",
      explicacion:`if/elif/else ejecuta código según condiciones:\n\n  if condicion:\n      # se ejecuta si True\n  elif otra_condicion:\n      # se ejecuta si la anterior era False y esta True\n  else:\n      # se ejecuta si ninguna fue True\n\n⚠️ La sangría de 4 espacios es OBLIGATORIA.\n\nOPERADOR TERNARIO:\n  resultado = "par" if n % 2 == 0 else "impar"\n\nCONDICIONES COMPUESTAS:\n  if edad >= 18 and pais == "España":\n  if temp > 35 or humedad > 80:`,
      ejercicios:[gen3a(), gen3b(),
        { id:"3c", titulo:"Año bisiesto",
          task:`año = 2024\n\nDetermina si el año es bisiesto y muéstralo. Recuerda que las reglas del calendario gregoriano para años bisiestos implican tres condiciones combinadas.`,
          pista:"Condición: (año%4==0 and año%100!=0) or (año%400==0). Guárdala en una variable.",
          expected:"2024 es bisiesto: True", solution:`año = 2024\nbisiesto = (año % 4 == 0 and año % 100 != 0) or (año % 400 == 0)\nprint(f"{año} es bisiesto: {bisiesto}")`, starter:STARTER }],
      proyecto:gen3p() },
    { id:4, titulo:"Bucles", emoji:"🔁", color:"#16a34a",
      explicacion:`FOR — recorre una secuencia:\n  for i in range(5):        # 0,1,2,3,4\n  for i in range(1, 6):     # 1,2,3,4,5\n  for i in range(0, 10, 2): # 0,2,4,6,8\n  for item in lista:\n\nWHILE — repite mientras se cumpla condición:\n  contador = 0\n  while contador < 5:\n      print(contador)\n      contador += 1   ← ¡siempre modifica la variable!\n\nACUMULADORES:\n  suma = 0\n  for i in range(1, 6):\n      suma += i\n  print(suma)  →  15\n\nCONTROL: break (salir del bucle), continue (saltar ciclo)`,
      ejercicios:[gen4a(), gen4b(),
        { id:"4c", titulo:"FizzBuzz clásico",
          task:`Del 1 al 15 imprime:\n· "FizzBuzz" si es múltiplo de 3 Y de 5\n· "Fizz" si es múltiplo de 3\n· "Buzz" si es múltiplo de 5\n· El número si no cumple nada`,
          pista:"Comprueba primero el múltiplo de AMBOS (15), luego de 3, luego de 5.",
          expected:"1\n2\nFizz\n4\nBuzz\nFizz\n7\n8\nFizz\nBuzz\n11\nFizz\n13\n14\nFizzBuzz",
          solution:`for i in range(1, 16):\n    if i % 15 == 0:\n        print("FizzBuzz")\n    elif i % 3 == 0:\n        print("Fizz")\n    elif i % 5 == 0:\n        print("Buzz")\n    else:\n        print(i)`, starter:STARTER }],
      proyecto:{ id:"4p", titulo:"🏗️ Proyecto: Tablas de multiplicar", esProyecto:true,
        task:`Genera las tablas de multiplicar del 7 al 9 usando un bucle dentro de otro. Cada tabla debe ir encabezada con su título y mostrar los resultados del 1 al 10.`,
        pista:"Bucle exterior del 7 al 9. Bucle interior del 1 al 10. Imprime el encabezado antes de cada tabla.",
        expected:"--- Tabla del 7 ---\n7 x 1 = 7\n7 x 2 = 14\n7 x 3 = 21\n7 x 4 = 28\n7 x 5 = 35\n7 x 6 = 42\n7 x 7 = 49\n7 x 8 = 56\n7 x 9 = 63\n7 x 10 = 70\n--- Tabla del 8 ---\n8 x 1 = 8\n8 x 2 = 16\n8 x 3 = 24\n8 x 4 = 32\n8 x 5 = 40\n8 x 6 = 48\n8 x 7 = 56\n8 x 8 = 64\n8 x 9 = 72\n8 x 10 = 80\n--- Tabla del 9 ---\n9 x 1 = 9\n9 x 2 = 18\n9 x 3 = 27\n9 x 4 = 36\n9 x 5 = 45\n9 x 6 = 54\n9 x 7 = 63\n9 x 8 = 72\n9 x 9 = 81\n9 x 10 = 90",
        solution:`for tabla in range(7, 10):\n    print(f"--- Tabla del {tabla} ---")\n    for i in range(1, 11):\n        print(f"{tabla} x {i} = {tabla * i}")`, starter:STARTER } },
    { id:5, titulo:"Funciones", emoji:"⚙️", color:"#0891b2",
      explicacion:`Bloques de código reutilizables definidos con def.\n\n  def saludar(nombre):\n      return f"¡Hola, {nombre}!"\n\n  print(saludar("Ana"))   →  ¡Hola, Ana!\n\nPARÁMETROS CON VALOR POR DEFECTO:\n  def potencia(base, exp=2):\n      return base ** exp\n  potencia(3)    → 9    potencia(3,3) → 27\n\nRETURN devuelve un valor para usarlo fuera.\n\nRECURSIVIDAD — función que se llama a sí misma:\n  def factorial(n):\n      if n <= 1: return 1\n      return n * factorial(n-1)`,
      ejercicios:[gen5a(),
        { id:"5b", titulo:"Validador de contraseña",
          task:`Define una función que compruebe si una contraseña es segura. Una contraseña es segura si tiene al menos 8 caracteres y contiene algún número.\n\nPruébala con "python123" e imprime si es segura o no.`,
          pista:"Combina las dos condiciones con and dentro del return.",
          expected:"Contraseña segura: True", solution:`def es_contraseña_segura(clave):\n    return len(clave) >= 8 and any(c.isdigit() for c in clave)\nprint(f"Contraseña segura: {es_contraseña_segura('python123')}")`, starter:STARTER },
        { id:"5c", titulo:"Factorial recursivo",
          task:`Define una función recursiva que calcule el factorial de un número.\n\nRecuerda: el factorial de 0 y 1 es 1, y para el resto se basa en el resultado anterior.\n\nÚsala para calcular el factorial de 5 e imprime el resultado.`,
          pista:"El caso base detiene la recursión. Sin él, el programa entraría en bucle infinito.",
          expected:"5! = 120", solution:`def factorial(n):\n    if n == 0 or n == 1:\n        return 1\n    return n * factorial(n - 1)\nprint(f"5! = {factorial(5)}")`, starter:STARTER }],
      proyecto:{ id:"5p", titulo:"🏗️ Proyecto: Conversor de unidades", esProyecto:true,
        task:`Crea tres funciones de conversión de unidades:\n· Kilómetros a millas\n· Kilogramos a libras\n· Celsius a Fahrenheit\n\nPruébalas con 100 km, 70 kg y 37 °C, e imprime los resultados.`,
        pista:"Define las tres funciones con return. Llama a cada una y usa round() para los decimales necesarios.",
        expected:"100 km = 62.1371 millas\n70 kg = 154.3234 libras\n37 °C = 98.6 °F",
        solution:`def km_a_millas(km):\n    return km * 0.621371\ndef kg_a_libras(kg):\n    return round(kg * 2.20462, 4)\ndef celsius_a_fahrenheit(c):\n    return c * 9/5 + 32\nprint(f"100 km = {km_a_millas(100)} millas")\nprint(f"70 kg = {kg_a_libras(70)} libras")\nprint(f"37 °C = {celsius_a_fahrenheit(37)} °F")`, starter:STARTER } },
    { id:6, titulo:"Listas y Tuplas", emoji:"📋", color:"#6d28d9",
      explicacion:`LISTAS — colecciones ordenadas y modificables:\n  frutas = ["manzana", "pera", "naranja"]\n  frutas[0]   → "manzana"    frutas[-1] → "naranja"\n  frutas[0:2] → ["manzana", "pera"]\n\nMÉTODOS:\n  append(x)  insert(i,x)  remove(x)  pop()\n  sort()     reverse()    len()      sum()\n\nCOMPRENSIÓN DE LISTAS:\n  cuadrados = [x**2 for x in range(1, 6)]\n  → [1, 4, 9, 16, 25]\n\n  pares = [x for x in range(10) if x % 2 == 0]\n\nTUPLAS — inmutables:\n  punto = (40.41, -3.70)`,
      ejercicios:[
        { id:"6a", titulo:"Estadísticas de notas",
          task:`notas = [7, 9, 4, 8, 6, 5, 9, 3, 8, 7]\n\nCalcula e imprime la nota máxima, la mínima, la media y cuántos alumnos han aprobado (nota >= 5).`,
          pista:"Usa max(), min(), sum()/len() para la media. Para aprobados usa sum(1 for n in notas if n >= 5).",
          expected:"Máxima: 9\nMínima: 3\nMedia: 6.6\nAprobados: 8",
          solution:`notas = [7, 9, 4, 8, 6, 5, 9, 3, 8, 7]\nprint(f"Máxima: {max(notas)}")\nprint(f"Mínima: {min(notas)}")\nprint(f"Media: {sum(notas)/len(notas)}")\nprint(f"Aprobados: {sum(1 for n in notas if n >= 5)}")`, starter:STARTER },
        { id:"6b", titulo:"Comprensión de listas",
          task:`Usando comprensión de listas:\n1. Crea una lista con los cuadrados del 1 al 8\n2. A partir de esa lista, crea otra con solo los impares\n\nImprime ambas listas.`,
          pista:"Para los impares filtra con: if x % 2 != 0",
          expected:"Cuadrados: [1, 4, 9, 16, 25, 36, 49, 64]\nCuadrados impares: [1, 9, 25, 49]",
          solution:`cuadrados = [x**2 for x in range(1, 9)]\nimpares = [x for x in cuadrados if x % 2 != 0]\nprint(f"Cuadrados: {cuadrados}")\nprint(f"Cuadrados impares: {impares}")`, starter:STARTER },
        { id:"6c", titulo:"Manipulación de lista",
          task:`lista = [3, 1, 4, 1, 5, 9, 2, 6]\n\nRealiza estas tres operaciones en orden:\n1. Añade el 7 al final\n2. Elimina el primer 1 que encuentres\n3. Ordena la lista\n\nImprime la lista resultante.`,
          pista:"Usa append(), remove() y sort() en ese orden. sort() modifica la lista directamente.",
          expected:"[2, 3, 4, 5, 6, 7, 9]",
          solution:`lista = [3, 1, 4, 1, 5, 9, 2, 6]\nlista.append(7)\nlista.remove(1)\nlista.sort()\nprint(lista)`, starter:STARTER }],
      proyecto:{ id:"6p", titulo:"🏗️ Proyecto: Gestión de inventario", esProyecto:true,
        task:`productos = ["Laptop", "Ratón", "Teclado", "Monitor", "Auriculares"]\nprecios = [899, 25, 45, 299, 79]\n\nMuestra un inventario numerado con el precio de cada producto, el total del inventario y cuál es el producto más caro.`,
        pista:"Usa range(len(productos)) para iterar con índice. Para el más caro usa max(precios) y .index().",
        expected:"=== INVENTARIO ===\n1. Laptop - 899€\n2. Ratón - 25€\n3. Teclado - 45€\n4. Monitor - 299€\n5. Auriculares - 79€\nTotal inventario: 1347€\nProducto más caro: Laptop",
        solution:`productos = ["Laptop", "Ratón", "Teclado", "Monitor", "Auriculares"]\nprecios = [899, 25, 45, 299, 79]\nprint("=== INVENTARIO ===")\nfor i in range(len(productos)):\n    print(f"{i+1}. {productos[i]} - {precios[i]}€")\nprint(f"Total inventario: {sum(precios)}€")\nidx = precios.index(max(precios))\nprint(f"Producto más caro: {productos[idx]}")`, starter:STARTER } },
    { id:7, titulo:"Diccionarios y Sets", emoji:"🗂️", color:"#0284c7",
      explicacion:`DICCIONARIOS — pares clave:valor:\n  persona = {"nombre": "Ana", "edad": 25}\n  persona["nombre"]         → "Ana"\n  persona.get("email", "—") → "—"\n\nMÉTODOS:\n  .keys()  .values()  .items()  .get()  .update()\n\nRECORRER:\n  for clave, valor in persona.items():\n      print(f"{clave}: {valor}")\n\nCOMPRENSIÓN:\n  {x: x**2 for x in range(1, 6)}\n\nSETS — sin duplicados, sin orden:\n  a = {1,2,3,4}  b = {3,4,5,6}\n  a & b → {3,4}   a | b → {1,2,3,4,5,6}   a-b → {1,2}`,
      ejercicios:[
        { id:"7a", titulo:"Frecuencia de palabras",
          task:`frase = "el sol sale y el sol brilla y el cielo es azul"\n\nCuenta cuántas veces aparece cada palabra.\nImprime exactamente:\nel: 3\nsol: 2\nsale: 1\ny: 2\nbrilla: 1\ncielo: 1\nes: 1\nazul: 1`,
          pista:"Divide con split(). Recorre palabras y usa dict.get(palabra, 0) + 1 para contar.",
          expected:"el: 3\nsol: 2\nsale: 1\ny: 2\nbrilla: 1\ncielo: 1\nes: 1\nazul: 1",
          solution:`frase = "el sol sale y el sol brilla y el cielo es azul"\ncontador = {}\nfor palabra in frase.split():\n    contador[palabra] = contador.get(palabra, 0) + 1\nfor palabra, veces in contador.items():\n    print(f"{palabra}: {veces}")`, starter:STARTER },
        { id:"7b", titulo:"Agenda de contactos",
          task:`agenda = {\n    "Ana": "612345678",\n    "Carlos": "698765432",\n    "Lucía": "677112233"\n}\n\nRecorre la agenda e imprime cada contacto en el formato que consideres claro. Al final muestra el total de contactos.`,
          pista:"Usa agenda.items() para obtener nombre y teléfono en cada iteración.",
          expected:`=== AGENDA ===\nAna → 612345678\nCarlos → 698765432\nLucía → 677112233\nTotal contactos: 3`,
          solution:`agenda = {"Ana": "612345678", "Carlos": "698765432", "Lucía": "677112233"}\nprint("=== AGENDA ===")\nfor nombre, telefono in agenda.items():\n    print(f"{nombre} → {telefono}")\nprint(f"Total contactos: {len(agenda)}")`, starter:STARTER },
        { id:"7c", titulo:"Eliminar duplicados",
          task:`numeros = [3, 7, 2, 7, 1, 3, 9, 2, 8, 1, 5]\n\nElimina los duplicados, ordénalos de menor a mayor e imprime la lista resultante junto al total de números únicos.`,
          pista:"Convierte a set() para eliminar duplicados, luego sorted() para ordenar.",
          expected:"Números únicos ordenados: [1, 2, 3, 5, 7, 8, 9]\nTotal únicos: 7",
          solution:`numeros = [3, 7, 2, 7, 1, 3, 9, 2, 8, 1, 5]\nunicos = sorted(set(numeros))\nprint(f"Números únicos ordenados: {unicos}")\nprint(f"Total únicos: {len(unicos)}")`, starter:STARTER }],
      proyecto:gen7p() },
    { id:8, titulo:"Strings y Programas", emoji:"🚀", color:"#be185d",
      explicacion:`MÉTODOS DE STRING:\n  "  hola  ".strip()        → "hola"\n  "hola".upper()            → "HOLA"\n  "HOLA".lower()            → "hola"\n  "hola mundo".replace("mundo","Python") → "hola Python"\n  "a,b,c".split(",")        → ["a","b","c"]\n  "hola".count("l")         → 2\n  ", ".join(["a","b","c"])  → "a, b, c"\n  "123".isdigit()           → True\n\nFORMATO EN f-STRINGS:\n  f"{3.14159:.2f}"   → "3.14"\n  f"{'hola':<10}"    → "hola      "\n  f"{'hola':>10}"    → "      hola"\n  f"{0.75:.0%}"      → "75%"`,
      ejercicios:[
        { id:"8a", titulo:"Analizador de texto",
          task:`texto = "Python es el lenguaje del futuro y Python es genial"\n\nAnaliza el texto e imprime el número de palabras, los caracteres sin contar espacios, cuántas veces aparece "Python" y el texto en mayúsculas.`,
          pista:`Para palabras usa split(). Para caracteres sin espacios usa replace(" ", ""). Para contar usa count().`,
          expected:`Palabras: 10\nCaracteres (sin espacios): 44\nVeces que aparece "Python": 2\nEn mayúsculas: PYTHON ES EL LENGUAJE DEL FUTURO Y PYTHON ES GENIAL`,
          solution:`texto = "Python es el lenguaje del futuro y Python es genial"\nprint(f"Palabras: {len(texto.split())}")\nprint(f"Caracteres (sin espacios): {len(texto.replace(' ', ''))}")\nprint(f'Veces que aparece "Python": {texto.count("Python")}')\nprint(f"En mayúsculas: {texto.upper()}")`, starter:STARTER },
        { id:"8b", titulo:"Tabla formateada",
          task:`Tienes estos productos y precios:\n  Laptop → 899€\n  Ratón → 25€\n  Teclado → 45€\n\nMuestra una tabla alineada con una línea separadora, el precio de cada producto formateado con 2 decimales, y el total al final.`,
          pista:`Usa f"{nombre:<14}" para alinear izquierda y f"{precio:>8.2f}" para alinear derecha con 2 decimales.`,
          expected:"=========================\nProducto       Precio\n=========================\nLaptop          899.00€\nRatón            25.00€\nTeclado          45.00€\n=========================\nTOTAL           969.00€",
          solution:`sep = "========================="\nproductos = [("Laptop",899),("Ratón",25),("Teclado",45)]\nprint(sep)\nprint("Producto       Precio")\nprint(sep)\ntotal = 0\nfor nombre, precio in productos:\n    print(f"{nombre:<14} {precio:>8.2f}€")\n    total += precio\nprint(sep)\nprint(f"TOTAL          {total:>8.2f}€")`, starter:STARTER },
        { id:"8c", titulo:"Cifrado César",
          task:`El cifrado César desplaza cada letra del alfabeto un número fijo de posiciones.\n\nCrea una función que cifre un texto desplazando cada letra minúscula 3 posiciones. Los espacios y otros caracteres no se modifican.\n\nPruébala con "hola mundo" e imprime el resultado.`,
          pista:"Recorre cada carácter. Si es letra minúscula: chr((ord(c) - ord('a') + 3) % 26 + ord('a')).",
          expected:"Cifrado: krod pxqgr",
          solution:`def cifrar(texto, d=3):\n    r = ""\n    for c in texto:\n        if c.isalpha() and c.islower():\n            r += chr((ord(c) - ord("a") + d) % 26 + ord("a"))\n        else:\n            r += c\n    return r\nprint(f"Cifrado: {cifrar('hola mundo')}")`, starter:STARTER }],
      proyecto:{ id:"8p", titulo:"🏗️ Proyecto Final: Gestor de tareas", esProyecto:true,
        task:`tareas = [\n    {"nombre": "Estudiar Python",  "prioridad": "alta",  "hecha": True},\n    {"nombre": "Hacer ejercicio",  "prioridad": "media", "hecha": False},\n    {"nombre": "Leer un libro",    "prioridad": "baja",  "hecha": False},\n    {"nombre": "Revisar correos",  "prioridad": "alta",  "hecha": True},\n]\n\nMuestra cada tarea indicando si está hecha o pendiente, junto a su prioridad. Al final imprime cuántas están completadas y cuántas tareas de alta prioridad siguen pendientes.`,
        pista:`Usa "[✓]" o "[ ]" según tarea["hecha"]. Cuenta con sum() y condiciones.`,
        expected:`=== GESTOR DE TAREAS ===\n[✓] Estudiar Python (alta)\n[ ] Hacer ejercicio (media)\n[ ] Leer un libro (baja)\n[✓] Revisar correos (alta)\n---\nCompletadas: 2/4\nPendientes de alta prioridad: 0`,
        solution:`tareas = [\n    {"nombre": "Estudiar Python",  "prioridad": "alta",  "hecha": True},\n    {"nombre": "Hacer ejercicio",  "prioridad": "media", "hecha": False},\n    {"nombre": "Leer un libro",    "prioridad": "baja",  "hecha": False},\n    {"nombre": "Revisar correos",  "prioridad": "alta",  "hecha": True},\n]\nprint("=== GESTOR DE TAREAS ===")\nfor t in tareas:\n    marca = "[✓]" if t["hecha"] else "[ ]"\n    print(f"{marca} {t['nombre']} ({t['prioridad']})")\nprint("---")\ncomp = sum(1 for t in tareas if t["hecha"])\nprint(f"Completadas: {comp}/{len(tareas)}")\npend = sum(1 for t in tareas if not t["hecha"] and t["prioridad"] == "alta")\nprint(f"Pendientes de alta prioridad: {pend}")`, starter:STARTER } },
  ];
}

function aplanar(bloques) {
  const lista = [];
  bloques.forEach(b => {
    b.ejercicios.forEach(e => lista.push({...e, bloque:b}));
    lista.push({...b.proyecto, bloque:b});
  });
  return lista;
}

function runPython(code) {
  const out = []; const vars = {};
  function pyStr(v) {
    if (v===true) return "True"; if (v===false) return "False";
    if (v===null||v===undefined) return "None";
    if (Array.isArray(v)) return "["+v.map(pyStr).join(", ")+"]";
    if (typeof v==="object") return "{"+Object.entries(v).map(([k,val])=>`'${k}': ${pyStr(val)}`).join(", ")+"}";
    return String(v);
  }
  function splitArgs(s) {
    const p=[]; let d=0,cur="",inS=false,sc="";
    for(const c of s){
      if(!inS&&(c==='"'||c==="'")){ inS=true;sc=c;cur+=c; }
      else if(inS&&c===sc){ inS=false;cur+=c; }
      else if(!inS&&"([{".includes(c)){ d++;cur+=c; }
      else if(!inS&&")]}".includes(c)){ d--;cur+=c; }
      else if(!inS&&c===","&&d===0){ p.push(cur);cur=""; }
      else cur+=c;
    }
    if(cur.trim()) p.push(cur); return p;
  }
  function evalRange(expr,av){
    const m=expr.trim().match(/^range\((.+)\)$/); if(!m) return null;
    const parts=splitArgs(m[1]).map(a=>parseInt(evalVal(a.trim(),av)));
    const[s,e,step]=parts.length===1?[0,parts[0],1]:parts.length===2?[parts[0],parts[1],1]:parts;
    const arr=[]; for(let i=s;step>0?i<e:i>e;i+=step) arr.push(i); return arr;
  }
  function evalVal(expr,lv={}){
    expr=expr.trim(); const av={...vars,...lv};
    const fs=expr.match(/^f(["'])([\s\S]*?)\1$/);
    if(fs) return fs[2].replace(/\{([^{}]*)\}/g,(_,k)=>{
      const fm=k.match(/^(.+):(.+)$/);
      if(fm){
        const val=evalVal(fm[1].trim(),av),fmt=fm[2];
        if(fmt.endsWith("%")) return(val*100).toFixed(parseInt(fmt)||0)+"%";
        const mf=fmt.match(/^([<>^]?)(\d+)(?:\.(\d+))?f?$/);
        if(mf){
          const dec=mf[3]!==undefined?parseInt(mf[3]):0,w=mf[2]?parseInt(mf[2]):0;
          const s=parseFloat(val).toFixed(dec); if(!w) return s;
          const al=mf[1]||">",pad=w-s.length; if(pad<=0) return s;
          if(al==="<") return s+" ".repeat(pad);
          if(al===">") return " ".repeat(pad)+s;
          return " ".repeat(Math.floor(pad/2))+s+" ".repeat(Math.ceil(pad/2));
        }
        const mw=fmt.match(/^([<>^])(\d+)$/);
        if(mw){const s=String(val),w=parseInt(mw[2]),al=mw[1],pad=w-s.length;
          if(pad<=0)return s; if(al==="<")return s+" ".repeat(pad); if(al===">")return" ".repeat(pad)+s;
          return" ".repeat(Math.floor(pad/2))+s+" ".repeat(Math.ceil(pad/2));}
        return String(val);
      }
      try{return pyStr(evalVal(k.trim(),av));}catch{return k;}
    });
    const str=expr.match(/^(["'])([\s\S]*?)\1$/); if(str) return str[2];
    if(expr==="True") return true; if(expr==="False") return false; if(expr==="None") return null;
    if(expr.startsWith("[")&&expr.endsWith("]")){const inn=expr.slice(1,-1).trim();return inn?splitArgs(inn).map(s=>evalVal(s.trim(),av)):[];}
    if(expr.startsWith("{")&&expr.endsWith("}")){const inn=expr.slice(1,-1).trim();const res={};if(inn)splitArgs(inn).forEach(pair=>{const ci=pair.indexOf(":");if(ci>-1)res[evalVal(pair.slice(0,ci).trim(),av)]=evalVal(pair.slice(ci+1).trim(),av);});return res;}
    const da=expr.match(/^([\w\u00C0-\u024F]+)\[(["'])(.*?)\2\]$/); if(da&&av[da[1]]!==undefined) return av[da[1]][da[3]];
    const li=expr.match(/^([\w\u00C0-\u024F]+)\[(-?\d+)\]$/); if(li&&av[li[1]]!==undefined){const arr=av[li[1]],i=parseInt(li[2]);return Array.isArray(arr)?(i<0?arr[arr.length+i]:arr[i]):arr[i];}
    const mm=expr.match(/^([\w\u00C0-\u024F]+)\.([\w]+)\(([\s\S]*)\)$/);
    if(mm){const obj=evalVal(mm[1],av),meth=mm[2],args=mm[3].trim()?splitArgs(mm[3]).map(a=>evalVal(a.trim(),av)):[];
      if(typeof obj==="string"){
        if(meth==="upper") return obj.toUpperCase(); if(meth==="lower") return obj.toLowerCase();
        if(meth==="strip") return obj.trim(); if(meth==="split") return obj.split(args[0]!==undefined?args[0]:/\s+/).filter(Boolean);
        if(meth==="replace") return obj.replaceAll(args[0],args[1]); if(meth==="count") return obj.split(args[0]).length-1;
        if(meth==="startswith") return obj.startsWith(args[0]); if(meth==="endswith") return obj.endsWith(args[0]);
        if(meth==="join") return(args[0]||[]).join(obj); if(meth==="isdigit") return/^\d+$/.test(obj);
        if(meth==="isalpha") return/^[a-zA-Z\u00C0-\u024F]+$/.test(obj); if(meth==="isalnum") return/^[a-zA-Z0-9\u00C0-\u024F]+$/.test(obj);
        if(meth==="islower") return obj===obj.toLowerCase()&&obj!==obj.toUpperCase();
        if(meth==="isupper") return obj===obj.toUpperCase()&&obj!==obj.toLowerCase();
        if(meth==="center"){const w=args[0],f=args[1]||" ",p=w-obj.length;return p<=0?obj:f.repeat(Math.floor(p/2))+obj+f.repeat(Math.ceil(p/2));}
        if(meth==="zfill") return obj.padStart(args[0],"0");
      }
      if(Array.isArray(obj)){
        if(meth==="append"){obj.push(args[0]);return null;} if(meth==="remove"){const i=obj.indexOf(args[0]);if(i>-1)obj.splice(i,1);return null;}
        if(meth==="pop") return obj.pop(); if(meth==="sort"){obj.sort((a,b)=>typeof a==="number"?a-b:String(a).localeCompare(String(b)));return null;}
        if(meth==="reverse"){obj.reverse();return null;} if(meth==="index") return obj.indexOf(args[0]);
        if(meth==="count") return obj.filter(x=>x===args[0]).length; if(meth==="insert"){obj.splice(args[0],0,args[1]);return null;}
      }
      if(obj&&typeof obj==="object"&&!Array.isArray(obj)){
        if(meth==="keys") return Object.keys(obj); if(meth==="values") return Object.values(obj);
        if(meth==="items") return Object.entries(obj);
        if(meth==="get") return obj[args[0]]!==undefined?obj[args[0]]:(args[1]!==undefined?args[1]:null);
        if(meth==="update"){Object.assign(obj,args[0]);return null;}
      }
    }
    const b1=expr.match(/^round\((.+),\s*(\d+)\)$/); if(b1) return+parseFloat(evalVal(b1[1],av)).toFixed(parseInt(b1[2]));
    const b2=expr.match(/^(int|float|str|bool|len|max|min|sum|sorted|list|abs|ord|chr|set)\((.+)\)$/);
    if(b2){const fn=b2[1],arg=evalVal(b2[2],av);
      if(fn==="int") return parseInt(arg); if(fn==="float") return parseFloat(arg);
      if(fn==="str") return String(arg); if(fn==="bool") return!!arg;
      if(fn==="abs") return Math.abs(arg); if(fn==="ord") return String(arg).charCodeAt(0);
      if(fn==="chr") return String.fromCharCode(arg);
      if(fn==="len") return typeof arg==="string"?arg.length:Array.isArray(arg)?arg.length:Object.keys(arg).length;
      if(fn==="max") return Array.isArray(arg)?Math.max(...arg):arg;
      if(fn==="min") return Array.isArray(arg)?Math.min(...arg):arg;
      if(fn==="sum") return Array.isArray(arg)?arg.reduce((a,b)=>a+b,0):0;
      if(fn==="sorted") return Array.isArray(arg)?[...arg].sort((a,b)=>typeof a==="number"?a-b:String(a).localeCompare(String(b))):arg;
      if(fn==="set") return Array.isArray(arg)?[...new Set(arg)]:[];
      if(fn==="list") return Array.isArray(arg)?arg:[];
    }
    const anyM=expr.match(/^any\((.+)\s+for\s+([\w\u00C0-\u024F]+)\s+in\s+(.+)\)$/);
    if(anyM){const iter=evalVal(anyM[3],av);return(Array.isArray(iter)?iter:[...String(iter)]).some(item=>!!evalVal(anyM[1],{...av,[anyM[2]]:item}));}
    const sumG=expr.match(/^sum\((.+?)\s+for\s+([\w\u00C0-\u024F]+)\s+in\s+(.+?)(?:\s+if\s+(.+))?\)$/);
    if(sumG){const iter=evalVal(sumG[3],av);return(Array.isArray(iter)?iter:[]).filter(item=>!sumG[4]||!!evalVal(sumG[4],{...av,[sumG[2]]:item})).reduce((acc,item)=>acc+evalVal(sumG[1],{...av,[sumG[2]]:item}),0);}
    const lcM=expr.match(/^\[(.+)\s+for\s+([\w\u00C0-\u024F]+)\s+in\s+(.+?)(?:\s+if\s+(.+))?\]$/);
    if(lcM){const iter=evalRange(lcM[3],av)||evalVal(lcM[3],av);if(!Array.isArray(iter))return[];return iter.filter(item=>!lcM[4]||!!evalVal(lcM[4],{...av,[lcM[2]]:item})).map(item=>evalVal(lcM[1],{...av,[lcM[2]]:item}));}
    const enumM=expr.match(/^enumerate\((.+)\)$/); if(enumM){const v=evalVal(enumM[1],av);return Array.isArray(v)?v.map((x,i)=>[i,x]):[];}
    const rng=evalRange(expr,av); if(rng) return rng;
    const fc=expr.match(/^([\w\u00C0-\u024F]+)\(([\s\S]*)\)$/); if(fc&&av[fc[1]]?.__fn) return callFn(av[fc[1]],fc[2],av);
    if(av[expr]!==undefined) return av[expr];
    if(!isNaN(expr)&&expr!=="") return+expr;
    if(expr.startsWith("not ")) return!evalVal(expr.slice(4),av);
    const ninM=expr.match(/^(.+?)\s+not in\s+(.+)$/); if(ninM){const v=evalVal(ninM[1].trim(),av),c=evalVal(ninM[2].trim(),av);return Array.isArray(c)?!c.includes(v):!String(c).includes(String(v));}
    const inM=expr.match(/^(.+?)\s+in\s+(.+)$/); if(inM&&!inM[1].includes("for")){const v=evalVal(inM[1].trim(),av),c=evalVal(inM[2].trim(),av);return Array.isArray(c)?c.includes(v):(typeof c==="object"?Object.keys(c).includes(String(v)):String(c).includes(String(v)));}
    let safe=expr;
    Object.keys(av).sort((a,b)=>b.length-a.length).forEach(k=>{safe=safe.replace(new RegExp(`\\b${k.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}\\b`,"g"),JSON.stringify(av[k]));});
    safe=safe.replace(/\bTrue\b/g,"true").replace(/\bFalse\b/g,"false").replace(/\band\b/g,"&&").replace(/\bor\b/g,"||").replace(/\bnot\b/g,"!");
    try{return Function('"use strict";return('+safe+')')();}catch{}
    return expr;
  }
  function callFn(fn,argsStr,lv={}){
    const args=argsStr.trim()?splitArgs(argsStr).map(a=>evalVal(a.trim(),lv)):[];
    const fl={};
    fn.params.forEach((p,i)=>{const dm=p.match(/(.+?)=(.+)/);fl[dm?dm[1].trim():p]=args[i]!==undefined?args[i]:(dm?evalVal(dm[2].trim(),lv):undefined);});
    let ret;
    for(const bl of fn.body){const bt=bl.trim();if(!bt||bt.startsWith("#"))continue;const rm=bt.match(/^return\s+([\s\S]+)$/);if(rm){ret=evalVal(rm[1],fl);break;}execLine(bt,fl,true);}
    return ret;
  }
  function execLine(bt,lv,inFn=false){
    const av={...vars,...lv},tgt=inFn?lv:vars;
    const pm=bt.match(/^print\(([\s\S]*)\)$/); if(pm){try{out.push(pyStr(evalVal(pm[1],lv)));}catch{out.push("");}return;}
    const incM=bt.match(/^([\w\u00C0-\u024F]+)\s*([+\-*/])=\s*([\s\S]+)$/);
    if(incM){const cur=(inFn?lv[incM[1]]:vars[incM[1]])??0;try{tgt[incM[1]]=Function('"use strict";return('+JSON.stringify(cur)+incM[2]+JSON.stringify(evalVal(incM[3],lv))+')')();}catch{}return;}
    const da=bt.match(/^([\w\u00C0-\u024F]+)\[(["'])(.*?)\2\]\s*=\s*([\s\S]+)$/); if(da&&av[da[1]]){try{av[da[1]][da[3]]=evalVal(da[4],lv);}catch{}return;}
    const asgM=bt.match(/^([\w\u00C0-\u024F]+)\s*=\s*([\s\S]+)$/);
    if(asgM&&!bt.includes("==")&&!bt.includes("!=")&&!bt.includes("<=")&&!bt.includes(">=")){try{tgt[asgM[1]]=evalVal(asgM[2],lv);}catch{}return;}
    const callM=bt.match(/^([\w\u00C0-\u024F]+)\(([\s\S]*)\)$/); if(callM&&av[callM[1]]?.__fn){callFn(av[callM[1]],callM[2],lv);return;}
    try{evalVal(bt,lv);}catch{}
  }
  function getInd(line){return(line.match(/^(\s*)/)||["",""])[1].length;}
  function runBlock(lines,lv={}){
    let j=0;
    while(j<lines.length){
      const raw=lines[j],bt=raw.trim(); if(!bt||bt.startsWith("#")){j++;continue;}
      const indent=getInd(raw);
      const defM=bt.match(/^def\s+([\w\u00C0-\u024F]+)\s*\(([^)]*)\)\s*:$/);
      if(defM){const fname=defM[1],params=defM[2].split(",").map(p=>p.trim()).filter(Boolean);j++;const body=[];while(j<lines.length&&lines[j].trim()!=""&&getInd(lines[j])>indent){body.push(lines[j].slice(indent+4));j++;}(lv!==vars?lv:vars)[fname]={__fn:true,params,body};continue;}
      const forM=bt.match(/^for\s+([\w\u00C0-\u024F]+)(?:,\s*([\w\u00C0-\u024F]+))?\s+in\s+([\s\S]+):$/);
      if(forM){const v1=forM[1],v2=forM[2];j++;const body=[];while(j<lines.length&&(lines[j].trim()===""||getInd(lines[j])>indent)){if(lines[j].trim())body.push(lines[j].slice(indent+4));j++;}const iter=evalRange(forM[3].trim(),{...vars,...lv})||evalVal(forM[3].trim(),{...vars,...lv});if(Array.isArray(iter)){for(const item of iter){if(v2&&Array.isArray(item)){lv[v1]=item[0];lv[v2]=item[1];}else lv[v1]=item;runBlock(body,lv);}}continue;}
      const wM=bt.match(/^while\s+([\s\S]+):$/);
      if(wM){j++;const body=[];while(j<lines.length&&(lines[j].trim()===""||getInd(lines[j])>indent)){if(lines[j].trim())body.push(lines[j].slice(indent+4));j++;}let g=0;while(evalVal(wM[1],{...vars,...lv})&&g++<500)runBlock(body,lv);continue;}
      if(bt.match(/^if\s+[\s\S]+:$/)){
        const branches=[];
        while(j<lines.length){const t=lines[j].trim();const ifM=t.match(/^(?:if|elif)\s+([\s\S]+):$/);
          if(ifM){j++;const body=[];while(j<lines.length&&(lines[j].trim()===""||getInd(lines[j])>indent)){if(lines[j].trim())body.push(lines[j].slice(indent+4));j++;}branches.push({cond:ifM[1],body});}
          else if(t==="else:"){j++;const body=[];while(j<lines.length&&(lines[j].trim()===""||getInd(lines[j])>indent)){if(lines[j].trim())body.push(lines[j].slice(indent+4));j++;}branches.push({cond:null,body});break;}
          else break;}
        for(const br of branches){if(br.cond===null||evalVal(br.cond,{...vars,...lv})){runBlock(br.body,lv);break;}}
        continue;
      }
      execLine(bt,lv); j++;
    }
  }
  runBlock(code.split("\n"),vars);
  return out.join("\n");
}

const TEMAS={"#2563eb":{bg:"#eff6ff",bd:"#bfdbfe"},"#7c3aed":{bg:"#f5f3ff",bd:"#ddd6fe"},"#dc2626":{bg:"#fef2f2",bd:"#fca5a5"},"#16a34a":{bg:"#f0fdf4",bd:"#86efac"},"#0891b2":{bg:"#ecfeff",bd:"#a5f3fc"},"#6d28d9":{bg:"#faf5ff",bd:"#c4b5fd"},"#0284c7":{bg:"#f0f9ff",bd:"#7dd3fc"},"#be185d":{bg:"#fdf2f8",bd:"#f9a8d4"}};

export default function PyLingo() {
  const [curriculo] = useState(() => aplanar(buildCurriculo()));
  const [idx,setIdx]     = useState(0);
  const [code,setCode]   = useState(STARTER);
  const [result,setRes]  = useState(null);
  const [done,setDone]   = useState({});
  const [streak,setSt]   = useState(0);
  const [hint,setHint]   = useState(false);
  const [flash,setFlash] = useState(null);
  const [xp,setXp]       = useState(false);
  const [tries,setTries] = useState({});
  const [panel,setPanel] = useState("explicacion");
  const [sb,setSb]       = useState(true);
  const taRef = useRef(null);

  const ej=curriculo[idx], bl=ej.bloque;
  const numDone=Object.keys(done).length, prog=Math.round(numDone/curriculo.length*100);
  const triesN=tries[ej.id]||0, verSol=triesN>=INTENTOS_SOL;
  const col=bl.color, tema=TEMAS[col]||TEMAS["#2563eb"];

  const irA=useCallback(i=>{setIdx(i);setCode(STARTER);setRes(null);setHint(false);setFlash(null);setPanel("explicacion");},[]);

  const otraVariante=useCallback(()=>{
    const cands=curriculo.map((e,i)=>({e,i})).filter(({e,i})=>e.bloque.id===bl.id&&!e.esProyecto&&i!==idx);
    if(!cands.length)return;
    const noHechos=cands.filter(({e})=>!done[e.id]);
    irA((noHechos.length?noHechos[0]:cands[0]).i);
  },[curriculo,bl,idx,done,irA]);

  const ejecutar=useCallback(()=>{
    const salida=runPython(code);
    const correcto=norm(salida)===norm(ej.expected);
    setRes({salida,correcto});
    setFlash(correcto?"bien":"mal");
    setTimeout(()=>setFlash(null),700);
    if(correcto){if(!done[ej.id]){setDone(p=>({...p,[ej.id]:true}));setXp(true);setTimeout(()=>setXp(false),1400);}setSt(s=>s+1);}
    else{setSt(0);setTries(p=>({...p,[ej.id]:(p[ej.id]||0)+1}));}
  },[code,ej,done]);

  const onKey=e=>{
    const ta=taRef.current,ini=ta.selectionStart,fin=ta.selectionEnd,sel=code.substring(ini,fin);
    if(e.key==="Tab"){e.preventDefault();setCode(code.substring(0,ini)+"    "+code.substring(fin));requestAnimationFrame(()=>{ta.selectionStart=ta.selectionEnd=ini+4;});return;}
    if((e.ctrlKey||e.metaKey)&&e.key==="Enter"){e.preventDefault();ejecutar();return;}
    const PARES={"(":")","[":"]","{":"}",'"':'"',"'":"'"};const CIERRES=new Set([")","]","}"]);
    if(sel.length>0&&PARES[e.key]){e.preventDefault();const n=code.substring(0,ini)+e.key+sel+PARES[e.key]+code.substring(fin);setCode(n);requestAnimationFrame(()=>{ta.selectionStart=ini+1;ta.selectionEnd=fin+1;});return;}
    if(PARES[e.key]){e.preventDefault();const cl=PARES[e.key];if((e.key==='"'||e.key==="'")&&code[ini]===e.key){requestAnimationFrame(()=>{ta.selectionStart=ta.selectionEnd=ini+1;});return;}setCode(code.substring(0,ini)+e.key+cl+code.substring(fin));requestAnimationFrame(()=>{ta.selectionStart=ta.selectionEnd=ini+1;});return;}
    if(CIERRES.has(e.key)&&code[ini]===e.key){e.preventDefault();requestAnimationFrame(()=>{ta.selectionStart=ta.selectionEnd=ini+1;});return;}
    if(e.key==="Backspace"&&ini===fin&&ini>0&&PARES[code[ini-1]]===code[ini]){e.preventDefault();setCode(code.substring(0,ini-1)+code.substring(ini+1));requestAnimationFrame(()=>{ta.selectionStart=ta.selectionEnd=ini-1;});return;}
    if(e.key==="Enter"&&ini===fin){const pv=code[ini-1],nx=code[ini];if((pv==="{"&&nx==="}")||(pv==="("&&nx===")")||(pv==="["&&nx==="]")){e.preventDefault();const ls=code.lastIndexOf("\n",ini-1)+1,sg=code.substring(ls,ini).match(/^(\s*)/)[1];setCode(code.substring(0,ini)+"\n"+sg+"    "+"\n"+sg+code.substring(fin));requestAnimationFrame(()=>{ta.selectionStart=ta.selectionEnd=ini+1+sg.length+4;});return;}}
  };

  const nL=code.split("\n").length;
  const bloqueIds=[...new Set(curriculo.map(e=>e.bloque.id))];

  return(
    <div style={{minHeight:"100vh",background:"#f0f4f8",fontFamily:"'DM Sans','Segoe UI',sans-serif"}}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=DM+Mono:wght@400;500&display=swap');*{box-sizing:border-box;margin:0;padding:0}::-webkit-scrollbar{width:5px;height:5px}::-webkit-scrollbar-track{background:#f1f5f9}::-webkit-scrollbar-thumb{background:#cbd5e1;border-radius:3px}textarea:focus{outline:none}button{cursor:pointer;transition:opacity .15s,transform .1s;font-family:'DM Sans',sans-serif}button:hover{opacity:.86}button:active{transform:scale(.97)}@keyframes pop{0%{transform:scale(.82);opacity:0}60%{transform:scale(1.04)}100%{transform:scale(1);opacity:1}}@keyframes slideUp{from{transform:translateY(10px);opacity:0}to{opacity:1;transform:none}}@keyframes xpF{0%{opacity:0;transform:translateY(0)}20%{opacity:1;transform:translateY(-6px)}80%{opacity:1}100%{opacity:0;transform:translateY(-52px)}}@keyframes brillo{0%,100%{box-shadow:0 0 0 0 #22c55e44}50%{box-shadow:0 0 0 10px #22c55e00}}@keyframes temblar{0%,100%{transform:translateX(0)}20%{transform:translateX(-6px)}40%{transform:translateX(6px)}60%{transform:translateX(-3px)}80%{transform:translateX(3px)}}@keyframes fadeIn{from{opacity:0}to{opacity:1}}.pop{animation:pop .35s cubic-bezier(.34,1.56,.64,1) both}.slide{animation:slideUp .28s ease both}.brillo{animation:brillo .65s ease}.temblar{animation:temblar .38s ease}.fadeIn{animation:fadeIn .3s ease}`}</style>

      <header style={{background:"#fff",borderBottom:"1px solid #e2e8f0",position:"sticky",top:0,zIndex:50,boxShadow:"0 1px 6px #0000000d"}}>
        <div style={{maxWidth:1280,margin:"0 auto",padding:"0 20px",height:56,display:"flex",alignItems:"center",gap:14}}>
          <button onClick={()=>setSb(s=>!s)} style={{background:"none",border:"none",color:"#94a3b8",fontSize:20,padding:"2px 6px",borderRadius:6}}>☰</button>
          <div style={{display:"flex",alignItems:"center",gap:8,flexShrink:0}}>
            <div style={{width:32,height:32,borderRadius:9,background:"linear-gradient(135deg,#2563eb,#1e40af)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:16,boxShadow:"0 2px 8px #2563eb44"}}>🐍</div>
            <span style={{fontWeight:700,fontSize:17,color:"#0f172a",letterSpacing:"-.5px"}}>Py<span style={{color:"#2563eb"}}>Lingo</span></span>
          </div>
          <div style={{flex:1,display:"flex",alignItems:"center",gap:10}}>
            <div style={{flex:1,height:6,background:"#e2e8f0",borderRadius:99,overflow:"hidden"}}>
              <div style={{width:`${prog}%`,height:"100%",background:`linear-gradient(90deg,${col},${col}99)`,borderRadius:99,transition:"width .5s ease"}}/>
            </div>
            <span style={{fontSize:12,fontWeight:600,color:"#64748b",whiteSpace:"nowrap"}}>{numDone}/{curriculo.length}</span>
          </div>
          {streak>1&&<div style={{display:"flex",alignItems:"center",gap:4,background:"#fff7ed",border:"1.5px solid #fed7aa",borderRadius:20,padding:"3px 11px",flexShrink:0}}><span>🔥</span><span style={{fontSize:13,fontWeight:700,color:"#ea580c"}}>{streak}</span></div>}
          {numDone>0&&<div style={{background:"#eff6ff",border:"1.5px solid #bfdbfe",borderRadius:20,padding:"3px 11px",flexShrink:0}}><span style={{fontSize:13,fontWeight:700,color:"#2563eb"}}>⭐ {numDone*10} XP</span></div>}
        </div>
      </header>

      <div style={{maxWidth:1280,margin:"0 auto",padding:"20px",display:"flex",gap:18}}>
        {sb&&(
          <aside style={{width:225,flexShrink:0}}>
            <div style={{background:"#fff",border:"1px solid #e2e8f0",borderRadius:14,overflow:"hidden",position:"sticky",top:70}}>
              <div style={{padding:"11px 14px",borderBottom:"1px solid #f1f5f9"}}><span style={{fontSize:10.5,fontWeight:700,color:"#94a3b8",letterSpacing:".08em",textTransform:"uppercase"}}>Bloques</span></div>
              <div style={{maxHeight:"calc(100vh - 140px)",overflowY:"auto"}}>
                {bloqueIds.map(bid=>{
                  const b=curriculo.find(e=>e.bloque.id===bid).bloque;
                  const items=curriculo.map((e,i)=>({e,i})).filter(({e})=>e.bloque.id===bid);
                  return(<div key={bid}>
                    <div style={{padding:"8px 14px 3px",display:"flex",alignItems:"center",gap:5}}>
                      <span style={{fontSize:13}}>{b.emoji}</span>
                      <span style={{fontSize:10.5,fontWeight:700,color:b.color,textTransform:"uppercase",letterSpacing:".05em"}}>{b.titulo}</span>
                    </div>
                    {items.map(({e,i})=>{const act=i===idx,hecho=!!done[e.id];return(
                      <button key={e.id} onClick={()=>irA(i)} style={{width:"100%",display:"flex",alignItems:"center",gap:8,padding:"7px 14px 7px 22px",background:act?`${b.color}11`:"transparent",border:"none",borderLeft:`3px solid ${act?b.color:"transparent"}`,textAlign:"left",transition:"background .15s"}}>
                        <span style={{width:17,height:17,borderRadius:"50%",flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center",fontSize:9,fontWeight:700,background:hecho?"#dcfce7":act?`${b.color}22`:"#f1f5f9",color:hecho?"#16a34a":act?b.color:"#94a3b8",border:`1.5px solid ${hecho?"#86efac":act?b.color:"#e2e8f0"}`}}>{hecho?"✓":e.esProyecto?"★":""}</span>
                        <span style={{fontSize:12,fontWeight:act?600:400,color:act?"#0f172a":"#475569",lineHeight:1.3}}>{e.esProyecto?e.titulo.replace("🏗️ Proyecto: ",""):e.titulo}</span>
                      </button>);})}
                  </div>);
                })}
              </div>
            </div>
          </aside>
        )}

        <main style={{flex:1,minWidth:0}}>
          <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:12,flexWrap:"wrap"}}>
            <div style={{display:"flex",alignItems:"center",gap:5,background:col,color:"#fff",borderRadius:20,padding:"4px 13px",fontSize:12,fontWeight:700}}><span>{bl.emoji}</span>{bl.titulo}</div>
            {ej.esProyecto&&<span style={{background:"#fef9c3",color:"#854d0e",border:"1px solid #fde047",borderRadius:20,padding:"3px 11px",fontSize:11.5,fontWeight:700}}>🏗️ Proyecto final</span>}
            {done[ej.id]&&<span style={{background:"#dcfce7",color:"#16a34a",border:"1px solid #86efac",borderRadius:20,padding:"3px 11px",fontSize:11.5,fontWeight:700}}>✓ Completado</span>}
          </div>

          <div style={{background:"#fff",border:"1px solid #e2e8f0",borderRadius:16,overflow:"hidden",marginBottom:14,boxShadow:"0 1px 6px #0000000a"}}>
            <div style={{padding:"16px 22px 0",borderBottom:"1px solid #f1f5f9"}}>
              <div style={{display:"flex",alignItems:"flex-start",justifyContent:"space-between",gap:14,marginBottom:12}}>
                <h1 style={{fontSize:19,fontWeight:700,color:"#0f172a",letterSpacing:"-.4px"}}>{ej.titulo}</h1>
                <div style={{display:"flex",gap:7,flexShrink:0}}>
                  {idx>0&&<button onClick={()=>irA(idx-1)} style={{padding:"5px 11px",background:"#f8fafc",border:"1.5px solid #e2e8f0",borderRadius:8,fontSize:12,color:"#475569"}}>← Ant.</button>}
                  {idx<curriculo.length-1&&<button onClick={()=>irA(idx+1)} style={{padding:"5px 11px",background:"#f8fafc",border:"1.5px solid #e2e8f0",borderRadius:8,fontSize:12,color:"#475569"}}>Sig. →</button>}
                </div>
              </div>
              <div style={{display:"flex"}}>
                {[{id:"explicacion",label:"📖 Explicación"},{id:"tarea",label:"📌 Tarea"}].map(tab=>(
                  <button key={tab.id} onClick={()=>setPanel(tab.id)} style={{padding:"8px 16px",background:"none",border:"none",borderBottom:`2.5px solid ${panel===tab.id?col:"transparent"}`,color:panel===tab.id?col:"#94a3b8",fontWeight:panel===tab.id?600:400,fontSize:13.5,transition:"all .15s",marginBottom:-1}}>{tab.label}</button>
                ))}
              </div>
            </div>
            <div className="fadeIn" key={panel+ej.id} style={{padding:"16px 22px",maxHeight:260,overflowY:"auto"}}>
              {panel==="explicacion"
                ?<pre style={{margin:0,fontFamily:"'DM Sans',sans-serif",fontSize:13.5,color:"#334155",lineHeight:1.8,whiteSpace:"pre-wrap"}}>{bl.explicacion}</pre>
                :<p style={{fontSize:13.5,color:"#1e293b",lineHeight:1.8,whiteSpace:"pre-line"}}>{ej.task}</p>}
            </div>
          </div>

          <div className={flash==="bien"?"brillo":flash==="mal"?"temblar":""}
            style={{background:"#0f172a",borderRadius:14,border:`2px solid ${flash==="bien"?"#22c55e":flash==="mal"?"#ef4444":"#1e293b"}`,overflow:"hidden",marginBottom:12,transition:"border-color .18s",boxShadow:"0 4px 24px #0000001a"}}>
            <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"8px 14px",background:"#1e293b"}}>
              <div style={{display:"flex",gap:5}}>{["#ff5f57","#febc2e","#28c840"].map(c=><div key={c} style={{width:10,height:10,borderRadius:"50%",background:c}}/>)}</div>
              <span style={{fontSize:11,color:"#64748b",fontFamily:"'DM Mono',monospace"}}>{ej.id}.py</span>
              <div style={{display:"flex",gap:10}}>
                <span style={{fontSize:10.5,color:"#475569"}}>Ctrl+Enter = ejecutar</span>
                <button onClick={()=>{setCode(STARTER);setRes(null);}} style={{background:"none",border:"1px solid #334155",color:"#64748b",fontSize:10.5,padding:"1px 8px",borderRadius:4}}>↺</button>
              </div>
            </div>
            <div style={{display:"flex"}}>
              <div style={{padding:"12px 0",minWidth:38,background:"#0b1120",borderRight:"1px solid #1e293b",textAlign:"right",userSelect:"none"}}>
                {Array.from({length:nL},(_,i)=><div key={i} style={{fontSize:12,lineHeight:"22px",padding:"0 7px",color:"#334155",fontFamily:"'DM Mono',monospace"}}>{i+1}</div>)}
              </div>
              <textarea ref={taRef} value={code} onChange={e=>setCode(e.target.value)} onKeyDown={onKey} spellCheck={false}
                style={{flex:1,padding:"12px 16px",background:"#0f172a",border:"none",color:"#e2e8f0",fontSize:13.5,lineHeight:"22px",fontFamily:"'DM Mono',monospace",resize:"vertical",minHeight:150,caretColor:col}}/>
            </div>
          </div>

          <div style={{display:"flex",gap:10,marginBottom:12,position:"relative"}}>
            <button onClick={ejecutar} style={{flex:1,padding:"11px 0",background:`linear-gradient(135deg,${col},${col}cc)`,border:"none",borderRadius:11,color:"#fff",fontWeight:700,fontSize:14.5,boxShadow:`0 4px 16px ${col}44`}}>▶ Ejecutar código</button>
            <button onClick={()=>setHint(h=>!h)} style={{padding:"11px 16px",background:"#fff",border:"1.5px solid #e2e8f0",borderRadius:11,color:"#475569",fontSize:13}}>💡 {hint?"Ocultar":"Pista"}</button>
            {done[ej.id]&&!ej.esProyecto&&<button onClick={otraVariante} style={{padding:"11px 16px",background:"#f0fdf4",border:"1.5px solid #86efac",borderRadius:11,color:"#16a34a",fontSize:13,fontWeight:600}}>🔀 Otro ejercicio</button>}
            {xp&&<div style={{position:"absolute",left:"50%",top:-4,transform:"translateX(-50%)",fontSize:14,fontWeight:700,color:"#16a34a",animation:"xpF 1.4s ease forwards",pointerEvents:"none",whiteSpace:"nowrap"}}>+10 XP ⭐</div>}
          </div>

          {hint&&<div className="slide" style={{background:"#fffbeb",border:"1.5px solid #fcd34d",borderRadius:12,padding:"13px 16px",marginBottom:12}}><p style={{fontSize:10.5,fontWeight:700,color:"#92400e",textTransform:"uppercase",letterSpacing:".06em",marginBottom:5}}>💡 Pista</p><p style={{fontSize:13.5,color:"#451a03",lineHeight:1.7}}>{ej.pista}</p></div>}

          {triesN>0&&!done[ej.id]&&<div style={{marginBottom:12,display:"flex",alignItems:"center",gap:10}}>
            <div style={{flex:1,height:4,background:"#f1f5f9",borderRadius:99,overflow:"hidden"}}>
              <div style={{width:`${Math.min(triesN/INTENTOS_SOL*100,100)}%`,height:"100%",background:verSol?"#ef4444":"#f59e0b",borderRadius:99,transition:"width .4s ease"}}/>
            </div>
            <span style={{fontSize:11,color:"#94a3b8",whiteSpace:"nowrap"}}>{verSol?"Solución desbloqueada":`${triesN}/${INTENTOS_SOL} intentos`}</span>
          </div>}

          {result&&(
            <div className="pop" style={{background:"#fff",border:`1.5px solid ${result.correcto?"#86efac":"#fca5a5"}`,borderRadius:16,padding:"18px 20px",boxShadow:result.correcto?"0 4px 24px #22c55e18":"0 4px 24px #ef444418"}}>
              <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:14}}>
                <div style={{width:34,height:34,borderRadius:"50%",background:result.correcto?"#dcfce7":"#fee2e2",display:"flex",alignItems:"center",justifyContent:"center",fontSize:18,flexShrink:0}}>{result.correcto?"✅":"❌"}</div>
                <div>
                  <p style={{fontWeight:700,fontSize:14.5,color:result.correcto?"#16a34a":"#dc2626"}}>{result.correcto?"¡Correcto! Excelente trabajo.":"No es exactamente lo esperado. Revísalo."}</p>
                  {result.correcto&&streak>1&&<p style={{fontSize:12,color:"#ea580c",marginTop:1}}>🔥 ¡Racha de {streak}!</p>}
                  {!result.correcto&&!verSol&&<p style={{fontSize:11.5,color:"#94a3b8",marginTop:1}}>La solución aparecerá tras {INTENTOS_SOL-triesN} intento{INTENTOS_SOL-triesN!==1?"s":""} más.</p>}
                </div>
              </div>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
                <div>
                  <p style={{fontSize:10,fontWeight:700,color:"#94a3b8",textTransform:"uppercase",letterSpacing:".06em",marginBottom:4}}>Tu salida</p>
                  <pre style={{background:"#f8fafc",border:"1px solid #e2e8f0",borderRadius:9,padding:"10px 12px",margin:0,fontSize:12,fontFamily:"'DM Mono',monospace",color:"#1e293b",minHeight:36,whiteSpace:"pre-wrap",maxHeight:160,overflow:"auto"}}>{result.salida||"(sin salida)"}</pre>
                </div>
                <div>
                  <p style={{fontSize:10,fontWeight:700,color:"#94a3b8",textTransform:"uppercase",letterSpacing:".06em",marginBottom:4}}>{result.correcto?"✓ Correcto":"Esperado"}</p>
                  <pre style={{background:result.correcto?"#f0fdf4":"#f8fafc",border:`1px solid ${result.correcto?"#86efac":"#e2e8f0"}`,borderRadius:9,padding:"10px 12px",margin:0,fontSize:12,fontFamily:"'DM Mono',monospace",color:result.correcto?"#16a34a":"#1e293b",minHeight:36,whiteSpace:"pre-wrap",maxHeight:160,overflow:"auto"}}>{ej.expected}</pre>
                </div>
              </div>
              {!result.correcto&&verSol&&<div className="fadeIn" style={{marginTop:12,padding:"12px 14px",background:"#f0f9ff",border:"1px solid #bae6fd",borderRadius:10}}>
                <p style={{fontSize:10,fontWeight:700,color:"#0369a1",marginBottom:6,textTransform:"uppercase",letterSpacing:".06em"}}>📖 Una posible solución</p>
                <pre style={{margin:0,fontFamily:"'DM Mono',monospace",fontSize:12.5,color:"#0c4a6e",whiteSpace:"pre-wrap",lineHeight:1.65}}>{ej.solution}</pre>
              </div>}
              {result.correcto&&<div style={{marginTop:12,display:"flex",gap:10,flexWrap:"wrap"}}>
                {!ej.esProyecto&&<button onClick={otraVariante} style={{padding:"9px 18px",background:col,border:"none",borderRadius:9,color:"#fff",fontWeight:700,fontSize:13,boxShadow:`0 4px 12px ${col}44`}}>🔀 Otro ejercicio del tema</button>}
                {idx<curriculo.length-1&&<button onClick={()=>irA(idx+1)} style={{padding:"9px 18px",background:ej.esProyecto?"#16a34a":"#f8fafc",border:`1.5px solid ${ej.esProyecto?"#16a34a":"#e2e8f0"}`,borderRadius:9,color:ej.esProyecto?"#fff":"#475569",fontWeight:700,fontSize:13}}>{ej.esProyecto?"🚀 Siguiente bloque →":"Siguiente →"}</button>}
                {idx===curriculo.length-1&&<div style={{width:"100%",textAlign:"center",padding:"16px",background:"linear-gradient(135deg,#fffbeb,#fef9c3)",borderRadius:12,border:"1.5px solid #fcd34d"}}>
                  <p style={{fontSize:28,marginBottom:4}}>🏆</p>
                  <p style={{fontWeight:700,fontSize:16,color:"#92400e"}}>¡Curso completado! Eres un pythonista de verdad.</p>
                  <p style={{color:"#b45309",fontSize:12.5,marginTop:4}}>Has acumulado {numDone*10} XP completando los {curriculo.length} ejercicios.</p>
                </div>}
              </div>}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
