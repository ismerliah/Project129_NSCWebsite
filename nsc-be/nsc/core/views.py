from django.shortcuts import render
from .models import Adminupload1, Adminupload2, Certificate, Detail, NewUser
from .serializers import CertificateSerializer, DetailSerializer, NewUserSerializer, Adminupload1Serializer, Adminupload2Serializer
from rest_framework import viewsets
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import CustomUserSerializer
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import AllowAny
from rest_framework.decorators import api_view
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

class CustomUserCreate(APIView):
    permission_classes = [AllowAny]

    def post(self, request, format='json'):
        serializer = CustomUserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            if user:
                json = serializer.data
                return Response(json, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view()
def whoami(request) :
    result = {'username': request.user.username}
    return Response(result)
    # s = CustomUserSerializer(request.user)
    # return Response(s.data)

class Adminupload1Viewset(viewsets.ModelViewSet) :
    serializer_class = Adminupload1Serializer
    queryset = Adminupload1.objects.all()
    
class Adminupload2Viewset(viewsets.ModelViewSet) :
    serializer_class = Adminupload2Serializer
    queryset = Adminupload2.objects.all()

class NewUserViewset(viewsets.ModelViewSet) :
    serializer_class = NewUserSerializer
    queryset = NewUser.objects.all()


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)
        refresh = self.get_token(self.user)
        data['refresh'] = str(refresh)
        data['access'] = str(refresh.access_token)

        # Add extra responses here
        data['id'] = self.user.id
        data['is_staff'] = self.user.is_staff
        data['is_admin'] = self.user.is_admin
        data['is_member'] = self.user.is_member
        data['is_active'] = self.user.is_active
        return data

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

class CertificateViewset(viewsets.ModelViewSet) :
    serializer_class = CertificateSerializer
    queryset = Certificate.objects.all()

class DetailViewset(viewsets.ModelViewSet) :
    serializer_class = DetailSerializer
    queryset = Detail.objects.all()

