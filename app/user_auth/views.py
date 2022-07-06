# from rest_framework import generics
# from rest_framework_simplejwt.views import TokenObtainPairView
# from user_auth.serializers import UserSerializer,AuthTokenSerializer
# from rest_framework.response import Response
# from .serializers import UserSerializer, ChangePasswordSerializer
# from rest_framework import status
# from rest_framework import generics
# from rest_framework.response import Response
# from rest_framework.permissions import IsAuthenticated
# from django.contrib.auth import get_user_model
# from rest_framework.response import Response
# from django.contrib.auth import authenticate
# from rest_framework import status

# class ChangePasswordView(generics.UpdateAPIView):
#         """
#         An endpoint for changing password.
#         """
#         serializer_class = ChangePasswordSerializer
#         model = get_user_model()
#         permission_classes = (IsAuthenticated,)

#         def get_object(self, queryset=None):
#             obj = self.request.user
#             return obj

#         def update(self, request, *args, **kwargs):
#             self.object = self.get_object()
#             serializer = self.get_serializer(data=request.data)

#             if serializer.is_valid():
#                 # Check old password
#                 if not self.object.check_password(serializer.data.get("old_password")):
#                     return Response({"old_password": ["Wrong password."]}, status=status.HTTP_400_BAD_REQUEST)
#                 # set_password also hashes the password that the user will get
#                 self.object.set_password(serializer.data.get("new_password"))
#                 self.object.save()
#                 response = {
#                     'status': 'success',
#                     'code': status.HTTP_200_OK,
#                     'message': 'Password updated successfully',
#                     'data': []
#                 }

#                 return Response(response)
#             return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# class ManageUserView(generics.RetrieveUpdateAPIView):
#     """Manage the authenticated user"""
#     serializer_class = UserSerializer
#     permission_classes = (IsAuthenticated,)

#     def get_object(self):
#         """Retrieve and return authentication user"""
#         return self.request.user



# class CreateUserView(generics.CreateAPIView):
#     """Create a new user in the system"""
#     serializer_class = UserSerializer

# class MyTokenObtainPairView(TokenObtainPairView):
#     serializer_class = AuthTokenSerializer

    

"""
Views for the user API.
"""
from rest_framework import generics, authentication, permissions
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.settings import api_settings

from user_auth.serializers import (
    UserSerializer,
    AuthTokenSerializer,
)


class CreateUserView(generics.CreateAPIView):
    """Create a new user in the system."""
    serializer_class = UserSerializer


class CreateTokenView(ObtainAuthToken):
    """Create a new auth token for user."""
    serializer_class = AuthTokenSerializer
    renderer_classes = api_settings.DEFAULT_RENDERER_CLASSES


class ManageUserView(generics.RetrieveUpdateAPIView):
    """Manage the authenticated user."""
    serializer_class = UserSerializer
    authentication_classes = [authentication.TokenAuthentication]
    permission_classes = [permissions.IsAuthenticated]

    def get_object(self):
        """Retrieve and return the authenticated user."""
        return self.request.user
