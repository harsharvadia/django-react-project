from django.contrib import admin

from .models import Laptops,Airbuds,Refridgerators,Phones,Tvs,LaptopImages,TvImages,AirbudImages,PhoneImages,RefridgeratorImages

# Register your models here.

admin.site.register(Laptops)
admin.site.register(Airbuds)
admin.site.register(Tvs)
admin.site.register(Phones)
admin.site.register(Refridgerators)
admin.site.register(LaptopImages)
admin.site.register(TvImages)
admin.site.register(AirbudImages)
admin.site.register(PhoneImages)
admin.site.register(RefridgeratorImages)