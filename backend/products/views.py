from django.shortcuts import render
from rest_framework.generics import ListAPIView
from .models import LaptopImages,AirbudImages,PhoneImages,RefridgeratorImages,TvImages,Tvs,Airbuds,Laptops,Phones,Refridgerators
from .serializers import LSerializer,ASerializer,PSerializer,RSerializer,TSerializer,AirbudsSerializer,LaptopSerializer,PhonesSerializer,RefridgeratorsSerializer,TvsSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from django.core.exceptions import ObjectDoesNotExist

class laptops(ListAPIView):
    queryset=Laptops.objects.all()
    serializer_class=LaptopSerializer

class Airbudss(ListAPIView):
    queryset=Airbuds.objects.all()
    serializer_class=AirbudsSerializer

class Tvss(ListAPIView):
    queryset=Tvs.objects.all()
    serializer_class=TvsSerializer

class Refridgeratorss(ListAPIView):
    queryset=Refridgerators.objects.all()
    serializer_class=RefridgeratorsSerializer

class Phoness(ListAPIView):
    queryset=Phones.objects.all()
    serializer_class=PhonesSerializer

class LaptopImageViewSet(ListAPIView):
    queryset=LaptopImages.objects.all()
    serializer_class=LSerializer

class PhonesImageViewSet(ListAPIView):
    queryset=PhoneImages.objects.all()
    serializer_class=PSerializer

class AirbudsImageViewSet(ListAPIView):
    queryset=AirbudImages.objects.all()
    serializer_class=ASerializer

class TvImageViewSet(ListAPIView):
    queryset=TvImages.objects.all()
    serializer_class=TSerializer

class RefridgeratorViewSet(ListAPIView):
    queryset=RefridgeratorImages.objects.all()
    serializer_class=RSerializer




@api_view(['GET'])
def get_laptop_detail(request, id):
    try:
        laptop = Laptops.objects.get(pk=id)
        serializer = LaptopSerializer(laptop)
        return Response(serializer.data, status=status.HTTP_200_OK)
    except Laptops.DoesNotExist:
        return Response({"error": "laptop not found"}, status=status.HTTP_404_NOT_FOUND)
   



@api_view(['GET'])
def get_tv_detail(request, id):
    try:
        tv = Tvs.objects.get(pk=id)
        serializer = TvsSerializer(tv)
        return Response(serializer.data, status=status.HTTP_200_OK)
    except Tvs.DoesNotExist:
        return Response({"error": "Tv not found"}, status=status.HTTP_404_NOT_FOUND)

@api_view(['GET'])
def get_airbuds_detail(request, id):
    try:
        airbuds = Airbuds.objects.get(pk=id)
        serializer = AirbudsSerializer(airbuds)
        return Response(serializer.data, status=status.HTTP_200_OK)
    except Airbuds.DoesNotExist:
        return Response({"error": "Airbuds not found"}, status=status.HTTP_404_NOT_FOUND)

@api_view(['GET'])
def get_refridgerator_detail(request, id):
    try:
        refridgerators = Refridgerators.objects.get(pk=id)
        serializer = RefridgeratorsSerializer(refridgerators)
        return Response(serializer.data, status=status.HTTP_200_OK)
    except Refridgerators.DoesNotExist:
        return Response({"error": "Refridgerators not found"}, status=status.HTTP_404_NOT_FOUND)

@api_view(['GET'])
def get_phone_detail(request, id):
    try:
        phones = Phones.objects.get(pk=id)
        serializer = PhonesSerializer(phones)
        return Response(serializer.data, status=status.HTTP_200_OK)
    except Phones.DoesNotExist:
        return Response({"error": "Phones not found"}, status=status.HTTP_404_NOT_FOUND)

# @api_view(['GET'])
# def get_laptop_image(request, id):
#     try:
#         limage = LaptopImages.objects.get(pk=id)
#         serializer = LSerializer(limage)
#         return Response(serializer.data, status=status.HTTP_200_OK)
#     except LaptopImages.DoesNotExist:
#         return Response({"error": "image not found"}, status=status.HTTP_404_NOT_FOUND)
