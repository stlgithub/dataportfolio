# Introduction

###### <em>NOTE: Unfortunately Power BI does not allow users to upload their works online without a work or school email. As I do not have such an email, I cant link to an online version of the dashboard.
###### You can download the Power Bi files [by clicking here.](https://github.com/stlgithub/dataportfolio/blob/main/powerbi_files/Project2.pbix)</em>

The dataset used in this project breaks down NCAA athletic department expenses and revenues by year.
The dataset can be found by [clicking here.](https://data.world/jbaucke/2021-w1-power-bi-wow-ncaa-financials).

Here are two projects:
First, we use Bivariate Choropleth Map to study poverty vs college completion in Michigan.

Second, we study the effects of income to life expectany using a bubble chart.

# First Project Steps Taken

### 1. Data preparation

Firstly I made an inner join Merge of the two tables of data on the FIPS column. I also renamed the 2015-2019 column to be College Completed. I only used the poverty percentage column from the merge, from which I created a Column From Example to display the data as percentages.

I then deleted the unwanted columns of data, and created bins for both College Completed as well as Poverty Percentage.

### 2. Groups & SWITCH()

I used Power BI's Groups feature to bin my data, making sure I use size of 3 for my bins, since I want to order my data from Low to Medium to High.

With a SWITCH() statement I created 9 different combinations between the In Poverty and College Completed values, all of which were represented with different color coding, similar to conditional formatting.

```
Colors = 
VAR College = SELECTEDVALUE('Percent College Completion'[College Completion (bins)])
VAR Poverty = SELECTEDVALUE('Percent College Completion'[In Poverty (bins)])
RETURN
SWITCH(
    TRUE(),
    Poverty < 0.05 && College < 0.12, "#e8e8e8",
    Poverty < 0.05 && College < 0.27, "#b0d5df",
    Poverty < 0.05 && College < 0.41, "#64acbe",

    Poverty < 0.12 && College < 0.12, "#e4acac",
    Poverty < 0.12 && College < 0.27, "#ad9ea5",
    Poverty < 0.12 && College < 0.41, "#62f8c",

    Poverty < 0.18 && College < 0.12, "#c85a5a",
    Poverty < 0.18 && College < 0.27, "#985356",
    Poverty < 0.18 && College < 0.41, "#574249"
)
```

### 3. Maps

I then created a page for both, a ArcGIS Map and a Filled Map, filling in the color using my SWITCH statement

![Completed image of the Conference Page](https://github.com/stlgithub/dataportfolio/blob/main/PowerBI/PowerBI_5/Project5.png)
![Completed image of the Conference Page](https://github.com/stlgithub/dataportfolio/blob/main/PowerBI/PowerBI_5/Project5_2.png)

# Second Project Steps Taken

### 1. Data preparation

First I transformed the data by unpivoting the country columns for each table.

I also created a Year table to use as the time in my charts.

### 2. Bubble Chart

I created a bubble chart showing life expecanty by average income over time, with each bubble representing a region by color, and population size by size.

Using a SWITCH() statement, I made it so that the visualisation showcases the data in millions.

```
Population (mil) = DIVIDE(SUM(Population[population]), 1000000, "< 1 mil")
```

![Completed image of the Conference Page](https://github.com/stlgithub/dataportfolio/blob/main/PowerBI/PowerBI_5/Project6.png)

### 3. Custom Tooltip

Next, I created custom Tooltips for each bubble, so that the information is formatted how I want it to be.

I started by creating a new page called Tooltip and I formatted it to be a Tooltip page. I also adjusted the size of the page.

I created a Card visualisation, that displays the name, income, population in millions, and life expectancy of a selected country.

Lastly, I turned on Tooltip in my Bubble Plot page, and made sure to select the Tooltip page as the source of the tooltips.
