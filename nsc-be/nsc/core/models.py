from django.db import models
from django.utils.translation import gettext_lazy as _
from django.contrib.auth.models import User, BaseUserManager,AbstractBaseUser, PermissionsMixin
from django.conf import settings

# Create your models here.

class CustomAccountManager(BaseUserManager):

    def create_superuser(self, username, password, **other_fields):

        other_fields.setdefault('is_staff', True)
        other_fields.setdefault('is_superuser', True)
        other_fields.setdefault('is_active', True)

        if other_fields.get('is_staff') is not True:
            raise ValueError(
                'Superuser must be assigned to is_staff=True.')
        if other_fields.get('is_superuser') is not True:
            raise ValueError(
                'Superuser must be assigned to is_superuser=True.')

        return self.create_user(username, password, **other_fields)

    def create_user(self, username, password, **other_fields):

        if not username:
            raise ValueError(_('You must provide an username'))

        user = self.model(username=username, **other_fields)
        user.set_password(password)
        user.save()
        return user

class NewUser(AbstractBaseUser, PermissionsMixin):

    username = models.CharField(max_length=150, blank=False,  unique=True)

    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)
    is_member = models.BooleanField(default=False)

    objects = CustomAccountManager()

    USERNAME_FIELD = 'username'

    def __str__(self):
        return self.username

# class Member(models.Model):
#     user = models.OneToOneField(NewUser, on_delete=models.CASCADE)

#     def __str__(self):
#         return self.user.username


class Adminupload1(models.Model) :
    name = 'Announce1'
    # text = models.CharField(max_length=200, null=True, blank=True)
    filecontent1 = models.FileField(upload_to='upload/files', null=True, blank=True)

    def __str__(self) :
        return self.name

class Adminupload2(models.Model) :
    name = 'Announce2'
    filecontent2 = models.FileField(upload_to='upload/files', null=True, blank=True)

    def __str__(self) :
        return self.name



class Certificate(models.Model) :
    name = 'Certificate'
    projectID = models.CharField(max_length=200, null=True, blank=True, default='')
    # certificate = models.FileField(upload_to='upload/certificate', null=True, blank=True)
    certificateAj = models.FileField(upload_to='upload/certificate', null=True, blank=True)
    certificateMem1 = models.FileField(upload_to='upload/certificate', null=True, blank=True)
    certificateMem2 = models.FileField(upload_to='upload/certificate', null=True, blank=True)
    certificateMem3 = models.FileField(upload_to='upload/certificate', null=True, blank=True)

    def __str__(self) :
        return f'{self.name} | {self.projectID}'

class Detail(models.Model) :

    CATEGORY_CHOICE = (
        ('โปรแกรมเพื่อการศึกษาและส่งเสริมการเรียนรู้', 'โปรแกรมเพื่อการศึกษาและส่งเสริมการเรียนรู้'),
        ('โปรแกรมเพื่อบริหารการเปลี่ยนแปลงสภาพภูมิอากาศและสิ่งแวดล้อม', 'โปรแกรมเพื่อบริหารการเปลี่ยนแปลงสภาพภูมิอากาศและสิ่งแวดล้อม'),
        ('โปรแกรมเพื่อช่วยคนพิการและผู้สูงอายุ', 'โปรแกรมเพื่อช่วยคนพิการและผู้สูงอายุ'),
        ('โปรแกรมเพื่อใช้ภายใต้สถานการณ์โควิด-19และโรคติดเชื้ออุบัติใหม่', 'โปรแกรมเพื่อใช้ภายใต้สถานการณ์โควิด-19และโรคติดเชื้ออุบัติใหม่'),
    )
    LEVEL_CHOICE = (
        ('นิสิต นักศึกษา', 'นิสิต นักศึกษา'),
        ('นักเรียน', 'นักเรียน'),
    )

    username = models.OneToOneField(NewUser, on_delete=models.CASCADE, blank=True, null=True, unique=True)
    projectID = models.CharField(max_length=200, null=False, blank=False, default='')
    project = models.CharField(max_length=200)
    category = models.CharField(max_length=512, choices=CATEGORY_CHOICE)
    level = models.CharField(max_length=512, choices=LEVEL_CHOICE, default='')
    institution = models.CharField(max_length=200)
    advisor = models.CharField(max_length=200)
    member1 = models.CharField(max_length=200)
    member2 = models.CharField(max_length=200, null=True, blank=True)
    member3 = models.CharField(max_length=200, null=True, blank=True)


    def __str__(self) :
        return self.project