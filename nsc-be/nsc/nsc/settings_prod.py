from .settings import *

#python manage.py runserver --settings=nsc.settings_prod

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'dj',
        'USER': 'root',
        'PASSWORD': 'myP@assw0rd',
        'HOST': 'dj_mysql',
        'PORT': '3306',
    }
}

ALLOWED_HOSTS = [
    "wd0304.coe.psu.ac.th"
]

CSRF_TRUSTED_ORIGINS = [
    "https://wd0304.coe.psu.ac.th"
]

DEBUG = False