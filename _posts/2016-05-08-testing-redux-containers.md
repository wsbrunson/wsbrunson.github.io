---
layout: post
title:  "Unit Testing Redux Container Components - Part 1"
date:   2016-05-08 17:06:15
categories: react redux test
---
When using React at scale, certain design patterns start to become necessary. One of those patterns is Presentational versus Container components. It's a pattern that separates an applications view logic from data and business logic. If a React component makes a network request for data, there's a good chance it should have a container component. If you'd like to learn more about this pattern, I would suggest reading [this article][smart-and-dumb-components] and [this article][container-components].

Writing large React applications also requires a sane solution to managing state. There are a few libraries to choose from, but the most popular is [Redux][redux-link]. Redux has some great features, including a convenient way to create Container components that can map state and actions to the properties of a presentational component.

Redux also includes a component called Provider. Provider is used to give all of the components in an application access to the Redux store. Without Provider, a child component would have to have the Redux store passed to it by all of it's parents to modify the store. This causes problems when unit testing Redux Containers though. A true unit test is isolated from the rest of the application, so the container component is being rendered outside of the Provider component, meaning it has lost access to the Redux store.

Let's start with a simple presentational component. Our hypothetical app is a Quiz. Our component is a Choice, something that would render as a child of a Question. When clicking a Choice, it would add it's question and choice Id into the selections state of the Redux store. Here is the Choice component:

{% highlight javascript %}
import React from 'react';

const Choice = ({ saveSelection, choiceText }) => {
	return (
		<li className="choice">
			<input
				type="radio"
				onClick={saveSelection}
			/>
			<label>{choiceText}</label>
		</li>
	);
};

export default Choice;
{% endhighlight %}

And the container component:

{% highlight javascript %}
import { connect } from 'react-redux';
import { addSelection } from '../actions';

import Choice from '../components/Choice';

const mapStateToProps = () => {
	return {
		isSelected: false,
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		saveSelection: () => {
			dispatch(addSelection(ownProps.questionNumber, ownProps.choiceNumber));
		},
	};
};

const ChoiceContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Choice);

export default ChoiceContainer;
{% endhighlight %}

**Note:** in the saveSelection method, `ownProps.questionNumber` and `ownProps.choiceNumber` are integers being passed to ChoiceContainer from its parent component that is not shown in this post. We are not using them in the Choice component at this time, but they are important for identifying which Choice of which Question was selected.

I have seen some developers combine the container and the presentation classes into one file and export the container component. I like splitting them into separate files, especially if `mapDispatchToProps` and `mapStateToProps` functions get any more complicated than the example above.

Now that we have two components, let's test them. I'm using [Airbnb's Enzyme library][enzyme-link] to compile the components. I would highly recommend using Enzyme. It makes rendering components and checking their structure, props, and state simple.

First, the Choice component:
{% highlight javascript %}
import React from 'react';
import { shallow } from 'enzyme';

import Choice from '../../src/js/components/Choice';

describe('Choice Component', () => {
	const choiceText = 'Choice 1';
	const saveSelection = jasmine.createSpy('saveSelection');
	let Component;

	beforeEach(() => {
		Component = shallow(
			<Choice
				saveSelection={saveSelection}
				choiceText={choiceText}
			/>
		);
	});

	it('should render', () => {
		expect(Component.length).toBeTruthy();

		expect(Component.find('label').text()).toBe(choiceText);
	});

	it('should call saveSelection when clicked', () => {
		Component.find('input').simulate('click');

		expect(saveSelection).toHaveBeenCalled();
	});
});
{% endhighlight %}

And now the ChoiceContainer component:
{% highlight javascript %}
import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';

import { storeFake } from '../fakeData/storeFake';
import ChoiceContainer from '../../src/js/containers/ChoiceContainer';
import Choice from '../../src/js/components/Choice';

describe('ChoiceContainer', () => {
	let Component;
	let ChoiceComponent;

	beforeEach(() => {
		const store = storeFake({});

		const wrapper = mount(
			<Provider store={store}>
				<ChoiceContainer />
			</Provider>
		);

		Component = wrapper.find(ChoiceContainer);
		ChoiceComponent = Component.find(Choice);
	});

	it('should render', () => {
		expect(Component.length).toBeTruthy();
		expect(ChoiceComponent.length).toBeTruthy();
	});
});
{% endhighlight %}

We are able to compile and find a ChoiceContainer component because of these lines:
{% highlight javascript %}
const store = storeFake({});

const wrapper = mount(
	<Provider store={store}>
		<ChoiceContainer />
	</Provider>
);

Component = wrapper.find(ChoiceContainer);
ChoiceComponent = Component.find(Choice);
{% endhighlight %}
We created a Provider component, gave it a fake store, and wrapped the ChoiceContainer with it. Then we used Enzyme's find method to find the rendered ChoiceContainer and Choice components.

Here is what the fake store looks like:
{% highlight javascript %}
export const storeFake = (state) => {
	return {
		default: () => {},
		subscribe: () => {},
		dispatch: () => {},
		getState: () => {
			return { ...state };
		},
	};
};
{% endhighlight %}
**Note:** the Object spread operator, `{ ...state }`, will not automatically compile with Babel. You will need to install [this package][babel-object-spread] from npm and update your Babel presets.

Any object passed to the fake store will be used by the Provider component when rendering the ChoiceComponent.

Our tests don't do much at the moment, but this will at least allow them to compile. In the next post, I will demonstrate how I go about testing container components. If you'd like to see the project as a whole, check out the [QuizSimply Github repository][QuizSimply].

[smart-and-dumb-components]: https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.5xckd0c2n

[container-components]: https://medium.com/@learnreact/container-components-c0e67432e005#.nutho0232

[redux-link]: http://redux.js.org

[enzyme-link]: http://airbnb.io/enzyme/

[babel-object-spread]: https://babeljs.io/docs/plugins/transform-object-rest-spread/

[QuizSimply]: https://github.com/wsbrunson/Quiz-Simply-React
