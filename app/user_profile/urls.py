from django.urls import path
from .views import ProfilePublicListView,ProfilePrivateDetailView, ProfileUpdateAPIView

app_name = 'user_profile'
urlpatterns = [
    path('', ProfilePublicListView.as_view()),
    path('<int:pk>/', ProfilePrivateDetailView.as_view()),
    path('<int:pk>/update/', ProfileUpdateAPIView.as_view()),
]