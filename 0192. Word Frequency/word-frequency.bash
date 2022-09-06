# Read from the file words.txt and output the word frequency list to stdout.

tr ' ' '\n' < words.txt | grep -E '^[a-z]+$' | sort | uniq -c | sort -nr | sed -E 's/ +(.*) (.*)/\2 \1/'

# egrep "[a-z]+" -o words.txt | sort | uniq -c | sort -r | awk '{print $2, $1}'

# tr => (translate) from to here ' ' to '\n' (space to new line) 
# < words.txt => for input 
# grep -E => Grep by pattern (grep char / string)
# sort => Sort 
# uniq -c => count uniq char 
# sort -nr => again sort based on count
# sed -E => it can perform lots of functions on file like searching, find and replace, insertion or deletion