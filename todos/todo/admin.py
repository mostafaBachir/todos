from django.contrib import admin

# Register your models here.
from  todo.models import *

admin.site.register(User)
admin.site.register(Todos)
admin.site.register(Todo)
