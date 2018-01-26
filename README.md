M.E.R.N. (front end)
===================
> Building a basic MERN stack application. Following [Krunal Lathiya's MERN Stack Tutorial](https://appdividend.com/2017/06/28/mern-stack-tutorial/?utm_source=hashnode.com).
>
> This repository will contain the **React.js** *front-end*, which will communicate with our [**Express.js** *back-end*](https://github.com/PJC-1/M.E.R.N.-back-end-).
>
> The following are notes from documentation, articles, and personal observations/opinions regarding building a *MERN* stack application and *deploying* it.
>

Helpful Links
-------------
>  
>

----------

React Router
-------------
**exact**
>
> When ```true```, will only match if the path matches the ```location.pathname``` *exactly*.
>  
```
<Route exact path="/one" component={About}/>
```
>
> In the example above, if the ```location.pathname``` were ```/one/two```, then this would result as **not a match**.
>
>

----------
