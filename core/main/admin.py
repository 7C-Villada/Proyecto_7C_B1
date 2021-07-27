from django.contrib import admin
from .models import *
from django.contrib.auth.models import User
from django.contrib.auth.models import Group
from django.contrib.auth.models import Group



class ImageInline(admin.TabularInline):
    model = Image
    fields = ['imagen']
    extra = 1

class ImageAlbumAdmin(admin.ModelAdmin):
    inlines = [ImageInline]

@admin.register(Proyecto)
class ProyectoAdmin(admin.ModelAdmin):
    '''Admin View for Proyecto'''

    list_display = ('title', 'description', 'startDate')
    list_filter = ('startDate',)
    search_fields = ('title', 'description', 'startDate')

@admin.register(Taller)
class TallerAdmin(admin.ModelAdmin):
    '''Admin View for Taller'''

    list_display = ('title', 'description', 'startDate')
    list_filter = ('startDate',)
    search_fields = ('title', 'description', 'startDate')

@admin.register(Historia)
class HistoriaAdmin(admin.ModelAdmin):
    '''Admin View for Historia'''

    search_fields = ('title', 'content')

@admin.register(Convenio)
class ConvenioAdmin(admin.ModelAdmin):
    '''Admin View for Convenio'''

    list_display = ('localizacion',)
    search_fields = ('organizacion', 'localizacion')

# Register your models here.
admin.site.register(Image)
admin.site.register(ImageAlbum, ImageAlbumAdmin)
admin.site.register(MercadoPagoLink)
admin.site.register(MercadoLibreLink)
admin.site.register(FormaParteLink)
admin.site.unregister(User)
admin.site.unregister(Group)
