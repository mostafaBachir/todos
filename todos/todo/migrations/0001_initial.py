# Generated by Django 2.1.2 on 2018-10-12 14:16

import datetime
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Todo',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('titre', models.CharField(max_length=255)),
                ('description', models.TextField(blank=True, null=True)),
                ('fait', models.BooleanField(default=False)),
                ('a_faire_le', models.DateTimeField(default=datetime.datetime.now)),
            ],
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email', models.EmailField(max_length=255, unique=True)),
            ],
        ),
        migrations.AddField(
            model_name='todo',
            name='utilisateur',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='todo.User'),
        ),
    ]
