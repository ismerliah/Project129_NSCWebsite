# Generated by Django 4.0.3 on 2022-03-20 17:47

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0013_certificate_certificate'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='certificate',
            name='certificateAj',
        ),
        migrations.RemoveField(
            model_name='certificate',
            name='certificateMem1',
        ),
        migrations.RemoveField(
            model_name='certificate',
            name='certificateMem2',
        ),
        migrations.RemoveField(
            model_name='certificate',
            name='certificateMem3',
        ),
    ]
