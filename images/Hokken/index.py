from PIL import Image
import os


def convertImage(filename):
    img = Image.open(filename)
    img = img.convert("RGBA")

    datas = img.getdata()

    wi, hi = 0, 0
    width, height = img.size
    newData = []

    x = datas.getpixel((30, 0))
    print(datas.getpixel((0, 0)))

    for item in datas:
        wi += 1
        if (wi < 15 or width - 15 < wi) and (hi < 10 or hi > height - 10):
            if item[0] > 70 and item[1] > 70 and item[2] > 70:
                newData.append((255, 255, 255, 0))
            else:
                newData.append(x)
        else:
            newData.append(item)
        if wi == width:
            wi = 0
            hi += 1
    img.putdata(newData)
    img.save(filename, "WEBP")
    print("Successful")


directory = "./"

convertImage("ArcticArbiter.webp")
convertImage("AstralOfHope.webp")
convertImage("AstralOfValor.webp")
