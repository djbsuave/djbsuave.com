import os
import requests

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', 'https://dj-gigs-1.preview.emergentagent.com').rstrip('/')


def test_root_api():
    r = requests.get(f"{BASE_URL}/api/", timeout=15)
    assert r.status_code == 200
    data = r.json()
    assert "message" in data
    assert isinstance(data["message"], str)
