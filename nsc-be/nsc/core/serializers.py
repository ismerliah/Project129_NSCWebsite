from rest_framework import serializers
from .models import Adminupload1, Adminupload2, Certificate, Detail, NewUser

class CustomUserSerializer(serializers.ModelSerializer):
    """ 
    Currently unused in preference of the below.
    """
    username = serializers.CharField(required=True)
    password = serializers.CharField(min_length=8, write_only=True)
    is_member = serializers.BooleanField(default=True)
    is_admin = serializers.BooleanField(default=False)

    class Meta:
        model = NewUser
        fields = ('id', 'username', 'password', 'is_member', 'is_admin')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        # as long as the fields are the same, we can just use this
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance

class NewUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = NewUser
        fields = '__all__'

class Adminupload1Serializer(serializers.ModelSerializer) :
    class Meta :
        model = Adminupload1
        fields = '__all__'

class Adminupload2Serializer(serializers.ModelSerializer) :
    class Meta :
        model = Adminupload2
        fields = '__all__'

class CertificateSerializer(serializers.ModelSerializer) :
    class Meta :
        model = Certificate
        fields = '__all__'

class DetailSerializer(serializers.ModelSerializer) :
    class Meta :
        model = Detail
        fields = '__all__'
