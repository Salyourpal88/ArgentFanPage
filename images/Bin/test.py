from PIL import Image
import os
import numpy as np

img1 = Image.open("argent-shard.webp")
img1 = img1.convert("RGBA")

datas1 = img1.getdata()


def convertImage(filename):
    img = Image.open(filename)
    img = img.convert("RGBA")

    datas = img.getdata()

    wi, hi = 0, 0
    width, height = img.size
    newData = []
    diff = 0

    for item in datas:
        wi += 1
        if wi >= 4 and wi < 35 and hi < 32 and hi >= 2:
            if hi == 2 and wi in range(4, 33):
                newData.append((255, 255, 255, 0))
            elif hi == 3 and wi in range(4, 28):
                newData.append((255, 255, 255, 0))
            elif hi == 4 and wi in range(4, 25):
                newData.append((255, 255, 255, 0))
            elif hi == 5 and wi in range(4, 23):
                newData.append((255, 255, 255, 0))
            elif hi == 6 and wi in range(4, 22):
                newData.append((255, 255, 255, 0))
            elif hi == 7 and wi in range(4, 20):
                newData.append((255, 255, 255, 0))
            elif hi == 8 and wi in range(4, 18):
                newData.append((255, 255, 255, 0))
            elif hi == 9 and wi in range(4, 17):
                newData.append((255, 255, 255, 0))
            elif hi == 10 and wi in range(4, 16):
                newData.append((255, 255, 255, 0))
            elif hi == 11 and wi in range(4, 14):
                newData.append((255, 255, 255, 0))
            elif hi == 12 and wi in range(4, 14):
                newData.append((255, 255, 255, 0))
            elif hi == 13 and wi in range(4, 13):
                newData.append((255, 255, 255, 0))
            elif hi == 14 and wi in range(4, 12):
                newData.append((255, 255, 255, 0))
            elif hi == 15 and wi in range(4, 11):
                newData.append((255, 255, 255, 0))
            elif hi == 16 and wi in range(4, 10):
                newData.append((255, 255, 255, 0))
            elif hi == 17 and wi in range(4, 10):
                newData.append((255, 255, 255, 0))
            elif hi == 18 and wi in range(4, 9):
                newData.append((255, 255, 255, 0))
            elif hi == 19 and wi in range(4, 8):
                newData.append((255, 255, 255, 0))
            elif hi == 20 and wi in range(4, 8):
                newData.append((255, 255, 255, 0))
            elif hi == 21 and wi in range(4, 7):
                newData.append((255, 255, 255, 0))
            elif hi == 22 and wi in range(4, 7):
                newData.append((255, 255, 255, 0))
            elif hi == 23 and wi in range(4, 6):
                newData.append((255, 255, 255, 0))
            elif hi == 24 and wi in range(4, 6):
                newData.append((255, 255, 255, 0))
            elif hi == 25 and wi in range(4, 6):
                newData.append((255, 255, 255, 0))
            elif hi == 26 and wi in range(4, 5):
                newData.append((255, 255, 255, 0))
            elif hi == 27 and wi in range(4, 5):
                newData.append((255, 255, 255, 0))
            elif hi == 28 and wi in range(4, 5):
                newData.append((255, 255, 255, 0))
            elif hi == 29 and wi in range(4, 5):
                newData.append((255, 255, 255, 0))
            elif hi == 30 and wi in range(4, 5):
                newData.append((255, 255, 255, 0))
            elif hi == 31 and wi in range(4, 5):
                newData.append((255, 255, 255, 0))
            else:
                newData.append(item)
        elif wi > 632 and wi <= 663 and hi < 32 and hi >= 2:
            if hi == 2 and wi in range(634, 663):  # 29
                newData.append((255, 255, 255, 0))
            elif hi == 3 and wi in range(639, 663):  # 24
                newData.append((255, 255, 255, 0))
            elif hi == 4 and wi in range(642, 663):  # 21
                newData.append((255, 255, 255, 0))
            elif hi == 5 and wi in range(644, 663):  # 19
                newData.append((255, 255, 255, 0))
            elif hi == 6 and wi in range(645, 663):  # 18
                newData.append((255, 255, 255, 0))
            elif hi == 7 and wi in range(647, 663):  # 16
                newData.append((255, 255, 255, 0))
            elif hi == 8 and wi in range(649, 663):  # 14
                newData.append((255, 255, 255, 0))
            elif hi == 9 and wi in range(650, 663):  # 13
                newData.append((255, 255, 255, 0))
            elif hi == 10 and wi in range(651, 663):  # 12
                newData.append((255, 255, 255, 0))
            elif hi == 11 and wi in range(653, 663):  # 10
                newData.append((255, 255, 255, 0))
            elif hi == 12 and wi in range(653, 663):  # 10
                newData.append((255, 255, 255, 0))
            elif hi == 13 and wi in range(654, 663):  # 9
                newData.append((255, 255, 255, 0))
            elif hi == 14 and wi in range(655, 663):  # 8
                newData.append((255, 255, 255, 0))
            elif hi == 15 and wi in range(656, 663):  # 7
                newData.append((255, 255, 255, 0))
            elif hi == 16 and wi in range(657, 663):  # 6
                newData.append((255, 255, 255, 0))
            elif hi == 17 and wi in range(657, 663):  # 6
                newData.append((255, 255, 255, 0))
            elif hi == 18 and wi in range(658, 663):  # 5
                newData.append((255, 255, 255, 0))
            elif hi == 19 and wi in range(659, 663):  # 4
                newData.append((255, 255, 255, 0))
            elif hi == 20 and wi in range(659, 663):  # 4
                newData.append((255, 255, 255, 0))
            elif hi == 21 and wi in range(660, 663):  # 3
                newData.append((255, 255, 255, 0))
            elif hi == 22 and wi in range(660, 663):  # 3
                newData.append((255, 255, 255, 0))
            elif hi == 23 and wi in range(661, 663):  # 2
                newData.append((255, 255, 255, 0))
            elif hi == 24 and wi in range(661, 663):  # 2
                newData.append((255, 255, 255, 0))
            elif hi == 25 and wi in range(661, 663):  # 2
                newData.append((255, 255, 255, 0))
            elif hi == 26 and wi in range(662, 663):  # 1
                newData.append((255, 255, 255, 0))
            elif hi == 27 and wi in range(662, 663):  # 1
                newData.append((255, 255, 255, 0))
            elif hi == 28 and wi in range(662, 663):  # 1
                newData.append((255, 255, 255, 0))
            elif hi == 29 and wi in range(662, 663):  # 1
                newData.append((255, 255, 255, 0))
            elif hi == 30 and wi in range(662, 663):  # 1
                newData.append((255, 255, 255, 0))
            elif hi == 31 and wi in range(662, 663):  # 1
                newData.append((255, 255, 255, 0))
            else:
                newData.append(item)
        elif wi >= 4 and wi < 38 and hi > 844 and hi <= 873:
            if hi == 845 and wi == 4:  # 30      1
                newData.append((255, 255, 255, 0))
            elif hi == 846 and wi == 4:  # 24    1
                newData.append((255, 255, 255, 0))
            elif hi == 847 and wi == 4:  # 21    1
                newData.append((255, 255, 255, 0))
            elif hi == 848 and wi == 4:  # 19    1
                newData.append((255, 255, 255, 0))
            elif hi == 849 and wi in range(4, 6):  # 18    2
                newData.append((255, 255, 255, 0))
            elif hi == 850 and wi in range(4, 6):  # 16    2
                newData.append((255, 255, 255, 0))
            elif hi == 851 and wi in range(4, 7):  # 14    3
                newData.append((255, 255, 255, 0))
            elif hi == 852 and wi in range(4, 7):  # 13    3
                newData.append((255, 255, 255, 0))
            elif hi == 853 and wi in range(4, 7):  # 12   3
                newData.append((255, 255, 255, 0))
            elif hi == 854 and wi in range(4, 8):  # 11   4
                newData.append((255, 255, 255, 0))
            elif hi == 855 and wi in range(4, 8):  # 10   4
                newData.append((255, 255, 255, 0))
            elif hi == 856 and wi in range(4, 9):  # 9    5
                newData.append((255, 255, 255, 0))
            elif hi == 857 and wi in range(4, 9):  # 8    5
                newData.append((255, 255, 255, 0))
            elif hi == 858 and wi in range(4, 10):  # 7   6
                newData.append((255, 255, 255, 0))
            elif hi == 859 and wi in range(4, 11):  # 7   7
                newData.append((255, 255, 255, 0))
            elif hi == 860 and wi in range(4, 11):  # 6   7
                newData.append((255, 255, 255, 0))
            elif hi == 861 and wi in range(4, 12):  # 5   8
                newData.append((255, 255, 255, 0))
            elif hi == 862 and wi in range(4, 13):  # 5   9
                newData.append((255, 255, 255, 0))
            elif hi == 863 and wi in range(4, 13):  # 4   9
                newData.append((255, 255, 255, 0))
            elif hi == 864 and wi in range(4, 15):  # 3   11
                newData.append((255, 255, 255, 0))
            elif hi == 865 and wi in range(4, 16):  # 3   12
                newData.append((255, 255, 255, 0))
            elif hi == 866 and wi in range(4, 17):  # 3  13
                newData.append((255, 255, 255, 0))
            elif hi == 867 and wi in range(4, 18):  # 2   14
                newData.append((255, 255, 255, 0))
            elif hi == 868 and wi in range(4, 20):  # 2   16
                newData.append((255, 255, 255, 0))
            elif hi == 869 and wi in range(4, 21):  # 1   17
                newData.append((255, 255, 255, 0))
            elif hi == 870 and wi in range(4, 23):  # 1   19
                newData.append((255, 255, 255, 0))
            elif hi == 871 and wi in range(4, 25):  # 1   21
                newData.append((255, 255, 255, 0))
            elif hi == 872 and wi in range(4, 29):  # 1   25
                newData.append((255, 255, 255, 0))
            elif hi == 873 and wi in range(4, 37):  # 1   33
                newData.append((255, 255, 255, 0))
            else:
                newData.append(item)
        elif wi > 629 and wi <= 663 and hi > 843 and hi <= 873:
            if hi in range(844, 849) and (wi == 663 or wi == 662):
                newData.append((255, 255, 255, 0))
            elif hi == 849 and wi in range(661, 663):
                newData.append((255, 255, 255, 0))
            elif hi == 850 and wi in range(661, 663):
                newData.append((255, 255, 255, 0))
            elif hi == 851 and wi in range(660, 663):
                newData.append((255, 255, 255, 0))
            elif hi == 852 and wi in range(660, 663):
                newData.append((255, 255, 255, 0))
            elif hi == 853 and wi in range(660, 663):
                newData.append((255, 255, 255, 0))
            elif hi == 854 and wi in range(659, 663):
                newData.append((255, 255, 255, 0))
            elif hi == 855 and wi in range(659, 663):
                newData.append((255, 255, 255, 0))
            elif hi == 856 and wi in range(658, 663):
                newData.append((255, 255, 255, 0))
            elif hi == 857 and wi in range(658, 663):
                newData.append((255, 255, 255, 0))
            elif hi == 858 and wi in range(657, 663):
                newData.append((255, 255, 255, 0))
            elif hi == 859 and wi in range(656, 663):
                newData.append((255, 255, 255, 0))
            elif hi == 860 and wi in range(656, 663):
                newData.append((255, 255, 255, 0))
            elif hi == 861 and wi in range(655, 663):
                newData.append((255, 255, 255, 0))
            elif hi == 862 and wi in range(654, 663):
                newData.append((255, 255, 255, 0))
            elif hi == 863 and wi in range(654, 663):
                newData.append((255, 255, 255, 0))
            elif hi == 864 and wi in range(652, 663):
                newData.append((255, 255, 255, 0))
            elif hi == 865 and wi in range(651, 663):
                newData.append((255, 255, 255, 0))
            elif hi == 866 and wi in range(650, 663):
                newData.append((255, 255, 255, 0))
            elif hi == 867 and wi in range(649, 663):
                newData.append((255, 255, 255, 0))
            elif hi == 868 and wi in range(647, 663):
                newData.append((255, 255, 255, 0))
            elif hi == 869 and wi in range(646, 663):
                newData.append((255, 255, 255, 0))
            elif hi == 870 and wi in range(644, 663):
                newData.append((255, 255, 255, 0))
            elif hi == 871 and wi in range(642, 663):
                newData.append((255, 255, 255, 0))
            elif hi == 872 and wi in range(638, 663):
                newData.append((255, 255, 255, 0))
            elif hi == 873 and wi in range(630, 663):
                newData.append((255, 255, 255, 0))
            else:
                newData.append(item)
        else:
            newData.append(item)
        if wi == width:
            wi = 0
            hi += 1
    img.putdata(newData)
    img.save(filename, "WEBP")
    print("success")


directory = "./"

for filename in os.listdir(directory):
    if ".webp" in filename and "New" not in filename:
        convertImage(filename)
