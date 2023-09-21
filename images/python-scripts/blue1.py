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

    for y in range(height):
        for x in range(width):
            item = datas.getpixel((x, y))
            if x in range(35) and y in range(35):
                if y == 0 and x in range(35):
                    newData.append((255, 255, 255, 0))
                elif y == 1 and x in range(32):
                    newData.append((255, 255, 255, 0))
                elif y == 2 and x in range(28):
                    newData.append((255, 255, 255, 0))
                elif y == 3 and x in range(25):
                    newData.append((255, 255, 255, 0))
                elif y == 4 and x in range(23):
                    newData.append((255, 255, 255, 0))
                elif y == 5 and x in range(20):
                    newData.append((255, 255, 255, 0))
                elif y == 6 and x in range(18):
                    newData.append((255, 255, 255, 0))
                elif y == 7 and x in range(16):
                    newData.append((255, 255, 255, 0))
                elif y == 8 and x in range(15):
                    newData.append((255, 255, 255, 0))
                elif y == 9 and x in range(14):
                    newData.append((255, 255, 255, 0))
                elif y == 10 and x in range(12):
                    newData.append((255, 255, 255, 0))
                elif y == 11 and x in range(12):
                    newData.append((255, 255, 255, 0))
                elif y == 12 and x in range(10):
                    newData.append((255, 255, 255, 0))
                elif y == 13 and x in range(10):
                    newData.append((255, 255, 255, 0))
                elif y == 14 and x in range(9):
                    newData.append((255, 255, 255, 0))
                elif y == 15 and x in range(8):
                    newData.append((255, 255, 255, 0))
                elif y == 16 and x in range(8):
                    newData.append((255, 255, 255, 0))
                elif y == 17 and x in range(7):
                    newData.append((255, 255, 255, 0))
                elif y == 18 and x in range(6):
                    newData.append((255, 255, 255, 0))
                elif y == 19 and x in range(5):
                    newData.append((255, 255, 255, 0))
                elif y == 20 and x in range(5):
                    newData.append((255, 255, 255, 0))
                elif y == 21 and x in range(5):
                    newData.append((255, 255, 255, 0))
                elif y == 22 and x in range(4):
                    newData.append((255, 255, 255, 0))
                elif y == 23 and x in range(4):
                    newData.append((255, 255, 255, 0))
                elif y == 24 and x in range(3):
                    newData.append((255, 255, 255, 0))
                elif y == 25 and x in range(3):
                    newData.append((255, 255, 255, 0))
                elif y == 26 and x in range(3):
                    newData.append((255, 255, 255, 0))
                elif y == 27 and x in range(2):
                    newData.append((255, 255, 255, 0))
                elif y == 28 and x in range(2):
                    newData.append((255, 255, 255, 0))
                elif y == 29 and x in range(2):
                    newData.append((255, 255, 255, 0))
                elif y == 30 and x in range(2):
                    newData.append((255, 255, 255, 0))
                elif y == 31 and x in range(1):
                    newData.append((255, 255, 255, 0))
                elif y == 32 and x in range(1):
                    newData.append((255, 255, 255, 0))
                elif y == 33 and x in range(1):
                    newData.append((255, 255, 255, 0))
                elif y == 34 and x in range(1):
                    newData.append((255, 255, 255, 0))
                else:
                    newData.append(item)
            elif x in range(width - 35, width) and y in range(35):
                if y == 0 and x in range(width - 35, width):  # 29
                    newData.append((255, 255, 255, 0))
                elif y == 1 and x in range(width - 32, width):  # 24
                    newData.append((255, 255, 255, 0))
                elif y == 2 and x in range(width - 28, width):  # 21
                    newData.append((255, 255, 255, 0))
                elif y == 3 and x in range(width - 25, width):  # 19
                    newData.append((255, 255, 255, 0))
                elif y == 4 and x in range(width - 23, width):  # 18
                    newData.append((255, 255, 255, 0))
                elif y == 5 and x in range(width - 20, width):  # 16
                    newData.append((255, 255, 255, 0))
                elif y == 6 and x in range(width - 18, width):  # 14
                    newData.append((255, 255, 255, 0))
                elif y == 7 and x in range(width - 16, width):  # 13
                    newData.append((255, 255, 255, 0))
                elif y == 8 and x in range(width - 15, width):  # 12
                    newData.append((255, 255, 255, 0))
                elif y == 9 and x in range(width - 14, width):  # 10
                    newData.append((255, 255, 255, 0))
                elif y == 10 and x in range(width - 12, width):  # 10
                    newData.append((255, 255, 255, 0))
                elif y == 11 and x in range(width - 12, width):  # 9
                    newData.append((255, 255, 255, 0))
                elif y == 12 and x in range(width - 10, width):  # 8
                    newData.append((255, 255, 255, 0))
                elif y == 13 and x in range(width - 10, width):  # 7
                    newData.append((255, 255, 255, 0))
                elif y == 14 and x in range(width - 9, width):  # 6
                    newData.append((255, 255, 255, 0))
                elif y == 15 and x in range(width - 8, width):  # 6
                    newData.append((255, 255, 255, 0))
                elif y == 16 and x in range(width - 8, width):  # 5
                    newData.append((255, 255, 255, 0))
                elif y == 17 and x in range(width - 7, width):  # 4
                    newData.append((255, 255, 255, 0))
                elif y == 18 and x in range(width - 6, width):  # 4
                    newData.append((255, 255, 255, 0))
                elif y == 19 and x in range(width - 5, width):  # 3
                    newData.append((255, 255, 255, 0))
                elif y == 20 and x in range(width - 5, width):  # 3
                    newData.append((255, 255, 255, 0))
                elif y == 21 and x in range(width - 5, width):  # 2
                    newData.append((255, 255, 255, 0))
                elif y == 22 and x in range(width - 4, width):  # 2
                    newData.append((255, 255, 255, 0))
                elif y == 23 and x in range(width - 4, width):  # 2
                    newData.append((255, 255, 255, 0))
                elif y == 24 and x in range(width - 3, width):  # 1
                    newData.append((255, 255, 255, 0))
                elif y == 25 and x in range(width - 3, width):  # 1
                    newData.append((255, 255, 255, 0))
                elif y == 26 and x in range(width - 3, width):  # 1
                    newData.append((255, 255, 255, 0))
                elif y == 27 and x in range(width - 2, width):  # 1
                    newData.append((255, 255, 255, 0))
                elif y == 28 and x in range(width - 2, width):  # 1
                    newData.append((255, 255, 255, 0))
                elif y == 29 and x in range(width - 2, width):  # 1
                    newData.append((255, 255, 255, 0))
                elif y == 30 and x in range(width - 2, width):
                    newData.append((255, 255, 255, 0))
                elif y == 31 and x in range(width - 1, width):
                    newData.append((255, 255, 255, 0))
                elif y == 32 and x in range(width - 1, width):
                    newData.append((255, 255, 255, 0))
                elif y == 33 and x in range(width - 1, width):
                    newData.append((255, 255, 255, 0))
                elif y == 34 and x in range(width - 1, width):
                    newData.append((255, 255, 255, 0))
                else:
                    newData.append(item)
            elif x in range(33) and y in range(height - 31, height):
                if y == height - 31 and x in range(1):  # 30      1
                    newData.append((255, 255, 255, 0))
                elif y == height - 30 and x in range(1):  # 30      1
                    newData.append((255, 255, 255, 0))
                elif y == height - 29 and x in range(2):  # 30      1
                    newData.append((255, 255, 255, 0))
                elif y == height - 28 and x in range(2):  # 24    1
                    newData.append((255, 255, 255, 0))
                elif y == height - 27 and x in range(3):  # 21    1
                    newData.append((255, 255, 255, 0))
                elif y == height - 26 and x in range(3):  # 19    1
                    newData.append((255, 255, 255, 0))
                elif y == height - 25 and x in range(3):  # 18    2
                    newData.append((255, 255, 255, 0))
                elif y == height - 24 and x in range(3):  # 16    2
                    newData.append((255, 255, 255, 0))
                elif y == height - 23 and x in range(4):  # 14    3
                    newData.append((255, 255, 255, 0))
                elif y == height - 22 and x in range(4):  # 13    3
                    newData.append((255, 255, 255, 0))
                elif y == height - 21 and x in range(4):  # 12   3
                    newData.append((255, 255, 255, 0))
                elif y == height - 20 and x in range(5):  # 11   4
                    newData.append((255, 255, 255, 0))
                elif y == height - 19 and x in range(5):  # 10   4
                    newData.append((255, 255, 255, 0))
                elif y == height - 18 and x in range(6):  # 9    5
                    newData.append((255, 255, 255, 0))
                elif y == height - 17 and x in range(7):  # 8    5
                    newData.append((255, 255, 255, 0))
                elif y == height - 16 and x in range(7):  # 7   6
                    newData.append((255, 255, 255, 0))
                elif y == height - 15 and x in range(8):  # 7   7
                    newData.append((255, 255, 255, 0))
                elif y == height - 14 and x in range(8):  # 6   7
                    newData.append((255, 255, 255, 0))
                elif y == height - 13 and x in range(9):  # 5   8
                    newData.append((255, 255, 255, 0))
                elif y == height - 12 and x in range(10):  # 5   9
                    newData.append((255, 255, 255, 0))
                elif y == height - 11 and x in range(11):  # 4   9
                    newData.append((255, 255, 255, 0))
                elif y == height - 10 and x in range(12):  # 3   11
                    newData.append((255, 255, 255, 0))
                elif y == height - 9 and x in range(13):  # 3   12
                    newData.append((255, 255, 255, 0))
                elif y == height - 8 and x in range(15):  # 3  13
                    newData.append((255, 255, 255, 0))
                elif y == height - 7 and x in range(16):  # 2   14
                    newData.append((255, 255, 255, 0))
                elif y == height - 6 and x in range(18):  # 2   16
                    newData.append((255, 255, 255, 0))
                elif y == height - 5 and x in range(20):  # 1   17
                    newData.append((255, 255, 255, 0))
                elif y == height - 4 and x in range(22):  # 1   19
                    newData.append((255, 255, 255, 0))
                elif y == height - 3 and x in range(24):  # 1   21
                    newData.append((255, 255, 255, 0))
                elif y == height - 2 and x in range(28):  # 1   25
                    newData.append((255, 255, 255, 0))
                elif y == height - 1 and x in range(33):  # 1   33
                    newData.append((255, 255, 255, 0))
                else:
                    newData.append(item)
            elif x in range(width - 33, width) and y in range(height - 31, height):
                if y == height - 31 and x in range(width - 1, width):
                    newData.append((255, 255, 255, 0))
                elif y == height - 30 and x in range(width - 1, width):
                    newData.append((255, 255, 255, 0))
                elif y == height - 29 and x in range(width - 2, width):
                    newData.append((255, 255, 255, 0))
                elif y == height - 28 and x in range(width - 2, width):
                    newData.append((255, 255, 255, 0))
                elif y == height - 27 and x in range(width - 3, width):
                    newData.append((255, 255, 255, 0))
                elif y == height - 26 and x in range(width - 3, width):
                    newData.append((255, 255, 255, 0))
                elif y == height - 25 and x in range(width - 3, width):
                    newData.append((255, 255, 255, 0))
                elif y == height - 24 and x in range(width - 3, width):
                    newData.append((255, 255, 255, 0))
                elif y == height - 23 and x in range(width - 4, width):
                    newData.append((255, 255, 255, 0))
                elif y == height - 22 and x in range(width - 4, width):
                    newData.append((255, 255, 255, 0))
                elif y == height - 21 and x in range(width - 4, width):
                    newData.append((255, 255, 255, 0))
                elif y == height - 20 and x in range(width - 5, width):
                    newData.append((255, 255, 255, 0))
                elif y == height - 19 and x in range(width - 5, width):
                    newData.append((255, 255, 255, 0))
                elif y == height - 18 and x in range(width - 6, width):
                    newData.append((255, 255, 255, 0))
                elif y == height - 17 and x in range(width - 7, width):
                    newData.append((255, 255, 255, 0))
                elif y == height - 16 and x in range(width - 7, width):
                    newData.append((255, 255, 255, 0))
                elif y == height - 15 and x in range(width - 8, width):
                    newData.append((255, 255, 255, 0))
                elif y == height - 14 and x in range(width - 8, width):
                    newData.append((255, 255, 255, 0))
                elif y == height - 13 and x in range(width - 9, width):
                    newData.append((255, 255, 255, 0))
                elif y == height - 12 and x in range(width - 10, width):
                    newData.append((255, 255, 255, 0))
                elif y == height - 11 and x in range(width - 11, width):
                    newData.append((255, 255, 255, 0))
                elif y == height - 10 and x in range(width - 12, width):
                    newData.append((255, 255, 255, 0))
                elif y == height - 9 and x in range(width - 13, width):
                    newData.append((255, 255, 255, 0))
                elif y == height - 8 and x in range(width - 15, width):
                    newData.append((255, 255, 255, 0))
                elif y == height - 7 and x in range(width - 16, width):
                    newData.append((255, 255, 255, 0))
                elif y == height - 6 and x in range(width - 18, width):
                    newData.append((255, 255, 255, 0))
                elif y == height - 5 and x in range(width - 20, width):
                    newData.append((255, 255, 255, 0))
                elif y == height - 4 and x in range(width - 22, width):
                    newData.append((255, 255, 255, 0))
                elif y == height - 3 and x in range(width - 24, width):
                    newData.append((255, 255, 255, 0))
                elif y == height - 2 and x in range(width - 28, width):
                    newData.append((255, 255, 255, 0))
                elif y == height - 1 and x in range(width - 33, width):
                    newData.append((255, 255, 255, 0))
                else:
                    newData.append(item)
            else:
                newData.append(item)

    img.putdata(newData)
    img.save(filename, "WEBP")
    print("Success")


