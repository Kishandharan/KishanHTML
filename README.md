# Introduction                                  
HTML, an acro of Hyper text markup languange, is a language created to make websites!                          
It is very widely used and is nowadays common to see websites built with HTML.                          
Now to be precise, HTML alone is not enough to create webpages!                          
We will need two more languages to build a complete webpage.                          
That is, CSS and JavaScript!                          
                      
Think of HTML as a skeleton of a house, you write the base content of a webpage in HTML.                          
Now CSS, an acro os Cascading Style Sheet, is like a styling of a house with so many colors.                          
With CSS you can style your webpage to make it look like however you want.                          
With JavaScript, you decide the functionality of your webpage!                          
If you are willing to make a website that is static and does not change dynamically, HTML and CSS alone is enough.                          
But, if you want to make functional webpages such as Games or Calendar, you will need JavaScript too.                          
                      
                      
Now if you want to get started in HTML CSS and JS,                      
The good news is that you dont need to install anything except a browser to do this.                      
You can just open the HTML file in your browser and see the result.                      
                      
## Tags                      
Let us take a look at a sample HTML code with no CSS or JavaScript involved:                           
```                      
<!DOCTYPE html>                          
<html lang="en">                          
    <head>                          
        <meta charset="UTF-8">                          
        <meta name="viewport" content="width=device-width, initial-scale=1">                          
        <title>My website</title>                          
    </head>                          
    <body>                          
        <p>Hello!</p>                          
    </body>                          
</html>                          
```                
If you are used to using XML frequently, you might find these familiar.                    
See these "<>" syntaxes with text inside them? Those are called "Tags" in HTML.                    
Tags are used to display different kinds of content.                    
Below is the syntax of all tags in html:                   
```                
<tagname attributes></tagname>                
```                
We should replace "tagname" with a real tag name and "attributes" with real attributes while coding.                   
We will talk about attributes later. The first set of "<>" is called the opening tag.                       
And opening tag lets HTML know that we have initiated a tag, here is where whe pass all our arguments, too.                    
Now the second set of "<>" is called the closing tag. It lets HTML Know that we have ended a tag.                      
Note that when using a tag, the opening and closing tag should always have the same name.                        
For example, the first one on the below is wrong and the second one is correct:                       
```                   
<mytag1></mytag2>❌                  
<mytag1></mytag1>✅                     
```                       
There are many tags in HTML, but here we will be talking about the following:                         
- html tag            
- head tag             
- title tag            
- meta tag            
- body tag            
- h1-h6 tag            
- p tag            
            
But before covering these tags right away, we need to talk about the "<!DOCTYPE html>".            
You may have noticed this line on the very top of our previous example.            
This line is a must for all HTML files. It lets HTML know that we are initiating a HTML file.            
Although our HTML file will work without this line, it is Very strongly recommended to put this line on top.            
Knowing this, let us jump to the tags.            
            
## html tag            
This tag is the tag that initiates us HTML code. All of our code should be inside this tag.            
Below is an example of the HTML tag:            
```            
<!DOCTYPE html>            
<html>            
</html>            
```            
We will be writing our code within the opening and the closing html tag.            
            
            
## head tag            
This tag has to be used inside the html tag and it is used to define some metadata and info about the page.            
We can set things such as the title, metadata, and some css stylings in here.            
Here is an example of the head tag:            
```            
<!DOCTYPE html>            
<html>            
    <head>            
    </head>            
</html>            
```            
We will be writing our metadata inside the head tag.            
Search engines and Web browsers will rank our website on the search results based on these metadata.            
            
## title tag            
As the name suggests, we define the title of our website in this tag.            
This tag is to be used inside the head tag as this is some metadata.            
Below is an example of the Title tag:            
```            
<!DOCTYPE html>            
<html>            
    <head>            
        <title>Some title</title>            
    </head>            
</html>            
```            
In this example, "Some title" will be the title of our webpage.            
But we can replace it with whatever we want.            
            
## meta tag            
This tag is the tag that is used to define some metadata about our webpage.            
As you might have guessed, it is to be used inside the Head tag.            
Below is an example:            
```            
<!DOCTYPE html>            
<html>            
    <head>            
        <meta charset="utf-8">            
    	<meta name="viewport" content="width=device-width, initial-scale=1">            
        <title>Some title</title>            
    </head>            
</html>            
```            
Now in most websites that we make, it is not required to use the meta tag unless you need to.            
But the about two meta tags are very strongly recommened to be used in all of your webpages.            
This is because, if you dont include these meta tags, in some devices your website may not look very good.            
            
## body tag            
This tag is the starting point of your main code.            
Here is where you put all the content you want.            
For example:            
```            
<!DOCTYPE html>            
<html>            
    <head>            
        <meta charset="utf-8">            
    	<meta name="viewport" content="width=device-width, initial-scale=1">            
        <title>Some title</title>            
    </head>            
    <body>            
    </body>            
</html>            
```            
All of our code which is visible in the output of the webpage goes within the opening and the closing body tag.            
            
            
## h1-h6 tag            
These tags are used to display headings of different sizes.            
In these tags,            
- h1 is the biggest            
- h2 is little bit smaller than             
- h3 is smaller than h2             
- h4 is smaller than h3             
- h5 is just a little bit bigger than the smallest            
- h6 is the smallest            
            
Below is an example:            
```            
<!DOCTYPE html>            
<html>            
    <head>            
        <meta charset="utf-8">            
    	<meta name="viewport" content="width=device-width, initial-scale=1">            
        <title>Some title</title>            
    </head>            
    <body>            
        <h1>h1</h1>            
        <h2>h2</h1>            
        <h3>h3</h1>            
        <h4>h4</h1>            
        <h5>h5</h1>            
        <h6>h6</h1>            
    </body>            
</html>            
```            
            
To see the result of this program for yourself, just copy the output of this program and put it in a HTML file.            
Then open that HTML file in your browser to see the result.            
Once you open the file in your browser, you will notice that there will be headings ranked from the biggest to the smallest.            
            
            
## p tag            
This tag is pretty similar to the heading tags, but except these tags are intended for normal paragraphs.            
Below is an example:            
```            
<!DOCTYPE html>            
<html>            
    <head>            
        <meta charset="utf-8">            
    	<meta name="viewport" content="width=device-width, initial-scale=1">            
        <title>Some title</title>            
    </head>            
    <body>            
        <p>This is some normal, paragraph text</p>            
    </body>            
</html>            
```            

# Assignment 1 - Indian Tricolor Flag with Ashoka Chakra    
## 1a 
Build a HTML page showing the indian flag with red white green rectangular areas with an image of an ashoka chakra using the tags <head>, <body>, <style>, <title>, <img>, <div>   as in https://kishandharan.github.io/HTML/indianflag.html. Use image (ashokachakra.png)[https://github.com/Kishandharan/HTML/blob/main/ashokachakra.png]. Use class attribute to decorate each rectangular div element with required dimensions. Example width=600px height=150px and required color.
## 1b    
Add an id to ashokachakra image, to make it toggle onclick. Use <script> tag to write a fuction that accesses the opacity CSS value and conditionally make it visible or hidden based on a boolean flag showChakra=true/false. Use document.getElementById() method to access the required DOM elements.

