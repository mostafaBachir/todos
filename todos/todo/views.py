from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
from todo.models import *
from todo.serializers import TodoSerializer, UserSerializer, TodosSerializer
import json
@csrf_exempt
def todo_list(request):
    """
    List all code types, or create a new snippet.
    """
    if request.method == 'GET':
        todos = Todo.objects.all()
        serializer = TodoSerializer(todos, many=True)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = TodoSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)

@csrf_exempt
def add_user(request):
    if request.method == 'POST':
        data =request.body.decode("utf-8")
        data = json.loads(data)
        user = User.objects.get_or_create(email=data['email'])[0]
        todos  = Todos.objects.filter(utilisateur = user)
        todos = Todo.objects.filter(todos__in=todos)
        serializer = TodoSerializer(todos,many=True)
        return JsonResponse(serializer.data, status=201, safe=False)

    else:

        return JsonResponse(serializer.errors, status=400)
