from django.urls import reverse
from pytest_django.asserts import assertTemplateUsed


def test_home_page_get(client):
    endpoint = reverse('home:home')
    response = client.get(endpoint)
    assert response.status_code == 200
    assertTemplateUsed(response, 'landing_page.html')
    assert '<title>Flying Pink Panther</title>' in str(response.content)
