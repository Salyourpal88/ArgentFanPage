from PIL import Image
import os
import numpy as np


def convertImage(filename):
    # Gets the first image, then saves the data
    img = Image.open(filename)
    img = img.convert("RGBA")
    datas = img.getdata()
    width, height = img.size
    parky = []
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

    for y in range(height):
        for x in range(width):
            pixel = datas.getpixel((x, y))
            if x in range(29) and y in range(29):
                if x in range(29) and y == 0:
                    parky.append((0, 0, 0, 255))
                elif x in range(24) and y == 1:
                    parky.append((0, 0, 0, 255))
                elif x in range(23) and y == 2:
                    parky.append((0, 0, 0, 255))
                elif x in range(19) and y == 3:
                    parky.append((0, 0, 0, 255))
                elif x in range(17) and y == 4:
                    parky.append((0, 0, 0, 255))
                elif x in range(15) and y == 5:
                    parky.append((0, 0, 0, 255))
                elif x in range(14) and y == 6:
                    parky.append((0, 0, 0, 255))
                elif x in range(13) and y == 7:
                    parky.append((0, 0, 0, 255))
                elif x in range(12) and y == 8:
                    parky.append((0, 0, 0, 255))
                elif x in range(10) and y == 9:
                    parky.append((0, 0, 0, 255))
                elif x in range(9) and y == 10:
                    parky.append((0, 0, 0, 255))
                elif x in range(8) and y == 11:
                    parky.append((0, 0, 0, 255))
                elif x in range(8) and y == 12:
                    parky.append((0, 0, 0, 255))
                elif x in range(7) and y == 13:
                    parky.append((0, 0, 0, 255))
                elif x in range(7) and y == 14:
                    parky.append((0, 0, 0, 255))
                elif x in range(7) and y == 15:
                    parky.append((0, 0, 0, 255))
                elif x in range(6) and y == 16:
                    parky.append((0, 0, 0, 255))
                elif x in range(6) and y == 17:
                    parky.append((0, 0, 0, 255))
                elif x in range(4) and y == 18:
                    parky.append((0, 0, 0, 255))
                elif x in range(3) and y == 19:
                    parky.append((0, 0, 0, 255))
                elif x in range(3) and y == 20:
                    parky.append((0, 0, 0, 255))
                elif x in range(2) and y == 21:
                    parky.append((0, 0, 0, 255))
                elif x in range(2) and y == 22:
                    parky.append((0, 0, 0, 255))
                elif x in range(2) and y == 23:
                    parky.append((0, 0, 0, 255))
                elif x in range(1) and y == 24:
                    parky.append((0, 0, 0, 255))
                elif x in range(1) and y == 25:
                    parky.append((0, 0, 0, 255))
                elif x in range(1) and y == 26:
                    parky.append((0, 0, 0, 255))
                elif x in range(1) and y == 27:
                    parky.append((0, 0, 0, 255))
                elif x in range(1) and y == 28:
                    parky.append((0, 0, 0, 255))
                else:
                    parky.append(pixel)
            elif x in range(width - 29, width) and y in range(29):
                if x in range(width - 29, width) and y == 0:
                    parky.append((0, 0, 0, 255))
                elif x in range(width - 24, width) and y == 1:
                    parky.append((0, 0, 0, 255))
                elif x in range(width - 23, width) and y == 2:
                    parky.append((0, 0, 0, 255))
                elif x in range(width - 19, width) and y == 3:
                    parky.append((0, 0, 0, 255))
                elif x in range(width - 17, width) and y == 4:
                    parky.append((0, 0, 0, 255))
                elif x in range(width - 15, width) and y == 5:
                    parky.append((0, 0, 0, 255))
                elif x in range(width - 14, width) and y == 6:
                    parky.append((0, 0, 0, 255))
                elif x in range(width - 13, width) and y == 7:
                    parky.append((0, 0, 0, 255))
                elif x in range(width - 12, width) and y == 8:
                    parky.append((0, 0, 0, 255))
                elif x in range(width - 10, width) and y == 9:
                    parky.append((0, 0, 0, 255))
                elif x in range(width - 9, width) and y == 10:
                    parky.append((0, 0, 0, 255))
                elif x in range(width - 8, width) and y == 11:
                    parky.append((0, 0, 0, 255))
                elif x in range(width - 8, width) and y == 12:
                    parky.append((0, 0, 0, 255))
                elif x in range(width - 7, width) and y == 13:
                    parky.append((0, 0, 0, 255))
                elif x in range(width - 7, width) and y == 14:
                    parky.append((0, 0, 0, 255))
                elif x in range(width - 7, width) and y == 15:
                    parky.append((0, 0, 0, 255))
                elif x in range(width - 6, width) and y == 16:
                    parky.append((0, 0, 0, 255))
                elif x in range(width - 6, width) and y == 17:
                    parky.append((0, 0, 0, 255))
                elif x in range(width - 4, width) and y == 18:
                    parky.append((0, 0, 0, 255))
                elif x in range(width - 3, width) and y == 19:
                    parky.append((0, 0, 0, 255))
                elif x in range(width - 3, width) and y == 20:
                    parky.append((0, 0, 0, 255))
                elif x in range(width - 2, width) and y == 21:
                    parky.append((0, 0, 0, 255))
                elif x in range(width - 2, width) and y == 22:
                    parky.append((0, 0, 0, 255))
                elif x in range(width - 2, width) and y == 23:
                    parky.append((0, 0, 0, 255))
                elif x in range(width - 1, width) and y == 24:
                    parky.append((0, 0, 0, 255))
                elif x in range(width - 1, width) and y == 25:
                    parky.append((0, 0, 0, 255))
                elif x in range(width - 1, width) and y == 26:
                    parky.append((0, 0, 0, 255))
                elif x in range(width - 1, width) and y == 27:
                    parky.append((0, 0, 0, 255))
                elif x in range(width - 1, width) and y == 28:
                    parky.append((0, 0, 0, 255))
                else:
                    parky.append(pixel)
            elif x in range(25) and y in range(height - 29, height):
                if x in range(1) and y == height - 29:
                    parky.append((0, 0, 0, 255))
                elif x in range(1) and y == height - 28:
                    parky.append((0, 0, 0, 255))
                elif x in range(1) and y == height - 27:
                    parky.append((0, 0, 0, 255))
                elif x in range(2) and y == height - 26:
                    parky.append((0, 0, 0, 255))
                elif x in range(1) and y == height - 25:
                    parky.append((0, 0, 0, 255))
                elif x in range(2) and y == height - 24:
                    parky.append((0, 0, 0, 255))
                elif x in range(3) and y == height - 23:
                    parky.append((0, 0, 0, 255))
                elif x in range(2) and y == height - 22:
                    parky.append((0, 0, 0, 255))
                elif x in range(3) and y == height - 21:
                    parky.append((0, 0, 0, 255))
                elif x in range(3) and y == height - 20:
                    parky.append((0, 0, 0, 255))
                elif x in range(3) and y == height - 19:
                    parky.append((0, 0, 0, 255))
                elif x in range(4) and y == height - 18:
                    parky.append((0, 0, 0, 255))
                elif x in range(5) and y == height - 17:
                    parky.append((0, 0, 0, 255))
                elif x in range(5) and y == height - 16:
                    parky.append((0, 0, 0, 255))
                elif x in range(6) and y == height - 15:
                    parky.append((0, 0, 0, 255))
                elif x in range(6) and y == height - 14:
                    parky.append((0, 0, 0, 255))
                elif x in range(7) and y == height - 13:
                    parky.append((0, 0, 0, 255))
                elif x in range(9) and y == height - 12:
                    parky.append((0, 0, 0, 255))
                elif x in range(8) and y == height - 11:
                    parky.append((0, 0, 0, 255))
                elif x in range(9) and y == height - 10:
                    parky.append((0, 0, 0, 255))
                elif x in range(11) and y == height - 9:
                    parky.append((0, 0, 0, 255))
                elif x in range(12) and y == height - 8:
                    parky.append((0, 0, 0, 255))
                elif x in range(13) and y == height - 7:
                    parky.append((0, 0, 0, 255))
                elif x in range(15) and y == height - 6:
                    parky.append((0, 0, 0, 255))
                elif x in range(16) and y == height - 5:
                    parky.append((0, 0, 0, 255))
                elif x in range(18) and y == height - 4:
                    parky.append((0, 0, 0, 255))
                elif x in range(21) and y == height - 3:
                    parky.append((0, 0, 0, 255))
                elif x in range(21) and y == height - 2:
                    parky.append((0, 0, 0, 255))
                elif x in range(24) and y == height - 1:
                    parky.append((0, 0, 0, 255))
                else:
                    parky.append(pixel)
            elif x in range(width - 24, width) and y in range(height - 29, height):
                if x in range(width - 1, width) and y == height - 29:
                    parky.append((0, 0, 0, 255))
                elif x in range(width - 1, width) and y == height - 28:
                    parky.append((0, 0, 0, 255))
                elif x in range(width - 1, width) and y == height - 27:
                    parky.append((0, 0, 0, 255))
                elif x in range(width - 2, width) and y == height - 26:
                    parky.append((0, 0, 0, 255))
                elif x in range(width - 1, width) and y == height - 25:
                    parky.append((0, 0, 0, 255))
                elif x in range(width - 2, width) and y == height - 24:
                    parky.append((0, 0, 0, 255))
                elif x in range(width - 3, width) and y == height - 23:
                    parky.append((0, 0, 0, 255))
                elif x in range(width - 2, width) and y == height - 22:
                    parky.append((0, 0, 0, 255))
                elif x in range(width - 3, width) and y == height - 21:
                    parky.append((0, 0, 0, 255))
                elif x in range(width - 3, width) and y == height - 20:
                    parky.append((0, 0, 0, 255))
                elif x in range(width - 3, width) and y == height - 19:
                    parky.append((0, 0, 0, 255))
                elif x in range(width - 4, width) and y == height - 18:
                    parky.append((0, 0, 0, 255))
                elif x in range(width - 5, width) and y == height - 17:
                    parky.append((0, 0, 0, 255))
                elif x in range(width - 5, width) and y == height - 16:
                    parky.append((0, 0, 0, 255))
                elif x in range(width - 6, width) and y == height - 15:
                    parky.append((0, 0, 0, 255))
                elif x in range(width - 6, width) and y == height - 14:
                    parky.append((0, 0, 0, 255))
                elif x in range(width - 7, width) and y == height - 13:
                    parky.append((0, 0, 0, 255))
                elif x in range(width - 9, width) and y == height - 12:
                    parky.append((0, 0, 0, 255))
                elif x in range(width - 8, width) and y == height - 11:
                    parky.append((0, 0, 0, 255))
                elif x in range(width - 9, width) and y == height - 10:
                    parky.append((0, 0, 0, 255))
                elif x in range(width - 11, width) and y == height - 9:
                    parky.append((0, 0, 0, 255))
                elif x in range(width - 12, width) and y == height - 8:
                    parky.append((0, 0, 0, 255))
                elif x in range(width - 13, width) and y == height - 7:
                    parky.append((0, 0, 0, 255))
                elif x in range(width - 15, width) and y == height - 6:
                    parky.append((0, 0, 0, 255))
                elif x in range(width - 16, width) and y == height - 5:
                    parky.append((0, 0, 0, 255))
                elif x in range(width - 18, width) and y == height - 4:
                    parky.append((0, 0, 0, 255))
                elif x in range(width - 21, width) and y == height - 3:
                    parky.append((0, 0, 0, 255))
                elif x in range(width - 21, width) and y == height - 2:
                    parky.append((0, 0, 0, 255))
                elif x in range(width - 24, width) and y == height - 1:
                    parky.append((0, 0, 0, 255))
                else:
                    parky.append(pixel)
            else:
                parky.append(pixel)

    img.putdata(parky)

    ds1 = findLeftDarkSide(datas, width, height)
    ds3 = findRightDarkSide(datas, width, height)
    ds2 = findTopDarkSide(datas, width, height)
    ds4 = findBottomDarkSide(datas, width, height)

    img = img.crop((ds1, ds2, ds3, ds4))
    img = img.convert("RGBA")
    datas = img.getdata()
    width, height = img.size

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

    im3.putdata(newData)
    im3.save(filename, "WEBP")
    print("Success")