def findLeftSide(datas, wi, hi):
    for x in range(wi):
        for y in range(hi):
            pixel = datas.getpixel((x, y))
            if pixel[0] < 113 and pixel[1] < 113 and pixel[2] < 113:
                print(pixel)
                return x


def findRightSide(datas, wi, hi):
    for x in reversed(range(wi)):
        for y in range(hi):
            pixel = datas.getpixel((x, y))
            if pixel[0] < 113 and pixel[1] < 113 and pixel[2] < 113:
                return x


def findTopSide(datas, wi, hi):
    for y in range(hi):
        for x in range(wi):
            pixel = datas.getpixel((x, y))
            if pixel[0] < 113 and pixel[1] < 113 and pixel[2] < 113:
                return y


def findBottomSide(datas, wi, hi):
    for y in reversed(range(hi)):
        for x in range(wi):
            pixel = datas.getpixel((x, y))
            if pixel[0] < 113 and pixel[1] < 113 and pixel[2] < 113:
                return y


# convertImage("../Promos/fizzy-the-water-spirit.webp")
# convertImage("../Promos/luna-the-dark-spirit.webp")
# convertImage("../Promos/corona-the-fire-spirit.webp")
# convertImage("../Promos/kyte-the-air-spirit.webp")
# convertImage("../Promos/metaial-the-silver-king.webp")
# convertImage("../Promos/carriermecha-kyari.webp")
# convertImage("../Promos/lloyd-traveler-of-worlds.webp")
# convertImage("../Promos/metaial-celestial-of-ruin.webp")
convertImage("../Promos/liam-traitor-of-knights.webp")

# convertImage("../Promos/tower-of-darkness.webp")
# convertImage("../Promos/tower-of-light.webp")
