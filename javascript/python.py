import os
import glob
 
# Function to rename multiple files

sal = [
  'ariana-young-prodigy',
  'azure-guardian',
  'azure-seer',
  'booster-dragon',
  'corona-the-fire-spirit',
  'corum-assassin',
  'corum-blademaster',
  'corum-craftsman',
  'corum-lancer',
  'corum-phalanx',
  'corum-rampart',
  'corum-squire',
  'cryptic-deflection',
  'deranged-dragon',
  'dragonholt-the-dracoborg',
  'dragonic-blast',
  'dragonic-destroyer',
  'dragonic-summoner',
  'dusk-strike',
  'eitan-exiled-prince',
  'enraged-dragon',
  'exploding-dragon',
  'failed-golem-1',
  'failed-golem-2',
  'fizzy-the-water-spirit',
  'force-blast',
  'golem-of-allurement',
  'golem-of-arrogance',
  'golem-of-avarice',
  'golem-of-devourment',
  'golem-of-indolence',
  'golem-of-jealousy',
  'golem-of-vengeance',
  'great-stormfish',
  'greathawk-of-cloudsea',
  'hellish-guardhound',
  'hoenna-immoral-conjurer',
  'holy-slash',
  'hurricane-shot',
  'iakuma-mistmage',
  'iakuma-silencer',
  'iakuma-stormknight',
  'imbued-by-fire',
  'jemial-cryptic-caster',
  'juvenile-dragon',
  'kala-trusty-companion',
  'kyte-the-air-spirit',
  'liam-traitor-of-knights',
  'locke-knight-of-fury',
  'lucient-guardian-of-vigilance',
  'luna-the-dark-spirit',
  'mechdragons-flame',
  'mei-yus-assistant',
  'nobe-the-shadow-guardian',
  'phantasmal-guards',
  'rao-dragon-tamer',
  'royal-reflection',
  'shard-hoarder',
  'shards-of-winter',
  'sky-recruit',
  'skyship-engineer',
  'skytree-aviator',
  'skytree-battle-cruiser',
  'skytree-blockadeship',
  'skytree-dragon',
  'skytree-sandship',
  'skytree-warship',
  'sola-the-light-spirit',
  'soulfire-dragon',
  'standard-shardarmor',
  'standard-shardshield',
  'standard-shardsword',
  'stormcaster-of-azure-tower',
  'stormfish',
  'strike-of-the-golems',
  'tornado-shot',
  'tower-of-air',
  'tower-of-darkness',
  'tower-of-fire',
  'tower-of-light',
  'tower-of-water',
  'uncertain-experiment',
  'vehemont-crimson-guardian',
  'vengeful-dragon',
  'vi-giver-of-light',
  'argent-shard'
]
path = r"C:\Users\salva\OneDrive\Documents\AS_Database\images\Intro-Deck-2019\*"
folder = r"C:\Users\salva\OneDrive\Documents\AS_Database\images\Intro-Deck-2019"
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