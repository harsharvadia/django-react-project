

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.models import User
from .models import Order, OrderItem
import json
from .models import Order
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import OrderSerializer
from rest_framework import status



@csrf_exempt
def create_order(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)  # Ensure JSON parsing happens safely

            # Check if the user exists
            try:
                user = User.objects.get(username=data['username'])
            except User.DoesNotExist:
                return JsonResponse({'error': 'User not found'}, status=404)

            # Create the order
            order = Order.objects.create(user=user, total_price=data['totalPrice'])

            # Add items to the order
            for item in data['cartItems']:
                OrderItem.objects.create(
                    order=order,
                    product_name=item['name'],
                    price=item['price'],
                    quantity=item['quantity']
                )

            return JsonResponse({'message': 'Order created successfully!'}, status=201)

        except json.JSONDecodeError as e:
            return JsonResponse({'error': f'Invalid JSON: {str(e)}'}, status=400)

        except Exception as e:
            return JsonResponse({'error': f'Server error: {str(e)}'}, status=500)

    return JsonResponse({'error': 'Invalid request method'}, status=405)@api_view(['GET'])

@api_view(['GET'])
def recent_orders(request):
    try:
        orders = Order.objects.all()
        serializer = OrderSerializer(orders, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    except Exception as e:
        return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)