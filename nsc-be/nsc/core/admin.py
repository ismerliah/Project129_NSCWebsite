from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.forms import TextInput, Textarea, CharField
from django import forms
from django.db import models
from .models import Certificate, Detail, NewUser, Adminupload1, Adminupload2
from django.contrib.auth.models import Group

class UserAdminConfig(UserAdmin):
    # model = NewUser
    add_fieldsets = (
        (None, {
            # 'classes': ('wide',),
            'fields': ('username', 'password1', 'password2', 'is_active')
        }),
        ('Permissions', {
            'fields': ('is_member', 'is_admin', 'is_staff')
        }),
    )
    fieldsets = (
        (None, {
            'fields': ('username', 'password', 'is_active')
        }),
        ('Permissions', {
            'fields': ('is_member', 'is_admin', 'is_staff')
        }),
    )
    list_display = ['username', 'is_active', 'is_staff', 'is_admin', 'is_member']
    search_fields = ('username', 'is_active')
    ordering = ('username',)
    list_filter = ['username', 'is_active', 'is_staff', 'is_admin', 'is_member']
    formfield_overrides = {
        models.TextField: {'widget': Textarea(attrs={'rows': 20, 'cols': 60})},
    }

# Register your models here.
admin.site.register(NewUser, UserAdminConfig)
admin.site.register(Certificate)
admin.site.register(Adminupload1)
admin.site.register(Adminupload2)
admin.site.register(Detail)


# admin.site.unregister(Group)
