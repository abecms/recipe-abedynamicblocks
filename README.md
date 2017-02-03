# recipe-abe-dynamicblocks
This Abe recipe demonstrates how to propose the selection of a partial at a post creation

# Installation
1. git clone https://github.com/Abejs/recipe-abedynamicblocks.git
2. cd recipe-abedynamicblocks
3. abe serve -i
4. Enjoy

# Introduction
This recipe will show you how to make a "dynamic template": You can create selectable partials in your template. This way, the contributor will be able to choose among a list of partials you have prepared to create her post.

![Screenshot](/site/screenshot1.png?raw=true)

We have divided this recipe into 7 templates, which are increasingly advanced: 

- Dynamic selection of static partials:The first template show you how to create a list of selectable static partials (nothing is modifiable by the contributor.
- Dynamic selection of Abe partials: The second template show you how to create a list of "abified" templates: Depending on the selection made, the template is updated including the editor. The fields associated with the selected template are displayed.
- Dynamic selection of Abe partials with data types: The third template will show the creation of abified templates containing abe type=data. This last recipe is well suited to create products pages where contributor can selected different block layouts to present content of other articles (or products).
- Dynamic selection of Abe partials with a global data set to distribute equally on each partial. This recipe is divided into 4 examples: From example 4 to example 7. Follow the path !

# Dynamic selection of static partials (example1)

![Screenshot](/site/screenshot2.png?raw=true)

First of all, create your partials containing static contents.

Now in your template, create a data type containing an array of options. You see here that we'll use an id to dynamize the selectable partials.
This abe tag will be displayed in the editor as a dropdown list.

```
{{abe type='data' key='block1' desc='Select first block' source='[{"id":"1","label":"Primary block 1"}, {"id":"2","label":"Primary block 2"}]' display='label' max-length='1' tab='slug' reload="true"}}
```

Now that you've created a selectable value from your list, let's use this value to load dynamically your partial !

```
{{abe type='import' file='block1-{{block1.id}}.html'}}
```

Note the syntax of your variable {{block1.id}}. This tells Abe to take the block id selected by the user in your data type (which has the key="block1"). As you've asked your abe data tag to reload once a new selection is done, the page is reloaded with the import.

That's it ! Just 2 lines to create selectable partials !

# Dynamic selection of Abe partials (example 2)

![Screenshot](/site/screenshot3.png?raw=true)

Nothing really fancy here. If you add abe tags to your partials... These tags will be displayed. That's it.

# Dynamic selection of Abe partials with data types (example 3)

![Screenshot](/site/screenshot4.png?raw=true)

This one is not that complicated neither. We've prepared product pages (in the directory articles) so that we'll be able to find articles.
Then in the template:

```
{{abe type='data' key='layout1' desc='Select layout' source='reference/products-layout.json' display='{{label}}' max-length='1' tab='slug' visible='false' reload="true"}}
```

Note the first difference with the 2 previous recipes: In the source, we use a reference file containing the json of partials:

products-layout.json
```
[
  {"id":"1","label":"Block1 - 2 items - Title"},
  {"id":"2","label":"Block2 - 5 items - No title"},
  {"id":"3","label":"Block3 - 7 items - Title"}
]
```

This is another way of creating a set of data. You can create it inline (as in the 2 previous examples) or reference it. As you prefer depending on your project.
The user will see a dropdown list in the editor, and as we're putting this data tag in the tab="slug", this dropdown will be displayed on the creation page.

Loading the selected partial in the template is done like that:

```
{{abe type='import' file='example3/block-{{layout1.id}}.html'}}
```

A selected partial will contain something like this:

```
{{abe type="data" key="product2" source="select title, cover_273x273,cover_566x253,cover_273x546, description from /articles where `abe_meta.template`=`single-product`" desc="Select 5 products from this list" display="{{title}}" max-length="5" reload="true"}}
```

This partial, once selected by the user at the creation, will display a dropdown list of products to chose from...


That's it !

# Dynamic selection of Abe partials with a global data set

