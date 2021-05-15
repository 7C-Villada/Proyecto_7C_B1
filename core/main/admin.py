from django.contrib import admin
from .models import *

class ImageInline(admin.TabularInline):
    model = Image
    fields = ['image']
    extra = 1

class ImageAlbumAdmin(admin.ModelAdmin):
    inlines = [ImageInline]

# Register your models here.
admin.site.register(Proyecto)
admin.site.register(Taller)
admin.site.register(Image)
admin.site.register(ImageAlbum, ImageAlbumAdmin)
admin.site.register(Mensaje)
admin.site.register(Historia)