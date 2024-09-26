# Introduction

###### <em>NOTE: Unfortunately Power BI does not allow users to upload their works online without a work or school email. As I do not have such an email, I had to upload only screenshots of my projects.
You can download the Power Bi files [by clicking here.](https://github.com/stlgithub/dataportfolio/blob/main/powerbi_files/Project2.pbix)</em>

The dataset used in this project breaks down NCAA athletic department expenses and revenues by year.
The dataset can be found by [clicking here.](https://data.world/jbaucke/2021-w1-power-bi-wow-ncaa-financials).

This project breaks down the revenues, profits, and expenses of the NCAA, and adds accessibilty features to the data visualisations.

# Steps Taken

### 1. Data preparation

First I cleaned the data to remove null values and unwanted data.
I then created a new field that calculates total profits, 

### 2. Conference Page

after which I created a KPI dashboard including a linechart and a bar chart for the revenues, expenses, and profits on each conference.
I added a slicer for picking a desired year, and made sure it only altered the KPI and barchard, not the line chart.

![Completed image of the Conference Page](https://github.com/stlgithub/dataportfolio/blob/main/PowerBI/PowerBI_1/Project1.png)

### 3. School Page

I created a second page to showcase the same information, but this time for Schools rather than the conferences.

![Completed image of the Conference Page](https://github.com/stlgithub/dataportfolio/blob/main/PowerBI/PowerBI_1/Project1_2.png)

### 4. Accessibility

After all of this, I added Accessibility features to the analysis:
Firstly I made sure the colors of the page have good enough of a contrast, using contrastchecker.com.
I added alt text to every element of the dashboard, to help with screenreaders. I also made sure each element has a descriptive title, even if its hidden in the visualisation.
Finally, I adjusted the tab order of the elements used in the dasboard.
