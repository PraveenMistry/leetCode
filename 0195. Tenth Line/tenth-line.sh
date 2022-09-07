# Read from the file file.txt and output the tenth line to stdout.

tail -n+10 file.txt | head -n1

# tail command used to print last lines
# head command used to print top lines
# -n is flag (nth line)