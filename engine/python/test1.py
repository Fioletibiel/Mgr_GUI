file_path=Path('../test.txt')
if(file_path.exists()):
    file_path.unlink()

with open('../test.txt','w') as w:
    w.write(options)
