from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from core.models import Company, Job, Recruiter, JobApplication
from . import serializers
from rest_framework.generics import ListAPIView,RetrieveAPIView
# Create your views here.
class CompanyViewSet(viewsets.ModelViewSet):
    """Manage recipes in the database"""
    serializer_class = serializers.CompanySerializer
    queryset = Company.objects.all()
    permission_classes = (IsAuthenticated,)

class JobViewSet(viewsets.ModelViewSet):
    """Manage recipes in the database"""
    serializer_class = serializers.JobSerializer
    queryset = Job.objects.all()
    permission_classes = (IsAuthenticated,)

class JobApplicationView(ListAPIView):
    """Manage recipes in the database"""
    serializer_class = serializers.JobApplicationSerializer
    queryset = JobApplication.objects.all()
    permission_classes = (IsAuthenticated,)
    def get_queryset(self):
        queryset = self.queryset
        query_set = queryset.filter(job_application_candidate = self.request.user)
        return query_set
    

class RecruiterPublicListView(ListAPIView):
    queryset = Recruiter.objects.all()
    permission_classes = (IsAuthenticated,)
    serializer_class = serializers.RecruiterPublicSerializer

class RecruiterPrivateDetailView(RetrieveAPIView):
    serializer_class = serializers.RecruiterPrivateSerializer
    queryset = Recruiter.objects.all()
    permission_classes = (IsAuthenticated,)
    def get_queryset(self):
        queryset = self.queryset
        return queryset
    
