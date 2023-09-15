from PIL import Image
import os
import numpy as np


def convertImage(filename):
    img = Image.open(filename)
    img = img.convert("RGBA")

    datas = img.getdata()
    width, height = img.size
    newData = []
    psycho = []
    sal = []
    for y in range(height):
        for x in range(width):
            pixel = datas.getpixel((x, y))
            if y < 29 or x < 34 or x > 599 or y > 845:
                if pixel[3] == 0:
                    s = 0
                else:
                    sal.append(pixel)

    for y in range(height):
        for x in range(width):
            pixel = datas.getpixel((x, y))
            if y < 29 or x < 34 or x > 599 or y > 845:
                if pixel in sal:
                    newData.append((4, 6, 8, 255))
                else:
                    newData.append(pixel)
            elif y >= 29 and x >= 34 and x < 50 and y < 41:
                if pixel in sal:
                    newData.append((4, 6, 8, 255))
                else:
                    newData.append(pixel)
            elif y <= 855 and x >= 34 and x < 50 and y > 831:
                if pixel in sal:
                    newData.append((4, 6, 8, 255))
                else:
                    newData.append(pixel)
            elif y <= 855 and y > 831 and x <= 599 and x > 585:
                if pixel in sal:
                    newData.append((4, 6, 8, 255))
                else:
                    newData.append(pixel)
            elif y >= 29 and y < 41 and x <= 599 and x > 585:
                if pixel in sal:
                    newData.append((4, 6, 8, 255))
                else:
                    newData.append(pixel)
            else:
                newData.append(pixel)
    img.putdata(newData)
    img.save(filename, "WEBP")
    print("Successful")


convertImage("../Intro-Deck-2019/hurricane-shot.webp")
convertImage("../Intro-Deck-2019/tornado-shot.webp")
convertImage("../Intro-Deck-2019/tower-of-air.webp")
