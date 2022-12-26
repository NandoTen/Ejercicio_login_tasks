
### Ejercicio capítulos 19, 20 y 21

Hacer una petición HTTP con Axios a la API descrita en la web https://api.chucknorris.io/ y crear un Componente React capaz de generar chistes aleatorios de Chuck Norris y mostrarlos.
- Debe haber un botón que permita al usuario generar nuevos chistes.
- También debe mostrarse un par de botones con Material UI que permitan votar (positivamente o negativamente un chiste).
- Se debe mostrar el número de chistes te "han gustado" y cuántos "te han disgustado".



![](https://img.shields.io/badge/-ReactJs-61DAFB?logo=react&logoColor=white&style=flat)



Mi solución:
-------------

En la carpeta **utils** creamos un archivo axios.configNorris.js que crea llamada Axios a la API que devolverá un chiste al azar.
En la carpeta **servicios** creamos axiosServicesNorris.js que contiene la función getRandomJoke() que devuelve la respuesta de la API
El componente **AxiosExerciceNorris** con un useEffect gestiona la llamada a getRandomJoke() y 3 useState.

- [*joke, setJoke*] guarda y actualiza los datos recibidos de la API
- [*jokeTotalCount, setJokeTotalCount*] contabiliza los like y dislike en un array inicialmente [0,0]
- [*jokeCount, setJokeCount*] los botones guarda dos estados: :+1: => [1,0], :-1: => [0,1], una vez pulsado uno de ellos, se actualizan los totales en la vista pero no se actualizan en *jokeTotalCount* hasta que se pulsa en 'new joke'.


