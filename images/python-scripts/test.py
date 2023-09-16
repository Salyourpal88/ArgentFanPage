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

    # Pastes image onto a black border
    im3 = Image.new(mode="RGB", size=(width + 62, height + 62))
    Image.Image.paste(im3, img, (30, 31))
    im3 = im3.convert("RGBA")
    datas3 = im3.getdata()
    width1, height1 = im3.size

    # Finds the image with the right borders
    img1 = Image.open("../Betrayal/acid-monger.webp")
    img1 = img1.convert("RGBA")
    datas1 = img1.getdata()
    width2, height2 = img1.size

    x1, x2, y1, y2 = 29, 593, 30, 844
    count = 0

    for y in range(height1):
        for x in range(width1):
            if x in range(30) and y in range(31):
                newData.append(datas1.getpixel((x, y)))
            elif x in range(width1 - 32, width1) and y in range(31):
                newData.append(datas1.getpixel((x2, y)))
                x2 += 1
                if x2 == width2:
                    x2 = 593
            else:
                newData.append(datas3.getpixel((x, y)))

    im3.putdata(newData)
    im3.save("test.webp", "WEBP")
    print("Success")

    # This method will show image in any image viewer

    # for y in range(height + 62):
    #     for x in range(width + 62):
    #         if x in range(30) and y in range(31):
    #             newData.append(datas1.getpixel((x, y)))
    #         elif x in range(30, 30 + width) and y in range(31):
    #             newData.append((0, 0, 0, 255))
    #         elif x in range(width + 30, width + 62) and y in range(31):
    #             newData.append((0, 0, 0, 255))
    #         elif y in range(31, 31 + height) and x in range(30):
    #             newData.append((0, 0, 0, 255))
    #         elif y in range(31, 31 + height) and x in range(30, 30 + width):
    #             newData.append(datas.getpixel((x - 30, y - 31)))
    #         elif y in range(31, 31 + height) and x in range(width + 30, width + 62):
    #             newData.append((0, 0, 0, 255))
    #         elif y in range(31 + height, height + 62) and x in range(30):
    #             newData.append((0, 0, 0, 255))
    #         elif y in range(31 + height, 62 + height) and x in range(30, 30 + width):
    #             newData.append((0, 0, 0, 255))
    #         else:
    #             newData.append((0, 0, 0, 255))

    # newData = img.getdata()
    # img.putdata(newData)
    # img = Image.fromarray(np.array(newData).astype("uint8"), "RGB")
    # filename = filename.replace("../Expansion-Pack-Generations/", "")
    # img.save(filename, "WEBP")
    # print("Success")


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
