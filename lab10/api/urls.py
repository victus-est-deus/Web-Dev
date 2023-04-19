from django.urls import path
from api import views

urlpatterns = [
    path('companies/', views.all_companies),
    path('companies/<int:company_id>/', views.company),
    path('companies/<int:company_id>/vacancies/', views.vacancies_by_company),
    path('vacancies/', views.all_vacancies),
    path('vacancies/<int:vacancy_id>/', views.vacancy),
    path('vacancies/top_ten/', views.top_ten_vacancies)
]