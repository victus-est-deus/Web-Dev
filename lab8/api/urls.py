
from django.urls import path
from api import views

urlpatterns = [
    path('products/', views.product_list),
    path('products/<int:product_id>/', views.product),
    path('category/', views.product_categories),
    path('category/<int:category_id>/', views.category_by),
    path('category/<int:category_id>/products/', views.products_by_category)

]