from django.shortcuts import render

from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.response import Response
from .serializers import *

from .models import *

from django.core.exceptions import ObjectDoesNotExist
from django.http import *

def no_content():
    content = {'no content': ';)'}
    return Response(content, status=status.HTTP_204_NO_CONTENT)

def not_found():
    content = {'not found': ';)'}
    return Response(content, status=status.HTTP_404_NOT_FOUND)


@api_view(['GET'])
def apiOverview(request):

    api_urls = {
        'Lista talleres':'api/taller/',
        'Lista proyectos':'api/proyecto/',
        'Lista foto de portada':'api/foto-portada/',
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

    talleres = Taller.objects.all()
    serializer = TallerSerializer(talleres, many=True)

    if not talleres:
        return no_content()

    return Response(serializer.data)


@api_view(['GET'])
def listaProyecto(request):

    proyectos = Proyecto.objects.all()
    serializer = ProyectoSerializer(proyectos, many=True)

    if not proyectos:
        return no_content()

    return Response(serializer.data)


@api_view(['GET'])
def singleFotoPortada(request):
    try:
        fp = FotoPortada.objects.get()
        serializer = FotoPortadaSerializer(fp, many=False)
        return Response(serializer.data)
    except ObjectDoesNotExist:
        return no_content()


@api_view(['GET'])
def listaConvenio(request):

    convenios = Convenio.objects.all()
    serializer = ConvenioSerializer(convenios, many=True)

    if not convenios:
        return no_content()

    return Response(serializer.data)


@api_view(['GET'])
def singleFormaParteLink(request):
    try:
        fpl = FormaParteLink.objects.get()
        serializer = FormaParteLinkSerializer(fpl, many=False)
        return Response(serializer.data)
    except ObjectDoesNotExist:
        return no_content()


@api_view(['GET'])
def listaMercadoLibreLink(request):

    linksML = MercadoLibreLink.objects.all()
    serializer = MercadoLibreLinkSerializer(linksML, many=True)

    if not linksML:
        return no_content()

    return Response(serializer.data)


@api_view(['GET'])
def singleMercadoPagoLink(request):
    try:
        mpl = MercadoPagoLink.objects.get()
        serializer = MercadoPagoLinkSerializer(mpl, many=False)
        return Response(serializer.data)
    except ObjectDoesNotExist:
        return no_content()


@api_view(['GET'])
def listaHistoria(request):

    historias = Historia.objects.all()
    serializer = HistoriaSerializer(historias, many=True)

    if not historias:
        return no_content()

    return Response(serializer.data)


@api_view(['GET'])
def listaImageAlbum(request):

    imageAlbum = ImageAlbum.objects.all()
    serializer = ImageAlbumSerializer(imageAlbum, many=True)

    if not imageAlbum:
        return no_content()

    return Response(serializer.data)


@api_view(['GET'])
def detalleConvenio(request, pk):

    try:
        convenio = Convenio.objects.get(id=pk)
        serializer = ConvenioSerializer(convenio, many=False)
        return Response(serializer.data)
    except ObjectDoesNotExist:
        return not_found()


@api_view(['GET'])
def detalleMercadoLibreLink(request, pk):

    try:
        ml = MercadoLibreLink.objects.get(id=pk)
        serializer = MercadoLibreLinkSerializer(ml, many=False)
        return Response(serializer.data)
    except ObjectDoesNotExist:
        return not_found()


@api_view(['GET'])
def detalleProyecto(request, pk):

    try:
        proyecto = Proyecto.objects.get(id=pk)
        serializer = ProyectoSerializer(proyecto, many=False)
        return Response(serializer.data)
    except ObjectDoesNotExist:
        return not_found()

@api_view(['GET'])
def detalleTaller(request, pk):

    try:
        taller = Taller.objects.get(id=pk)
        serializer = TallerSerializer(taller, many=False)
        return Response(serializer.data)
    except ObjectDoesNotExist:
        return not_found()


@api_view(['GET'])
def detalleHistoria(request, pk):

    try:
        historia = Historia.objects.get(id=pk)
        serializer = HistoriaSerializer(historia, many=False)
        return Response(serializer.data)
    except ObjectDoesNotExist:
        return not_found()


@api_view(['GET'])
def detalleImageAlbum(request, pk):

    try:
        ia = ImageAlbum.objects.get(id=pk)
        serializer = ImageAlbumSerializer(ia, many=False)
        return Response(serializer.data)
    except ObjectDoesNotExist:
        return not_found()