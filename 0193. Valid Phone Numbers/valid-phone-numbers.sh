# Read from the file file.txt and output all valid phone numbers to stdout.

grep -E '(^[0-9]{3}-|^\([0-9]{3}\) )[0-9]{3}-[0-9]{4}$' file.txt


# The construction is as follows

# ^: indicates the starting of the string
# |: or 
# $: indicates the end of the string
# [0-9]\{3\} : represent 3 numbers (\{3\}) between the range 0-9 ([0-9] a digit in the range)
# \: suppresses the specialness of the character
# -E: to include multiple regex