from django.db import models
from django.db.models.signals import post_delete, pre_save
from django.dispatch import receiver
from django.contrib.auth.models import User
from solo.models import SingletonModel
import cloudinary
from cloudinary.models import CloudinaryField
from django.db.models.signals import pre_delete, post_save
from django.dispatch import receiver
from model_utils import FieldTracker

""" Whenever ANY model is deleted, if it has a file field on it, delete the associated file too"""

""" Only delete the file if no other instances of that model are using it"""    
# Create your models here.

class ImageAlbum(models.Model):
    name = models.CharField(max_length=100, null = False, verbose_name = 'Nombre')

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Album de imagenes'
        verbose_name_plural = 'Albumes de imagenes'

class Image(models.Model):
    imagen = cloudinary.models.CloudinaryField('image', folder='media/')
    album = models.ForeignKey(ImageAlbum, related_name='images', on_delete=models.CASCADE, verbose_name = 'Album de imagenes')
    tracker = FieldTracker()

    def __str__(self):
        return f'Imagen {self.id}'

    class Meta:
        verbose_name = 'Imagen'
        verbose_name_plural = 'Imagenes'


class Actividad(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=100, null = False, verbose_name = 'Titulo')
    description = models.TextField(null = False, verbose_name = 'Descripcion')
    startDate = models.DateField(null = False, verbose_name = 'Fecha de inicio')    # -------->  # When wanting to add data, 
                                                                                    # you need to import datetime module, i.e:
                                                                                    # import datetime
                                                                                    # d = datetime.date(1997, 10, 19)
    class Meta:
        abstract = True
        verbose_name = 'Actividad'
        verbose_name_plural = 'Actividades'

    def __str__(self):
        return self.title


class Proyecto(Actividad):
    imagen = cloudinary.models.CloudinaryField('image', folder='media/')
    tracker = FieldTracker()

    class Meta:
        verbose_name = 'Proyecto'
        verbose_name_plural = 'Proyectos'

    def __str__(self):
        return super().__str__()


class Taller(Actividad):
    imagen = cloudinary.models.CloudinaryField('image', folder='media/')
    proyectos = models.ManyToManyField(Proyecto, verbose_name = 'Proyectos')
    tracker = FieldTracker()

    class Meta:

        verbose_name = 'Taller'
        verbose_name_plural = 'Taller'

    def __str__(self):
        return super().__str__()

class Mensaje(models.Model): # Los mensajes serán parte del Libro de Visitas
    id = models.AutoField(primary_key = True)
    publishDate = models.DateField(auto_now_add=True, null = False, verbose_name = 'Fecha de publicacion')
    user = models.ForeignKey(User, on_delete = models.CASCADE, verbose_name = 'Usuario')
    content = models.TextField(null = False, verbose_name = 'Contenido')
    approvedMessage = models.BooleanField(default = False, verbose_name = 'Mensaje aprobado') 

    class Meta:
        verbose_name = 'Mensaje'
        verbose_name_plural = 'Mensajes'

    def __str__(self):
        return f'Mensaje N°{self.id}'

class Historia(models.Model): # Las historias serán parte del Libro de Oro
    id = models.AutoField(primary_key = True)
    title = models.CharField(max_length = 75, null = False, default = 'Título de la Historia', verbose_name = 'Titulo')
    content = models.TextField(null = False, verbose_name = 'Contenido')
    imageAlbum =  models.ForeignKey(ImageAlbum, on_delete = models.CASCADE, verbose_name = 'Album de imagenes')

    class Meta:
        verbose_name = 'Historia'
        verbose_name_plural = 'Historias'

    def __str__(self):
        return self.title


class Convenio(models.Model):

    organizacion = models.CharField(max_length = 75, null = False, default = 'Nombre de la Organización', verbose_name = 'Organización')
    localizacion = models.CharField(max_length = 100, null = False, default = 'Ubicación de la Organización', verbose_name = 'Localización')
    descripcion = models.TextField(null = False, verbose_name = 'Descripción')
    imagen = cloudinary.models.CloudinaryField('image', folder='media/')
    tracker = FieldTracker()

    class Meta:
        verbose_name = 'Convenio'
        verbose_name_plural = 'Convenios'

    def __str__(self):
        return f'Convenio {self.organizacion}'


