# Generated by Django 4.0.3 on 2022-03-19 11:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0007_rename_id_project_userdetail_username'),
    ]

    operations = [
        migrations.AddField(
            model_name='userdetail',
            name='projectID',
            field=models.CharField(default='', max_length=200),
        ),
    ]
