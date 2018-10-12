from rest_framework import serializers
from todo.models import User ,Todo



class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('__all__')



class TodosSerializer(serializers.ModelSerializer):
    utilisateur = UserSerializer()
    class Meta:
        model = Todo
        fields = ('__all__')
class TodoSerializer(serializers.ModelSerializer):
    todos = TodosSerializer()
    class Meta:
        model = Todo
        fields = ('__all__')
