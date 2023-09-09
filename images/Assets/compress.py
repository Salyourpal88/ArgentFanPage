from PIL import Image
import os
import numpy as np


def convertImage(imageName):
    im = Image.open(directory + imageName).convert("RGB")
    im.save(f"{imageName}.png".replace(".webp", ""), "png")
    print("Successful")


directory = "../Betrayal/"

# iterate over files in
# that directory

for filename in os.listdir(directory):
    if ".webp" in filename:
        convertImage(filename)
