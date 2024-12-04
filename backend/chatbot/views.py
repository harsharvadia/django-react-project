# chatbot/views.py
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['POST'])
def chat(request):
    message = request.data.get('message', '')
    response_message = generate_response(message)
    return Response({'response': response_message})

def generate_response(message):
    if "1" in message.lower():
        return "Phones,Laptops,Tvs,Refridgerators and Airbuds"
    elif "2" in message.lower():
        return "Currently we don't accept return/replacement policy"
    elif "3" in message.lower():
        return "You would be able to see a recent order button on top right corner in navbar"
    elif "4" in message.lower():
        return "Currently we don't have such system"
    elif "5" in message.lower():
        return "No,there we don't hve subscriptions policy"
    elif "6" in message.lower():
        return "No,currently we don't  have any outlet"
    else:
        return "I'm sorry, I don't understand. Please press only number given above"
