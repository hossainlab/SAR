# strings / characters
# 1. "text"
# 2. 'text'
"Hello World!"
'Hello Bangladesh'

# declare a variable (left-ward operator)
message <- "Hello World!"

# variable naming convention 
a <- 10 
age <- 10 
my_age <- 10 

# how to get help from RStudio? 
help(sum)
?Reserved

# reserved words 
?Reserved
if <- "today"

# printing message 
# 1. print() 
# 2. cat() 
print(message)
cat(message)

# entering input 
age <- 30 

# evaluation 
age 

# data types 
# 1. numbers/numeric (counts, measured)
# 2. texts/character ("")
# 3. logical (TRUE, FALSE)

# 1. numbers/numeric (counts, measured)
num_students <- 30 
typeof(num_students)
class(num_students)

height <- 1.5 
typeof(height)
class(height)

?double

# 2. texts/character ("")
say_hello <- "Hi, CHIRAL"
typeof(say_hello)
class(say_hello)

# 3. logical (TRUE, FALSE)
is_holiday <- TRUE 
typeof(is_holiday)
class(is_holiday)

# Operators 
2 (input) + (operator) 3 (ipnut) = 5 (output)
2 (operand) + (operator) 3 (operand) = 5 (output)

# Arithmetic Operators (+, -, *, /)
a <- 20
b <- 10 

a + b 
a - b 
a * b
a / b 
a %% 2 

# Relational Operators (>, <, >=, <=, ==, !=) ~ TRUE / FALSE
a == b 
a > b 
a < b 
a >= b 
a <= b 
a != b 

# Logical Operators (AND, OR, NOT)
# AND 
2 == 2 & 3 > 1
2 == 2 & 3 > 10

# OR 
2 == 2 | 3 > 10
2 > 4 | 3 == 1 

# NOT 
!2 == 2
