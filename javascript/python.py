import os
import glob
 
# Function to rename multiple files

sal = [
  'arianas-resolve',
  'ashborn-conjurer',
  'ashborn-shaman',
  'battle-angel-of-dominion',
  'commander-of-light',
  'dance-of-blades',
  'deathwhisperer',
  'delayed-poison',
  'expanding-elemental',
  'grove-elemental',
  'isa-the-cloudmender',
  'jacobi-the-vampire-king',
  'lloyd-cosmic-enigma',
  'longinus-mythical-shardlance',
  'maiden-of-leviathan',
  'rao-wyvern-rider',
  'ready-for-war',
  'shadow-liger',
  'shard-spider',
  'skytree-command-center',
  'tempest-punch',
  'tidal-rush',
  'true-kings-greatsword',
  'vi-matron-of-miracles',
  'yurei-dire-wolf-of-the-garden'
]
path = r"C:\Users\salva\OneDrive\Documents\AS_Database\images\Expansion-Pack-Conviction\*"
folder = r"C:\Users\salva\OneDrive\Documents\AS_Database\images\Expansion-Pack-Conviction"
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