# Read from the file file.txt and print its transposed content to stdout.
seq "$(awk '{print NF}' file.txt | head -n 1)" |
	xargs -r -I {} sh -c "awk '{print \${}}' file.txt | xargs -r"

