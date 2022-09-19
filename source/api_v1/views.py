from django.shortcuts import render
from django.views import View


# Create your views here.


class Index(View):
    template_name = "articles/calculator.html"
