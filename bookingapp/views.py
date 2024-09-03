from django.shortcuts import render

# Create your views here.
def home(request):
    return render(request,"index.html")
def hindustan(request):
    return render(request,"hindustan.html")
def kovai(request):
    return render(request,"kovai.html")
def crossbar(request):
    return render(request,"crossbar.html")
def lionDen(request):
    return render(request,"lionDen.html")
def rs(request):
    return render(request,"rs.html")
def turfGenius(request):
    return render(request,"turfGenius.html")

def login(request):
    return render(request,"login.html")
