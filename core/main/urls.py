from django.urls import path,include
from django.views.generic import TemplateView
from . import views

urlpatterns = [
    path('', TemplateView.as_view(template_name='index.html')),
    path('prueba', TemplateView.as_view(template_name='index.html')),
    
    path('api/', views.apiOverview, name='api-overview'),

    path('api/taller/', views.listaTaller, name='lista-taller'),
    path('api/proyecto/', views.listaProyecto, name='lista-proyecto'),
    path('api/convenio/', views.listaConvenio, name='convenio'),
    path('api/forma-parte/', views.singleFormaParteLink, name='forma-parte'),
    path('api/mercado-pago/', views.singleMercadoPagoLink, name='mercado-pago'),
    path('api/mercado-libre/', views.listaMercadoLibreLink, name='mercado-libre'),
    path('api/historia/', views.listaHistoria, name='historia'),
    path('api/image-album/', views.listaImageAlbum, name='image-album'),
    
    path('api/convenio/<str:pk>/', views.detalleConvenio, name='detalle-convenio'),
    path('api/mercado-libre/<str:pk>/', views.detalleMercadoLibreLink, name='mercado-libre'),
    path('api/proyecto/<str:pk>/', views.detalleProyecto, name='detalle-proyecto'),
    path('api/taller/<str:pk>/', views.detalleTaller, name='detalle-taller'),
    path('api/historia/<str:pk>/', views.detalleHistoria, name='detalle-historia'),
    path('api/image-album/<str:pk>/', views.detalleImageAlbum, name='detalle-image-album'),
    path('api/montoDonacionMercadoPago/<int:precio>/', views.montoDonacionMercadoPago, name='monto-donacion'),
    path('api/ultimos-proyectos/', views.ultimosProyectos, name='ultimos-proyectos'),
    path('api/numero-wp/', views.singleNumeroWhatsapp, name='numero-wp'),

]
