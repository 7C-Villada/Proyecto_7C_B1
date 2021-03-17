# Proyecto Final 7°C Burbuja 1 [![Language](https://img.shields.io/badge/lang-espa%C3%B1ol%20%2F%20english-yellow)](#)

## Introduccion:

## Diagramas:

## Aplicaciones necesarias
### Python
 - Versión: 3
 - Documentación: https://docs.python.org/es/3.8.8/

## Uso
### Requisitos
| Paquete | Version |
|:---|:---:|
| Django| 3.1.7 |
| asgiref| 3.3.1 |
| PyMySQL| 1.0.2 |
| pytz| 2021.1 |
| sqlparse| 0.4.1 |

### Instruccciones
#### Instalacion manual

```shell
git clone https://github.com/7C-Villada/Proyecto_7C_B1.git ~/.ProyectoDjango
cd ~/.ProyectoDjango
pip install -r requirements.txt
python core/manage.py makemigrations
python core/manage.py migrate
python core/manage.py collectstatic

sudo apt-get install mysql-server-5.7
sudo apt-get install mysql-client-5.7
```

##### 
```shell

SUDO mysql

CREATE USER 'usuario' IDENTIFIED BY 'root';

GRANT ALL PRIVILEGES ON *.* TO 'usuario';

CREATE DATABASE proyecto;
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


