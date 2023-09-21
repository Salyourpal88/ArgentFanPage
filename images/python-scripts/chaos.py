from PIL import Image
import os
import numpy as np


def convertImage(filename):
    # Gets the first image, then saves the data
    img = Image.open(filename)
    img = img.convert("RGBA")
    datas = img.getdata()
    width, height = img.size

    img = img.crop((1, 3, width - 1, height - 2))
    img = img.convert("RGBA")
    datas = img.getdata()
    width, height = img.size
    newData = []

    for y in range(height):
        for x in range(width):
            pixel = datas.getpixel((x, y))
            if x in range(9) and y in range(10):
                if x in range(9) and y == 0:
                    newData.append((0, 0, 0, 255))
                elif x in range(6) and y == 1:
                    newData.append((0, 0, 0, 255))
                elif x in range(5) and y == 2:
                    newData.append((0, 0, 0, 255))
                elif x in range(4) and y == 3:
                    newData.append((0, 0, 0, 255))
                elif x in range(3) and y == 4:
                    newData.append((0, 0, 0, 255))
                elif x in range(2) and y == 5:
                    newData.append((0, 0, 0, 255))
                elif x in range(2) and y == 6:
                    newData.append((0, 0, 0, 255))
                elif x in range(1) and y == 7:
                    newData.append((0, 0, 0, 255))
                elif x in range(1) and y == 8:
                    newData.append((0, 0, 0, 255))
                else:
                    newData.append(pixel)
            elif x in range(width - 9, width) and y in range(10):
                if x in range(width - 9, width) and y == 0:
                    newData.append((0, 0, 0, 255))
                elif x in range(width - 6, width) and y == 1:
                    newData.append((0, 0, 0, 255))
                elif x in range(width - 5, width) and y == 2:
                    newData.append((0, 0, 0, 255))
                elif x in range(width - 4, width) and y == 3:
                    newData.append((0, 0, 0, 255))
                elif x in range(width - 3, width) and y == 4:
                    newData.append((0, 0, 0, 255))
                elif x in range(width - 2, width) and y == 5:
                    newData.append((0, 0, 0, 255))
                elif x in range(width - 2, width) and y == 6:
                    newData.append((0, 0, 0, 255))
                elif x in range(width - 1, width) and y == 7:
                    newData.append((0, 0, 0, 255))
                elif x in range(width - 1, width) and y == 8:
                    newData.append((0, 0, 0, 255))
                else:
                    newData.append(pixel)
            elif x in range(4) and y in range(height - 6, height):
                if x in range(4) and y == height - 1:
                    newData.append((0, 0, 0, 255))
                elif x in range(3) and y == height - 2:
                    newData.append((0, 0, 0, 255))
                elif x in range(2) and y == height - 3:
                    newData.append((0, 0, 0, 255))
                elif x in range(2) and y == height - 4:
                    newData.append((0, 0, 0, 255))
                elif x in range(1) and y == height - 5:
                    newData.append((0, 0, 0, 255))
                elif x in range(1) and y == height - 6:
                    newData.append((0, 0, 0, 255))
                else:
                    newData.append(pixel)
            elif x in range(width - 4, width) and y in range(height - 6, height):
                if x in range(width - 4, width) and y == height - 1:
                    newData.append((0, 0, 0, 255))
                elif x in range(width - 3, width) and y == height - 2:
                    newData.append((0, 0, 0, 255))
                elif x in range(width - 2, width) and y == height - 3:
                    newData.append((0, 0, 0, 255))
                elif x in range(width - 2, width) and y == height - 4:
                    newData.append((0, 0, 0, 255))
                elif x in range(width - 1, width) and y == height - 5:
                    newData.append((0, 0, 0, 255))
                elif x in range(width - 1, width) and y == height - 6:
                    newData.append((0, 0, 0, 255))
                else:
                    newData.append(pixel)
            else:
                newData.append(pixel)

    img.putdata(newData)

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

    # for y in range(height):
    #     for x in range(width):
    #         pixel = datas.getpixel((x, y))
    #         if x == 8 or x == width - 9 or y == 6 or y == height - 10:
    #             newData.append((255, 255, 255, 255))
    #         else:
    #             newData.append(pixel)

    # for y in range(height):
    #     for x in range(width):
    #         pixel = datas.getpixel((x, y))
    #         if x <= 8 or x >= width - 9 or y <= 6 or y >= height - 10:
    #             if pixel not in sal:
    #                 sal.append(pixel)

    # for y in range(height):
    #     for x in range(width):
    #         pixel = datas.getpixel((x, y))
    #         if (pixel in sal and tc) or x in range(width - 7, width):
    #             if pixel[0] >= 139 and pixel[1] >= 139 and pixel[2] >= 139:
    #                 newData.append((255, 255, 255, 0))
    #             else:
    #                 newData.append((0, 0, 0, 255))
    #         else:
    #             tc = False
    #             newData.append(pixel)
    #     tc = True

    # img.putdata(newData)
    # filename = filename.replace("../Expansion-Pack-Generations/", "")
    # img.save(filename, "WEBP")
    # print("Success")


def findLeftSide(datas, wi, hi):
    for x in range(wi):
        for y in range(hi):
            pixel = datas.getpixel((x, y))
            if pixel[0] < 230 and pixel[1] < 230 and pixel[2] < 230:
                return x


def findRightSide(datas, wi, hi):
    for x in reversed(range(wi)):
        for y in range(hi):
            pixel = datas.getpixel((x, y))
            if pixel[0] < 230 and pixel[1] < 230 and pixel[2] < 230:
                return x


def findTopSide(datas, wi, hi):
    for y in range(hi):
        for x in range(wi):
            pixel = datas.getpixel((x, y))
            if pixel[0] < 230 and pixel[1] < 230 and pixel[2] < 230:
                return y


def findBottomSide(datas, wi, hi):
    for y in reversed(range(hi)):
        for x in range(wi):
            pixel = datas.getpixel((x, y))
            if pixel[0] < 230 and pixel[1] < 230 and pixel[2] < 230:
                return y


# directory = "../Expansion-Pack-Genesis/"

# for filename in os.listdir(directory):
#     if ".webp" in filename:
#         convertImage(directory + filename)

# convertImage("../Expansion-Pack-Generations/corona-the-spirit-ruby.webp")
# convertImage("../Expansion-Pack-Generations/198206.webp")
# convertImage("../Expansion-Pack-Generations/198207.webp")
# convertImage("../Expansion-Pack-Generations/198208.webp")
# convertImage("../Expansion-Pack-Generations/198209.webp")
# convertImage("../Expansion-Pack-Generations/198213.webp")

convertImage("../Promos/silvermist-phoenix.webp")
