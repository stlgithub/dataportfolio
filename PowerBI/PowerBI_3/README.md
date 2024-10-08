### Preview
<p float="left">
  <img src="https://github.com/stlgithub/dataportfolio/blob/main/PowerBI/PowerBI_3/Project3.png" width="500" />
  <img src="https://github.com/stlgithub/dataportfolio/blob/main/PowerBI/PowerBI_3/Project3_2.png" width="500" /> 
</p>

# Introduction

###### <em>NOTE: Unfortunately Power BI does not allow users to upload their works online without a work or school email. As I do not have such an email, I cant link to an online version of the dashboard.
###### You can download the Power Bi files [by clicking here.](https://github.com/stlgithub/dataportfolio/blob/main/PowerBI/PowerBI_3/Project3.pbix)</em>

This project uses the maximum ice coverage data from NOAA’s Great Lakes Environmental Research Laboratory.
The dataset can be found by [clicking here.](https://data.world/dataveld/wow2021week07)


# Steps Taken

### 1. Data preparation

For data preparation I simply used Power Query to unpivot all of the individual lake columns in the dataset into rows.

Secondly, I made sure the Year column was in the format of Date as opposed to Whole Number.

### 2. Matrix and Conditional Formatting

I created a matrix to visualise the maximum ice coverage for each lake by year.
Using conditional formatting I made it so that the color of the matrix would change between five different shades of blue, based on the ice coverage. The values for the different shades were 0-24.99, 25-49.99, 50-74.99, 75-99.99, and 100.
                
### 3. Dashboard elements

I created the rest of the visualisations seen on the dasboard; the column chart, the linechart with a trendline, and the slicer to select the desired range of years.

![Completed image of the Conference Page](https://github.com/stlgithub/dataportfolio/blob/main/PowerBI/PowerBI_3/Project3.png)

### 4. Forecasting, Anomaly Detection, and Table

I then created the second page, in which I added another line chart for average coverage by year.

In the Analytics > Forecast tab, I turned forecasting on and made sure the forecasting was up until the year 2030 on the chart.

In a second linechart I displayed the anomalies in average coverage by year.

In Analytics > Find Anomalies I turned on find anomalies, and set the sensitivity for anomaly detection to 75%.

Finally, I added a table, which displays Minimum and Maximum Coverage of each Lake.

![Completed image of the Conference Page](https://github.com/stlgithub/dataportfolio/blob/main/PowerBI/PowerBI_3/Project3_2.png)

### 6. Smart Narrative

As a bonus I also decided to try PowerBI's AI tool, Smart Narrative, on the left hand side of the dashboard.

I did not alter the AI generated text, since this was mostly for the purposes of me testing/demonstration the fact that this functionality is available.
