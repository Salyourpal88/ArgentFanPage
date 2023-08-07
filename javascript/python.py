import os
import glob
 
# Function to rename multiple files

sal = [
  'amateur-witch',
  'arbor-carbuncle',
  'ariana-adventurer-of-argos',
  'auron-the-golden-rose',
  'burning-blitzer',
  'catastrophe-demon',
  'corona-the-spirit-ruby',
  'crystal-dimensional-dragon',
  'ergon-the-tragic-gargoyle',
  'failed-golem-3',
  'fizzy-the-spirit-sapphire',
  'gillian-the-witch-queen',
  'greathawk-of-cloudsea',
  'igneous-dragon',
  'kite-kyte-the-spirit-emerald',
  'lucient-guardian-of-vigilance',
  'metaial-the-sealed-celestial',
  'nobe-the-shadow-guardian',
  'raging-shardbeast',
  'rainbow-knight',
  'raine-mournful-commander',
  'saint-of-sacred-regalia',
  'skytree-initiate',
  'stormcaster-of-azure-tower',
  'vehemont-crimson-guardian'
]
path = r"C:\Users\salva\OneDrive\Documents\AS_Database\images\Expansion-Pack-Generations\*"
folder = r"C:\Users\salva\OneDrive\Documents\AS_Database\images\Expansion-Pack-Generations"
filelist = glob.glob(path)
for infile, i in enumerate(sorted(filelist)): 
  #do some fancy stuff
  dst = f"{sal[infile]}.webp"      
  dst =f"{folder}/{dst}"
  os.rename(i, dst)
  #print (infile)
    
    
    #folder = r"C:\Users\salva\OneDrive\Documents\AS_Database\images\Intro-Deck-2019"
    #for filename in (os.listdir(folder)):
        #dst = f"{sal[count]}.webp"
        #print(dst)
        #src =f"{folder}\{filename}"  # foldername/filename, if .py file is outside folder
        #print(src)
        #dst =f"{folder}/{dst}"
         
        # rename() function will
        # rename all the files
        #os.rename(src, dst)