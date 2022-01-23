from django.shortcuts import render
from datetime import datetime
from home.models import Reservation

# Create your views here.
def home(request):
    return render(request, "index.html")

def about(request):
    return render(request, "index.html#about")

def menu(request):
    return render(request, "index.html#menu")

def reservation(request):
    if request.method == "POST":
        name = request.POST.get('name')
        email = request.POST.get('email')
        contact = request.POST.get('contact')
        guests = request.POST.get('guests')
        date = request.POST.get('date')
        time = request.POST.get('time')
        reservation = Reservation(name=name, email=email, contact=contact, guests=guests, date=date, time=time, reservationDate=datetime.today())
        reservation.save()
        return render(request, "index.html")
    return render(request, "index.html#reservation")

def contact(request):
    return render(request, "index.html#contact")