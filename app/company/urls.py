from django.urls import path, include
from rest_framework.routers import DefaultRouter

from . import views


router = DefaultRouter()
router.register('company', views.CompanyViewSet)
router.register('jobs', views.JobViewSet)

app_name = 'company'

urlpatterns = [
    path('', include(router.urls)),
    path('recruiter/', views.RecruiterPublicListView.as_view()),
    path('recruiter/<int:pk>/', views.RecruiterPrivateDetailView.as_view()),
    path('application/', views.JobApplicationView.as_view()),

]
