from django.shortcuts import render

from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.response import Response
from .serializers import *

from .models import *

from django.core.exceptions import ObjectDoesNotExist
from django.http import *

from .mp_checkout import crearProductoDonacion

def no_content():
    content = {'no content': ';)'}
    return Response(content, status=status.HTTP_204_NO_CONTENT)

def not_found():
    content = {'not found': ';)'}
    return Response(content, status=status.HTTP_404_NOT_FOUND)

def bad_request(msg):
    content = {'bad request': msg}
    return Response(content, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def apiOverview(request):

    api_urls = {
        'Lista talleres':'api/taller/',
        'Lista proyectos':'api/proyecto/',
        'Lista convenios':'api/convenio/',
        'Lista link forma parte':'api/forma-parte/',
        'Lista link MP':'api/mercado-pago/',
        'Lista link ML':'api/mercado-libre/',
        'Lista historias':'api/historia/',
        'Lista albumes':'api/image-album/',
        'Convenio por id':'api/convenio/<str:pk>/',
        'ML por id':'api/mercado-libre/<str:pk>/',
        'Proyecto por id':'api/proyecto/<str:pk>/',
        'Taller por id':'api/taller/<str:pk>/',
        'Historia por id':'api/historia/<str:pk>/',
        'Album por id':'api/image-album/<str:pk>/',
    }

    return Response(api_urls)


@api_view(['GET'])
def listaTaller(request):

    """
    ---
    ### **Función**
    Retorna una lista de todos los talleres sin especificar la relación con los *Proyectos*  
    Cabe aclarar que al path retornado, en el campo imagen, se le debe concatenar al principio el siguiente link:  
    *https://res.cloudinary.com/aprenderhaciendo/*  
    Por ejemplo: *https://res.cloudinary.com/aprenderhaciendo/image/upload/v1623704292/media/c4fp8ofp8njmiich4wvn.jpg*

    ---
    ### **Posibles códigos HTTP**
    - 200: OK
    - 204: No hay contenido
    - 500: Error interno del servidor
    ---
    """
    talleres = Taller.objects.all()
    serializer = TallerSerializerList(talleres, many=True)

    if not talleres:
        return no_content()

    return Response(serializer.data)


@api_view(['GET'])
def listaProyecto(request):

    """
    ---
    ### **Función**
    Retorna una lista de todos los proyectos sin especificar la relación con los *Talleres*  
    Cabe aclarar que al path retornado, en el campo imagen, se le debe concatenar al principio el siguiente link:  
    *https://res.cloudinary.com/aprenderhaciendo/*  
    Por ejemplo: *https://res.cloudinary.com/aprenderhaciendo/image/upload/v1623704292/media/c4fp8ofp8njmiich4wvn.jpg*

    ---
    ### **Posibles códigos HTTP**
    - 200: OK
    - 204: No hay contenido
    - 500: Error interno del servidor
    ---
    """

    proyectos = Proyecto.objects.all()
    serializer = ProyectoSerializerList(proyectos, many=True)

    if not proyectos:
        return no_content()

    return Response(serializer.data)


@api_view(['GET'])
def listaConvenio(request):

    """
    ---
    ### **Función**
    Retorna una lista de todos los convenios  
    Cabe aclarar que al path retornado, en el campo imagen, se le debe concatenar al principio el siguiente link:  
    *https://res.cloudinary.com/aprenderhaciendo/*  
    Por ejemplo: *https://res.cloudinary.com/aprenderhaciendo/image/upload/v1623704292/media/c4fp8ofp8njmiich4wvn.jpg*

    ---
    ### **Posibles códigos HTTP**
    - 200: OK
    - 204: No hay contenido
    - 500: Error interno del servidor
    ---
    """

    convenios = Convenio.objects.all()
    serializer = ConvenioSerializer(convenios, many=True)

    if not convenios:
        return no_content()

    return Response(serializer.data)


@api_view(['GET'])
def singleFormaParteLink(request):

    """
    ---
    ### **Función**
    Retorna link a un formulario de google  

    ---
    ### **Posibles códigos HTTP**
    - 200: OK
    - 204: No hay contenido
    - 500: Error interno del servidor
    ---
    """
    
    try:
        fpl = FormaParteLink.objects.get()
        serializer = FormaParteLinkSerializer(fpl, many=False)
        return Response(serializer.data)
    except ObjectDoesNotExist:
        return no_content()


@api_view(['GET'])
def listaMercadoLibreLink(request):

    """
    ---
    ### **Función**
    Retorna una lista de todos los links a los perfiles de Mercado Libre  

    ---
    ### **Posibles códigos HTTP**
    - 200: OK
    - 204: No hay contenido
    - 500: Error interno del servidor
    ---
    """

    linksML = MercadoLibreLink.objects.all()
    serializer = MercadoLibreLinkSerializer(linksML, many=True)

    if not linksML:
        return no_content()

    return Response(serializer.data)


@api_view(['GET'])
def singleMercadoPagoLink(request):

    """
    ---
    ### **Función**
    Retorna un link directo a Mercado Pago  

    ---
    ### **Posibles códigos HTTP**
    - 200: OK
    - 204: No hay contenido
    - 500: Error interno del servidor
    ---
    """

    try:
        mpl = MercadoPagoLink.objects.get()
        serializer = MercadoPagoLinkSerializer(mpl, many=False)
        return Response(serializer.data)
    except ObjectDoesNotExist:
        return no_content()


@api_view(['GET'])
def listaHistoria(request):

    """
    ---
    ### **Función**
    Retorna una lista de todas las historias sin especificar la relación con el *Álbum de Imágenes*  

    ---
    ### **Posibles códigos HTTP**
    - 200: OK
    - 204: No hay contenido
    - 500: Error interno del servidor
    ---
    """

    historias = Historia.objects.all()
    serializer = HistoriaSerializerList(historias, many=True)

    if not historias:
        return no_content()

    return Response(serializer.data)


@api_view(['GET'])
def listaImageAlbum(request):

    """
    ---
    ### **Función**
    Retorna una lista de todos los Álbumes sin especificar la relación con las *Fotos/Images*  

    ---
    ### **Posibles códigos HTTP**
    - 200: OK
    - 204: No hay contenido
    - 500: Error interno del servidor
    ---
    """

    imageAlbum = ImageAlbum.objects.all()
    serializer = ImageAlbumSerializerList(imageAlbum, many=True)

    if not imageAlbum:
        return no_content()

    return Response(serializer.data)


@api_view(['GET'])
def detalleConvenio(request, pk):

    """
    ---
    ### **Función**
    Retorna un Convenio  
    Cabe aclarar que al path retornado, en el campo imagen, se le debe concatenar al principio el siguiente link:  
    *https://res.cloudinary.com/aprenderhaciendo/*  
    Por ejemplo: *https://res.cloudinary.com/aprenderhaciendo/image/upload/v1623704292/media/c4fp8ofp8njmiich4wvn.jpg*

    ---
    ### **Posibles códigos HTTP**
    - 200: OK
    - 404: No encontrado
    - 500: Error interno del servidor
    ---
    """

    try:
        convenio = Convenio.objects.get(id=pk)
        serializer = ConvenioSerializer(convenio, many=False)
        return Response(serializer.data)
    except ObjectDoesNotExist:
        return not_found()


@api_view(['GET'])
def detalleMercadoLibreLink(request, pk):

    """
    ---
    ### **Función**
    Retorna un link hacia un perfil de Mercado Libre  

    ---
    ### **Posibles códigos HTTP**
    - 200: OK
    - 404: No encontrado
    - 500: Error interno del servidor
    ---
    """

    try:
        ml = MercadoLibreLink.objects.get(id=pk)
        serializer = MercadoLibreLinkSerializer(ml, many=False)
        return Response(serializer.data)
    except ObjectDoesNotExist:
        return not_found()


@api_view(['GET'])
def detalleProyecto(request, pk):

    """
    ---
    ### **Función**
    Retorna un solo proyecto según el id especificado.  
    Se especifican también los *Talleres* asociados al proyecto en cuestión  
    Cabe aclarar que al path retornado, en el campo imagen, se le debe concatenar al principio el siguiente link:  
    *https://res.cloudinary.com/aprenderhaciendo/*  
    Por ejemplo: *https://res.cloudinary.com/aprenderhaciendo/image/upload/v1623704292/media/c4fp8ofp8njmiich4wvn.jpg*

    ---
    ### **Posibles códigos HTTP**
    - 200: OK
    - 404: No encontrado
    - 500: Error interno del servidor
    ---
    """

    try:
        proyecto = Proyecto.objects.get(id=pk)
        serializer = ProyectoSerializerDetail(proyecto, many=False)
        return Response(serializer.data)
    except ObjectDoesNotExist:
        return not_found()

@api_view(['GET'])
def detalleTaller(request, pk):

    """
    ---
    ### **Función**
    Retorna un solo taller según el id especificado.  
    Se especifican también los *Proyectos* asociados al taller en cuestión  
    Cabe aclarar que al path retornado, en el campo imagen, se le debe concatenar al principio el siguiente link:  
    *https://res.cloudinary.com/aprenderhaciendo/*  
    Por ejemplo: *https://res.cloudinary.com/aprenderhaciendo/image/upload/v1623704292/media/c4fp8ofp8njmiich4wvn.jpg*

    ---
    ### **Posibles códigos HTTP**
    - 200: OK
    - 404: No encontrado
    - 500: Error interno del servidor
    ---
    """

    try:
        taller = Taller.objects.get(id=pk)
        serializer = TallerSerializerDetail(taller, many=False)
        return Response(serializer.data)
    except ObjectDoesNotExist:
        return not_found()


@api_view(['GET'])
def detalleHistoria(request, pk):

    """
    ---
    ### **Función**
    Retorna una sola historia según el id especificado.  
    Se especifica también el id del *Álbum de Imágenes* asociado a la historia en cuestión  

    ---
    ### **Posibles códigos HTTP**
    - 200: OK
    - 404: No encontrado
    - 500: Error interno del servidor
    ---
    """

    try:
        historia = Historia.objects.get(id=pk)
        serializer = HistoriaSerializerDetail(historia, many=False)
        return Response(serializer.data)
    except ObjectDoesNotExist:
        return not_found()


@api_view(['GET'])
def detalleImageAlbum(request, pk):

    """
    ---
    ### **Función**
    Retorna un solo álbum según el id especificado.  
    Se especifican también las *Fotos/Images* asociadas al álbum en cuestión  
    Cabe aclarar que al path retornado, en el campo imagen, se le debe concatenar al principio el siguiente link:  
    *https://res.cloudinary.com/aprenderhaciendo/*  
    Por ejemplo: *https://res.cloudinary.com/aprenderhaciendo/image/upload/v1623704292/media/c4fp8ofp8njmiich4wvn.jpg*

    ---
    ### **Posibles códigos HTTP**
    - 200: OK
    - 404: No encontrado
    - 500: Error interno del servidor
    ---
    """

    try:
        ia = ImageAlbum.objects.get(id=pk)
        serializer = ImageAlbumSerializerDetail(ia, many=False)
        return Response(serializer.data)
    except ObjectDoesNotExist:
        return not_found()

@api_view(['GET'])
def montoDonacionMercadoPago(request, precio):

    try:
        mp_value = crearProductoDonacion(precio)

        if mp_value == 400:
            return bad_request('beware of the AFIP ;)')
        else:    
            return Response(mp_value)

    except ObjectDoesNotExist:
        return not_found()