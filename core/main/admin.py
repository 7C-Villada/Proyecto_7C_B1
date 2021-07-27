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


# Register your models here.
admin.site.register(Proyecto)
admin.site.register(Taller)
admin.site.register(Image)
admin.site.register(ImageAlbum, ImageAlbumAdmin)
admin.site.register(Historia)
admin.site.register(Convenio)
admin.site.register(MercadoPagoLink)
admin.site.register(MercadoLibreLink)
admin.site.register(FormaParteLink)
admin.site.unregister(User)
admin.site.unregister(Group)
