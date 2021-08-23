# AprenderHaciendo:
###### Documentación API

---
## Índice

- [Talleres](#talleres)
- [Proyectos](#proyectos)
- [Convenios](#convenios)
- [Historias](#historias)
- [Álbumes](#álbumes)
- [Link Forma Parte](#link-forma-parte)
- [Link Mercado Pago](#link-mercado-pago)
- [Link Mercado Libre](#link-mercado-libre)
- [Taller por id](#taller-por-id)
- [Proyecto por id](#proyecto-por-id)
- [Convenio por id](#convenio-por-id)
- [Historia por id](#historia-por-id)
- [Link Mercado Libre por id](#link-mercado-libre-por-id)
- [Álbum por id](#álbum-por-id)

---
## Talleres

### **/api/taller**
Retorna una lista de todos los talleres sin especificar la relación con los *Proyectos*  
Cabe aclarar que al path retornado, en el campo imagen, se le debe concatenar al principio el siguiente link:  
*https://res.cloudinary.com/aprenderhaciendo/*  
Por ejemplo: *https://res.cloudinary.com/aprenderhaciendo/image/upload/v1623704292/media/c4fp8ofp8njmiich4wvn.jpg*

```javascript
[
    {
        "id": 6,
        "title": "Colecta Arboles",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis ante sed lacus consectetur ultricies id at nibh. Donec eu libero enim. Sed aliquam nisi urna, vel dictum nunc pretium a. Ut placerat lectus ultrices scelerisque rutrum. Quisque eleifend, dui at euismod malesuada, leo erat rutrum velit, vel ornare neque tellus eget purus. Duis molestie, erat non rhoncus consectetur, quam dui tristique est, nec porta tortor sapien vitae justo. Fusce viverra erat ac velit pulvinar blandit. Fusce sagittis mollis sem eu ultrices.",
        "startDate": "2021-11-27",
        "imagen": "image/upload/v1623706773/mas_plantitas_nmkro0.jpg"
    },
    {
        "id": 7,
        "title": "Desmalezamiento",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis ante sed lacus consectetur ultricies id at nibh. Donec eu libero enim. Sed aliquam nisi urna, vel dictum nunc pretium a. Ut placerat lectus ultrices scelerisque rutrum. Quisque eleifend, dui at euismod malesuada, leo erat rutrum velit, vel ornare neque tellus eget purus. Duis molestie, erat non rhoncus consectetur, quam dui tristique est, nec porta tortor sapien vitae justo. Fusce viverra erat ac velit pulvinar blandit. Fusce sagittis mollis sem eu ultrices.",
        "startDate": "2021-12-18",
        "imagen": "image/upload/v1623706773/nativas_yovwtr.jpg"
    },
    {
        "id": 8,
        "title": "Cultivo Sano",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis ante sed lacus consectetur ultricies id at nibh. Donec eu libero enim. Sed aliquam nisi urna, vel dictum nunc pretium a. Ut placerat lectus ultrices scelerisque rutrum. Quisque eleifend, dui at euismod malesuada, leo erat rutrum velit, vel ornare neque tellus eget purus. Duis molestie, erat non rhoncus consectetur, quam dui tristique est, nec porta tortor sapien vitae justo. Fusce viverra erat ac velit pulvinar blandit. Fusce sagittis mollis sem eu ultrices.",
        "startDate": "2021-12-01",
        "imagen": "image/upload/v1623706773/plantacion_hk5ygw.jpg"
    }
]
```

### **Posibles códigos HTTP**
- 200: OK
- 204: No hay contenido
- 500: Error interno del servidor

---
## Proyectos

### **/api/proyecto**
Retorna una lista de todos los proyectos sin especificar la relación con los *Talleres*  
Cabe aclarar que al path retornado, en el campo imagen, se le debe concatenar al principio el siguiente link:  
*https://res.cloudinary.com/aprenderhaciendo/*  
Por ejemplo: *https://res.cloudinary.com/aprenderhaciendo/image/upload/v1623704292/media/c4fp8ofp8njmiich4wvn.jpg*

```javascript
[
    {
        "id": 4,
        "title": "Reforestacion de la reserva",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis ante sed lacus consectetur ultricies id at nibh. Donec eu libero enim. Sed aliquam nisi urna, vel dictum nunc pretium a. Ut placerat lectus ultrices scelerisque rutrum. Quisque eleifend, dui at euismod malesuada, leo erat rutrum velit, vel ornare neque tellus eget purus. Duis molestie, erat non rhoncus consectetur, quam dui tristique est, nec porta tortor sapien vitae justo. Fusce viverra erat ac velit pulvinar blandit. Fusce sagittis mollis sem eu ultrices.",
        "startDate": "2021-06-12",
        "imagen": "image/upload/v1623706078/reforestar_rzpy4x.jpg"
    },
    {
        "id": 5,
        "title": "Camino Bomberos",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis ante sed lacus consectetur ultricies id at nibh. Donec eu libero enim. Sed aliquam nisi urna, vel dictum nunc pretium a. Ut placerat lectus ultrices scelerisque rutrum. Quisque eleifend, dui at euismod malesuada, leo erat rutrum velit, vel ornare neque tellus eget purus. Duis molestie, erat non rhoncus consectetur, quam dui tristique est, nec porta tortor sapien vitae justo. Fusce viverra erat ac velit pulvinar blandit. Fusce sagittis mollis sem eu ultrices.",
        "startDate": "2021-06-12",
        "imagen": "image/upload/v1623705937/bomberos_xywqmw.jpg"
    }
]
```

### **Posibles códigos HTTP**
- 200: OK
- 204: No hay contenido
- 500: Error interno del servidor

---
## Convenios

### **/api/convenio**
Retorna una lista de todos los convenios  
Cabe aclarar que al path retornado, en el campo imagen, se le debe concatenar al principio el siguiente link:  
*https://res.cloudinary.com/aprenderhaciendo/*  
Por ejemplo: *https://res.cloudinary.com/aprenderhaciendo/image/upload/v1623704292/media/c4fp8ofp8njmiich4wvn.jpg*

```javascript
[
    {
        "id": 1,
        "organizacion": "UNC",
        "localizacion": "Córdoba, Argentina",
        "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis ante sed lacus consectetur ultricies id at nibh. Donec eu libero enim. Sed aliquam nisi urna, vel dictum nunc pretium a. Ut placerat lectus ultrices scelerisque rutrum. Quisque eleifend, dui at euismod malesuada, leo erat rutrum velit, vel ornare neque tellus eget purus. Duis molestie, erat non rhoncus consectetur, quam dui tristique est, nec porta tortor sapien vitae justo. Fusce viverra erat ac velit pulvinar blandit. Fusce sagittis mollis sem eu ultrices.",
        "imagen": "image/upload/v1623705049/unc_uzzmml.jpg"
    },
    {
        "id": 2,
        "organizacion": "Scouts del Perú",
        "localizacion": "Lima, Perú",
        "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis ante sed lacus consectetur ultricies id at nibh. Donec eu libero enim. Sed aliquam nisi urna, vel dictum nunc pretium a. Ut placerat lectus ultrices scelerisque rutrum. Quisque eleifend, dui at euismod malesuada, leo erat rutrum velit, vel ornare neque tellus eget purus. Duis molestie, erat non rhoncus consectetur, quam dui tristique est, nec porta tortor sapien vitae justo. Fusce viverra erat ac velit pulvinar blandit. Fusce sagittis mollis sem eu ultrices.",
        "imagen": "image/upload/v1623705116/peru_hrwixy.png"
    }
]
```

### **Posibles códigos HTTP**
- 200: OK
- 204: No hay contenido
- 500: Error interno del servidor

---
## Historias

### **/api/historia**
Retorna una lista de todas las historias sin especificar la relación con el *Álbum de Imágenes*  

```javascript
[
    {
        "id": 1,
        "title": "Titulo de Ejemplo",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis ante sed lacus consectetur ultricies id at nibh. Donec eu libero enim. Sed aliquam nisi urna, vel dictum nunc pretium a. Ut placerat lectus ultrices scelerisque rutrum. Quisque eleifend, dui at euismod malesuada, leo erat rutrum velit, vel ornare neque tellus eget purus. Duis molestie, erat non rhoncus consectetur, quam dui tristique est, nec porta tortor sapien vitae justo. Fusce viverra erat ac velit pulvinar blandit. Fusce sagittis mollis sem eu ultrices."
    },
    {
        "id": 2,
        "title": "Otro Titulo de Ejemplo",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis ante sed lacus consectetur ultricies id at nibh. Donec eu libero enim. Sed aliquam nisi urna, vel dictum nunc pretium a. Ut placerat lectus ultrices scelerisque rutrum. Quisque eleifend, dui at euismod malesuada, leo erat rutrum velit, vel ornare neque tellus eget purus. Duis molestie, erat non rhoncus consectetur, quam dui tristique est, nec porta tortor sapien vitae justo. Fusce viverra erat ac velit pulvinar blandit. Fusce sagittis mollis sem eu ultrices."
    }
]
```

### **Posibles códigos HTTP**
- 200: OK
- 204: No hay contenido
- 500: Error interno del servidor

---
## Álbumes

### **/api/image-album**
Retorna una lista de todos los Álbumes sin especificar la relación con las *Fotos/Images*  

```javascript
[
    {
        "id": 1,
        "name": "Album de Prueba"
    },
    {
        "id": 2,
        "name": "Otro Album de Prueba"
    }
]
```

### **Posibles códigos HTTP**
- 200: OK
- 204: No hay contenido
- 500: Error interno del servidor

---
## Link Forma Parte

### **/api/forma-parte**
Retorna link a un formulario de google  

```javascript
{
    "id": 1,
    "link": "https://www.google.com/intl/es-419_ar/forms/about/"
}
```

### **Posibles códigos HTTP**
- 200: OK
- 204: No hay contenido
- 500: Error interno del servidor

---
## Link Mercado Pago

### **/api/mercado-pago**
Retorna un link directo a Mercado Pago  

```javascript
{
    "id": 1,
    "link": "https://www.mercadopago.com.ar"
}
```

### **Posibles códigos HTTP**
- 200: OK
- 204: No hay contenido
- 500: Error interno del servidor

---
## Link Mercado Libre

### **/api/mercado-libre**
Retorna una lista de todos los links a los perfiles de Mercado Libre  

```javascript
[
    {
        "id": 2,
        "link": "https://eshops.mercadolibre.com.ar/hogaryjardin*",
        "nombre": "HOGARYJARDIN",
        "descripcion": "Descripción re piola"
    },
    {
        "id": 3,
        "link": "https://www.mercadolibre.com.ar/perfil/INTER+VENT",
        "nombre": "INTER VENT",
        "descripcion": "Somos una empresa multirubro familiar fundada en el año 1998, y con mas de 12 años en el comercio online. Mantenemos una sólida relación con nuestros clientes basada en la confianza y en la calidad de nuestros productos. Más de 60000 compradores nos eligieron, recomendaron y un gran porcentaje sigue siendo nuestro cliente. MercadoLibre nos eligio como uno de los mejores vendedores de todo el sitio. Nos comprometemos a cumplir de forma eficiente con todas las solicitudes y dudas de nuestros clientes, es por eso que con nosotros vas a encontrar personas dispuestas y capacitadas que te van a ayudar a seleccionar el producto perfecto para tu necesidad."
    }
]
```

### **Posibles códigos HTTP**
- 200: OK
- 204: No hay contenido
- 500: Error interno del servidor

---
## Taller por id

### **/api/taller/id**
Retorna un solo taller según el id especificado.  
Se especifican también los *Proyectos* asociados al taller en cuestión  
Cabe aclarar que al path retornado, en el campo imagen, se le debe concatenar al principio el siguiente link:  
*https://res.cloudinary.com/aprenderhaciendo/*  
Por ejemplo: *https://res.cloudinary.com/aprenderhaciendo/image/upload/v1623704292/media/c4fp8ofp8njmiich4wvn.jpg*

```javascript
{
    "id": 6,
    "title": "Colecta Arboles",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis ante sed lacus consectetur ultricies id at nibh. Donec eu libero enim. Sed aliquam nisi urna, vel dictum nunc pretium a. Ut placerat lectus ultrices scelerisque rutrum. Quisque eleifend, dui at euismod malesuada, leo erat rutrum velit, vel ornare neque tellus eget purus. Duis molestie, erat non rhoncus consectetur, quam dui tristique est, nec porta tortor sapien vitae justo. Fusce viverra erat ac velit pulvinar blandit. Fusce sagittis mollis sem eu ultrices.",
    "startDate": "2021-11-27",
    "imagen": "image/upload/v1623706773/mas_plantitas_nmkro0.jpg",
    "proyectos": [
        {
            "id": 4,
            "title": "Reforestacion de la reserva",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis ante sed lacus consectetur ultricies id at nibh. Donec eu libero enim. Sed aliquam nisi urna, vel dictum nunc pretium a. Ut placerat lectus ultrices scelerisque rutrum. Quisque eleifend, dui at euismod malesuada, leo erat rutrum velit, vel ornare neque tellus eget purus. Duis molestie, erat non rhoncus consectetur, quam dui tristique est, nec porta tortor sapien vitae justo. Fusce viverra erat ac velit pulvinar blandit. Fusce sagittis mollis sem eu ultrices.",
            "startDate": "2021-06-12",
            "imagen": "image/upload/v1623706078/reforestar_rzpy4x.jpg"
        }
    ]
}
```

### **Posibles códigos HTTP**
- 200: OK
- 404: No encontrado
- 500: Error interno del servidor

---
## Proyecto por id

### **/api/proyecto/id**
Retorna un solo proyecto según el id especificado.  
Se especifican también los *Talleres* asociados al proyecto en cuestión  
Cabe aclarar que al path retornado, en el campo imagen, se le debe concatenar al principio el siguiente link:  
*https://res.cloudinary.com/aprenderhaciendo/*  
Por ejemplo: *https://res.cloudinary.com/aprenderhaciendo/image/upload/v1623704292/media/c4fp8ofp8njmiich4wvn.jpg*

```javascript
{
    "id": 4,
    "title": "Reforestacion de la reserva",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis ante sed lacus consectetur ultricies id at nibh. Donec eu libero enim. Sed aliquam nisi urna, vel dictum nunc pretium a. Ut placerat lectus ultrices scelerisque rutrum. Quisque eleifend, dui at euismod malesuada, leo erat rutrum velit, vel ornare neque tellus eget purus. Duis molestie, erat non rhoncus consectetur, quam dui tristique est, nec porta tortor sapien vitae justo. Fusce viverra erat ac velit pulvinar blandit. Fusce sagittis mollis sem eu ultrices.",
    "startDate": "2021-06-12",
    "imagen": "image/upload/v1623706078/reforestar_rzpy4x.jpg",
    "talleres": [
        {
            "id": 6,
            "title": "Colecta Arboles",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis ante sed lacus consectetur ultricies id at nibh. Donec eu libero enim. Sed aliquam nisi urna, vel dictum nunc pretium a. Ut placerat lectus ultrices scelerisque rutrum. Quisque eleifend, dui at euismod malesuada, leo erat rutrum velit, vel ornare neque tellus eget purus. Duis molestie, erat non rhoncus consectetur, quam dui tristique est, nec porta tortor sapien vitae justo. Fusce viverra erat ac velit pulvinar blandit. Fusce sagittis mollis sem eu ultrices.",
            "startDate": "2021-11-27",
            "imagen": "image/upload/v1623706773/mas_plantitas_nmkro0.jpg"
        },
        {
            "id": 8,
            "title": "Cultivo Sano",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis ante sed lacus consectetur ultricies id at nibh. Donec eu libero enim. Sed aliquam nisi urna, vel dictum nunc pretium a. Ut placerat lectus ultrices scelerisque rutrum. Quisque eleifend, dui at euismod malesuada, leo erat rutrum velit, vel ornare neque tellus eget purus. Duis molestie, erat non rhoncus consectetur, quam dui tristique est, nec porta tortor sapien vitae justo. Fusce viverra erat ac velit pulvinar blandit. Fusce sagittis mollis sem eu ultrices.",
            "startDate": "2021-12-01",
            "imagen": "image/upload/v1623706773/plantacion_hk5ygw.jpg"
        }
    ]
}
```

### **Posibles códigos HTTP**
- 200: OK
- 404: No encontrado
- 500: Error interno del servidor

---
## Convenio por id

### **/api/convenio/id**
Retorna un Convenio  
Cabe aclarar que al path retornado, en el campo imagen, se le debe concatenar al principio el siguiente link:  
*https://res.cloudinary.com/aprenderhaciendo/*  
Por ejemplo: *https://res.cloudinary.com/aprenderhaciendo/image/upload/v1623704292/media/c4fp8ofp8njmiich4wvn.jpg*

```javascript
{
    "id": 1,
    "organizacion": "UNC",
    "localizacion": "Córdoba, Argentina",
    "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis ante sed lacus consectetur ultricies id at nibh. Donec eu libero enim. Sed aliquam nisi urna, vel dictum nunc pretium a. Ut placerat lectus ultrices scelerisque rutrum. Quisque eleifend, dui at euismod malesuada, leo erat rutrum velit, vel ornare neque tellus eget purus. Duis molestie, erat non rhoncus consectetur, quam dui tristique est, nec porta tortor sapien vitae justo. Fusce viverra erat ac velit pulvinar blandit. Fusce sagittis mollis sem eu ultrices.",
    "imagen": "image/upload/v1623705049/unc_uzzmml.jpg"
}
```

### **Posibles códigos HTTP**
- 200: OK
- 404: No encontrado
- 500: Error interno del servidor

---
## Historia por id

### **/api/historia/id**
Retorna una sola historia según el id especificado.  
Se especifica también el id del *Álbum de Imágenes* asociado a la historia en cuestión  

```javascript
{
    "id": 1,
    "title": "Titulo de Ejemplo",
    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis ante sed lacus consectetur ultricies id at nibh. Donec eu libero enim. Sed aliquam nisi urna, vel dictum nunc pretium a. Ut placerat lectus ultrices scelerisque rutrum. Quisque eleifend, dui at euismod malesuada, leo erat rutrum velit, vel ornare neque tellus eget purus. Duis molestie, erat non rhoncus consectetur, quam dui tristique est, nec porta tortor sapien vitae justo. Fusce viverra erat ac velit pulvinar blandit. Fusce sagittis mollis sem eu ultrices.",
    "imageAlbum": 1
}
```

### **Posibles códigos HTTP**
- 200: OK
- 404: No encontrado
- 500: Error interno del servidor

---
## Link Mercado Libre por id

### **/api/mercado-libre/id**
Retorna un link hacia un perfil de Mercado Libre  

```javascript
{
    "id": 3,
    "link": "https://www.mercadolibre.com.ar/perfil/INTER+VENT",
    "nombre": "INTER VENT",
    "descripcion": "Somos una empresa multirubro familiar fundada en el año 1998, y con mas de 12 años en el comercio online. Mantenemos una sólida relación con nuestros clientes basada en la confianza y en la calidad de nuestros productos. Más de 60000 compradores nos eligieron, recomendaron y un gran porcentaje sigue siendo nuestro cliente. MercadoLibre nos eligio como uno de los mejores vendedores de todo el sitio. Nos comprometemos a cumplir de forma eficiente con todas las solicitudes y dudas de nuestros clientes, es por eso que con nosotros vas a encontrar personas dispuestas y capacitadas que te van a ayudar a seleccionar el producto perfecto para tu necesidad."
}
```

### **Posibles códigos HTTP**
- 200: OK
- 404: No encontrado
- 500: Error interno del servidor

---
## Álbum por id

### **/api/image-album/id**
Retorna un solo álbum según el id especificado.  
Se especifican también las *Fotos/Images* asociadas al álbum en cuestión  
Cabe aclarar que al path retornado, en el campo imagen, se le debe concatenar al principio el siguiente link:  
*https://res.cloudinary.com/aprenderhaciendo/*  
Por ejemplo: *https://res.cloudinary.com/aprenderhaciendo/image/upload/v1623704292/media/c4fp8ofp8njmiich4wvn.jpg*


```javascript
{
    "id": 1,
    "name": "Album de Prueba",
    "images": [
        {
            "id": 1,
            "imagen": "image/upload/v1623709327/caballos_c7anmx.jpg"
        },
        {
            "id": 2,
            "imagen": "image/upload/v1623709327/jirafas_bdm9fn.jpg"
        }
    ]
}
```

### **Posibles códigos HTTP**
- 200: OK
- 404: No encontrado
- 500: Error interno del servidor