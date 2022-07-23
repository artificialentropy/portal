from enum import auto
import uuid
import os
from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, \
                                        PermissionsMixin
from django.conf import settings

from django.template.defaultfilters import slugify

class UserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        """Creates and saves a new user"""
        if not email:
            raise ValueError('Users must have a unique email address')
        user = self.model(email=self.normalize_email(email), **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password):
        """Creates and saves a new super user"""
        user = self.create_user(email, password)
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)

        return user

class User(AbstractBaseUser, PermissionsMixin):
    """Custom user model that suppors using email instead of username"""
    candidate = "Candidate"
    recruiter = "Recruiter"
    role_choices = (
        (candidate , "Candidate"),
        (recruiter , "Recruiter")

    )
    type = models.CharField(max_length=15, choices=role_choices, default=candidate)
    email = models.EmailField(max_length=255, unique=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    objects = UserManager()
    USERNAME_FIELD = 'email'
    EMAIL_FIELD = 'email'

def avatar_image_file_path(instance, filename):
    """Generate file path for new recipe image"""
    ext = filename.split('.')[-1]
    filename = f'{uuid.uuid4()}.{ext}'
    return os.path.join('uploads/avatar/', filename)

class Profile(models.Model):
    slug = models.SlugField(allow_unicode=True, unique=True)
    user = models.OneToOneField(settings.AUTH_USER_MODEL,on_delete=models.CASCADE,related_name="profile")
    first_name = models.CharField(max_length=255,blank=False,null=False)
    last_name = models.CharField(max_length=255,blank=False,null=False)
    phone_number = models.IntegerField(blank=False,null=False)
    city = models.CharField(max_length=255,blank=False,null=False)
    avatar = models.ImageField(blank=False,null=False, upload_to=avatar_image_file_path)
    
    def __str__(self):
        if not self.last_name:
            return self.first_name.capitalize()
        return f'{self.first_name.capitalize()} {self.last_name.capitalize()}'

    def save(self,*args,**kwargs):
        self.slug = slugify(self.first_name)
        super().save(*args,**kwargs)

class Recruiter(models.Model):
    slug = models.SlugField(allow_unicode=True, unique=True)
    user = models.OneToOneField(settings.AUTH_USER_MODEL,on_delete=models.CASCADE,related_name="recruiter_profile")
    first_name = models.CharField(max_length=255,blank=False,null=False)
    last_name = models.CharField(max_length=255,blank=False,null=False)
    phone_number = models.IntegerField(blank=False,null=False)
    city = models.CharField(max_length=255,blank=False,null=False)
    avatar = models.ImageField(blank=False,null=False, upload_to=avatar_image_file_path)
    
    def __str__(self):
        if not self.last_name:
            return self.first_name.capitalize()
        return f'{self.first_name.capitalize()} {self.last_name.capitalize()}'

    def save(self,*args,**kwargs):
        self.slug = slugify(self.first_name)
        super().save(*args,**kwargs)

class CompanyFounder(models.Model):
    first_name = models.CharField(max_length=255, blank = False, null= False)
    last_name = models.CharField(max_length=255, blank = False, null= False)
    year_founded = models.DateField(auto_now_add=False)
    
    def __str__(self):
        return f'{self.first_name.capitalize()} {self.last_name.capitalize()}'
    
class Company(models.Model):
    name = models.CharField(max_length=255, blank=False,null=False)
    location = models.CharField(max_length=255, blank=False,null=False)
    description = models.TextField()
    link = models.URLField(blank=False,null=False)
    slug = models.SlugField(allow_unicode=True, unique=True)
    founders = models.ForeignKey(CompanyFounder,on_delete=models.CASCADE,related_name="founders")
    company_goal = models.TextField()
    employee_count = models.IntegerField()

    def __str__(self):
        return self.name

    def save(self,*args,**kwargs):
        self.slug = slugify(self.name)
        super().save(*args,**kwargs)
    
    class Meta:
        ordering =['name']
        
class Job(models.Model):
    slug = models.SlugField(allow_unicode=True, unique=True)
    title = models.CharField(max_length=255, blank=False,null=False,default="Data Science")
    location = models.CharField(max_length=255, blank=False,null=False)
    company = models.ForeignKey(Company,on_delete=models.CASCADE,related_name="job_company")
    recruiter = models.ForeignKey(Recruiter,on_delete=models.CASCADE,related_name="job_recruiter")
    requirement = models.TextField()
    job_description = models.TextField()
    skillset = models.TextField()
    vacancies = models.IntegerField()
    ctc = models.IntegerField()
    
    def save(self,*args,**kwargs):
        self.slug = slugify(self.title)
        super().save(*args,**kwargs)


class Recruitment(models.Model):
    recruiter_profile = models.OneToOneField(Recruiter,on_delete=models.CASCADE,related_name="recruiter_profile")
    recruiter_company = models.OneToOneField(Company,on_delete=models.CASCADE,related_name="recruiter_company")
    recruiter_for_job = models.OneToOneField(Job,on_delete=models.CASCADE,related_name="recruiter_for_job")
    
    def __str__(self):
        return f'{self.recruiter_profile.first_name.capitalize()} {self.recruiter_profile.last_name.capitalize()}'


class JobApplication(models.Model):
    job_application_candidate = models.ForeignKey(settings.AUTH_USER_MODEL,on_delete=models.CASCADE,related_name="job_application_candidate")
    job_application_job = models.ForeignKey(Job,on_delete=models.CASCADE,related_name="job_application_job")
    status = models.TextField()

    class Meta:
        unique_together = ('job_application_candidate','job_application_job')
    
