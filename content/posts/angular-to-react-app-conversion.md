+++
title = "Converting from Angular 1.x to React"
date = "2016-03-18"
+++

After completing Wes Bos's excellent React course, [React For Beginners](https://reactforbeginners.com),
I was eager to try out what I learned on an actual project. I have an existing project call QuizSimply that I created as a way to learn Angular 1.x. I created a new branch called 'react' and started the app re-write process.

## Angular Components

My existing Angular app, QuizSimply, wasn't a traditional Angular application. I was already in the process of componentizing the app by replacing view controllers with directives. I was following the advice of [this](http://teropa.info/blog/2015/10/18/refactoring-angular-apps-to-components.html) to prepare my application for Angular2. At the time, I wasn't aware of the specifics of React. Now that I've learned more about how React works and how a project is structured, I'm very glad I made the component switch. It made the conversion to React so much easier because Angular components are very similar to React components; you specify a template and you write some methods to add, read, or alter the template. The main difference is Angular built-in directives vs plain-old JavaScript. For example, to repeat elements in Angular, you would use `ng-repeat`. In React, you would call `.map` off of the array of data and return HTML with the data you were looking to display. [A wiser developer](https://medium.freecodecamp.com/angular-2-versus-react-there-will-be-blood-66595faafd51#.d1843wmek) said that Angular puts JavaScript in HTML; React puts HTML into JavaScript.

## Converting to React

Since my application was already initially componentized, my next steps were to convert the Angular syntax to React. I'll demonstrate the path I took with my Quiz component. It receives an object of questions and choices, then renders each question card. I've simplified the code quite a bit so it is easier to follow along, but you can check out the full examples in the [QuizSimply GitHub repo](https://github.com/wsbrunson/Simple-Javascript-Quiz).

```javascript
angular.module("App").directive("quiz", function () {
  return {
    scope: {},
    bindToController: {
      questions: "&",
    },
    templateUrl: "./quiz-template.html",
    controllerAs: "vm",
    controller: function questionController() {
      const vm = this;

      vm.questions = vm.questions();
    },
  };
});
```

And the template:

```html
<div ng-repeat="question in vm.questions">
  <h3>{{ question.questionTitle }}</h3>
  <div ng-repeat="choice in question.choices">
    <input type="radio" /> <label>{{ choice }}</label>
  </div>
</div>
```

First step was to remove the Angular decoration at the top and use the ES2015 (ES6) class declaration syntax to define the Questions component.

```javascript
//Angular
angular.module('App').directive('quiz', function() {});

//React
class Quiz extends React.Component({})
```

We can remove all of the boilerplate code that defines an Angular directive. If you are using the new 1.5 component syntax then this isn't a problem. We can also add the `render()` function and the template.

```javascript
class Quiz extends React.Component({
  render() {
    return (
      <div ng-repeat="question in vm.questions">
        <h3>{{ question.questionTitle }}</h3>
          <div ng-repeat="choice in question.choices">
            <input type="radio" />
            <label>{{ choice }}</label>
          </div>
      </div>
    );
  }
})
```

Let's touch up our template by removing the references to Angular directives and replacing them with The React Way:

```html
// Angular

<div ng-repeat="question in vm.questions">
  <h3>{{ question.questionTitle }}</h3>
  <div ng-repeat="choice in question.choices">
    <input type="radio" /> <label>{{ choice }}</label>
  </div>
</div>
```

```javascript
//React

<div className="question-container">
    {this.props.questions.map(question => {
        return (
            <div classNameName="question>
                <h3>{question.questionTitle}</h3>
                <Choices choices={question.choices} />
            </div>
        );
    }}
</div>
```

While converting our template to work in React, we've replaced the second `ng-repeat` directive with a new React component, Choices. Moving my app into React showed me a lot of places where I could break my code into even smaller components. Without the Choices component, we would have had to perform a second map of all the choices in the question object. Nesting ng-repeats is a little weird to see, but not necessarily an immediate code smell. Nesting loops, on the other hand, feels wrong right away. Our Choices component looks like this:

```javascript
class Choices extends React.Component({
    render() {
        return(
            <div className="choice-container">
            {this.props.questions.map(choice => {
                return (
                    <div className="choice">
                        <input type="radio" />
                        <label>{choice}</label>
                    </div>
                );
            })}
            </div>
        );
    }
})
```

The final version of our new Quiz component looks like this:

```javascript
class Quiz extends React.Component({
    render() {
        return(
            <div className="question-container">
            {this.props.questions.map(question => {
                return (
                    <div className="question>
                        <h3>{question.questionTitle}</h3>
                        <Choice choices={question.choices} />
                    </div>
                );
            })}
            </div>
        );
    }
})
```

## Final Thoughts

The React version of QuizSimply is much smaller and easier to understand. The bloat of boilerplate code that accompanies Angular directives is gone, replaced with mostly pure JavaScript (except the JSX).

I found it very worthwhile to convert my app to React, but not for performance reasons. I just enjoy the syntax, the componentization, and writing less framework code and more actual JavaScript. Not exactly an argument you can show your boss to validate a major app re-write, but enough for me to start using React in my new side projects.

If you aren't ready or don't want to make the switch to React I would at least look into componentizing your Angular application. Components in a UI application make a lot of sense and make the application much easier to read and reason about. Plus, if you do feel the urge to switch to React or eventually Angular2, you will find the rewrite process much easier than with a traditional Angular project.
