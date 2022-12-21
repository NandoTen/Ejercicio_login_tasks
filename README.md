### Ejercicio capítuloos 16, 17 y 18

Crear el sistema de enrutado de la aplicación en React:
- Permitir la navegación de Login a Registro y viceversa
- No podremos acceder a Tareas a no ser que nos hayamos logeado primero.



![](https://img.shields.io/badge/-ReactJs-61DAFB?logo=react&logoColor=white&style=flat)



**Rutas y Componentes**


```
AppRoutingOne:
    Route Register --> RegisterPage --> registerForm --> sessionStorage // session
    Route Login --> LoginPage --> loginForm --> sessionStorage // sessionLogged
	sessionLogged = session ? --> tasksPage --> sessionStorage // logged
    Route Task --> tasksPage
	Route Home --> HomePage
```

Mi solución:
-------------

A efectos del ejercicio guardaré en sessionStorage los datos del registro 'session' y el estado 'logeado, no logeado' en 'logged'

El componente AppRoutingOne define y administra las rutas a los 4 páginas HomePage, LoginPage, RegisterPage y TasksPage.

Un useState registra el estado en logged (true/false) por defecto false (no logeado), como es asíncrono, usamos un
useEffect que detecta el cambio y lo guarda como 'logged' en sessionStorage

- RegisterPage contiene el componente registerFormik, formulario de registro que guarda los datos en sessionSorage como 'session'
- LoginPage contiene el componente loginFormik, formulario que compara los datos introducidos con los guardados en 'session' si coinciden
     actualiza 'logged' (true) y redirige a la TaskPage
- TasksPage se accede si 'logged' es true si no redirige a LoginPage
- HomePage contiene botones a todas las páginas y un botón Logout que cambia 'logged' a false
