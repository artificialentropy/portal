from django.contrib.auth import get_user_model
from django.shortcuts import get_object_or_404
from httplib2 import Response
from core.models import Profile
from .serializers import ProfilePublicSerializer,ProfilePrivateSerializer, ProfileUpdateSerialier
from rest_framework.generics import ListAPIView,RetrieveAPIView, RetrieveUpdateAPIView
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication

class ProfilePublicListView(ListAPIView):
    queryset = Profile.objects.all()
    permission_classes = (IsAuthenticated,)
    serializer_class = ProfilePublicSerializer

# class ProfilePrivateDetailView(RetrieveAPIView):
#     serializer_class = ProfilePrivateSerializer
#     queryset = Profile.objects.all()
#     permission_classes = (IsAuthenticated,)
#     authentication_classes = [TokenAuthentication]
#     def get_queryset(self):
#         queryset = self.queryset
#         query_set = queryset.filter(user=self.request.user)
#         return query_set
#     def perform_create(self, serializer):
#         serializer.save(user=self.request.user)

class ProfilePrivateDetailView(viewsets.ModelViewSet):
    serializer_class = ProfilePrivateSerializer
    queryset = Profile.objects.all()
    permission_classes = (IsAuthenticated,)
    authentication_classes = [TokenAuthentication]
    def get_queryset(self):
        queryset = self.queryset
        query_set = queryset.filter(user=self.request.user)
        return query_set
    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
    
# class ProfileUpdateAPIView(RetrieveUpdateAPIView):
#     permission_classes = (IsAuthenticated,)
#     authentication_classes = [TokenAuthentication]
#     serializer_class = ProfileUpdateSerialier
#     queryset = Profile.objects.all()
#     def get_queryset(self):
#         queryset = self.queryset
#         query_set = queryset.filter(user=self.request.user)
#         return query_set

#     def put(self, request, *args, **kwargs):
#         return self.update(request, *args, **kwargs)
    

