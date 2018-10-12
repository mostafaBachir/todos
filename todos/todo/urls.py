from django.conf.urls import url
from django.urls import path,include

from todo import views

urlpatterns = [
    url(r'^todos/$', views.todo_list),
    url(r'^user/$', views.add_user)
]