def findLeftSide(datas, wi, hi):
    lowest = 500
    for x in range(wi):
        for y in range(hi):
            pixel = datas.getpixel((x, y))
            if pixel[0] < 5 and pixel[1] < 5 and pixel[2] < 5:
                return x


def findRightSide(datas, wi, hi):
    for x in reversed(range(wi)):
        for y in range(hi):
            pixel = datas.getpixel((x, y))
            if pixel[0] < 5 and pixel[1] < 5 and pixel[2] < 5:
                return x


def findTopSide(datas, wi, hi):
    for y in range(hi):
        for x in range(wi):
            pixel = datas.getpixel((x, y))
            if pixel[0] < 5 and pixel[1] < 5 and pixel[2] < 5:
                return y


def findBottomSide(datas, wi, hi):
    for y in reversed(range(hi)):
        for x in range(wi):
            pixel = datas.getpixel((x, y))
            if pixel[0] < 5 and pixel[1] < 5 and pixel[2] < 5:
                return y


def findLeftDarkSide(datas, wi, hi):
    for x in range(wi):
        for y in range(hi):
            pixel = datas.getpixel((x, y))
            if pixel[0] >= 5 and pixel[1] >= 5 and pixel[2] >= 5:
                return x


def findRightDarkSide(datas, wi, hi):
    for x in reversed(range(wi)):
        for y in range(hi):
            pixel = datas.getpixel((x, y))
            if pixel[0] > 20 and pixel[1] > 20 and pixel[2] > 20:
                return x


def findTopDarkSide(datas, wi, hi):
    for y in range(hi):
        for x in range(wi):
            pixel = datas.getpixel((x, y))
            if pixel[0] > 20 and pixel[1] > 20 and pixel[2] > 20:
                return y


def findBottomDarkSide(datas, wi, hi):
    for y in reversed(range(hi)):
        for x in range(wi):
            pixel = datas.getpixel((x, y))
            if pixel[0] > 20 and pixel[1] > 20 and pixel[2] > 20:
                return y


# directory = "../Expansion-Pack-Genesis/"

# for filename in os.listdir(directory):
#     if ".webp" in filename:
#         convertImage(directory + filename)
convertImage("../Expansion-Pack-Generations/ariana-adventurer-of-argos.webp")
convertImage("../Expansion-Pack-Generations/auron-the-golden-rose.webp")
# convertImage("../Expansion-Pack-Generations/ergon-the-tragic-gargoyle.webp")
convertImage("../Expansion-Pack-Generations/gillian-the-witch-queen.webp")
convertImage("../Expansion-Pack-Generations/raine-mournful-commander.webp")
