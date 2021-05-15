# Proyecto Final 7°C Burbuja 1 [![Language](https://img.shields.io/badge/lang-espa%C3%B1ol%20%2F%20english-yellow)](#)

## Introduccion:

## Diagramas:

## Aplicaciones necesarias

### Python

- Versión: 3
- Documentación: https://docs.python.org/es/3.8.8/

### NodeJS & npm

- NodeJS versión: 14.16.1 LTS
- npm versión: 6.14.12 LTS
- Documentación: https://nodejs.org/es/docs/

## Uso

### Requisitos

| Paquete | Version |
|:---|:---:|
| Django| 3.1.7 |
| asgiref| 3.3.1 |
| PyMySQL| 1.0.2 |
| pytz| 2021.1 |
| sqlparse| 0.4.1 |
| django-admin-interface| 0.15.6
| django-colorfield| 0.4.1
| django-flat-responsive| 2.0
| django-flat-theme| 1.1.4
| six| 1.15.0
| mercadopago| 2.0.6
| Pillow| 8.2.0
| idna | 2.10
| chardet | 4.0.0
| certifi | 2020.12.5
| requests | 2.25.1
| urllib3 | 1.26.4

### Dependencias React

| Paquete       | Version |
| :------------ | :-----: |
| react         | 17.0.2  |
| react-dom     | 17.0.2  |
| react-scripts |  4.0.3  |

### Instruccciones

#### Instalacion manual

```shell
git clone https://github.com/7C-Villada/Proyecto_7C_B1.git ~/.ProyectoDjango
cd ~/.ProyectoDjango
pip install -r requirements.txt
python core/manage.py collectstatic

sudo apt-get install mysql-server-5.7
sudo apt-get install mysql-client-5.7
```

#####

```shell

sudo mysql

CREATE USER 'usuario' IDENTIFIED BY 'root';

GRANT ALL PRIVILEGES ON *.* TO 'usuario';

CREATE DATABASE proyecto;

python core/manage.py makemigrations
python core/manage.py migrate
```

#### Creacion de superusuario

```shell
cd ~/.ProyectoDjango
python core/manage.py createsuperuser
```

#### Ejecución post-instalación

Para correr la aplicación debe ingresar esto en la terminal:

```shell
cd ~/.ProyectoDjango
python core/manage.py runserver
```

Para instalar dependencias React:

```shell
git pull origin frontend
cd ~/.ProyectoDjango/core/frontend
npm install
npm run build
```

Para iniciar el entorno de desarrollo:

```shell
npm start
```
