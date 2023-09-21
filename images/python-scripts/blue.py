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
    tc = True

    count = 0
    for y in range(height):
        for x in range(width):
            pixel = datas.getpixel((x, y))
            if x < 12 and y < 16:
                if x in range(12) and y == 0:
                    newData.append((255, 255, 255, 0))
                elif x in range(11) and y == 1:
                    newData.append((255, 255, 255, 0))
                elif x in range(9) and y == 2:
                    newData.append((255, 255, 255, 0))
                elif x in range(7) and y == 3:
                    newData.append((255, 255, 255, 0))
                elif x in range(6) and y == 4:
                    newData.append((255, 255, 255, 0))
                elif x in range(5) and y == 5:
                    newData.append((255, 255, 255, 0))
                elif x in range(4) and y == 6:
                    newData.append((255, 255, 255, 0))
                elif x in range(3) and y == 7:
                    newData.append((255, 255, 255, 0))
                elif x in range(3) and y == 8:
                    newData.append((255, 255, 255, 0))
                elif x in range(2) and y == 9:
                    newData.append((255, 255, 255, 0))
                elif x in range(2) and y == 10:
                    newData.append((255, 255, 255, 0))
                elif x in range(1) and y == 11:
                    newData.append((255, 255, 255, 0))
                elif x in range(1) and y == 12:
                    newData.append((255, 255, 255, 0))
                elif x in range(1) and y == 13:
                    newData.append((255, 255, 255, 0))
                elif x in range(1) and y == 14:
                    newData.append((255, 255, 255, 0))
                elif x in range(1) and y == 15:
                    newData.append((255, 255, 255, 0))
                else:
                    newData.append(pixel)
            elif x > width - 13 and y < 16:
                if x in range(width - 12, width) and y == 0:
                    newData.append((255, 255, 255, 0))
                elif x in range(width - 11, width) and y == 1:
                    newData.append((255, 255, 255, 0))
                elif x in range(width - 9, width) and y == 2:
                    newData.append((255, 255, 255, 0))
                elif x in range(width - 7, width) and y == 3:
                    newData.append((255, 255, 255, 0))
                elif x in range(width - 6, width) and y == 4:
                    newData.append((255, 255, 255, 0))
                elif x in range(width - 5, width) and y == 5:
                    newData.append((255, 255, 255, 0))
                elif x in range(width - 4, width) and y == 6:
                    newData.append((255, 255, 255, 0))
                elif x in range(width - 3, width) and y == 7:
                    newData.append((255, 255, 255, 0))
                elif x in range(width - 3, width) and y == 8:
                    newData.append((255, 255, 255, 0))
                elif x in range(width - 2, width) and y == 9:
                    newData.append((255, 255, 255, 0))
                elif x in range(width - 2, width) and y == 10:
                    newData.append((255, 255, 255, 0))
                elif x in range(width - 1, width) and y == 11:
                    newData.append((255, 255, 255, 0))
                elif x in range(width - 1, width) and y == 12:
                    newData.append((255, 255, 255, 0))
                elif x in range(width - 1, width) and y == 13:
                    newData.append((255, 255, 255, 0))
                elif x in range(width - 1, width) and y == 14:
                    newData.append((255, 255, 255, 0))
                elif x in range(width - 1, width) and y == 15:
                    newData.append((255, 255, 255, 0))
                else:
                    newData.append(pixel)
            elif x in range(16) and y in range(height - 16, height):
                if x in range(1) and y in range(height - 15, height):
                    newData.append((255, 255, 255, 0))
                elif x in range(1) and y in range(height - 14, height):
                    newData.append((255, 255, 255, 0))
                elif x in range(1) and y in range(height - 13, height):
                    newData.append((255, 255, 255, 0))
                elif x in range(1) and y in range(height - 12, height):
                    newData.append((255, 255, 255, 0))
                elif x in range(2) and y in range(height - 11, height):
                    newData.append((255, 255, 255, 0))
                elif x in range(2) and y in range(height - 10, height):
                    newData.append((255, 255, 255, 0))
                elif x in range(3) and y in range(height - 9, height):
                    newData.append((255, 255, 255, 0))
                elif x in range(3) and y in range(height - 8, height):
                    newData.append((255, 255, 255, 0))
                elif x in range(4) and y in range(height - 7, height):
                    newData.append((255, 255, 255, 0))
                elif x in range(5) and y in range(height - 6, height):
                    newData.append((255, 255, 255, 0))
                elif x in range(6) and y in range(height - 5, height):
                    newData.append((255, 255, 255, 0))
                elif x in range(7) and y in range(height - 4, height):
                    newData.append((255, 255, 255, 0))
                elif x in range(9) and y in range(height - 3, height):
                    newData.append((255, 255, 255, 0))
                elif x in range(11) and y in range(height - 2, height):
                    newData.append((255, 255, 255, 0))
                elif x in range(15) and y in range(height - 1, height):
                    newData.append((255, 255, 255, 0))
                else:
                    newData.append(pixel)
            elif x in range(width - 15, width) and y in range(height - 15, height):
                if x in range(width - 1, width) and y in range(height - 15, height):
                    newData.append((255, 255, 255, 0))
                elif x in range(width - 1, width) and y in range(height - 14, height):
                    newData.append((255, 255, 255, 0))
                elif x in range(width - 1, width) and y in range(height - 13, height):
                    newData.append((255, 255, 255, 0))
                elif x in range(width - 1, width) and y in range(height - 12, height):
                    newData.append((255, 255, 255, 0))
                elif x in range(width - 2, width) and y in range(height - 11, height):
                    newData.append((255, 255, 255, 0))
                elif x in range(width - 2, width) and y in range(height - 10, height):
                    newData.append((255, 255, 255, 0))
                elif x in range(width - 3, width) and y in range(height - 9, height):
                    newData.append((255, 255, 255, 0))
                elif x in range(width - 3, width) and y in range(height - 8, height):
                    newData.append((255, 255, 255, 0))
                elif x in range(width - 4, width) and y in range(height - 7, height):
                    newData.append((255, 255, 255, 0))
                elif x in range(width - 5, width) and y in range(height - 6, height):
                    newData.append((255, 255, 255, 0))
                elif x in range(width - 6, width) and y in range(height - 5, height):
                    newData.append((255, 255, 255, 0))
                elif x in range(width - 7, width) and y in range(height - 4, height):
                    newData.append((255, 255, 255, 0))
                elif x in range(width - 9, width) and y in range(height - 3, height):
                    newData.append((255, 255, 255, 0))
                elif x in range(width - 11, width) and y in range(height - 2, height):
                    newData.append((255, 255, 255, 0))
                elif x in range(width - 15, width) and y in range(height - 1, height):
                    newData.append((255, 255, 255, 0))
                else:
                    newData.append(pixel)
            else:
                newData.append(pixel)

    img.putdata(newData)
    filename = filename.replace("../Promos/", "")
    img.save(filename, "WEBP")
    print("Success")


# convertImage("../Promos/fizzy-the-water-spirit.webp")
# convertImage("../Promos/luna-the-dark-spirit.webp")
# convertImage("../Promos/corona-the-fire-spirit.webp")
# convertImage("../Promos/kyte-the-air-spirit.webp")
# convertImage("../Promos/metaial-the-silver-king.webp")
# convertImage("../Promos/carriermecha-kyari.webp")
# convertImage("../Promos/lloyd-traveler-of-worlds.webp")
# convertImage("../Promos/metaial-celestial-of-ruin.webp")
convertImage("../Promos/raoyenna-the-vengeful-phoenix.webp")

# convertImage("../Promos/tower-of-darkness.webp")
# convertImage("../Promos/tower-of-light.webp")
