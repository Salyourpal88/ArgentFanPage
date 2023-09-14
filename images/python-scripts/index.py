from PIL import Image
import os


def convertImage(filename):
    img = Image.open(filename)
    img = img.convert("RGBA")
    datas = img.getdata()
    width, height = img.size
    newData = []
    ls = findLeftSide(datas, width, height)
    rs = findRightSide(datas, width, height)
    ts = findTopSide(datas, width, height)
    bs = findBottomSide(datas, width, height)

    for y in range(height):
        for x in range(width):
            pixel = datas.getpixel((x, y))
            if (x < ls or x > rs or ts > y or bs < y) and (
                pixel[0] >= 31 and pixel[1] >= 31 and pixel[2] >= 31
            ):
                newData.append((255, 255, 255, 0))
            else:
                newData.append(pixel)
    img.putdata(newData)
    img.save(filename, "WEBP")
    print("Successful")


def findLeftSide(datas, wi, hi):
    width, height = wi, hi

    for x in range(width):
        exc = 0
        for y in range(height):
            pixel = datas.getpixel((x, y))
            if pixel[0] < 70 and pixel[1] < 70 and pixel[2] < 70:
                exc += 1
                if float(exc) / float(height - 1) * 100 > 98:
                    ls = x
                    return ls
            else:
                exc = 0
                continue


def findRightSide(datas, wi, hi):
    width, height = wi, hi

    for x in reversed(range(width)):
        exc = 0
        for y in range(height):
            pixel = datas.getpixel((x, y))
            if pixel[0] < 70 and pixel[1] < 70 and pixel[2] < 70:
                exc += 1
                if float(exc) / float(height - 1) * 100 > 98:
                    ls = x
                    return ls
            else:
                exc = 0
                continue


def findTopSide(datas, wi, hi):
    width, height = wi, hi

    for y in range(height):
        exc = 0
        for x in range(width):
            pixel = datas.getpixel((x, y))
            if pixel[0] < 70 and pixel[1] < 70 and pixel[2] < 70:
                exc += 1
                if float(exc) / float(width - 1) * 100 > 98:
                    ls = y
                    return ls
            else:
                exc = 0
                continue


def findBottomSide(datas, wi, hi):
    width, height = wi, hi

    for y in reversed(range(height)):
        exc = 0
        for x in range(width):
            pixel = datas.getpixel((x, y))
            if pixel[0] < 70 and pixel[1] < 70 and pixel[2] < 70:
                exc += 1
                if float(exc) / float(width - 1) * 100 > 98:
                    ls = y
                    return ls
            else:
                exc = 0
                continue


directory = "../Revelations/"
for filename in os.listdir(directory):
    if ".webp" in filename:
        convertImage(directory + filename)
