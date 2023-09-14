from PIL import Image
import os


def convertImage(filename):
    img = Image.open(filename)
    img = img.convert("RGBA")

    datas = img.getdata()

    wi, hi = 0, 0
    width, height = img.size
    newData = []
    for item in datas:
        wi += 1
        if (wi < 30 or width - 30 < wi) and (hi < 28 or hi > height - 30):
            if item[0] > 70 and item[1] > 70 and item[2] > 70:
                newData.append((255, 255, 255, 0))
            else:
                newData.append((1, 1, 1, 255))
        else:
            newData.append(item)
        if wi == width:
            wi = 0
            hi += 1
    img.putdata(newData)
    filename = filename.replace("../Revelations/", "")
    img.save(filename, "WEBP")
    print("Successful")


#
directory = "./"

convertImage("../Revelations/academy-of-argos.webp")
