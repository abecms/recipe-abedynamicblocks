# recipe-abe-dynamicblocks
This Abe recipe demonstrates how to propose the selection of a partial at a post creation

# Introduction
This recipe will show you how to make a "dynamic template": You can create selectable partials in your template. This way, the contributor will be able to choose among a list of partials you have prepared to create her post.

We have divided this recipe into 3 templates, which are increasingly advanced: 

- Dynamic selection of static partials:The first template show you how to create a list of selectable static partials (nothing is modifiable by the contributor.
- Dynamic selection of Abe partials: The second template show you how to create a list of "abified" templates: Depending on the selection made, the template is updated including the editor. The fields associated with the selected template are displayed.
- Dynamic selection of Abe partials with data types: The third template will show the creation of abified templates containing abe type=data. This last recipe is well suited to create products pages where contributor can selected different block layouts to present content of other articles (or products).

# Dynamic selection of static partials
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

# Dynamic selection of Abe partials
Nothing really fancy here. If you add abe tags to your partials... These tags will be displayed. That's it.

# Dynamic selection of Abe partials with data types
This one is not that complicated neither. 