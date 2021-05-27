from django.db import models
from django.db.models.signals import post_delete, pre_save
from django.dispatch import receiver
from django.contrib.auth.models import User
from solo.models import SingletonModel

""" Whenever ANY model is deleted, if it has a file field on it, delete the associated file too"""
@receiver(post_delete)
def delete_files_when_row_deleted_from_db(sender, instance, **kwargs):
    for field in sender._meta.concrete_fields:
        if isinstance(field,models.FileField):
            instance_file_field = getattr(instance,field.name)
            delete_file_if_unused(sender,instance,field,instance_file_field)

""" Delete the file if something else get uploaded in its place"""
@receiver(pre_save)
def delete_files_when_file_changed(sender,instance, **kwargs):
    # Don't run on initial save
    if not instance.pk:
        return
    for field in sender._meta.concrete_fields:
        if isinstance(field,models.FileField):
            #its got a file field. Let's see if it changed
            try:
                instance_in_db = sender.objects.get(pk=instance.pk)
            except sender.DoesNotExist:
                # We are probably in a transaction and the PK is just temporary
                # Don't worry about deleting attachments if they aren't actually saved yet.
                return
            instance_in_db_file_field = getattr(instance_in_db,field.name)
            instance_file_field = getattr(instance,field.name)
            if instance_in_db_file_field.name != instance_file_field.name:
                delete_file_if_unused(sender,instance,field,instance_in_db_file_field)

""" Only delete the file if no other instances of that model are using it"""    
def delete_file_if_unused(model,instance,field,instance_file_field):
    dynamic_field = {}
    dynamic_field[field.name] = instance_file_field.name
    other_refs_exist = model.objects.filter(**dynamic_field).exclude(pk=instance.pk).exists()
    if not other_refs_exist:
        instance_file_field.delete(False)

def get_upload_path(instance, filename):
    return f'albums/images/{filename}'

# Create your models here.

class ImageAlbum(models.Model):
    name = models.CharField(max_length=100, null = False, verbose_name = 'Nombre')

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Album de imagenes'
        verbose_name_plural = 'Albumes de imagenes'

class Image(models.Model):
    image = models.ImageField(upload_to=get_upload_path, verbose_name = 'Imagen')
    album = models.ForeignKey(ImageAlbum, related_name='images', on_delete=models.CASCADE, verbose_name = 'Album de imagenes')

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
    image = models.ImageField(upload_to = 'actividades/proyecto/images', blank = True, verbose_name = 'Imagen')
    video = models.FileField(upload_to = 'actividades/proyecto/videos', blank = True, verbose_name = 'Video')

    class Meta:
        verbose_name = 'Proyecto'
        verbose_name_plural = 'Proyectos'

    def __str__(self):
        return super().__str__()


class Taller(Actividad):
    image = models.ImageField(upload_to = 'actividades/taller/images', blank = True, verbose_name = 'Imagen')
    video = models.FileField(upload_to = 'actividades/taller/videos', blank = True, verbose_name = 'Video')
    proyectos = models.ManyToManyField(Proyecto, verbose_name = 'Proyectos')

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
    imagen = models.ImageField(upload_to = 'convenios/images', blank = True, verbose_name = 'Imagen')

    class Meta:
        verbose_name = 'Convenio'
        verbose_name_plural = 'Convenios'

    def __str__(self):
        return f'Convenio {self.organizacion}'


class FotoPortada(SingletonModel):
    imagen = models.ImageField(upload_to = 'portada/', blank = True, verbose_name = 'Portada')

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