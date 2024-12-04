
from django.db import models



class Laptops(models.Model):
    name=models.CharField(max_length=200)
    sname=models.CharField(max_length=100)
    brand=models.CharField(max_length=50)
    price=models.FloatField()
    discount=models.IntegerField()
    original_price=models.IntegerField()
    model_name=models.CharField(max_length=100)
    screen_size=models.FloatField()
    color=models.CharField(max_length=50)
    RAM=models.IntegerField()
    url=models.CharField(max_length=100)
    delivery_date=models.DateField()
    def __str__(self):
        return self.name

class Airbuds(models.Model):
    name=models.CharField(max_length=200)
    sname=models.CharField(max_length=100)
    price=models.IntegerField()
    original_price=models.IntegerField()
    discount=models.IntegerField()
    color=models.CharField(max_length=50)
    Connectivity_Technology=models.CharField(max_length=50)
    delivery_date=models.DateField()
    model_name=models.CharField(max_length=100)
    url=models.CharField(max_length=100)
    def __str__(self):
        return self.name

class Phones(models.Model):
    name=models.CharField(max_length=200)
    sname=models.CharField(max_length=100)
    price=models.IntegerField()
    original_price=models.IntegerField()
    discount=models.IntegerField()
    Operating_System=models.CharField(max_length=100)
    color=models.CharField(max_length=50)
    model_name=models.CharField(max_length=100)
    delivery_date=models.DateField(null=True, blank=True)
    url=models.CharField(max_length=100)
    def __str__(self):
        return self.name

class Refridgerators(models.Model):
    name=models.CharField(max_length=200)
    sname=models.CharField(max_length=100)
    price=models.IntegerField()
    original_price=models.IntegerField()
    color=models.CharField(max_length=50)
    model_name=models.CharField(max_length=100)
    configuration=models.CharField(max_length=100)
    capacity=models.IntegerField()
    discount=models.IntegerField()
    delivery_date=models.DateField()
    url=models.CharField(max_length=100)
    def __str__(self):
        return self.name


class Tvs(models.Model):
    name=models.CharField(max_length=200)
    sname=models.CharField(max_length=100)
    price=models.IntegerField()
    original_price=models.IntegerField()
    color=models.CharField(max_length=50)
    model_name=models.CharField(max_length=100)
    screen_size=models.FloatField()
    discount=models.IntegerField()
    delivery_date=models.DateField()
    Resolution=models.IntegerField()
    url=models.CharField(max_length=100)
    def __str__(self):
        return self.name




class LaptopImages(models.Model):
    product_name=models.ForeignKey(Laptops,related_name="images",on_delete=models.CASCADE)
    image=models.ImageField(upload_to="laptop_image/")

    


class PhoneImages(models.Model):
    product_name=models.ForeignKey(Phones,related_name="images",on_delete=models.CASCADE)
    image=models.ImageField(upload_to="phones_image/")

class TvImages(models.Model):
    product_name=models.ForeignKey(Tvs,related_name="images",on_delete=models.CASCADE)
    image=models.ImageField(upload_to="tvs_image/")

class AirbudImages(models.Model):
    product_name=models.ForeignKey(Airbuds,related_name="images",on_delete=models.CASCADE)
    image=models.ImageField(upload_to="airbuds_image/")

class RefridgeratorImages(models.Model):
    product_name=models.ForeignKey(Refridgerators,related_name="images",on_delete=models.CASCADE)
    image=models.ImageField(upload_to="refridgerator_image/")




