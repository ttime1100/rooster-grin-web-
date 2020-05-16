from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm, UserChangeForm
from django.contrib.auth import get_user_model
from django.utils import timezone
from django.utils.functional import curry
from django.utils.text import slugify
from django.utils.translation import ugettext_lazy as _

from django.conf import settings





