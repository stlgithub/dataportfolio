# Introduction

NOTE: Unfortunately Power BI does not allow users to upload their works online without a work or school email. As I do not have such an email, I had to upload only screenshots of my projects.
You can download the Power Bi files [by clicking here.](https://github.com/stlgithub/dataportfolio/blob/main/powerbi_files/Project2.pbix)

The dataset used in this project breaks down NCAA athletic department expenses and revenues by year.
The dataset can be found by [clicking here.](https://data.world/jbaucke/2021-w1-power-bi-wow-ncaa-financials).

Here are two projects:
First, we use Bivariate Choropleth Map to study poverty vs college completion in Michigan.
Second, we study the effects of income to life expectany using a bubble chart.

# First Project Steps Taken

### 1. Data preparation

Firstly I made an inner join Merge of the two tables of data on the FIPS column. I also renamed the 2015-2019 column to be College Completed. I only used the poverty percentage column from the merge, from which I created a Column From Example to display the data as percentages.
I then deleted the unwanted columns of data, and created bins for both College Completed as well as Poverty Percentage.

### 2. SWITCH()

I used a SWITCH() function to create 9 different combinations between the In Poverty and College Completed values, all of which were represented with different color coding, similar to conditional formatting.

### 3. Maps

I then created a page for both, a ArcGIS Map and a Filled Map.

# Second Project Steps Taken

### 1. Data preparation

First I transformed the data by unpivoting the country columns for each table. I also created a Year table to use as the time in my charts.
After some additional data cleaning, 

### 2. Bubble Chart

I created a bubble chart showing life expecanty by average income over time, with each bubble representing a region by color, and population size by size.

### 3. Custom Overlay

I then created a custom overlay on a seperate page, that shows the specific country as well as life expecanty, income and population size when you hover over the bubbles.
