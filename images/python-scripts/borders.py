from PIL import Image
import os
import numpy as np


def convertImage(filename):
    # Gets the first image, then saves the data
    img = Image.open(filename)
    img = img.convert("RGBA")
    datas = img.getdata()
    width, height = img.size

    # Finds where to cut the borders
    ls = findLeftSide(datas, width, height)
    rs = findRightSide(datas, width, height)
    ts = findTopSide(datas, width, height)
    bs = findBottomSide(datas, width, height)

    # Crops the image and restablishes borders
    img = img.crop((ls + 3, ts + 3, rs, bs))
    img = img.convert("RGBA")
    width, height = img.size

    check = img.getdata()
    datas = list(img.getdata())
    width, height = img.size
    newData = []

    tc = True
    for y in range(17):
        for x in range(17):
            pixels = check.getpixel((x, y))
            if pixels[0] >= 120 and pixels[1] >= 120 and pixels[2] >= 120 and tc:
                pixel_list = list(datas[y * img.width + x])
                # Change the index value of the pixel in the list.
                pixel_list[0] = 0
                pixel_list[1] = 0
                pixel_list[2] = 0
                pixel_list[3] = 255
                # Convert the list pixel value back to a tuple.
                datas[y * img.width + x] = tuple(pixel_list)
            else:
                tc = False
        tc = True

    for y in range(height - 17, height):
        for x in range(17):
            pixels = check.getpixel((x, y))
            if pixels[0] >= 120 and pixels[1] >= 120 and pixels[2] >= 120 and tc:
                pixel_list = list(datas[y * img.width + x])
                # Change the index value of the pixel in the list.
                pixel_list[0] = 0
                pixel_list[1] = 0
                pixel_list[2] = 0
                pixel_list[3] = 255
                # Convert the list pixel value back to a tuple.
                datas[y * img.width + x] = tuple(pixel_list)
            else:
                tc = False
        tc = True

    for y in range(height - 17, height):
        for x in reversed(range(width - 17, width)):
            pixels = check.getpixel((x, y))
            if pixels[0] >= 200 and pixels[1] >= 200 and pixels[2] >= 200 and tc:
                pixel_list = list(datas[y * img.width + x])
                # Change the index value of the pixel in the list.
                pixel_list[0] = 0
                pixel_list[1] = 0
                pixel_list[2] = 0
                pixel_list[3] = 255
                # Convert the list pixel value back to a tuple.
                datas[y * img.width + x] = tuple(pixel_list)
            else:
                tc = False
        tc = True

    for y in range(17):
        for x in reversed(range(width - 17, width)):
            pixels = check.getpixel((x, y))
            if pixels[0] >= 120 and pixels[1] >= 120 and pixels[2] >= 120 and tc:
                pixel_list = list(datas[y * img.width + x])
                # Change the index value of the pixel in the list.
                pixel_list[0] = 0
                pixel_list[1] = 0
                pixel_list[2] = 0
                pixel_list[3] = 255
                # Convert the list pixel value back to a tuple.
                datas[y * img.width + x] = tuple(pixel_list)
            else:
                tc = False
        tc = True

    img.putdata(datas)

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

    newData = []
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

convertImage("../Promos/196698.webp")
