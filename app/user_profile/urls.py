from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProfilePublicListView,ProfilePrivateDetailView

router = DefaultRouter()
router.register('my_profile', ProfilePrivateDetailView, basename="my_profile")
app_name = 'user_profile'
urlpatterns = [    
    path('', include(router.urls)),
    path('profiles/', ProfilePublicListView.as_view())
]