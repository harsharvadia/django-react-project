from rest_framework import serializers
from .models import Order, OrderItem

class OrderItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderItem
        fields = ['product_name', 'price', 'quantity']

class OrderSerializer(serializers.ModelSerializer):
    items = OrderItemSerializer(many=True)  # Serialize the related order items
    username = serializers.CharField(source='user.username', read_only=True)  # Include the username from the User model

    class Meta:
        model = Order
        fields = ['id', 'username', 'created_at', 'total_price', 'items']  # Include fields for the order
