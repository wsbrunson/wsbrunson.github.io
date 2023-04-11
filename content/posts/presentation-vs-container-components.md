+++
title = "Presentation vs Container components"
date = "2016-04-22"
+++

As a React app begins to scale, the need for separating view logic from business logic becomes more apparent. Separation of Concerns is an important concept in software development, but it isn’t obvious how to do this with React. There are a couple of great articles that I have come across that explain how to do this. This article will serve as a summary and amalgamation of what I have found in my research.

Separating view logic and business logic has two main purposes. First, it makes the tests easier to write, and second, it makes the architecture more robust.

##Easier Tests##
React components that fetch data or run complex operations on data inside of themselves are harder to test. In addition to testing that the component is rendering the correct data, tests also have to be written to verify the extra logic is working correctly.

Take a to-do list for example. If a Todo component is responsible for rendering a list of todos, fetching todos from a server, adding and removing todos, and ensuring that each todo is styled based on whether it is complete or not, the tests for that component will be very complicated.

What if instead we broke down our Todo component into multiple components? We could have a TodoContainer, which would handle the logic of fetching, adding, and removing todos from a server. It would pass down its data and actions to a TodoList component, which would render a list of Todo components. The Todo components would each style themselves based on the data that was passed down to them.

Now, we can write specific tests for each component with minimal setup. We can test a Todo component by testing what it does when we tell it to be finished or unfinished. We can mock some network calls in the TodoContainer component and test that it passes the correct data down and that the actions actually work. We can test our TodoList component and verify that it renders a variable amount of todos.

##More Robust Architecture##
Let’s take the Todo example farther by adding authentication. In addition to the data requests the app is making, it now needs to handle signup, login, and logout. First, we will need three UI components to handle user authentication: a Login component, a Signup component, and a Logout component. Two or more of these components could be combined depending on how they are structured, but to keep things easy we will keep them separated.

With the UI in place, we can create the container component to handle making the network requests and deciding which component the user needs to interact with. The UserAuthenticationContainer will pass down the login, signup, and logout actions to the UI, and will determine the authentication state the user is in. When the state changes, the container will then render the appropriate container.

For example, when a user first visits the site, the container will render the Signup and Login component. Once the user creates an account, their authentication status has now changed to LoggedIn. The container will now display the Logout component. The UserAuthenticationContainer is in charge of changing state and deciding what the UI should be. The other three components just render whenever they are told with data supplied to them.

I’ll leave you with a simple test to apply to the above examples. If you have a component that needs more work than sampling supplying properties and rendering them, you most likely need a container component. It will help with unit testing and keeping your application architecture sane as it grows to handle more and more complex logic.
