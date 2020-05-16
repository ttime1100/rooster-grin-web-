from __future__ import unicode_literals

from django.conf import settings
from django.db import models
from django.urls import reverse #Generate urls by reversing the url pattern
import uuid
from django.contrib.contenttypes.fields import GenericForeignKey
from django.contrib.contenttypes.models import ContentType
from datetime import datetime
from django.utils import timezone
from django.template.defaultfilters import slugify
from django.contrib.auth.models import User
from django.db.models.signals import post_save






# Create your models here.



