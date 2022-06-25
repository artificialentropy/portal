from core.models import Profile
from user_auth.serializers import UserSerializer
from rest_framework import serializers

class ProfilePrivateSerializer(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(read_only=True, default=UserSerializer)
    class Meta:
        model = Profile
        fields = ("id","user","first_name","last_name","phone_number","city","avatar")
        read_only_fields = ('id','user','slug')

class ProfilePublicSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Profile
        fields = ("id","first_name","last_name","city","avatar")
        read_only_fields = ("id","first_name","last_name","city","avatar")

class ProfileUpdateSerialier(serializers.ModelSerializer):

    class Meta:
        model = Profile
        fields = ("id","first_name","last_name","city","avatar")

    def update(self, instance, validated_data):
        instance.first_name = validated_data.get('first_name', instance.first_name)    
        instance.last_name = validated_data.get('last_name', instance.last_name)
        instance.city = validated_data.get('city', instance.city)        
        instance.avatar = validated_data.get('avatar', instance.avatar)
        instance.save()
        return instance