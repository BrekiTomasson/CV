# teh wobsite

This repo will be used to maintain the code for my upcoming personal website, AKA "teh wobsite". It's based on Laravel
at its core; but I will be playing around with several technologies in addition to Laravel as well. I would like to use
this website to continue practicing my skills on both the frontend and backend sides of things, especially when it comes
to things like Continuous Deployment, monitoring, logging, *et cetera*.

## In Place

## In Progress

- Configuration for `grumphp`. Configuration needs to be written for:
  - `composer-require-checker`
  - `pest`
  - `phpcs`
  - `parallel-lint`
  - `php-cs-fixer`
  - `phpmd`
  - `phpstan`

## To Do Next

- Install components for markdown -> blog post toolchain.

## Ideas, Brainstorming, Thoughts, and Other Madness

There are a number of things I would like to do with this project, so this section will contain a number of ideas,
randomly thrown together and jotted down in whatever detail I find reasonable at the time that the idea came to me, so
don't be surprised if whatever you read in this section makes little or no sense to you at times.

### Blog Posts as Markdown Files

The idea is that the blog should be made up of nothing more than Markdown files that are parsed by the system, which
generates the HTML.

- Ideally, there should be some kind of YAML Frontmatter (or similar) in these files to generate things like categories,
  tags, and whatever other metadata might be relevant. The best way to do this is still not entirely clear to me.
- Categories could be managed through the file system, too, rather than using YAML Frontmatter.
- Spatie's [Sheets](https://github.com/spatie/sheets) package seems to be the way to go when it comes to reading
  Markdown files from the file system and even has support for YAML Frontmatter, so that seems to be a likely candidate
  for inclusion, too.
- Publication date could simply be taken from the date the file was created, but this could cause problems in case the
  page is ever migrated to other storage. Easiest would probably be that the publication date is stored in the database
  using a table that associates the original file in the filesystem with a publication date, as this is less likely to
  ever change.
- HTML files should be generated on demand and cached for a given time so that changes to the HTML template don't
  require a "rebuild all" command or anything like that, as the files would simply rebuild automatically the next time
  that the post in question is visited after its cached version "expires".
