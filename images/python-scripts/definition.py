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
        if (wi < 25 or width - 25 < wi) and (hi < 20 or hi > height - 25):
            if item[0] > 70 and item[1] > 70 and item[2] > 70: 
                newData.append((255, 255, 255, 0))
            else:
                newData.append((4, 8, 9, 255))
        else:
            newData.append(item)
        if(wi == width):
            wi = 0
            hi += 1
    img.putdata(newData)
    img.save(filename, "WEBP")
    print("Successful")
 
#
directory ='./'

for filename in os.listdir(directory):
    if '.webp' in filename:
        convertImage(filename)