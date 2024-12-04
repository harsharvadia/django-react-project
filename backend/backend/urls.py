from django.conf.urls.static import static
from django.conf import settings
from django.contrib import admin
from django.urls import path,include

urlpatterns = [
    path('admin/', admin.site.urls),
    path("products/",include("products.urls")),
    path('api/',include('accounts.urls')),
    path('order/',include('order.urls')),
    path('chatbot/',include('chatbot.urls')),
]


urlpatterns += static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)