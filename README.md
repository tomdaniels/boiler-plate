# boilerplate

A boiler plate for more scalable client side apps.

## Out of the box? 

- Webpack and Babel already set up.
- React Router (with Private and Public Routes).
- Redux for state management.
- Firebase integration (using .env files).
- Jest testing suite. 

### Commented out...

You will come across some chunks that are commented out. Primarily this is code controlling authentication. If you know you don't need auth then remove the comments and go about your life. 

Otherwise, the comments will act somewhat as instructions on how to set this up.

Any further information about the DB/Auth config, best consult [Firebase](https://firebase.google.com/docs/reference/js/)


## Start it up? 

For the time being, you need to clone the repo and manually adjust the files. To get it runnning as is you can simply run the following commands:

```bash
git clone git@github.com:tomdaniels/boiler-plate.git && cd boiler-plate
yarn install
yarn watch
```

Then you just need to start adjusting the [dashboard.js](https://github.com/tomdaniels/boiler-plate/blob/master/src/components/dashboard.js) file, from the components directory.

> ProTip: duplicate the entire directory, run rm -rf .git and change the [app name](https://github.com/tomdaniels/boiler-plate/blob/master/package.json#L2) after cloning.

#### TODO: 

> Publish to npm as pet project? 