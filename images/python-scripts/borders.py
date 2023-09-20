from PIL import Image
import os
import numpy as np


def convertImage(filename):
    # Gets the first image, then saves the data
    img = Image.open(filename)
    img = img.convert("RGBA")
    datas = img.getdata()
    width, height = img.size
    sal = []

    img1 = Image.open("../Promos/wyvern-crystal.webp")
    img1 = img1.convert("RGBA")
    datas1 = img1.getdata()
    width1, height1 = img.size
    sal1 = []

    for y in range(height):
        for x in range(width):
            pixel = datas.getpixel((x, y))
            pixel1 = datas1.getpixel((x, y))
            if y <= 30 or y >= height - 27 or x <= 30 or x >= width - 27:
                sal.append(pixel1)
            else:
                sal.append(pixel)

    # Finds where to cut the borders
    # ls = findLeftSide(datas, width, height)
    # rs = findRightSide(datas, width, height)
    # ts = findTopSide(datas, width, height)
    # bs = findBottomSide(datas, width, height)

    # Crops the image and restablishes borders
    # img = img.crop((ls, ts, rs, bs))
    # img = img.convert("RGBA")
    # width, height = img.size

    # check = img.getdata()
    # datas = list(img.getdata())
    # width, height = img.size
    # newData = []

    # tc = True
    # for y in range(height):
    #     for x in range(width):
    #         pixels = check.getpixel((x, y))
    #         if pixels[0] >= 21 and pixels[1] >= 21 and pixels[2] >= 21 and tc:
    #             pixel_list = list(datas[y * img.width + x])
    #             # Change the index value of the pixel in the list.
    #             pixel_list[0] = 255
    #             pixel_list[1] = 255
    #             pixel_list[2] = 255
    #             pixel_list[3] = 0
    #             # Convert the list pixel value back to a tuple.
    #             datas[y * img.width + x] = tuple(pixel_list)
    #         else:
    #             tc = False
    #     tc = True

    # for y in range(height):
    #     for x in reversed(range(width)):
    #         pixels = check.getpixel((x, y))
    #         if pixels[0] >= 21 and pixels[1] >= 21 and pixels[2] >= 21 and tc:
    #             pixel_list = list(datas[y * img.width + x])
    #             # Change the index value of the pixel in the list.
    #             pixel_list[0] = 255
    #             pixel_list[1] = 255
    #             pixel_list[2] = 255
    #             pixel_list[3] = 0
    #             # Convert the list pixel value back to a tuple.
    #             datas[y * img.width + x] = tuple(pixel_list)
    #         else:
    #             tc = False
    #     tc = True

    img.putdata(sal)
    img.save(filename, "WEBP")
    print("Success")


def findLeftSide(datas, wi, hi):
    for x in range(wi):
        for y in range(hi):
            pixel = datas.getpixel((x, y))
            if pixel[0] < 21 and pixel[1] < 21 and pixel[2] < 21:
                return x


def findRightSide(datas, wi, hi):
    for x in reversed(range(wi)):
        for y in range(hi):
            pixel = datas.getpixel((x, y))
            if pixel[0] < 21 and pixel[1] < 21 and pixel[2] < 21:
                return x


def findTopSide(datas, wi, hi):
    for y in range(hi):
        for x in range(wi):
            pixel = datas.getpixel((x, y))
            if pixel[0] < 21 and pixel[1] < 21 and pixel[2] < 21:
                return y


def findBottomSide(datas, wi, hi):
    for y in reversed(range(hi)):
        for x in range(wi):
            pixel = datas.getpixel((x, y))
            if pixel[0] < 21 and pixel[1] < 21 and pixel[2] < 21:
                return y


# directory = "../Promos/"
# for filename in os.listdir(directory):
#     if ".webp" in filename:
#         convertImage(directory + filename)

convertImage("../Promos/omega-magic-yami.webp")
convertImage("../Promos/omega-magic-kaze.webp")
convertImage("../Promos/omega-magic-mizu.webp")
convertImage("../Promos/omega-magic-kasai.webp")
convertImage("../Promos/omega-magic-hikari.webp")
