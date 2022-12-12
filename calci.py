action = True
while(action):
    print("1.Add\n2.sub\n3.mul\n4.div\n5.rem\n6Exit")
    desc = int(input("enter the Operation"))
    if(desc == 1):
        num1 = int(input("enter the first number "))
        num2 = int(input("enter the second number "))
        print("addition ", num1+num2)
        action = True

    elif(desc == 2):
        num1 = int(input("enter the first number "))
        num2 = int(input("enter the second number "))
        print("substraction ", num1-num2)
        action = True

    elif(desc == 3):
        num1 = int(input("enter the first number "))
        num2 = int(input("enter the second number "))
        print("multiplication ", num1*num2)
        action = True

    elif(desc == 4):
        num1 = int(input("enter the first number "))
        num2 = int(input("enter the second number "))
        print("division ", num1/num2)
        action = True

    elif(desc == 5):
        num1 = int(input("enter the first number "))
        num2 = int(input("enter the second number "))
        print("remainder ", num1 % num2)
        action = True
    elif (desc == 6 or desc > 6):
        print("\n....................Happy Ending.....................")
        action = False
