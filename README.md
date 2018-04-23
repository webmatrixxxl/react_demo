# React Task

The idea is to create a single page application, which will allow users to search the Movies DB database.

Api Swagger documentation: [http://react-cdp-api.herokuapp.com/api-docs](http://react-cdp-api.herokuapp.com/api-docs)

There will be two pages: main page with search and a page with a particular film.



Interface

Here are two screens presented with break down. There is also an additional screen with empty state of the main page. Design and captions are available below.









# Captions

#



1. **0.**** Empty results state **** **



1. **1.**** Search field **** **

Enter button should work as well

1. **2.**** Search filter **** **

By default &quot;Title&quot; is selected. Click to switch option.

1. **3.** Search button

1. **4.** Results count

1. **5.**** Results sort **** **

**&quot;** release date&quot; is selected by default. Click to switch option.

1. **6.**** Results body **** **

All found items, without pagination

1. **7.**** Item image **** **

URL for the image you will get from the server

1. **8.** Item release date

1. **9.** Item genre

1. **10.** Item title



**11**. **Film cover**

1. **12.** Film title

1. **13.**** Film rating**

1. **14.** Search button

Returns user to the main page with search

1. **15.** Film duration and release year

1. **16.** Description

1. **17.**



1. **18.**** Films by the same genre**







# **Task 1 (Core concepts lecture)**

Setting up the environment

Install and launch &quot;blank&quot; node.js application. You&#39;ll need it in further development for implementing SSR. Commit this changes to repository.

Don&#39;t use any generators (like create-react-app)

Create components in different ways, using:

- -.React.createElement
- -.React.Component
- -.React.PureComponent
- -.functional components

Note: To implement this task you could use React online sandbox,
[optional] or start to configure basic project build from task 2.
Share sandbox link with your mentor or commit to your repository

Evaluation criteria:

( each mark includes previous mark criteria )

| 2 | 3 | 4 | 5 |
| --- | --- | --- | --- |
| Install blank express.js application |  Render blank message (Hello World) with react | Use at least 2 methods of creating react components |  Use all methods which mentioned in task, to create react components |



# **Taks2 (Webpack lecture)**

Create package.json file and install React, Redux, React-Redux, React-Router, Jest.

Install and configure webpack &amp; babel to get build artifact by running npm command

Set DEV and PROD build configuration. Use env variables, dev server, optimizations for PROD build

Set up testing. You should have test command in your package.json file, which will run your future tests. Don&#39;t use React boilerplate for this task.



Evaluation criteria:

( each mark includes previous mark criteria )

| 2 | 3 | 4 | 5 |
| --- | --- | --- | --- |
| - Installed React, Redux, React-Redux, React-Router, Jest |  Configured webpack | Configured babel
Configured tests script |  Have dev and prod build commands(use evn variables) |



# **Task3 (Components lecture)**

Write components implementing HTML markup for required design (see images at the beginning of the document)

Use ErrorBoundary component for catching and displaying errors ( [https://reactjs.org/docs/error-boundaries.html](https://reactjs.org/docs/error-boundaries.html) ). You could create one component and wrap all your application, or use several components.

Use smart/dumb components approach

100% decomposition ( estimated by mentor )

Evaluation criteria:

( each mark includes previous mark criteria )

| 2 | 3 | 4 | 5 |
| --- | --- | --- | --- |
| Markup is done with React Components |  Use ErrorBoundary component for catching and displaying errors | Use smart/dumb components approach |  100% decomposition ( evaluated by mentor ) |











# **Task4 (Testing lecture)**

Coverage &gt; 60%
Write tests using enzyme and jest

Use snapshot testing

Use coverage tool

Write at least one e2e test using library from the list:
Cypress, CasperJS, Protractor, Nightwatch, Webdriver

Evaluation criteria:

( each mark includes previous mark criteria )

| 2 | 3 | 4 | 5 |
| --- | --- | --- | --- |
| Coverage &gt; 60% | Use snapshot testing | Coverage &gt; 80%
Functional testing with enzyme and jest |  write at least one e2e test |



# Task 5 (Flux + Redux)

Go through API docs in swagger: [http://react-cdp-api.herokuapp.com/api-docs](http://react-cdp-api.herokuapp.com/api-docs)

API Endpoint: [http://react-cdp-api.herokuapp.com/](http://react-cdp-api.herokuapp.com/)

Make your components perform real AJAX requests.

Move data fetches to actions and pass data to your components with redux.

Cover actions and reducers with unit tests.

Add the ability to store your apps state offline and use it to start-up the app. You can take a look at redux-persist library for further reference.





**Evaluation criteria**** :**

( each mark includes previous mark criteria )

| 2 | 3 | 4 | 5 |
| --- | --- | --- | --- |
| All data fetches moved to actions &amp; received from store by components | Filtering and sorting is done as redux actions | Actions and reducers covered with unit tests (~60%+, can be amended by mentor) | Offline data storage &amp; store restoration (coverage ~100%) |

# Task 6 (Routing)

Create routing for your application.

Link app states between each other with React router.

By default user lands on a new page with empty results state (_caption 0_).

When user clicks on a film item, redirect him to:

localhost/film/ **id**

Handle invalid URLs, display create a 404 page, where user will be redirected in case of invalid URL.

On switching search type or sorting type you shouldn&#39;t switch any routes.

When user performs a new search, you should redirect him to:

localhost/search/ **Search%20Query**

When a new user lands on the page with such URL, you should perform search and display results.











**Evaluation criteria**** :**

( each mark includes previous mark criteria )

| 2 | 3 | 4 | 5 |
| --- | --- | --- | --- |
| Have 2+ pages which displays on different URLs |  Implement displaying 404 page for all invalid URLs | By default user lands on a new page with empty results state |  - When user performs a search on the page, change URL and show search results - When new user enters the site using direct link with search parameters - show search results |

#

# Task 7

Server Side Rendering

Implement server rendering in your NodeJS application.

Use async actions, redux should provide initial state from server.

Server should handle query parameters to compute correct initial state.

Implement route masking. Next.js provides this functionality out of the box, but its usage is not required. Example of route masking:

localhost/search/ **Hello%20Friend**

localhost/film/ **id**

Add code splitting to your app. You can use dynamic **import()** syntax in conjunction with webpack, some library (react-loadable), or next.js.









**Evaluation criteria**** :**

( each mark includes previous mark criteria )

| 2 | 3 | 4 | 5 |
| --- | --- | --- | --- |
| Async actions, redux provides initial state from server | Server app handles query params to compute initial state | Route masking. Can be implemented, or mentee can switch to next.js for SSR | Code splitting for optimized performance. Goes OOTB with next.js |

#

#

# Task 8

Useful libraries.

After lecture, review your app. Find libraries that are applicable for your app and can simplify it. Integrate those libraries.

Discuss your choices with mentor. Mentor evaluates your work on his own choice.

**Evaluation criteria**** :**

( each mark includes previous mark criteria )

| Use styled components / jssUse reselect/immutable2 | 3 | 4 | 5 |
| --- | --- | --- | --- |
| Add storybook to your project;Use flow instead of Prop TypesApply Airbnb best practices to your project:  clean up the code of your application: follow the required naming convention, make sure code has proper alignment and there are no redundant spaces, order all your methods in a right way |   |   |   |

#