from django.db import models

class Persona(models.Model):
    nombre = models.CharField(max_length=100)
    apellido = models.CharField(max_length=100)
    email = models.CharField(max_length=100)

    # Meta para ordenar por id de forma creciente
    class Meta:
        ordering = ['id']

    def __str__(self):
        return f"{self.nombre} {self.apellido}"