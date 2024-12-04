from django.contrib import admin
from django.urls import path,include
from products import views
urlpatterns = [
    path('laptops/',views.laptops.as_view()),
    path('airbuds/',views.Airbudss.as_view()),
    path('phones/',views.Phoness.as_view()),
    
    path('refridgerators/',views.Refridgeratorss.as_view()),
    path('tvs/',views.Tvss.as_view()),
    path('limages/',views.LaptopImageViewSet.as_view()),
    path('pimages/',views.PhonesImageViewSet.as_view()),
    path('rimages/',views.RefridgeratorViewSet.as_view()),
    path('aimages/',views.AirbudsImageViewSet.as_view()),
    path('timages/',views.TvImageViewSet.as_view()),
    path('laptops/<int:id>/',views.get_laptop_detail,name='get_laptop_detail'),
    path('airbuds/<int:id>/',views.get_airbuds_detail,name='get_airbuds_detail'),
    path('refridgerators/<int:id>/',views.get_refridgerator_detail,name='get_refridgerator_detail'),
    path('phones/<int:id>/',views.get_phone_detail,name='get_phone_detail'),
    path('tvs/<int:id>/',views.get_tv_detail,name='get_tv_detail'),
    # path('limages/<int:id>/',views.get_laptop_image,name='get_laptop_image'),

    

]
