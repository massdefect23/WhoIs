import json
import pytest
from app import app


@pytest.fixture
def client():
    app.config["TESTING"] = True
    with app.test_client() as client:
        yield client


def test_get_info(client):
    data = {"domain" : "google.com"}
    response = client.post("/api", data=json.dumps(data), content_type="application/json")
    assert response.status_code == 200
    assert "domain_name" in json.loads(response.data)