import os
import glob
 
# Function to rename multiple files

sal = [
  'beckoner-of-dreams',
  'black-rose-knight',
  'ella-the-sky-huntress',
  'harbinger-of-vabriel',
  'melody-of-ages',
  'return-to-slumber',
  'serena-witch-of-sealing',
  'sigil-of-exile',
  'sigil-of-loss',
  'sigil-of-renewal',
  'slate-gargoyle',
  'songstress-of-the-cloudsea',
  'spawn-of-bahamute',
  'taphael-fallen-celestial-of-rottar',
  'the-greatest-heist',
  'thief-of-valoi',
  'tower-of-surging-flames',
  'tower-of-surging-gales',
  'tower-of-surging-radiance',
  'tower-of-surging-shadows',
  'tower-of-surging-torrents',
  'voidfire-desolation',
  'voidfire-dragon',
  'vrscika-the-scorpion-hammer',
  'warden-of-vrscika'
]
path = r"C:\Users\salva\OneDrive\Documents\AS_Database\images\Expansion-Pack-Genesis\*"
folder = r"C:\Users\salva\OneDrive\Documents\AS_Database\images\Expansion-Pack-Genesis"
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