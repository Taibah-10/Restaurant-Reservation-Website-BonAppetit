from django.db import models

# Create your models here.
class Reservation(models.Model):
    name = models.CharField(max_length=122,)
    email = models.CharField(max_length=122,)
    contact = models.CharField(max_length=12,)
    guests = models.CharField(max_length=3,)
    date = models.CharField(max_length=10,)
    time = models.CharField(max_length=5,)
    reservationDate = models.DateField()

    def __str__(self):
        return self.name