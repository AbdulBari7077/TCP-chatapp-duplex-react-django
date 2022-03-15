from django.urls import path
from chatapp import views

urlpatterns = [
    path("server", views.server, name="server"),
]