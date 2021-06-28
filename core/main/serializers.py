from rest_framework import serializers
from .models import *

class FotoPortadaSerializer(serializers.ModelSerializer):

    class Meta:
        model = FotoPortada
        fields = '__all__'

class ConvenioSerializer(serializers.ModelSerializer):

    class Meta:
        model = Convenio
        fields = '__all__'

class FormaParteLinkSerializer(serializers.ModelSerializer):

    class Meta:
        model = FormaParteLink
        fields = '__all__'

class MercadoLibreLinkSerializer(serializers.ModelSerializer):

    class Meta:
        model = MercadoLibreLink
        fields = '__all__'

class MercadoPagoLinkSerializer(serializers.ModelSerializer):

    class Meta:
        model = MercadoPagoLink
        fields = '__all__'

class TallerSerializer(serializers.ModelSerializer):

    class Meta:
        model = Taller
        fields = '__all__'
        depth = 1

class TallerFromProyectoSerializer(serializers.ModelSerializer):

    class Meta:
        model = Taller
        fields = ['id','title','description','startDate','imagen']

class ProyectoSerializer(serializers.ModelSerializer):

    talleres = TallerFromProyectoSerializer(many=True)

    class Meta:
        model = Proyecto
        fields = ['id','title','description','startDate','imagen','talleres']



class ImageSerializer(serializers.ModelSerializer):

    class Meta:
        model = Image
        fields = '__all__'


class ImageAlbumSerializer(serializers.ModelSerializer):

    images = ImageSerializer(many=True)

    class Meta:
        model = ImageAlbum
        fields = ['id','name','images']

class HistoriaSerializer(serializers.ModelSerializer):

    imageAlbum = ImageAlbumSerializer()

    class Meta:
        model = Historia
        fields = ['id','title','content','imageAlbum']


