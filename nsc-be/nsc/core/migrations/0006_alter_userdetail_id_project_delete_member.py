# Generated by Django 4.0.3 on 2022-03-19 11:25

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0005_userdetail_id_project'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userdetail',
            name='id_project',
            field=models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
        migrations.DeleteModel(
            name='Member',
        ),
    ]
