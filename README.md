
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

**props.match.params**
>
> **React Router** provides some additional properties to access route params in a component.
> Lets say your want to pull the name of the chosen id, you can retrieve this from the URL. To access it, you can use the prop ```match```.
> The ```match``` prop has a ```params``` object that contains the all existing param values.
>
> Example:
```
import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const ParamsExample = () => (
  <Router>
    <div>
      <h2>Accounts</h2>
      <ul>
        <li><Link to="/netflix">Netflix</Link></li>
        <li><Link to="/zillow-group">Zillow Group</Link></li>
        <li><Link to="/yahoo">Yahoo</Link></li>
        <li><Link to="/modus-create">Modus Create</Link></li>
      </ul>

      <Route path="/:id" component={Child}/>
    </div>
  </Router>
)

const Child = ({ match }) => (
  <div>
    <h3>ID: {match.params.id}</h3>
  </div>
)

export default ParamsExample
```
>
> The ```match``` object actually contains a number of other route-related properties.
>  
```
console.log(props.match)

{
  isExact: true,
  params: {
    name: 'the-topic-name'
  },
  path: '/topics/:name',
  url: '/topics/the-topic-name'
}
```
> For more information/examples with **Route Params**, here is a helpful link to Alex Sears lesson on [Using React Router 4](https://scotch.io/courses/using-react-router-4/route-params)

----------

Heroku
-------------
>  
> Using [mars Heroku Buildpack for create-react-app](https://github.com/mars/create-react-app-buildpack) for a fast and easy deploy.
>

**Issue with React Router on Heroku**
>
> After successfully deploying to heroku with the mars heroku buildpack, the root URL was rendering, but other routers specified with *React Router* were not working.
>  
>  Creating a ```static.json``` file in the same directory as the ```package.json``` with the following contents:
>
```
{
  "root": "build/",
  "clean_urls": false,
  "routes": {
    "/**": "index.html"
  }
}
```
>
> Basically the ```static.json``` file modifies Heroku's default webpack, so that it can handle client-side routing.
>  
>  Here is a good stackoverflow that provides a solution and explanation to [react routing works in local machine but not heroku](https://stackoverflow.com/questions/41772411/react-routing-works-in-local-machine-but-not-heroku)
----------
