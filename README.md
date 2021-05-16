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
| argon2-cffi | 20.1.0
| async-generator | 1.10
| attrs | 21.2.0
| backcall | 0.2.0
| bleach | 3.3.0
| cffi | 1.14.5
| decorator | 5.0.9
| defusedxml | 0.7.1
| entrypoints | 0.3
| geojson | 2.5.0
| gmaps | 0.9.0
| ipykernel | 5.5.5
| ipython | 7.23.1
| ipython-genutils | 0.2.0
| ipywidgets | 7.6.3
| jedi | 0.18.0
| Jinja2 | 3.0.0
| jsonschema | 3.2.0
| jupyter-client | 6.1.12
| jupyter-core | 4.7.1
| jupyterlab-pygments | 0.1.2
| jupyterlab-widgets | 1.0.0
| MarkupSafe | 2.0.0
| matplotlib-inline | 0.1.2
| mistune | 0.8.4
| nbclient | 0.5.3
| nbconvert | 6.0.7
| nbformat | 5.1.3
| nest-asyncio | 1.5.1
| notebook | 6.3.0
| packaging | 20.9
| pandocfilters | 1.4.3
| parso | 0.8.2
| pexpect | 4.8.0
| pickleshare | 0.7.5
| prometheus-client | 0.10.1
| prompt-toolkit | 3.0.18
| ptyprocess | 0.7.0
| pycparser | 2.20
| Pygments | 2.9.0
| pyparsing | 2.4.7
| pyrsistent | 0.17.3
| python-dateutil | 2.8.1
| pyzmq | 22.0.3
| Send2Trash | 1.5.0
| terminado | 0.9.5
| testpath | 0.4.4
| tornado | 6.1
| traitlets | 5.0.5
| wcwidth | 0.2.5
| webencodings | 0.5.1
| widgetsnbextension | 3.5.1

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
