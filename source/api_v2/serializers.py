from rest_framework import serializers
from rest_framework.exceptions import ValidationError

from webapp.models import Article


class ArticleModelsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = "__all__"
        read_only_fields = ("id", "author", "created_at", "updated_at")

    def validate_title(self, value):
        if len(value) < 5:
            raise ValidationError("Длина маленькая")
        return value
