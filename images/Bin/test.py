from PIL import Image
import os
import numpy as np


def convertImage(filename):
    img = Image.open(filename)
    img = img.convert("RGBA")

    lowest = 5000

    datas = img.getdata()

    wi, hi = 0, 0
    width, height = img.size
    newData = []

    for item in datas:
        wi += 1
        if wi < 4 or width - 2 < wi or hi < 2:
            newData.append((255, 255, 255, 0))
        else:
            newData.append(item)
        if wi == width:
            wi = 0
            hi += 1
    img.putdata(newData)
    img.save(filename, "WEBP")
    print("Successful")


directory = "./"

for filename in os.listdir(directory):
    if ".webp" in filename and "zeal" not in filename:
        convertImage(filename)
