Floats
======

Images in paragraphs
--------------------

Often times on a web page, we will want to place an image inside of a paragraph.

```HTML
	<p>
		<img src="penguin.jpg" alt="Penguin" width="128">
		Penguins (order Sphenisciformes, family Spheniscidae) are a group of aquatic, flightless birds living almost exclusively in the Southern Hemisphere, especially in Antarctica. Highly adapted for life in the water, penguins have countershaded dark and white plumage, and their wings have evolved into flippers. Most penguins feed on krill, fish, squid and other forms of sealife caught while swimming underwater. They spend about half of their lives on land and half in the oceans.
	</p>
	<p>
		<img src="tiger.jpg" alt="Tiger" width="128">
		The tiger (Panthera tigris) is the largest cat species, reaching a total body length of up to 3.38 m (11.1 ft) over curves and exceptionally weighing up to 388.7 kg (857 lb) in the wild. Its most recognisable feature is a pattern of dark vertical stripes on reddish-orange fur with a lighter underside. The species is classified in the genus Panthera with the lion, leopard, jaguar and snow leopard. Tigers are apex predators, primarily preying on ungulates such as deer and bovids. They are territorial and generally solitary but social animals, often requiring large contiguous areas of habitat that support their prey requirements. This, coupled with the fact that they are indigenous to some of the more densely populated places on Earth, has caused significant conflicts with humans.
	</p>
```

However, we can see in this example that the text of the paragraph doesn't wrap nicely around the image. Instead, it leaves a lot of empty space, and we don't want that. The CSS property `float` allows us to fix this problem.

We can use `float` to tell an element to _float_, or position itself, to the left or to the right. For example:

```CSS
	.my-element {
		float: left;
	}
```

In this case, we would like to position the image of the penguin on the left, and the image of the tiger on the right. Try modifying the CSS of this example to achieve this.



Floating 2 lists
----------------

Floats can be used for other purposes than wraping text around an image. We can also use them to position two or more elements side by side.

I've made a list of my favorite books and my favorite movies. I'd like to position these two lists next to each other on my web page. We can achieve this using floats. Try floating the first list on the left, and the second list on the right.

```HTML
	<ul>
		<li>A Tale Of Two Cities</li>
		<li>The Catcher in the Rye</li>
		<li>The Adventures of Huckleberry Finn</li>
	</ul>
	<ul>
		<li>GoldenEye</li>
		<li>Jurassic Park</li>
		<li>Catch Me If You Can</li>
	</ul>
```

We can see that it kind of works, but now we have a big space in the middle of the two lists. This is because when we float elements, they will try to go as far left or as far right as they can. In order for our two lists to be next to each other, we can simply float them both to the left.

This is much better, and will allow us to work with more than two elements should we wish to. We can always adjust the space between our lists using the margin properties that we have learned of previously.



Lists with titles
-----------------

On the previous web page, it wasn't very clear to our readers what each column represented. I added a title before each column to make it clearer.

```HTML
	<h3>Favorite books</h3>
	<ul>
		<li>A Tale Of Two Cities</li>
		<li>The Catcher in the Rye</li>
		<li>The Adventures of Huckleberry Finn</li>
	</ul>

	<h3>Favorite movies</h3>
	<ul>
		<li>GoldenEye</li>
		<li>Jurassic Park</li>
		<li>Catch Me If You Can</li>
	</ul>
```

Once again I would like the columns to be positioned next to each other, something that we can achieve with floats. However, the titles present an additional challenge. We can't simply float both the titles and the lists to the left. We need to think of each title and its respective list as a _whole_ and we want to float them together as a whole. The way to achieve this is to surround them, or _wrap_ them, in another element and apply the float to that surrounding element. We could use a semantic element such as `<section>` or `<article>` if the context is right. However, in this case, we can simply use the all-purpose block element that we have seen before, `<div>`.

Try modifying the CSS of this example to achieve this.



Clearing floats
---------------

Let's take the previous example again, and this time we will add some text in a paragraph after the lists.

```HTML
	<div class="list">
		<h3>Favorite books</h3>
		<ul>
			<li>A Tale Of Two Cities</li>
			<li>The Catcher in the Rye</li>
			<li>The Adventures of Huckleberry Finn</li>
		</ul>
	</div>

	<div class="list">
		<h3>Favorite movies</h3>
		<ul>
			<li>GoldenEye</li>
			<li>Jurassic Park</li>
			<li>Catch Me If You Can</li>
		</ul>
	</div>

	<p>These are my favorite books and movies. What are yours?</p>
```

```CSS
	.list {
		float: left;
	}
```

We can see that despite being no `float` property assigned to our paragraph, it still appears next to the lists instead of under them as expected. This is a result of the behaviour of floats; when an elemented is floated, subsequent elements will try to position themselves next to it, even if we haven't told those elements to float. In order to fix it, CSS provides a property called `clear`. We can use this property to disable floating for the desired elements. We can disable either left floating (using the value `left`), right floating (using the value `right`), or even both left and right floating (using the value `both`).

```CSS
	.my-element {
		clear: left;
	}
```

Try modifying the CSS of this example to apply a `clear` property on our paragraph so that it doesn't position itself next to our lists but rather under them as expected.



Container height problem
------------------------

Another problem can be encountered when we only have float elements inside of a parent element. Take the following example:

```HTML
	<div class="container">
		<ul>
			<li>A Tale Of Two Cities</li>
			<li>The Catcher in the Rye</li>
			<li>The Adventures of Huckleberry Finn</li>
		</ul>
		
		<ul>
			<li>GoldenEye</li>
			<li>Jurassic Park</li>
			<li>Catch Me If You Can</li>
		</ul>
	</div>
```

```CSS
	ul {
		float: left;
	}
```

To observe the problem, try modifying the CSS of the example to apply a border around the `<div>` with the class _container_.

You will notice that the border does not go around the two lists as expected; instead, there is simply a line above the two lists where the container would start. The reason this happens is because floated elements don't contribute to the height of their parents. So if a parent element contains only floated elements, its height will effectively be zero.

We can fix that with a small trick using the `overflow` property. 

Layout
------
