from django.db import router
from django.urls import path
from django.urls.conf import include
# from rest_framework import routers
from rest_framework.routers import DefaultRouter
from .views import Adminupload1Viewset, Adminupload2Viewset, CertificateViewset, DetailViewset, whoami, NewUserViewset

# routers = routers.DefaultRouter()
router = DefaultRouter()
router.register(r"adminupload1", Adminupload1Viewset, basename='adminview1')
router.register(r"adminupload2", Adminupload2Viewset, basename='adminview2')
router.register(r"newuser", NewUserViewset, basename='newuser')
router.register(r"certificate", CertificateViewset, basename='certificate')
router.register(r"detail", DetailViewset, basename='detail')



urlpatterns = [
    path('', include(router.urls)),
    path('whoami/', whoami, name='whoami'),
]

# urlpatterns = router.urls
