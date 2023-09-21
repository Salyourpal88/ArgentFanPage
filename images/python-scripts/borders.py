from PIL import Image
import os
import numpy as np


def convertImage(filename):
    # Gets the first image, then saves the data
    img = Image.open(filename)
    img = img.convert("RGBA")
    datas = img.getdata()
    width, height = img.size

    check = img.getdata()
    datas = list(img.getdata())
    width, height = img.size
    newData = []

    tc = True
    for y in range(17):
        for x in range(17):
            pixels = check.getpixel((x, y))
            if pixels[0] >= 100 and pixels[1] >= 100 and pixels[2] >= 100 and tc:
                pixel_list = list(datas[y * img.width + x])
                # Change the index value of the pixel in the list.
                pixel_list[0] = 255
                pixel_list[1] = 255
                pixel_list[2] = 255
                pixel_list[3] = 0
                # Convert the list pixel value back to a tuple.
                datas[y * img.width + x] = tuple(pixel_list)
            else:
                tc = False
        tc = True

    for y in range(height - 17, height):
        for x in range(17):
            pixels = check.getpixel((x, y))
            if pixels[0] >= 200 and pixels[1] >= 200 and pixels[2] >= 200 and tc:
                pixel_list = list(datas[y * img.width + x])
                # Change the index value of the pixel in the list.
                pixel_list[0] = 255
                pixel_list[1] = 255
                pixel_list[2] = 255
                pixel_list[3] = 0
                # Convert the list pixel value back to a tuple.
                datas[y * img.width + x] = tuple(pixel_list)
            else:
                tc = False
        tc = True

    for y in range(height - 17, height):
        for x in reversed(range(width - 17, width)):
            pixels = check.getpixel((x, y))
            if pixels[0] >= 100 and pixels[1] >= 100 and pixels[2] >= 100 and tc:
                pixel_list = list(datas[y * img.width + x])
                # Change the index value of the pixel in the list.
                pixel_list[0] = 255
                pixel_list[1] = 255
                pixel_list[2] = 255
                pixel_list[3] = 0
                # Convert the list pixel value back to a tuple.
                datas[y * img.width + x] = tuple(pixel_list)
            else:
                tc = False
        tc = True

    for y in range(17):
        for x in reversed(range(width - 17, width)):
            pixels = check.getpixel((x, y))
            if pixels[0] >= 100 and pixels[1] >= 100 and pixels[2] >= 100 and tc:
                pixel_list = list(datas[y * img.width + x])
                # Change the index value of the pixel in the list.
                pixel_list[0] = 255
                pixel_list[1] = 255
                pixel_list[2] = 255
                pixel_list[3] = 0
                # Convert the list pixel value back to a tuple.
                datas[y * img.width + x] = tuple(pixel_list)
            else:
                tc = False
        tc = True

    img.putdata(datas)
    filename = filename.replace("../Promos/", "")
    img.save(filename, "WEBP")
    print("Success")


def findLeftSide(datas, wi, hi):
    for x in range(wi):
        for y in range(hi):
            pixel = datas.getpixel((x, y))
            if pixel[0] < 100 and pixel[1] < 100 and pixel[2] < 100:
                return x


def findRightSide(datas, wi, hi):
    for x in reversed(range(wi)):
        for y in range(hi):
            pixel = datas.getpixel((x, y))
            if pixel[0] < 100 and pixel[1] < 100 and pixel[2] < 100:
                return x


def findTopSide(datas, wi, hi):
    for y in range(hi):
        for x in range(wi):
            pixel = datas.getpixel((x, y))
            if pixel[0] < 100 and pixel[1] < 100 and pixel[2] < 100:
                return y


def findBottomSide(datas, wi, hi):
    for y in reversed(range(hi)):
        for x in range(wi):
            pixel = datas.getpixel((x, y))
            if pixel[0] < 100 and pixel[1] < 100 and pixel[2] < 100:
                return y


# directory = "../Promos/"
# for filename in os.listdir(directory):
#     if ".webp" in filename:
#         convertImage(directory + filename)

convertImage("../Promos/ruka-pugilist-of-the-holy-flame.webp")
