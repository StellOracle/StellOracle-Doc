# Contribution Guideline

## Pages

The pages reside in [src/pages](./src/pages) directory. A page could be written in js, markdown, or combination of both via mdx.

To add a new page, create a new file in that directory and fill with the desired content. There would be a dedicated endpoint created for the page corresponding to the file name without extension. So `technology.mdx` would show up at `technology` endpoint. 

## Navigation Bar

To add a page to the navigation bar, add a new item to the `config.themeConfig.navbar.items` list in [docusaurus.config.js](./docusaurus.config.js) like the following:

```js
{to: '/technology', label: 'Technology', position: 'left'}
```

The `label` property specifies the option name in the navbar. The `to` value defines the endpoint of the website to redirect to. Specify `left` or `right` as the `position` value to put the navbar option on the left or right side of the page.

Optionally, if you need to add a link to an external resource as an option to the navbar - use `href` istead of `to` property with the desired url as the value. Such an option opens the specified url in a new tab and adds a visual indication of that to the label.

## Images in Markdown

To add an image to a markdown page, use `![Alternative Text](path/to/image)`. Usually, path to the image should point to a file in the [static/img](./static/img) directory or in its subdirectory.

## Deploying the Changes

The changes on the `main` branch are automatically applied to the deployed website, as long as the site builds successfully with them. Still, the update might not be shown just after the action succeeds, but after up to a few minutes.
