from django.shortcuts import render, redirect, render_to_response, get_object_or_404
from django.contrib.contenttypes.models import ContentType
from django.core.exceptions import ImproperlyConfigured
from django.http import HttpResponseRedirect, JsonResponse
from django.template.loader import render_to_string
import uuid
from django.contrib.auth.models import User
from catalog import forms
from catalog import models
from django.conf import settings
from django.db import transaction, models
from django.contrib.auth import update_session_auth_hash
#import generic views for templates
from django.urls import reverse_lazy
#Post Imports
from django.template import RequestContext
from django.utils.decorators import method_decorator
from django.views.generic import (
                                    CreateView,
                                    DeleteView,
                                    TemplateView,
                                    UpdateView,
                                    ListView,
                                    DetailView,
                                    FormView,
                                )


# Create your views here.

def catalog(request):
   
    #Get number of visitors to this page
    num_visits = request.session.get('num_visits', 0)

    request.session['num_visits'] = num_visits + 1
    #Render HTML Template(Django automatically looks in templates folder!!)
    return render(request, 'catalog.html', {'num_visits':num_visits})


