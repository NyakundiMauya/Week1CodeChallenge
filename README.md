# Week1CodeChallenge
<!-- Challenge 1: Student Grade Generator (Toy Problem)
Write a program that prompts the user to input student marks. The input should be between 0 and 100. Then output the correct grade as follows: A > 79, B > 60 to 79, C > 59 to 49, D > 40 to 49, E > less 40. --> -->
The GradeGenerator function uses the if...else if.. loops to check a student's marks entered when called and returns a respective grade.


<!--#Challenge 2: Write a program that takes as input the speed of a car e.g 80. If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.

For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”. -->
The SpeedDetector function basically checks through the speed and does a calculation based on the speed limits, using the if..else loops to generate the points the driver is awarded and once they are over 12 points the licence is the suspended. 

<!-- Given the basic salary and benefits of an employee, write a program that would calculate the Payee Tax, NHIF, NSSF Deductions and net salary.

NB: Use KRA, NHIF, and NSSF values provided in the link below.

https://www.aren.co.ke/payroll/taxrates.htmLinks to an external site.  

https://www.kra.go.ke/en/individual/calculate-tax/calculating-tax/payeLinks to an external site. -->
Deductions are calculated based on the rates provided depending on the salary range, these include, PAYE, NHIF and NSSF. The results(Deductions) are the subtracted from the initial amount that is taxable monthly to give the net salary once the NetSalary function is called.
