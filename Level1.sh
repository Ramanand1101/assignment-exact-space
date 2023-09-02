## Level - 1 (BASH): Find the largest log file in the computer (x.log) and truncate it to 100 lines

## Search file combined query to find largest log file(First filer with .log then sort desc and get First 1)
Get-ChildItem -Recurse -Filter "*.log" | Sort-Object Length -Descending | Select-Object -First 1

## If you just find log query only
Get-ChildItem -Recurse -Filter "*.log"

## Saving into a variable for operation performed
$largestLogFile = Get-ChildItem -Recurse -Filter "*.log" | Sort-Object Length -Descending | Select-Object -First 1


# Apply operation on the "largestLogFile" variable

## First get the data into largestLogFile
Get-Content $largestLogFile.FullName

## Select the First 100
2.Get-Content $largestLogFile.FullName | Select-Object -First 100

## Set content 
3.Get-Content $largestLogFile.FullName | Select-Object -First 100 | Set-Content $largestLogFile.FullName