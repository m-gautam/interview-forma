# Forma Frontend Coding Exercise

Welcome to the Forma frontend coding exercise! Please read the following instructions carefully.

# Contents

- [Business need](#business-need)
- [Use cases](#use-cases)
- [How to run API server](#how-to-run-api-server)
- [How to run React server](#how-to-run-react-server)
- [Technology requirements](#technology-requirements)
- [How to submit](#how-to-submit)
- [Time limit](#time-limit)

# Business requirements

The goal of this application is to allow the Forma team to view and manage vendors.

# Use cases

- The user should be able to:
  - Visit the root path and see a list of all the vendors
  - Sort the vendor list by name in ascending/descending order
  - Filter the vendor list by name through a select dropdown
  - View vendor information on a separate vendor details page
  - Update the vendor name (it should persist when the page is reloaded)
  - You may design it however you wish (just make it look usable). Don't worry, we don't expect you to be a professional designer. Please make sure to showcase some of your CSS skills and not solely rely on a UI library.

# Requirements

Node version 16.14.2

# How to run API server

The boilerplate includes a small service for data fetching. The file `db.json` includes all the necessary data to achieve the goal. Please follow the steps below to start the server:

```
npm install
npm run server
```

Check [json-server](https://github.com/typicode/json-server) for more information.

# How to run React server

```
npm install
npm start
```

This app was generated using [create-react-app](https://github.com/facebook/create-react-app)

# Technology requirements

**React** and **JavaScript** are mandatory requirements. Apart from this, you can use any libraries.

Optional:
- TypeScript
- Write tests

# How to submit

- Complete your project as described above within your local repository.
- Ensure everything you want to commit is committed before you bundle.
- Create a git bundle: `git bundle create your_name.bundle --all`
- Email the bundle file to your point of contact.

**In order to be fair to all candidates, please refrain from sharing your solution on public repository hosting services such as GitHub and Bitbucket.**

# Time limit

There is no hard time limit for this coding exercise. However, we believe that 3-4 hours is sufficient for the must-have parts of the application. While we appreciate all the effort put into the exercise, we also do not want to take up too much of your time. Our advice is to focus on making sure that the application works properly before moving on to secondary objectives. Happy coding!

Good luck,
The Forma Team
