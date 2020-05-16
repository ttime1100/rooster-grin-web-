from django.urls import path, include
from catalog import views

from django.contrib.auth.views import (

    login,
    logout,
    password_reset,
    password_reset_done,
    password_reset_confirm,

    )

from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin

app_name = 'catalog'


urlpatterns = [
    # create routes to different views
    path('', views.catalog, name='home'),
    #path('profile/', views.profile, name='profile'),




]
