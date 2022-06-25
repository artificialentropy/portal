from rest_framework import serializers
from core.models import Company, Job, Recruiter, JobApplication
from user_auth.serializers import UserSerializer
from user_profile.serializers import ProfilePublicSerializer, ProfilePrivateSerializer


class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = '__all__'

class JobApplicationSerializer(serializers.ModelSerializer):
    job_application_candidate = UserSerializer(many=False, read_only=True)
    job_application_company = CompanySerializer(many=False, read_only=True)
    class Meta:
        model = JobApplication
        fields = (
            'id','job_application_candidate', 'job_application_company'
        )

class RecruiterPublicSerializer(serializers.ModelSerializer):
    recruiter_profile = ProfilePublicSerializer(many=False, read_only=True)
    recruiter_company = CompanySerializer(many=False, read_only=True)
    class Meta:
        model = Recruiter
        fields = (
            'id','recruiter_profile', 'recruiter_company'
        )

class RecruiterPrivateSerializer(serializers.ModelSerializer):
    recruiter_profile = ProfilePrivateSerializer(many=False, read_only=True)
    recruiter_company = CompanySerializer(many=False, read_only=True)
    class Meta:
        model = Recruiter
        fields = (
            'id', 'recruiter_profile', 'recruiter_company'
        )

class JobSerializer(serializers.ModelSerializer):
    recruiter = RecruiterPublicSerializer(many=False, read_only=True)
    company = CompanySerializer(many=False, read_only=True)
    class Meta:
        model = Job
        fields = '__all__'