class FotoPortada(SingletonModel):
    imagen = cloudinary.models.CloudinaryField('image', folder='media/')
    tracker = FieldTracker()

    def __str__(self):
        return "Portada"

    class Meta:
        verbose_name = "Portada"


class MercadoPagoLink(SingletonModel):
    link = models.CharField(max_length = 300, null = False, default = 'Link a MercadoPago', verbose_name = 'Link')

    def __str__(self):
        return "Link MercadoPago"

    class Meta:
        verbose_name = "Link MercadoPago"
        verbose_name_plural = 'Link MercadoPago'


class MercadoLibreLink(models.Model):
    link = models.CharField(max_length = 300, null = False, default = 'Link a MercadoPago', verbose_name = 'Link')
    nombre = models.CharField(max_length = 75, null = False, default = 'Nombre del Perfil de MercadoLibre', verbose_name = 'Nombre')
    descripcion = models.TextField(null = False, verbose_name = 'Descripción')

    class Meta:
        verbose_name = 'Link MercadoLibre'
        verbose_name_plural = 'Links MercadoLibre'

    def __str__(self):
        return self.nombre

class FormaParteLink(SingletonModel):
    link = models.CharField(max_length = 300, null = False, default = 'Link a GoogleForm', verbose_name = 'Link')

    def __str__(self):
        return "Link FormaParte"

    class Meta:
        verbose_name = "Link FormaParte"
        verbose_name_plural = 'Link FormaParte'

@receiver(pre_delete, sender=Proyecto)
def pre_delete_Proyecto(sender, instance, **kwargs):
    cloudinary.uploader.destroy(instance.imagen.public_id,invalidate=True)

@receiver(post_save, sender=Proyecto)
def post_save_Proyecto(sender, instance, created, **kwargs):
    if not created:
        imagenPrevia = instance.tracker.previous('imagen')
        cloudinary.uploader.destroy(imagenPrevia.public_id,invalidate=True)

@receiver(pre_delete, sender=Taller)
def pre_delete_Taller(sender, instance, **kwargs):
    cloudinary.uploader.destroy(instance.imagen.public_id,invalidate=True)

@receiver(post_save, sender=Taller)
def post_save_Taller(sender, instance, created, **kwargs):
    if not created:
        imagenPrevia = instance.tracker.previous('imagen')
        cloudinary.uploader.destroy(imagenPrevia.public_id,invalidate=True)

@receiver(pre_delete, sender=Image)
def pre_delete_Image(sender, instance, **kwargs):
    cloudinary.uploader.destroy(instance.imagen.public_id,invalidate=True)

@receiver(post_save, sender=Image)
def post_save_Image(sender, instance, created, **kwargs):
    if not created:
        imagenPrevia = instance.tracker.previous('imagen')
        cloudinary.uploader.destroy(imagenPrevia.public_id,invalidate=True)

@receiver(pre_delete, sender=Convenio)
def pre_delete_Convenio(sender, instance, **kwargs):
    cloudinary.uploader.destroy(instance.imagen.public_id,invalidate=True)

@receiver(post_save, sender=Convenio)
def post_save_Convenio(sender, instance, created, **kwargs):
    if not created:
        imagenPrevia = instance.tracker.previous('imagen')
        cloudinary.uploader.destroy(imagenPrevia.public_id,invalidate=True)

@receiver(pre_delete, sender=FotoPortada)
def pre_delete_FotoPortada(sender, instance, **kwargs):
    cloudinary.uploader.destroy(instance.imagen.public_id,invalidate=True)

@receiver(post_save, sender=FotoPortada)
def post_save_FotoPortada(sender, instance, created, **kwargs):
    if not created:
        imagenPrevia = instance.tracker.previous('imagen')
        cloudinary.uploader.destroy(imagenPrevia.public_id,invalidate=True)