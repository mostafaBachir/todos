from django.db import models

# Create your models here.
import datetime


class User(models.Model):
    email = models.EmailField(max_length=255,unique=True)
    def __str__(self):
        return self.email


class Todos(models.Model):
    titre = models.CharField(max_length=255)
    utilisateur = models.ForeignKey(User,on_delete=models.CASCADE)
    def __str__(self):
        return self.titre

class Todo(models.Model):
    titre = models.CharField(max_length=255)
    description = models.TextField(null=True, blank=True)
    fait = models.BooleanField(default=False)
    a_faire_le = models.DateTimeField(default = datetime.datetime.now)
    todos = models.ForeignKey(Todos,on_delete=models.CASCADE,null=True, blank=True)
    def __str__(self):
        return self.titre
