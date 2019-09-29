import sys
from pathlib import Path
# print("\n".join(sys.argv))

file_path=Path('../test.txt')
if(file_path.exists()):
    file_path.unlink()

with open('../test.txt','w') as w:
    w.write("\n".join(sys.argv))
