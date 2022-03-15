
from urllib import response
from django.shortcuts import render 
from rest_framework.decorators import api_view
from rest_framework.response import Response


@api_view(['GET','POST'])
def server(request):
    testingjson=[
        {
            'test':'testing messaage'
        },
    ]
    if request.method=='POST':
        port=request.data["serverinput"]
        print(port)

    return Response(testingjson)

def client(request):
    pass