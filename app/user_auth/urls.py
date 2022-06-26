from django.urls import path
from rest_framework_simplejwt.views import (
    TokenRefreshView,TokenVerifyView
)
from user_auth import views


app_name = 'user_auth'

urlpatterns = [
    
    path('create/', views.CreateUserView.as_view(), name='create'),
    path('token/', views.MyTokenObtainPairView.as_view(), name='token'),
    path('refresh/', TokenRefreshView.as_view(), name='refresh'),
    path('verify/', TokenVerifyView.as_view(), name='verify'),
    path('change-password/', views.ChangePasswordView.as_view(), name='password'),
    path('me/', views.ManageUserView.as_view(), name='me'),  
]