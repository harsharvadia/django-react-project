from rest_framework import serializers
from .models import Laptops,Airbuds,Refridgerators,Phones,Tvs,LaptopImages,RefridgeratorImages,AirbudImages,PhoneImages,TvImages

class LaptopSerializer(serializers.ModelSerializer):
    class Meta:
        model = Laptops
        fields = '__all__'

class AirbudsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Airbuds
        fields='__all__'

class PhonesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Phones
        fields='__all__'

class TvsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tvs
        fields='__all__'

class RefridgeratorsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Refridgerators
        fields='__all__'



class LSerializer(serializers.ModelSerializer):
    class Meta:
        model = LaptopImages
        fields='__all__'

class TSerializer(serializers.ModelSerializer):
    class Meta:
        model = TvImages
        fields='__all__'

class PSerializer(serializers.ModelSerializer):
    class Meta:
        model = PhoneImages
        fields='__all__'

class ASerializer(serializers.ModelSerializer):
    class Meta:
        model = AirbudImages
        fields='__all__'

class RSerializer(serializers.ModelSerializer):
    class Meta:
        model = RefridgeratorImages
        fields='__all__'



