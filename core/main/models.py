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

#Serialized
class ImageAlbum(models.Model):
    name = models.CharField(max_length=100, null = False, verbose_name = 'Nombre')

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Album de imagenes'
        verbose_name_plural = 'Albumes de imagenes'

#Serialized
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


#Serialized
class Proyecto(Actividad):
    imagen = cloudinary.models.CloudinaryField('image', folder='media/')
    tracker = FieldTracker()

    class Meta:
        verbose_name = 'Proyecto'
        verbose_name_plural = 'Proyectos'

    def __str__(self):
        return super().__str__()


#Serialized
class Taller(Actividad):
    imagen = cloudinary.models.CloudinaryField('image', folder='media/')
    proyectos = models.ManyToManyField(Proyecto, related_name='talleres', verbose_name = 'Proyectos')
    tracker = FieldTracker()

    class Meta:

        verbose_name = 'Taller'
        verbose_name_plural = 'Talleres'

    def __str__(self):
        return super().__str__()

#Serialized
class Historia(models.Model): # Las historias serán parte del Libro de Oro
    title = models.CharField(max_length = 75, null = False, default = 'Título de la Historia', verbose_name = 'Titulo')
    content = models.TextField(null = False, verbose_name = 'Contenido')
    imageAlbum =  models.ForeignKey(ImageAlbum, on_delete = models.CASCADE, verbose_name = 'Album de imagenes')
    date = models.DateField(null = False, verbose_name = 'Fecha')
    link = models.CharField(max_length = 300, verbose_name = 'Link Form Inscripción', blank = True, null = True)

    class Meta:
        verbose_name = 'Historia'
        verbose_name_plural = 'Historias'

    def __str__(self):
        return self.title


#Serialized
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


#Serialized
class MercadoPagoLink(SingletonModel):
    link = models.CharField(max_length = 300, null = False, default = 'Link a MercadoPago', verbose_name = 'Link')

    def __str__(self):
        return "Link MercadoPago"

    class Meta:
        verbose_name = "Link MercadoPago"
        verbose_name_plural = 'Link MercadoPago'


#Serialized
class MercadoLibreLink(models.Model):
    link = models.CharField(max_length = 300, null = False, default = 'Link a MercadoLibre', verbose_name = 'Link')
    nombre = models.CharField(max_length = 75, null = False, default = 'Nombre del Perfil de MercadoLibre', verbose_name = 'Nombre')
    descripcion = models.TextField(null = False, verbose_name = 'Descripción')

    class Meta:
        verbose_name = 'Link MercadoLibre'
        verbose_name_plural = 'Links MercadoLibre'

    def __str__(self):
        return self.nombre

#Serialized
class FormaParteLink(SingletonModel):
    link = models.CharField(max_length = 300, null = False, default = 'Link a GoogleForm', verbose_name = 'Link')

    def __str__(self):
        return "Link FormaParte"

    class Meta:
        verbose_name = "Link FormaParte"
        verbose_name_plural = 'Link FormaParte'

class ContactoWhatsapp(SingletonModel):
    number = models.CharField(max_length = 10, null = False, default = 'Ej.: 3511234567', verbose_name = 'número')

    def __str__(self):
        return "Link FormaParte"

    class Meta:
        verbose_name = "Número Whatsapp"
        verbose_name_plural = 'Número Whatsapp'

@receiver(pre_delete, sender=Proyecto)
def pre_delete_Proyecto(sender, instance, **kwargs):
    cloudinary.uploader.destroy(instance.imagen.public_id,invalidate=True)

@receiver(post_save, sender=Proyecto)
def post_save_Proyecto(sender, instance, created, **kwargs):
    if not created:
        imagenPrevia = instance.tracker.previous('imagen')
        if imagenPrevia.public_id != instance.imagen.public_id:
            cloudinary.uploader.destroy(imagenPrevia.public_id,invalidate=True)

@receiver(pre_delete, sender=Taller)
def pre_delete_Taller(sender, instance, **kwargs):
    cloudinary.uploader.destroy(instance.imagen.public_id,invalidate=True)

@receiver(post_save, sender=Taller)
def post_save_Taller(sender, instance, created, **kwargs):
    if not created:
        imagenPrevia = instance.tracker.previous('imagen')
        if imagenPrevia.public_id != instance.imagen.public_id:
            cloudinary.uploader.destroy(imagenPrevia.public_id,invalidate=True)

@receiver(pre_delete, sender=Image)
def pre_delete_Image(sender, instance, **kwargs):
    cloudinary.uploader.destroy(instance.imagen.public_id,invalidate=True)

@receiver(post_save, sender=Image)
def post_save_Image(sender, instance, created, **kwargs):
    if not created:
        imagenPrevia = instance.tracker.previous('imagen')
        if imagenPrevia.public_id != instance.imagen.public_id:
            cloudinary.uploader.destroy(imagenPrevia.public_id,invalidate=True)

@receiver(pre_delete, sender=Convenio)
def pre_delete_Convenio(sender, instance, **kwargs):
    cloudinary.uploader.destroy(instance.imagen.public_id,invalidate=True)

@receiver(post_save, sender=Convenio)
def post_save_Convenio(sender, instance, created, **kwargs):
    if not created:
        imagenPrevia = instance.tracker.previous('imagen')
        if imagenPrevia.public_id != instance.imagen.public_id:
            cloudinary.uploader.destroy(imagenPrevia.public_id,invalidate=True)