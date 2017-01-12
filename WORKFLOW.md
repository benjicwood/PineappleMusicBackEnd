# Git/Github Workflow

You should never work on the `master` or `dev` branches. You must always work on a branch named after your feature (e.g. `feat-44`) and you must make pull requests to `dev`.

A pull request must be accepted by someone other than yourself and should only be accepted if:
  - someone else has looked over the code
  - the new code is tested
  - all new and previous tests are passing
  - code has been linted

Only when you are ready to deploy will you merge to master.


## Working on a new feature

Clone the repo if it is the first time working on the codebase.

Make sure you are on the dev branch (if not, checkout a new branch called dev) and pull from the remote dev branch to ensure you are up to date:

`$ git pull origin dev`

Checkout a new branch from dev named after your feature

`$ git checkout -b feat-44`

Start working.

Commit regularly. All commit messages should be in the format:

`$ git commit -m '[feat-44] Test redux reducer'`

When the feature is finished, push your branch to the remote.

`$ git push origin feat-44`

On Github, make a pull request. Select dev as the base and select your feature branch to compare.

Once your pull request has been accepted and merged into dev (by someone else!), you will need up update your local copy of the dev branch since it is now out of date:

`$ git checkout dev`

`$ git pull origin dev`

From there you can checkout another branch and begin working on a new feature.


## Reviewing work

If you pick up a pull request, move to dev, pull from origin to ensure it's up to date, and checkout a new branch from dev on your local machine named after the feature you plan to review.

`$ git checkout dev`

`$ git pull origin dev`

`$ git checkout -b feat-55`

Pull the work from the remote:

`$ git pull origin feat-55`

Run the code, ensure tests and linting pass, and if you are happy accept the pull request on Github. This will merge the new work into dev, after which point you will need to update you dev branch.

## Merge conflicts

If you make a pull request and Github says the work cannot automatically be merged, it means you have a merge conflict.

You will need to pull from dev, checkout a new branch named after the feature in question, attempt to pull or rebase the new work on top, and fix the merge conflicts before re-pushing the work. (We can discuss this/do it together!)