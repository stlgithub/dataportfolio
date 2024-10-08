### Preview
<p float="left">
  <img src="https://github.com/stlgithub/dataportfolio/blob/main/PowerBI/PowerBI_2/Project2.png" width="333" />
  <img src="https://github.com/stlgithub/dataportfolio/blob/main/PowerBI/PowerBI_2/Project2_2.png" width="333" /> 
  <img src="https://github.com/stlgithub/dataportfolio/blob/main/PowerBI/PowerBI_2/Project2_3.png" width="333" />
</p>

# Introduction

###### <em>NOTE: Unfortunately Power BI does not allow users to upload their works online without a work or school email. As I do not have such an email, I cant link to an online version of the dashboard.
###### You can download the Power Bi files [by clicking here.](https://github.com/stlgithub/dataportfolio/blob/main/PowerBI/PowerBI_2/Project2.pbix)</em>

The dataset used in this project breaks down NCAA athletic department expenses and revenues by year.
The dataset can be found by [clicking here.](https://data.world/jbaucke/2021-w1-power-bi-wow-ncaa-financials).

This project breaks down the revenues, profits, and expenses of the NCAA in a vertical, smart device friendly visualisation..

# Steps Taken

### 1. Data preparation

For this dashboard I used data from a previous dashboard. You can find more about the data preparation I did for that project here.

For the purposes of a SWITCH statement, I created a new Table, which had Measures column, with 3 rows of information: Total Revenues, Total Expenses, and Total Profits.
Similarly, I created Order column, with rows with the data 1, 2, and 3.

### 2. Vertical settings

I formatted the report canvas by choosing the Letter layout from the Page size > Type drop down menu.

I also adjusted the background color to make it contrast better with the elements I would later add.

### 3. Measures

Firstly, I created a SWITCH() function that allows the user to change between what infomartion is being diplayed (Revenues, Expenses, or Profits) simply by clicking a button.
```
Selected Measure = 
SWITCH(
    VALUES('Measure'[Measure]),
    "Total Revenues", SUM(finances_fact[Total Revenues]),
    "Total Expenses", SUM(finances_fact[Total Expenses]),
    "Total Profits", SUM(finances_fact[Total Profits]),
    BLANK()  // Default case if nothing is selected
)
```
Additionally I created measures to calculate and display the current years, previous years, and year over year data regarding Revenues, Expeses, and Profits.
```
CurrentYear = 
var max_year = CALCULATE(MAX(finances_fact[Year]))
RETURN
CALCULATE(
    [Selected Measure],
    finances_fact[Year]=max_year)
```
```
Previous Year = 
var previous_year = CALCULATE(MAX(finances_fact[Year]))-1
RETURN
CALCULATE(
    [Selected Measure],
    finances_fact[Year]=previous_year)
```
```
Year Over Year = DIVIDE([CurrentYear]-[Previous Year],[Previous Year])
```

### 4. Dashboard

I added a title and created a single select slicer that allows the user to change the information displayed, by using the SWITCH() statement.

For the background of the dashboard I used a blank square, and set it to change color based on the SWITCH statement, and the previously created table Measures table.

Next I added the cards, displaying the Current Year, Previous Year, and Year over Year information.
I also added a barchart and linechart, which I made sure also used the right colors based on the SWITCH statement.

<p float="left">
  <img src="https://github.com/stlgithub/dataportfolio/blob/main/PowerBI/PowerBI_2/Project2.png" width="500" />
  <img src="https://github.com/stlgithub/dataportfolio/blob/main/PowerBI/PowerBI_2/Project2_2.png" width="500" /> 
  <img src="https://github.com/stlgithub/dataportfolio/blob/main/PowerBI/PowerBI_2/Project2_3.png" width="500" />
</p>