- Freek recently wrote about a new Spatie package that leverages `sikhi-php` to highlight code in Markdown. This should
  most likely be included in any toolchain that I build for this, as I'm guessing code will be appearing in more than
  one of my posts. [Post here](https://freek.dev/2024-how-to-render-markdown-with-perfectly-highlighted-code-snippets).

### Curriculum Vitae Timeline

I'd really like there to be some kind of "timeline" for work history, personal projects, important events, and things
that might be relevant to people who want to hire me or work with me in some way. It would be interesting if this were
made using some kind of Javascript library that generates visual timelines of some sort, with the option of adding and
removing various categories of information, so that people less interested in my personal projects can simply remove
them from the timeline to focus on what they are more interested in.

- Something like D3 might be useful for this, but it would need to be wrapped in something more Laravel-native that
  fetches the data from the database before sending it through D3. Googling `d3 timeline` generates multiple hits, so it
  shouldn't be too difficult to find something that works here.

### Continuous Deployment

Ideally, I want the website to update "on the fly" simply by checking in new code to the repository. The blog posts, in
the form of Markdown files, should be in the repository, too (I think?) to preserve them in a good way with all the
revision history and so on that Git offers us.

- There should be an extensive series of tests that are run before the committed code is approved, and if these tests do
  not pass, the production environment is not updated.
- Ideally, the production `CSS` and `JS` files should be generated as part of the build process, maybe through a GitHub
  action or similar. This would make any changes made to the underlying `CSS` and `JS` not need to be built on the
  production environment, and none of the `npm` packages involved in the build process would ever need to be installed
  on the production environment.

### Continuous Integration

I will most likely be using `pest` to generate all tests. In addition to this, I will be
using [grumphp](https://github.com/phpro/grumphp) to help perform many tasks related to the normal day-to-day things,
including running the test suites.

A cloud solution to this should be added down the line, though, as `grumphp` is best suited for doing more basic tests
related to things like code formatting and the like.

### Things to Include, Things to Avoid

One of the things I've learned while building the website for TankerTrackers is that while `webpack` gives you a lot of
power when it comes to building the `CSS` and `JS` files for production, it quickly leads to a large amount of config
files to maintain, several dozen additional packages to keep track of, endless conflicts regarding which version of
which package is compatible with which version of which package, etc.

The same goes for the way that I built that page using a number of Docker containers to handle things. Again, while the
amount of control that I gain from doing it in this way is a good thing, it also feels like it **over**-complicates
things in places that might not have to be that complex to begin with.

- As much as possible, "teh wobsite" should avoid relying on Webpack and just use Laravel Mix.
- "Teh Wobsite" should not use Vue or any of the other major Javascript frameworks. As much as possible, it should rely
  only on "standalone" Javascript libraries, things like [AlpineJS](https://alpinejs.dev/), jQuery and Lodash.
- "Teh wobsite" needs some kind of development environment that allows me to use it in a browser on short notice.
  Spinning up a Docker container is time-prohibitive and makes a number of things more difficult to do, such as
  running `php artisan` commands from the IDE, as they would ideally have to run from inside the Docker environment. It
  also makes debugging more difficult, as a Docker container might not be able to expose as much information as if I
  were to develop the site in a more "native" environment.

### Servers and Databases

While I do love databases, there is a tendency to rely on then too much at times, and they easily become the most
significant bottleneck in a website that reaches any kind of scale. I do not want to avoid using databases entirely when
developing "teh wobsite", of course, but I want to be more careful in my original design of the site, making a clear
separation between the development environment and the production environment, using in-memory databases wherever
possible and file-based storage wherever reasonable.

- Since "teh wobsite" will not require users to log in or have accounts, there will be very little need to dynamically
  generate each individual page with slight differences depending on who sees it, so various forms of caching and
  pre-loading can be put into place. I will need to look into different alternatives for this, from server-side response
  caching to long-term browser caching for static resources and so on.
- Caleb Porzio's [Sushi](https://github.com/calebporzio/sushi) package is most likely going to be very useful when
  setting up those parts of the database that are unlikely to change and which do not require much in terms of
  relationships etc. I need to look into ways of, for example, parsing a text file - maybe even a `CSV` file, and
  reading the results into a `sushi`-powered model. The results should obviously be cached to avoid reading from the
  file system too often, but something like this would be very convenient for generating dynamic Laravel models that do
  not rely on a traditional database.
- Most likely, the database engine used will be Postgres and the in-memory database will be Redis. While this is easy to
  control on the production environment, I would prefer to avoid having these installed on the development environment,
  and definitely want to avoid requiring the development environment to connect to the database of the production
  environment. Some kind of compromise needs to be worked out here.
- This will most likely be a good opportunity for me to learn more about database mocking, especially when it comes to
  generating test cases that rely on the database.
- There will most likely be an opportunity to play around with other types of data stores, such as some kind of Graph
  Database like `Neo4j` or similar, but all considerations mentioned above would have to apply in that scenario as well.
- In terms of web servers, `nginx` is the preferred option. Again, this will be easy to set up on the production
  environment, but a reasonable solution needs to be decided on for the development environment.

### Containerization

Based on thoughts and ideas above, the simplest solution is probably to go ahead with a homemade Docker solution, but
something simpler than what I built for TankerTrackers. Initially, I'm thinking just four containers, `app`, `nginx`,
`db` and `redis`, and then this can be tweaked later. This would separate the `www` container in the TankerTrackers repo
into an `app` and an `nginx` section, which I believe would make it easier to maintain in the long run. I also need to
decide if I should include `traefik`, as it serves as a very comfortable way to maintain a separation between what is
outside and what is inside, update SSL keys, etc.
