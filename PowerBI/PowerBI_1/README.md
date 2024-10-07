![Completed image of the Conference Page](https://github.com/stlgithub/dataportfolio/blob/main/PowerBI/PowerBI_1/Project1.png) ![Completed image of the Conference Page](https://github.com/stlgithub/dataportfolio/blob/main/PowerBI/PowerBI_1/Project1_2.png)

# Introduction

###### <em>NOTE: Unfortunately Power BI does not allow users to upload their works online without a work or school email. As I do not have such an email, I cant link to an online version of the dashboard.
###### You can download the Power Bi files [by clicking here.](https://github.com/stlgithub/dataportfolio/blob/main/powerbi_files/Project2.pbix)</em>

The dataset used in this project breaks down NCAA athletic department expenses and revenues by year.
The dataset can be found by [clicking here.](https://data.world/jbaucke/2021-w1-power-bi-wow-ncaa-financials).

This project breaks down the revenues, profits, and expenses of the NCAA, and adds accessibilty features to the data visualisations.

# Steps Taken

### 1. Data preparation

In order to prepare the data model I first filtered out (null) and FBS Total values from the FBS Conference column in the finances_fact table.

Then, in conference_dim table, I made sure I used first rows as headers and made sure the connection between the tables, which PowerBI automatically established, were correct.

### 2. Summary View Page

To create the KPI for the Summary page, I started by adding the title to the top right of the page.

Afterward I created cards that show Revenues, Expenses and Profits, and I made sure they displayed the information in millions as opposed to billions.

I then added trend lines and barcharts for each of the before mentioned values, and did general cleanup such as removing titles and lables that were uneccassary in my opinion.

Next I added a slicer to allow the user to change between different years, as a dropdown menu. For the slicer, I made sure that the trendlines are not effected, as it would render them useless otherwise.

Similarly, I used the Format tab to make sure that I could filter the rest of the dashboard elements by clicking on the barchart.

Finally, I made sure each section (Revenues, Expenses, and Profits) had distinct colors associated with it.

![Completed image of the Conference Page](https://github.com/stlgithub/dataportfolio/blob/main/PowerBI/PowerBI_1/Project1.png)

### 3. School View Page

For the School View Page, I copied the Summary View, and made sure to change the Conference data to School data in the barcharts as well as the title of the page.

I ensured I can drill through the Summary View page, to the School View page, by adding Conference Abb as the drill through-field for School View page elements.

I added a card to the School View that displayed the chosen conference abbreviation from the Summary View page.

Finally, I made sure I unsynced the slicers of each page.

![Completed image of the Conference Page](https://github.com/stlgithub/dataportfolio/blob/main/PowerBI/PowerBI_1/Project1_2.png)

### 4. Accessibility

As the final part of this dashboard, I wanted to make sure it followed accessibilty guidelines.

Firstly, I used contrastchecker.com to make sure that the colors chosen for each of the metrics shown (Revenues, Expenses, and Profits) followes color contrast best practices.

I then created Alt Text for each of the elements. For titles I copied and pasted the title itself and for other elements I added a clear description of the element, such as "Line chart of revenues from year 2005 to 2017, that starts from $4,8 billion and 
steadily climbs to $9,2 billion."

Finally, I set the Tab Order to follow a logical order from top to bottom, left to right, allowing the user to smoothly navigate the dashboard with a keyboard.
