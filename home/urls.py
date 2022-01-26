from django.contrib import admin
from django.urls import path
from home import views
from django.urls import include, path, re_path
from django.views.static import serve
from django.conf import settings

urlpatterns = [
    re_path(r'^static/(?P<path>.*)$', serve,{'document_root': settings.STATIC_ROOT}),
    path("", views.home, name='home'),
    path("#about", views.about, name='about'),
    path("#menu", views.menu, name='menu'),
    path("#reservation", views.reservation, name='reservation'),
    path("#contact", views.contact, name='contact')
]