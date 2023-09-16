from PIL import Image
import os
import numpy as np

img = Image.open("../Betrayal/acid-monger.webp")
img = img.convert("RGBA")
datas = img.getdata()
width, height = img.size
newData = []

for y in range(height):
    for x in range(width):
        pixel = datas.getpixel((x, y))
        if x == 29 or y == 30 or x == 593 or y == 844:
            newData.append((255, 255, 255, 255))
        else:
            newData.append(pixel)
img.putdata(newData)
img.save("acid-monger.webp", "WEBP")
print("Success")
print(width, height)
