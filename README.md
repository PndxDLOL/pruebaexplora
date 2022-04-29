# Inicios y rutas 


## FrontEnd / Ruta de Explora en Casa

Inicio del server FrontEnd ( Incluye una pequeña ruta que se usaría para traer las experiencias de Explora en Casa)

```bash
npm run dev
# or
yarn dev
```

Abrir en [http://localhost:3000/api](http://localhost:3000/api) 


## BackEnd

Para el inicio del BackEnd ingresar a /backend e iniciar el siguiente comando

```bash
npm start
```

BackEnd escucha en [http://localhost:3001/api/](http://localhost:3001/api/) 

## (API) Referencias

#### - (Get) Todas las experiencias

```http
  GET /
```

```
respuesta : [{
titulo: '',
descripcion: '',
salaInteractiva: '',
imagenRelacionada: '',
imagen: ''
}, ... , {...}]
```
#### - (Post) Una experiencia

```http
  POST /
```

| Parametro | Tipo     | Descripción                      |
| :-------- | :------- | :-------------------------------- |
| `titulo`      | `string` | **Requerida**. Necesario para titular la experiencia, y obtener una imagen que la relacione|
|`descripcion`| `string`| **Requerida**. Se escribe una breve descripción de la experiencia |
| `salaInteractiva` | `string` | **Requerida**. Se selecciona la sala en la que pertenece|
| `imagen`  | `string`| **Requerida**. URL de la imagen |

```
respuesta : {
    message : "Experiencia {_id} creada con exito"
}
```

#### - (Get) Experiencia por id

```http
  GET /:id
```

```
respuresta : {
titulo: '',
descripcion: '',
salaInteractiva: '',
imagenRelacionada: '',
imagen: ''
}
```
#### - (Put) Una experiencia 

```http
  PUT /:id
```

| Parametro | Tipo     | Descripción                      |
| :-------- | :------- | :-------------------------------- |
| `titulo`      | `string` | **Opcional**. Necesario para titular la experiencia, y obtener una imagen que la relacione|
|`descripcion`| `string`| **Opcional**. Se escribe una breve descripción de la experiencia |
| `salaInteractiva` | `string` | **Opcional**. Se selecciona la sala en la que pertenece|
| `imagen`  | `string`| **Opcional**. URL de la imagen |

**Nota**: Es requerida por lo menos (1) de los parámetros. En caso de cambiar el nombre, la imagen relacionada se actualizará

```
respuesta : {
    message: "Actualizado correctamente",
    update: {...}
}
```
#### - (Delete) Una experiencia

```http
  DELETE /:id
```

```
respuesta: {
    message: `Experiencia  ${id} borrada con exito`
}
```


#### - (Get) Experiencias por "Salas"

```http
  GET /salas/:name
```

```
respuesta : [{
titulo: '',
descripcion: '',
salaInteractiva: '',
imagenRelacionada: '',
imagen: ''
}, ... , {...}]
```
