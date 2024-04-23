xfrom selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
from pynput import keyboard

driver = webdriver.Chrome(ChromeDriverManager().install())
driver = webdriver.Chrome('/usr/lib/chromium-browser/chromedriver')
driver.get("http://localhost:8000/index.html")

def on_press(key):
    if key == keyboard.Key.space:
        driver.get("http://localhost:8000/index.html#start")

def on_release(key):
    if key == keyboard.Key.space:
        driver.get("http://localhost:8000/index.html#stop")
        # Stop listener
        return False

# Start the listener
with keyboard.Listener(on_press=on_press, on_release=on_release) as listener:
    listener.join()
