from rest_framework import serializers
from .models import *

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

class TallerSerializerDetail(serializers.ModelSerializer):

    startDate = serializers.DateField(format="%d-%m-%Y")

    class Meta:
        model = Taller
        fields = '__all__'
        depth = 1

class TallerSerializerList(serializers.ModelSerializer):

    startDate = serializers.DateField(format="%d-%m-%Y")

    class Meta:
        model = Taller
        exclude = ['proyectos']

class TallerFromProyectoSerializer(serializers.ModelSerializer):

    startDate = serializers.DateField(format="%d-%m-%Y")

    class Meta:
        model = Taller
        fields = ['id','title','description','startDate','imagen']

class ProyectoSerializerDetail(serializers.ModelSerializer):

    talleres = TallerFromProyectoSerializer(many=True)
    startDate = serializers.DateField(format="%d-%m-%Y")

    class Meta:
        model = Proyecto
        fields = ['id','title','description','startDate','imagen','talleres']

class ProyectoSerializerList(serializers.ModelSerializer):

    startDate = serializers.DateField(format="%d-%m-%Y")

    class Meta:
        model = Proyecto
        fields = '__all__'

class ImageSerializer(serializers.ModelSerializer):

    class Meta:
        model = Image
        exclude = ['album']


class ImageAlbumSerializerList(serializers.ModelSerializer):

    images = ImageSerializer(many=True)

    class Meta:
        model = ImageAlbum
        fields = '__all__'

class ImageAlbumSerializerDetail(serializers.ModelSerializer):

    images = ImageSerializer(many=True)

    class Meta:
        model = ImageAlbum
        fields = ['id','name','images']

class HistoriaSerializerDetail(serializers.ModelSerializer):

    date = serializers.DateField(format="%d-%m-%Y")

    class Meta:
        model = Historia
        fields = '__all__'

class HistoriaSerializerList(serializers.ModelSerializer):

    date = serializers.DateField(format="%d-%m-%Y")

    class Meta:
        model = Historia
        fields = '__all__'

class ContactoWhatsappSerializer(serializers.ModelSerializer):

    class Meta:
        model = ContactoWhatsapp
        fields = '__all__'