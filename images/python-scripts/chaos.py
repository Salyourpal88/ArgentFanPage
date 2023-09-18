from PIL import Image
import os
import numpy as np


def convertImage(filename):
    # Gets the first image, then saves the data
    img = Image.open(filename)
    img = img.convert("RGBA")
    datas = img.getdata()
    width, height = img.size
    newData = []

    # Finds where to cut the borders
    ls = findLeftSide(datas, width, height)
    rs = findRightSide(datas, width, height)
    ts = findTopSide(datas, width, height)
    bs = findBottomSide(datas, width, height)

    # Crops the image and restablishes borders
    img = img.crop((ls, ts, rs, bs))
    img = img.convert("RGBA")
    datas = img.getdata()
    width, height = img.size

    tc = True
    sal = []

    for y in range(height):
        for x in range(width):
            pixel = datas.getpixel((x, y))
            if x <= 4 or x >= width - 7 or y <= 6 or y >= height - 7:
                sal.append(pixel)

    for y in range(height):
        for x in range(width):
            pixel = datas.getpixel((x, y))
            if (pixel in sal and tc) or x in range(width - 7, width):
                if pixel[0] >= 28 and pixel[1] >= 28 and pixel[2] >= 28:
                    newData.append((255, 255, 255, 0))
                else:
                    newData.append((0, 0, 0, 255))
            else:
                tc = False
                newData.append(pixel)
        tc = True

    img.putdata(newData)
    img.save(filename, "WEBP")
    print("Success")


def findLeftSide(datas, wi, hi):
    for x in range(wi):
        for y in range(hi):
            pixel = datas.getpixel((x, y))
            if pixel[0] < 88 and pixel[1] < 88 and pixel[2] < 88:
                return x


def findRightSide(datas, wi, hi):
    for x in reversed(range(wi)):
        for y in range(hi):
            pixel = datas.getpixel((x, y))
            if pixel[0] < 88 and pixel[1] < 88 and pixel[2] < 88:
                return x


def findTopSide(datas, wi, hi):
    for y in range(hi):
        for x in range(wi):
            pixel = datas.getpixel((x, y))
            if pixel[0] < 88 and pixel[1] < 88 and pixel[2] < 88:
                return y


def findBottomSide(datas, wi, hi):
    for y in reversed(range(hi)):
        for x in range(wi):
            pixel = datas.getpixel((x, y))
            if pixel[0] < 88 and pixel[1] < 88 and pixel[2] < 88:
                return y


# directory = "../Expansion-Pack-Genesis/"

# for filename in os.listdir(directory):
#     if ".webp" in filename:
#         convertImage(directory + filename)

# convertImage("../Expansion-Pack-Generations/corona-the-spirit-ruby.webp")
# convertImage("../Expansion-Pack-Generations/198206.webp")
# convertImage("../Expansion-Pack-Generations/198207.webp")
# convertImage("../Expansion-Pack-Generations/198208.webp")
convertImage("../Expansion-Pack-Generations/ergon-the-tragic-gargoyle.webp")
# convertImage("../Expansion-Pack-Generations/198213.webp")
