from django.contrib import admin
from order import views
from django.urls import path

urlpatterns = [
    path('create_order/',views.create_order,name='creat_order'),
    path('recent_orders/', views.recent_orders, name='recent_orders'),
]

