from PIL import Image
import os
import numpy as np


def convertImage(filename):
    # Gets the first image, then saves the data
    img = Image.open(filename)
    img = img.convert("RGBA")
    datas = img.getdata()
    width, height = img.size
    newData1 = []
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

    lc = True
    bc = True
    tread = 0
    tread1 = 0

    for y in range(height):
        for x in range(width):
            pixel = datas.getpixel((x, y))
            if y in range(33) and x in range(35):
                if pixel[0] >= 125 and pixel[1] >= 125 and pixel[2] >= 125 and lc:
                    newData1.append((0, 0, 0, 255))
                    tread1 += 1
                else:
                    lc = False
                    newData1.append(pixel)
            elif y in range(53) and x in range(width - 35, width):
                if x in range(width - tread1, width):
                    newData1.append((0, 0, 0, 255))
                else:
                    newData1.append(pixel)
            elif y in range(height - 31, height) and x in range(35):
                if pixel[0] >= 175 and pixel[1] >= 175 and pixel[2] >= 175 and bc:
                    newData1.append((0, 0, 0, 255))
                    tread += 1
                else:
                    bc = False
                    newData1.append(pixel)
            elif y in range(height - 31, height) and x in range(width - 35, width):
                if x in range(width - tread, width):
                    newData1.append((0, 0, 0, 255))
                else:
                    newData1.append(pixel)
            else:
                newData1.append(pixel)
        lc = True
        bc = True
        tread = 0
        tread1 = 0

    img.putdata(newData1)

    # Pastes image onto a black border
    im3 = Image.new(mode="RGB", size=(width + 61, height + 62))
    Image.Image.paste(im3, img, (30, 31))
    im3 = im3.convert("RGBA")
    datas3 = im3.getdata()
    width1, height1 = im3.size

    # Finds the image with the right borders
    img1 = Image.open("../Betrayal/acid-monger.webp")
    img1 = img1.convert("RGBA")
    datas1 = img1.getdata()
    width2, height2 = img1.size

    # Borders from correct image
    x1, y1 = 593, 843
    x2, y2 = 593, 843

    # apply the fixed border
    for y in range(height1):
        for x in range(width1):
            if x in range(30) and y in range(31):
                pixel = datas1.getpixel((x, y))
                if pixel[3] == 0:
                    newData.append((255, 255, 255, 0))
                else:
                    newData.append((0, 0, 0, 255))
            elif x in range(width1 - 31, width1) and y in range(31):
                pixel = datas1.getpixel((x2, y))
                if pixel[3] == 0:
                    newData.append((255, 255, 255, 0))
                else:
                    newData.append((0, 0, 0, 255))
                x2 += 1
                if x2 == width2:
                    x2 = 593
            elif x in range(30) and y in range(height1 - 31, height1):
                pixel = datas1.getpixel((x, y2))
                if pixel[3] == 0:
                    newData.append((255, 255, 255, 0))
                else:
                    newData.append((0, 0, 0, 255))
                if x == 29:
                    y2 += 1
            elif x in range(width1 - 31, width1) and y in range(height1 - 31, height1):
                pixel = datas1.getpixel((x1, y1))
                if pixel[3] == 0:
                    newData.append((255, 255, 255, 0))
                else:
                    newData.append((0, 0, 0, 255))
                x1 += 1
                if x1 == width2:
                    x1 = 593
                    y1 += 1
            else:
                newData.append(datas3.getpixel((x, y)))

    filename = filename.replace("../Expansion-Pack-Generations/", "")
    im3.putdata(newData)
    im3.save(filename, "WEBP")
    print("Success")


def findLeftSide(datas, wi, hi):
    for x in range(wi):
        for y in range(hi):
            pixel = datas.getpixel((x, y))
            if pixel[0] < 125 and pixel[1] < 125 and pixel[2] < 125:
                return x


def findRightSide(datas, wi, hi):
    for x in reversed(range(wi)):
        for y in range(hi):
            pixel = datas.getpixel((x, y))
            if pixel[0] < 125 and pixel[1] < 125 and pixel[2] < 125:
                return x


def findTopSide(datas, wi, hi):
    for y in range(hi):
        for x in range(wi):
            pixel = datas.getpixel((x, y))
            if pixel[0] < 125 and pixel[1] < 125 and pixel[2] < 125:
                return y


def findBottomSide(datas, wi, hi):
    for y in reversed(range(hi)):
        for x in range(wi):
            pixel = datas.getpixel((x, y))
            if pixel[0] < 125 and pixel[1] < 125 and pixel[2] < 125:
                return y


convertImage("../Expansion-Pack-Generations/amateur-witch.webp")
