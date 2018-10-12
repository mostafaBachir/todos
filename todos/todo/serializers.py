from rest_framework import serializers
from todo.models import User ,Todo ,Todos



class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('__all__')



class TodosSerializer(serializers.ModelSerializer):
    utilisateur = UserSerializer()
    class Meta:
        model = Todos
        fields = ('__all__')
class TodoSerializer(serializers.ModelSerializer):
    todos = TodosSerializer()
    class Meta:
        model = Todo
        fields = ('__all__')
