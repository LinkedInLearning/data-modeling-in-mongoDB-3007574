# Data Modeling in MongoDB
This is the repository for the LinkedIn Learning course Data Modeling in MongoDB. The full course is available from [LinkedIn Learning][lil-course-url].

![Data Modeling in MongoDB][lil-thumbnail-url] 

MongoDB is a leading noSQL database that stores data in documents or collections, which is very different from the relational or SQL databases that most data developers are familiar with. In this course, instructor John Cokos explores ways to use MongoDB at scale with complex data modeling techniques and cloud deployments. As a means of demonstrating the complexities of modeling real-world data with MongoDB, John works through the process of setting up an application resembling a social media website, and shows you how to model frequently used, deeply nested, and shared data sources to support an enterprise-level application. John also presents a series of challenges and solutions, so you can test your learning along the way.

## Instructions
This repository has branches for each of the videos in the course. You can use the branch pop up menu in github to switch to a specific branch and take a look at the course at that stage, or you can add `/tree/BRANCH_NAME` to the URL to go to the branch you want to access.

## Branches
The branches are structured to correspond to the videos in the course. The naming convention is `CHAPTER#_MOVIE#`. As an example, the branch named `02_03` corresponds to the second chapter and the third video in that chapter. 
Some branches will have a beginning and an end state. These are marked with the letters `b` for "beginning" and `e` for "end". The `b` branch contains the code as it is at the beginning of the movie. The `e` branch contains the code as it is at the end of the movie. The `main` branch holds the final state of the code when in the course.

When switching from one exercise files branch to the next after making changes to the files, you may get a message like this:

    error: Your local changes to the following files would be overwritten by checkout:        [files]
    Please commit your changes or stash them before you switch branches.
    Aborting

To resolve this issue:
	
    Add changes to git using this command: git add .
	Commit changes using this command: git commit -m "some message"

### Instructor

John Cokos 
                            


                            

Check out my other courses on [LinkedIn Learning](https://www.linkedin.com/learning/instructors/john-cokos).

[lil-course-url]: https://www.linkedin.com/learning/data-modeling-in-mongodb
[lil-thumbnail-url]: https://cdn.lynda.com/course/3007574/3007574-1649089836042-16x9.jpg
